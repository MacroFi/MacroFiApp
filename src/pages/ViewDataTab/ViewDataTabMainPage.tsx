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
    const uuid = window.localStorage.getItem("uuid")
    const need_url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/calorie/need`);
    const response = await fetch(need_url);
    const uData = await response.json();
    setUserData(uData);

    const today_url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/calorie/today`);
    const today_responce = await fetch(today_url);
    const tData = await today_responce.json()
    console.log(tData)
    


    const userHTML = [];
    userHTML.push(
      <IonRow key={uuid}>
        <IonCol>
          <IonCard  class="ion-text-center">
            <IonCardHeader>
              <IonCardTitle>Calories Consumed Today:</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              {tData.calories}
            </IonCardContent>
          </IonCard>
        </IonCol>

        <IonCol>
          <IonCard  class="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>Calories Needed:</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            {uData.calorie_need}
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
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