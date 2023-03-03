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
        <IonGrid class="ion-padding-vertical">
          <IonRow>
            <IonCol>
              <IonItem routerLink="/PeronalDataTab/EditPersonalDataPage" routerDirection="forward">
                <IonLabel>Edit your Personal Data</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem routerLink="/PeronalDataTab/ViewData" routerDirection="forward">
                <IonLabel>View your Nutritional Data</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

    </IonPage>
  );
};

export default PersonalDataMainPage;
