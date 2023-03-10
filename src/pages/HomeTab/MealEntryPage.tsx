import React from "react";

import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonPage
} from "@ionic/react";

import MealEnter from "../../components/MealEnter";

const MealEntryPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="back"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <MealEnter></MealEnter>
      </IonContent>
    </IonPage>
  );
};

export default MealEntryPage;
