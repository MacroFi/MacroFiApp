import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonContent,
  IonButton,
} from "@ionic/react";

const PersonalDataMainPage: React.FC = () => {
  const test = () => {
    console.log(window.localStorage.getItem("uuid"))
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonItem
          button={true}
          detail={true}
          routerLink="/app/PeronalDataTab/EditPersonalDataPage"
          routerDirection="forward"
        >
          <IonLabel>Personal Data</IonLabel>
          
        </IonItem>
        <IonItem
          button={true}
          detail={true}
          routerLink="/app/PeronalDataTab/ViewData"
          routerDirection="forward"
        >
          <IonLabel>Nutritional Data</IonLabel>
        </IonItem>
        <IonButton onClick={test}>test</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PersonalDataMainPage;
