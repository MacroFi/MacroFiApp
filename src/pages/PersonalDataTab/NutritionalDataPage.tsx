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

import '../css/Tab1.css';


const NutritionalDataPage: React.FC = () => {

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
      </IonContent>

    </IonPage>
  );
};

export default NutritionalDataPage;
