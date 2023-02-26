import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel
} from '@ionic/react';

import '../css/Tab1.css';

// Custom components 
import InputControls from '../../components/InputControls';
import FoodPrefrences from '../../components/FoodPrefrences';
import DietaryRestrictions from '../../components/DietaryRestrictions';


const PersonalDataMainPage: React.FC = () => {

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>


        {/* This is a custon component which contains height, weight, age, sex, and goal input */}
        <InputControls />


        {/* This is a custon component which contains all food prefrences */}
        <FoodPrefrences />

        {/* This is a custon component which contains all dietary Restrictions */}
        <DietaryRestrictions />


      
        <IonItem routerLink="/PeronalDataTab/PageTwo" routerDirection="forward">
          <IonLabel>Test</IonLabel>
        </IonItem>

      </IonContent>

    </IonPage>
  );
};

export default PersonalDataMainPage;
