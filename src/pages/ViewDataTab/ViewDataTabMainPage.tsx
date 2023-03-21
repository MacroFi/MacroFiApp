import React, { useState } from "react";

import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonCardContent,
} from "@ionic/react";

const ViewDataMainPage: React.FC = () => {
  const [mealCards, setMealCards] = useState<JSX.Element[]>([]);

  const getMealsLogged = async () => {
    const uuid = window.localStorage.getItem("uuid");
    const meals_url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/meals`);

    const meals_responce = await fetch(meals_url);
    const mData = await meals_responce.json();
    console.log(mData);

    let IonMealCards = [];
    for (let i = 0; i < mData.meals.length; i++) {
      let names = [];
      let totalCal = 0;
      let foodItemsArray = mData.meals[i]._food_items;
      let timeEaten = mData.meals[i]._time_eaten;
      console.log(foodItemsArray);
      for (let j = 0; j < foodItemsArray.length; j++) {
        let foodItem = foodItemsArray[j];
        console.log(foodItem);
        names.push(
          <IonItem key={foodItem._food_name}>
            <IonLabel>{foodItem._food_name}</IonLabel>
          </IonItem>
        );
        totalCal += foodItem._calories;
      }
      IonMealCards.push(
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Total Calories: {totalCal}</IonCardTitle>
            <IonCardSubtitle>Date: {timeEaten}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>{names}</IonList>
          </IonCardContent>
        </IonCard>
      );

      setMealCards(IonMealCards);
    }
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
              <IonButton onClick={getMealsLogged}>View Logged Meals</IonButton>
            </IonCol>
          </IonRow>

          {mealCards}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ViewDataMainPage;