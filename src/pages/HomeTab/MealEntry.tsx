import React from 'react';
import {
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonPage
  
  } from '@ionic/react';
import MealEnter from '../../components/MealEnter';

const MealEntry: React.FC = () => {
    return(
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

export default MealEntry;