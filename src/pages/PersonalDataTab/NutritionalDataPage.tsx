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
  IonButton
} from "@ionic/react";

import "../css/Tab1.css";
//import NutrientDataDisplay from '../../components/NutrientDataDisplay';

const NutritionalDataPage: React.FC = () => {
  interface NutritionalData {
    calories: string | number | null | undefined;
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
  const [nutritionData, setNutritionData] = useState<NutritionalData>(
    {
      calories: 0,
      fat: 0,
      protein: 0,
      carbs: 0
    }
  );


  const collectData = async () => {
  
    const url = new URL(`http://127.0.0.1:5000/v1/user/1234/calorie/need`);
        const response = await fetch(url)
        const uData = await response.json();
    console.log("cals", uData)
    setUserCal(uData);

    if (response.status === 200) {
      console.log("GOT PERSONAL DATA SUCCESSFULLY");
    } else if (response.status === 400) {
      console.log("FAILED TO UPDATE PERSONAL DATA");
    };

    const url2 = new URL(`http://127.0.0.1:5000/v1/user/1234/macros`);
        const response2 = await fetch(url2)
        const uData2 = await response2.json();
    console.log("macros", uData2)
    setNutritionData(uData2)

    if (response.status === 200) {
      console.log("GOT PERSONAL DATA SUCCESSFULLY");
    } else if (response.status === 400) {
      console.log("FAILED TO UPDATE PERSONAL DATA");
    };
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
        <IonItem>Caloric Recommended: {userCal}</IonItem>
        <IonItem>Fat Recommended: </IonItem>
        <IonItem>Protein Recommended: </IonItem>
        <IonItem>Cholesterol Recommended: </IonItem>
        <IonItem>Cholesterol Recommended: </IonItem>
        <IonItem>Cholesterol Recommended: </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default NutritionalDataPage;