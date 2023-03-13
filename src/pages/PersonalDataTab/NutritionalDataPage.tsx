import React, { useState } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonItem,
  IonPage
} from "@ionic/react";

import "../css/Tab1.css";
//import NutrientDataDisplay from '../../components/NutrientDataDisplay';

const NutritionalDataPage: React.FC = () => {
  
  interface PersonalData {
    uuid: number;
    height: string | number | null | undefined;
    weight: string | number | null | undefined;
    age: string | number | null | undefined;
    sex: string | number | null | undefined;
    goal: string | null;
    food_preferences: Array<string>;
    dietary_restrictions: Array<string>;
  }
  interface NutritionalData {
    calories: string | number | null | undefined;
    fat: string | number | null | undefined;
    protein: string | number | null | undefined;
    cholesterol: string | number | null | undefined;
    vitamina: string | number | null | undefined;
    vitaminc: string | number | null | undefined;
    calcium: string | number | null | undefined;
    iron: string | number | null | undefined;
    sodium: string | number | null | undefined;
  }

  

  const getLocalData = () => {
    const local = window.localStorage.getItem("data");
    if (local == null) {
      return null;
    }
    return JSON.parse(local);
  };

  const [personalData, setPersonalData] = useState<PersonalData>(
    getLocalData() || {
      uuid: 1234,
      height: null,
      weight: null,
      age: null,
      sex: null,
      goal: null,
      food_preferences: [],
      dietary_restrictions: [],
    }
  );


  const collectData = async () => {
    const data = {
      uuid: 1234,
      height: 0,
      weight: 0,
      age: 0,
      sex: 0,
      goal: 0,
      food_preferences: 0,
      dietary_restrictions: 0,
    };
  
  console.log("DATA", data);
  const url = new URL(`http://127.0.0.1:5000/v1/user/${data.uuid}`);
  };


  //https://www.livestrong.com/article/440416-fda-daily-nutritional-requirements/
  const [nutritionalData] = useState({
    calories: 2000,
    fat: 65, //grams
    protein: 50,
    cholesterol: 0,
    vitamina: 0,
    vitaminc: 0,
    calcium: 0,
    iron: 0,
    sodium: 0,
  });

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
          <IonItem>Current Reccomended Daily Macronutrient Intake</IonItem>{" "}
        </IonHeader>
        <IonItem>Caloric Reccomendation: </IonItem>
        <IonItem>Calcium Reccomendation: </IonItem>
        <IonItem>Caloric Reccomendation: </IonItem>
        <IonItem>Caloric Reccomendation: </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default NutritionalDataPage;