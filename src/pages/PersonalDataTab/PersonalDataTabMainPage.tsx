import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonContent
} from '@ionic/react';

import '../css/Tab1.css';

// Custom components 
import PersonalDataInput from '../../components/PersonalDataInput';


const PersonalDataMainPage: React.FC = () => {

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* This is a custon component which collects ALL inputs from user*/}
        <PersonalDataInput/>

        <IonItem routerLink="/PeronalDataTab/PageTwo" routerDirection="forward">
          <IonLabel>Test</IonLabel>
        </IonItem>
      </IonContent>

    </IonPage>
  );
};

export default PersonalDataMainPage;
