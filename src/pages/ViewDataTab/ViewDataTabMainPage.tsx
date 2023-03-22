import React, { useState, useEffect } from "react";

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
  IonCardContent,
  IonItemGroup,
  IonItemDivider,
} from "@ionic/react";

import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto'; 
import axios from 'axios';

Chart.register(CategoryScale);


let bar_initial_state = {
  labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Calories',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [0, 0, 0, 0, 0, 0, 0]
      },
      {
        label: 'Protein',
        backgroundColor: 'rgba(0, 133, 255, 0.2)',
        borderColor: 'rgba(0, 133, 255, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 133, 255, 0.4)',
        hoverBorderColor: 'rgba(0, 133, 255, 1)',
        data: [0, 0, 0, 0, 0, 0, 0]
      }
    ]
};


const ViewDataMainPage: React.FC = () => {
  const [mealCards, setMealCards] = useState<JSX.Element[]>([]);
  
  const [barChartData, setData] = useState(bar_initial_state);
  // const [userCalories, setUserCalories] = useState([]);

  const addDays = (date: Date, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const subDays = (date: Date, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
  return result;
  };

  const minMaxDays = (adate: Date) => {
    var date_str = adate.toDateString();

    let date = date_str.split(" ");

    var min_date;
    var max_date;

    if (date[0] === "Sun") {
      min_date = new Date(adate);
      max_date = new Date(addDays(adate, 6));
    } else if(date[0] === "Mon") {
      min_date = new Date(subDays(adate, 1));
      max_date = new Date(addDays(adate, 5));
    } else if (date[0] === "Tues") {
      min_date = new Date(subDays(adate, 2));
      max_date = new Date(addDays(adate, 4));
    } else if (date[0] === "Wed") {
      min_date = new Date(subDays(adate, 3));
      max_date = new Date(addDays(adate, 3));
    } else if (date[0] === "Thurs") {
      min_date = new Date(subDays(adate, 4));
      max_date = new Date(addDays(adate, 2));
    } else if (date[0] === "Fri") {
      min_date = new Date(subDays(adate, 5));
      max_date = new Date(addDays(adate, 1));
    } else {
      min_date = new Date(subDays(adate, 6));
      max_date = new Date(adate);
    }
    return [min_date, max_date];
  };

  const inWeek = (tdate: Date, minMax: Date[]) => {
    if (minMax[0].getTime() <= tdate.getTime() && tdate.getTime() <= minMax[1].getTime()){
      return tdate.getDay()
    }
    else {
      return -1
    }
  }


  const getMealsLogged = async () => {
    const uuid = window.localStorage.getItem("uuid");
    const meals_url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/meals`);

    const meals_responce = await fetch(meals_url);
    const mData = await meals_responce.json();

    let IonMealCards = [];
    for (let i = 0; i < mData.meals.length; i++) {
      let names = [];
      let totalCal = 0;
      let foodItemsArray = mData.meals[i]._food_items;
      let timeEaten = mData.meals[i]._time_eaten;

      for (let j = 0; j < foodItemsArray.length; j++) {
        let foodItem = foodItemsArray[j];
        names.push(
          <IonItem key={foodItem._food_name}>
            <IonLabel>{foodItem._food_name}</IonLabel>
          </IonItem>
        );
        totalCal += foodItem._calories;
      }
      IonMealCards.push(
        <IonCard key={timeEaten}>
          <IonCardHeader>
            <IonCardTitle>Total Calories: {totalCal}</IonCardTitle>
            <IonCardSubtitle>Date: {timeEaten}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItemGroup>
              <IonItemDivider>
                Meal
              </IonItemDivider>
              {names}
            </IonItemGroup>
            {/* <IonList>{names}</IonList> */}
          </IonCardContent>
        </IonCard>
      );

      setMealCards(IonMealCards);
    }
  };
  
  const Chart = () => {
    let userCal = [0, 0, 0, 0, 0, 0, 0];
    let userProt = [0, 0, 0, 0, 0, 0, 0];
    const d1 = new Date();
    const mmdates= minMaxDays(d1);

    const uuid = window.localStorage.getItem("uuid");

    axios.get(`http://127.0.0.1:5000/v1/user/${uuid}/meals`)
    .then( res => {

      for (const dataObj of res.data.meals) {

        var day = inWeek(new Date(dataObj._time_eaten), mmdates)
        if (day >= 0) {
          var tempCal = userCal[day]
          var tempProt = userProt[day]
          for (const foodItem of dataObj._food_items) {
            tempCal += foodItem._calories
            tempProt += foodItem._nutrient_data.protein
          }
          userCal[day] = tempCal
          userProt[day] = tempProt
        }
      }
      setData({
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [{
          label: 'Calories',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: userCal
        },
        {
          label: 'Protein',
          backgroundColor: 'rgba(0, 133, 255, 0.2)',
          borderColor: 'rgba(0, 133, 255, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0, 133, 255, 0.4)',
          hoverBorderColor: 'rgba(0, 133, 255, 1)',
          data: userProt
        }]
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    Chart();
  }, mealCards);

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

          <IonRow>
            <IonCol>
              <IonCard>
                <Bar data={barChartData} options={{ responsive: true }} />
              </IonCard>
            </IonCol>
          </IonRow>

          {mealCards}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ViewDataMainPage;