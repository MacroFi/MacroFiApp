import React from "react";
import {
  IonItem,
  IonLabel,
  IonGrid,
  IonIcon,
  IonCheckbox,
} from "@ionic/react"

import { fastFoodOutline} from 'ionicons/icons';

const FoodPrefrences: React.FC = () => {
    return (
        <IonGrid>
          <IonItem lines="full">
            <IonIcon icon={fastFoodOutline} slot="start"></IonIcon>
            <IonLabel>Food Prefrences</IonLabel>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>American</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>Mexican</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>Chinese</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>Indian</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>Thai</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>
        </IonGrid>
    );
};


export default FoodPrefrences;