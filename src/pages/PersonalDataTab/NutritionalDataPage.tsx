import React, { useState } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonItem,
  IonPage,
  IonButton,
} from "@ionic/react";

const NutritionalDataPage: React.FC = () => {
  interface NutritionalData {
    //calories: string | number | null | undefined;
    fat: string | number | null | undefined;
    protein: string | number | null | undefined;
    carbs: string | number | null | undefined;
    //vitamina: string | number | null | undefined;
    //vitaminc: string | number | null | undefined;
    //calcium: string | number | null | undefined;
    //iron: string | number | null | undefined;
    //sodium: string | number | null | undefined;
  }

  const getLocalData = () => {
    const local = window.localStorage.getItem("data");
    if (local == null) {
      return null;
    }
    return JSON.parse(local);
  };

  const [userCal, setUserCal] = useState<any>();

  //https://www.livestrong.com/article/440416-fda-daily-nutritional-requirements/
  const [nutritionData, setNutritionData] = useState<NutritionalData>({
    fat: 1000,
    protein: 400,
    carbs: 600,
  });

  const collectData = async () => {
    const url = new URL(`http://127.0.0.1:5000/v1/user/1234/calorie/need`);
    const response = await fetch(url);
    const uData = await response.json();
    //console.log("cals", uData.calorie_need);
    setUserCal(parseInt(uData.calorie_need));

    if (response.status === 200) {
      console.log("GOT PERSONAL DATA SUCCESSFULLY");
    } else if (response.status === 400) {
      console.log("FAILED TO UPDATE PERSONAL DATA");
    }
    const uuid = 1234
    const url2 = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/macros`);
    const response2 = await fetch(url2);
    const uData2 = await response2.json();
    //console.log("macros", uData2.macronutrients);
    const temp = uData2.macronutrients // An array of FPC
    const data = {
      fat: parseInt(temp[0]),
      protein: parseInt(temp[1]),
      carbs: parseInt(temp[2])
    }
    setNutritionData(data);

    if (response.status === 200) {
      console.log("GOT PERSONAL DATA SUCCESSFULLY");
    } else if (response.status === 400) {
      console.log("FAILED TO UPDATE PERSONAL DATA");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text=""></IonBackButton>
          </IonButtons>

          <IonTitle class="ion-text-center">Nutritional Data</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader>
          <IonItem>Current Recommended Daily Macronutrient Intake</IonItem>{" "}
        </IonHeader>
        <>
          <IonButton onClick={collectData}>Get Daily Recommendations</IonButton>
        </>
        <IonItem>Caloric Recommended: {userCal} cal</IonItem>
        <IonItem>Fat Recommended: {nutritionData.fat}g</IonItem>
        <IonItem>Protein Recommended: {nutritionData.protein}g</IonItem>
        <IonItem>Carbohydrates Recommended: {nutritionData.carbs}g</IonItem>
      </IonContent>
    </IonPage>
  );
};

export default NutritionalDataPage;
