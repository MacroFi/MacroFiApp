import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonContent,
  IonGrid
} from '@ionic/react';

import '../css/Tab1.css';




const PersonalDataMainPage: React.FC = () => {

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem button={true} detail={true} routerLink="/PeronalDataTab/EditPersonalDataPage" routerDirection="forward">
          <IonLabel>Personal Data</IonLabel>
        </IonItem>
        <IonItem button={true} detail={true} routerLink="/PeronalDataTab/ViewData" routerDirection="forward">
          <IonLabel>Nutritional Data</IonLabel>
        </IonItem>
      </IonContent>

    </IonPage>
  );
};

export default PersonalDataMainPage;
