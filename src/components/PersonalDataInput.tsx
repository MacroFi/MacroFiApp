import React, { useRef, useState } from "react";
import {
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonCheckbox,
} from "@ionic/react"

import { fastFoodOutline, alertCircleOutline } from 'ionicons/icons';


const PersonalDataInput: React.FC = () => {

  const [personalData, setPersonalData] = useState<Object>({});
  const heightRef = useRef<HTMLIonInputElement>(null);
  const weightRef = useRef<HTMLIonInputElement>(null);

  return (
    <React.Fragment>
      <IonGrid class="ion-padding-vertical">

        <IonRow>
          <IonCol>
            <IonItem fill="outline">
              <IonLabel position="stacked">Your Height (in.)</IonLabel>
              <IonInput placeholder="Enter height" type="number" ref={heightRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem fill="outline">
              <IonLabel position="stacked">Your Weight (lbs)</IonLabel>
              <IonInput placeholder="Enter weight" type="number" ref={weightRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem fill="outline">
              <IonLabel position="stacked">Your Age</IonLabel>
              <IonInput placeholder="Enter age" type="number"></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem fill="outline">
              <IonLabel>Sex</IonLabel>
              <IonSelect placeholder="Make a Selection">
                <IonSelectOption value="male">Male</IonSelectOption>
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="other">Other</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem fill="outline">
              <IonLabel>Goal</IonLabel>
              <IonSelect placeholder="Make a Selection">
                <IonSelectOption value="loose">Loose Weight</IonSelectOption>
                <IonSelectOption value="gain">Gain Weight</IonSelectOption>
                <IonSelectOption value="bulk">Bulk</IonSelectOption>
                <IonSelectOption value="lean">Lean</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>

      </IonGrid>

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

      <IonRow>
        <IonCol className="ion-text-left">
          <IonButton>
            Submit
          </IonButton>
        </IonCol>
      </IonRow>
    </React.Fragment>

  );
};

export default PersonalDataInput;