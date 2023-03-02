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
    useIonToast,
    IonList,
  } from "@ionic/react"

const MealEnter: React.FC = () => {

    return (
        <React.Fragment>
            <IonGrid class="ion-padding-vertical">
                <IonList lines="none"></IonList>
            </IonGrid>
        </React.Fragment>
    );
};

export default MealEnter;