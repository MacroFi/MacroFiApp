import React from "react";
import {
  IonItem,
  IonLabel,
  IonGrid,
  IonIcon,
  IonCheckbox,
} from "@ionic/react"

import { alertCircleOutline} from 'ionicons/icons';

const DietaryRestrictions: React.FC = () => {
    return (
        <IonGrid>
          <IonItem lines="full">
            <IonIcon icon={alertCircleOutline} slot="start"></IonIcon>
            <IonLabel>Dietary Restrictions</IonLabel>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>Vegetarian</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>Vegan</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>Keto</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>NO Wheat (Gluten)</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>NO Nuts</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>NO Fish and Shellfish</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>NO Eggs</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>

          <IonItem lines="inset">
            <IonLabel>NO Soy</IonLabel>
            <IonCheckbox slot="end"></IonCheckbox>
          </IonItem>
        </IonGrid>
    );
};


export default DietaryRestrictions;