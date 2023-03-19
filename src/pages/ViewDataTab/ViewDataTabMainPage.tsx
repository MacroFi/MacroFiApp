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

import {PieChart} from 'react-minimal-pie-chart';

const ViewDataMainPage: React.FC =  () => {
    interface NutritionalData {
    //calories: string | number | null | undefined;
    fat: string | number | null | undefined;
    protein: string | number | null | undefined;
    carbs: string | number | null | undefined;
    sugar: string | number | null | undefined;
  }
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

          <IonCard  class="ion-text-center">
            {/*
          <IonCardHeader>
            <IonCardTitle>Calories Needed:</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {uData.calorie_need}
          </IonCardContent>
              */}

        </IonCard>
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
        <PieChart
          data={[
            { title: 'Carbs', value: 10, color: '#E38627', label:"carb" },
            { title: 'Fat', value: 15, color: '#C13C37' },
            { title: 'Protein', value: 20, color: '#6A2135' },
            { title: 'Sugar', value: 20, color: '#33adff' }
          ]}
        />;
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