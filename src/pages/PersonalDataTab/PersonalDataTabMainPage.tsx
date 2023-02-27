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
        <IonGrid class="ion-padding-vertical">
          <IonRow>
            <IonCol>
              <IonItem>

                <IonItem routerLink="/PeronalDataTab/PageTwo" routerDirection="forward">
                  <IonLabel>Edit your Personal Data</IonLabel>
                </IonItem>

              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>

                <IonItem routerLink="/PeronalDataTab/ViewData" routerDirection="forward">
                  <IonLabel>View your Nutritional Data</IonLabel>
                </IonItem>

                </IonItem>
            </IonCol>
          </IonRow>


        </IonGrid>


      </IonContent>

      

    </IonPage>
  );
};

export default PersonalDataMainPage;
