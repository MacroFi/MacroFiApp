import React from "react";
import {
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput, 
    IonGrid,
    IonSelect,
    IonSelectOption
} from "@ionic/react"

const InputControls: React.FC = () => {
    return (
        <IonGrid class="ion-padding-vertical">

          <IonRow>
            <IonCol>
              <IonItem fill="outline">
                <IonLabel position="stacked">Your Height (in.)</IonLabel>
                <IonInput placeholder="Enter height" type="number" ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem fill="outline">
                <IonLabel position="stacked">Your Weight (lbs)</IonLabel>
                <IonInput placeholder="Enter weight" type="number"></IonInput>
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
    );
};

export default InputControls;