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
import { Line, Bar, Pie , Doughnut} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto'; 

Chart.register(CategoryScale);

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
  const [barChartData, setData] = useState( {
    labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
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
    });
  
  const addDays = (date: Date, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const subDays = (date: Date, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  const minMaxDays = (adate: Date) => {
    var date_str = adate.toDateString()

    let date = date_str.split(' ')

    if (date[0] == 'Mon'){
      var min_date = new Date(adate)
      var max_date = new Date(addDays(adate, 6))
    } else if (date[0] == 'Tues') {
      var min_date = new Date(subDays(adate, 1))
      var max_date = new Date(addDays(adate, 5))
    } else if (date[0] == 'Wed') {
      var min_date = new Date(subDays(adate, 2))
      var max_date = new Date(addDays(adate, 4))
    } else if (date[0] == 'Thurs') {
      var min_date = new Date(subDays(adate, 3))
      var max_date = new Date(addDays(adate, 3))
    } else if (date[0] == 'Fri') {
      var min_date = new Date(subDays(adate, 4))
      var max_date = new Date(addDays(adate, 2))
    } else if (date[0] == 'Sat') {
      var min_date = new Date(subDays(adate, 5))
      var max_date = new Date(addDays(adate, 1))
    } else {
      var min_date = new Date(subDays(adate, 6))
      var max_date = new Date(adate)
    }
    return [min_date, max_date]
  }

  const getUserData = async () => {
    const uuid = window.localStorage.getItem("uuid")

    const need_url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/calorie/need`);
    const response = await fetch(need_url);
    const uData = await response.json();
    setUserData(uData);

    const today_url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/calorie/today`);
    const today_responce = await fetch(today_url);
    const tData = await today_responce.json()

    const meals_url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/meals`);
    const meals_responce = await fetch(meals_url);
    const mData = await meals_responce.json()

    const d_url = new URL(`http://127.0.0.1:5000/v1/today`);
    const d_responce = await fetch(d_url);
    const dData = await d_responce.json()

    var d1 = new Date(dData);

    var minMax = minMaxDays(d1)
    

    for (var i = 0; i < mData.meals.length; i++) {

      var meal_date = new Date(mData.meals[i]._time_eaten)

      if (minMax[0].getTime() <= meal_date.getTime() &&  meal_date.getTime() <= minMax[1].getTime()) {

        for (var j = 0; j < mData.meals[i]._food_items.length; j++) {
          if (meal_date.getDay() == 0) {
            barChartData.datasets[0].data[6] += mData.meals[i]._food_items[j]._calories
            barChartData.datasets[1].data[6] += mData.meals[i]._food_items[j]._nutrient_data.protein
          } else if (meal_date.getDay() == 1) {
            barChartData.datasets[0].data[0] += mData.meals[i]._food_items[j]._calories
            barChartData.datasets[1].data[0] += mData.meals[i]._food_items[j]._nutrient_data.protein
          } else if (meal_date.getDay() == 1) {
            barChartData.datasets[0].data[1] += mData.meals[i]._food_items[j]._calories
            barChartData.datasets[1].data[1] += mData.meals[i]._food_items[j]._nutrient_data.protein
          } else if (meal_date.getDay() == 1) {
            barChartData.datasets[0].data[2] += mData.meals[i]._food_items[j]._calories
            barChartData.datasets[1].data[2] += mData.meals[i]._food_items[j]._nutrient_data.protein
          } else if (meal_date.getDay() == 1) {
            barChartData.datasets[0].data[3] += mData.meals[i]._food_items[j]._calories
            barChartData.datasets[1].data[3] += mData.meals[i]._food_items[j]._nutrient_data.protein
          } else if (meal_date.getDay() == 1) {
            barChartData.datasets[0].data[4] += mData.meals[i]._food_items[j]._calories
            barChartData.datasets[1].data[4] += mData.meals[i]._food_items[j]._nutrient_data.protein
          } else if (meal_date.getDay() == 1) {
            barChartData.datasets[0].data[5] += mData.meals[i]._food_items[j]._calories
            barChartData.datasets[1].data[5] += mData.meals[i]._food_items[j]._nutrient_data.protein
          }
        }

      }
    }


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
          {HTMLs}
          <IonRow>
            <IonCol>
              <IonCard>
                <Bar data={barChartData}
                  options={{ maintainAspectRatio: true}}/>
                {/*<ReactFC {...chartConfigs} />*/}
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
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