import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const ViewDataMainPage: React.FC =  () => {
  const [HTMLs, setHTML] = useState<JSX.Element[]>([]);
  const [userData, setUserData] = useState<any>();
  const getUserData = async () => {
    const url = new URL('http://127.0.0.1:5000/v1/user/1234/calorie/need');

    const response = await fetch(url);
    const uData = await response.json();
    setUserData(uData);

    const userHTML = [];
    userHTML.push(
      <IonCard  class="ion-text-center">
        <IonCardHeader>
          <IonCardTitle>Calories Consumed:</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {uData.calorie_need}
        </IonCardContent>
      </IonCard>
    );
    setHTML(userHTML);

  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol class="ion-text-center">
                <IonButton
                  onClick={getUserData}
                >Get Personalized Macros</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        {HTMLs}
      </IonContent>
    </IonPage>
  );
};

export default ViewDataMainPage;


// const [personalData, setPersonalData] = useState();

//   const getServerData = async () => {
//     const uuid = 1234;
//     const url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}`);
//     const response = await fetch(url);
//     const json = await response.json();
//     setPersonalData(json);
//   };
{/* <IonButton onClick={getServerData}>test</IonButton>
<p>{JSON.stringify(personalData)}</p> */}