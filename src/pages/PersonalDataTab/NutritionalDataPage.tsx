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
        <IonItem>Daily Caloric Reccomendation: </IonItem>
        <IonItem>Daily Calcium Reccomendation: </IonItem>
        <IonItem>Daily Caloric Reccomendation: </IonItem>
        <IonItem>Daily Caloric Reccomendation: </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default NutritionalDataPage;
