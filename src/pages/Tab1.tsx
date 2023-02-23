import { useState, useRef } from 'react';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';

import './css/Tab1.css';
import ChangeInfo from './ChangeInfo';


// Custom components 
import InputControls from '../components/InputControls';
import FoodPrefrences from '../components/FoodPrefrences';
import DietaryRestrictions from '../components/DietaryRestrictions';



const Tab1: React.FC = () => {
  /*
  function getData(val)
  {
    return val
  };
  */
  /*
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
  */
  /*
   const [inputModel, setInputModel ] = useState('');
   const ionInputEl = useRef<HTMLIonInputElement>(null);
 */
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        {/* This stuff doesn't work as intended yet
       <IonItem routerLink="/ChangeInfo">
        <IonLabel>User 1</IonLabel>
       </IonItem>

        

         <IonNavLink routerDirection="forward" component={() => <ChangeInfo />}>
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
  */}
        
        {/* This is a custon component which contains 
        height, weight, age, sex, and goal input */}
        <InputControls/>

        {/* This is a custon component which contains
         all food prefrences */}
        <FoodPrefrences/>

        {/* This is a custon component which contains 
        all dietary Restrictions */}
        <DietaryRestrictions/>


        <IonButton expand="full">Submit</IonButton>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;
