import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonButton,
  IonIcon
} from '@ionic/react';import ExploreContainer from '../components/ExploreContainer';
import './css/Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        

      </IonContent>

      <IonItem lines="full">
          <IonLabel>Food Prefrences</IonLabel>
      </IonItem>
      
    </IonPage>
  );
};


export default Tab2;
