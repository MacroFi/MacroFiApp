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
  const test = async () => {
    const uuid = window.localStorage.getItem("uuid")
    const recommendations = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/recommendations`);
    const meals = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/meals`);
    const response = await fetch(meals)
    const json = await response.json()
    console.log(json)
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
