import React from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonPage

} from '@ionic/react';

import '../css/changedata.css';
import PersonalDataInput from '../../components/PersonalDataInput';


const EditPersonalDataPage: React.FC = () => {

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="back"></IonBackButton>
          </IonButtons>
          <IonTitle>Change Data</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <PersonalDataInput/>
      </IonContent>

    </IonPage>
  );
};

  /*
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="back"></IonBackButton>
          </IonButtons>
          <IonTitle>Back Button</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Page Two</h1>
        <p>Use the back button to navigate to the previous page.</p>
      </IonContent>
    </IonPage>
  );
};
*/

export default EditPersonalDataPage;