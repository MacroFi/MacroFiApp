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

// Custom components 
//import PersonalDataInput from '../../components/PersonalDataInput';


const ViewData: React.FC = () => {

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="back"></IonBackButton>
          </IonButtons>

          <IonTitle class="ion-text-center">Personal Data</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* This is a custon component which collects ALL inputs from user*/}

      </IonContent>

    </IonPage>
  );
};

export default ViewData;
