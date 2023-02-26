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
  const ageRef = useRef<HTMLIonInputElement>(null);
  const sexRef = useRef<HTMLIonSelectElement>(null);
  const goalRef = useRef<HTMLIonSelectElement>(null);
  const foodPrefsRef = useRef<HTMLIonSelectElement>(null);

  const collectData = () => {
    console.log(heightRef.current?.value, typeof (heightRef.current?.value))
    console.log(weightRef.current?.value, typeof (weightRef.current?.value))
    console.log(ageRef.current?.value, typeof (ageRef.current?.value))
    console.log(sexRef.current?.value, typeof (sexRef.current?.value))
    console.log(goalRef.current?.value, typeof (goalRef.current?.value))
  }

  return (
    <React.Fragment>
      <IonGrid class="ion-padding-vertical">

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="stacked">Your Height (in.)</IonLabel>
              <IonInput placeholder="Enter height" type="number" ref={heightRef} value="34"></IonInput> {/* value props sets default value */}
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="stacked">Your Weight (lbs)</IonLabel>
              <IonInput placeholder="Enter weight" type="number" ref={weightRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="stacked">Your Age</IonLabel>
              <IonInput placeholder="Enter age" type="number" ref={ageRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Sex</IonLabel>
              <IonSelect placeholder="Make a Selection" interface="popover" ref={sexRef}>
                <IonSelectOption value="male">Male</IonSelectOption>
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="other">Other</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Goal</IonLabel>
              <IonSelect placeholder="Make a Selection" interface="popover" ref={goalRef}>
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

        <IonItem>
          <IonSelect placeholder="Food Prefrences" multiple={true} ref={foodPrefsRef}>
            <IonSelectOption value="american">American</IonSelectOption>
            <IonSelectOption value="mexican">Mexican</IonSelectOption>
            <IonSelectOption value="chinese">Chinese</IonSelectOption>
            <IonSelectOption value="indian">Indian</IonSelectOption>
            <IonSelectOption value="thai">Thai</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonGrid>

      <IonGrid>
        <IonItem lines="full">
          <IonIcon icon={alertCircleOutline} slot="start"></IonIcon>
          <IonLabel>Dietary Restrictions</IonLabel>
        </IonItem>

        <IonItem>
          <IonSelect placeholder="Dietary Restrictions" multiple={true} ref={foodPrefsRef}>
            <IonSelectOption value="vegetarian">Vegetarian</IonSelectOption>
            <IonSelectOption value="vegan">Vegan</IonSelectOption>
            <IonSelectOption value="keto">Keto</IonSelectOption>
            <IonSelectOption value="no-wheat">NO Wheat (Gluten)</IonSelectOption>
            <IonSelectOption value="no-nuts">NO Nuts</IonSelectOption>
            <IonSelectOption value="no-fish-and-shellfish">NO Fish and Shellfish</IonSelectOption>
            <IonSelectOption value="no-eggs">NO Eggs</IonSelectOption>
            <IonSelectOption value="no-soy">NO Soy</IonSelectOption>
          </IonSelect>
        </IonItem>
        
      </IonGrid>
        

      <IonRow>
        <IonCol className="ion-text-left">
          <IonButton onClick={collectData}>
            Submit
          </IonButton>
        </IonCol>
      </IonRow>
    </React.Fragment>

  );
};

export default PersonalDataInput;