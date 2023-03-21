import React, { useState } from "react";
// import {
//   IonCard,
//   IonCol,
//   IonContent,
//   IonGrid,
//   IonHeader,
//   IonPage,
//   IonRow,
//   IonTitle,
//   IonToolbar,
// } from "@ionic/react";

// import { PieChart } from "react-minimal-pie-chart";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// var cloneDeep = require('lodash.clonedeep');



const temp: React.FC = () => {
//   const [HTMLs, setHTML] = useState<JSX.Element[]>([]);
//   const [userData, setUserData] = useState<any>();
//   const [barChartData, setData] = useState(bar_initial_state);

  // const [tableData, setTableData] = useState([
  //   [0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0],
  // ]);


  // const addDays = (date: Date, days: number) => {
  //   var result = new Date(date);
  //   result.setDate(result.getDate() + days);
  //   return result;
  // };

  // const subDays = (date: Date, days: number) => {
  //   var result = new Date(date);
  //   result.setDate(result.getDate() - days);
  //   return result;
  // };

  // const minMaxDays = (adate: Date) => {
  //   var date_str = adate.toDateString();

  //   let date = date_str.split(" ");

  //   if (date[0] == "Mon") {
  //     var min_date = new Date(adate);
  //     var max_date = new Date(addDays(adate, 6));
  //   } else if (date[0] == "Tues") {
  //     var min_date = new Date(subDays(adate, 1));
  //     var max_date = new Date(addDays(adate, 5));
  //   } else if (date[0] == "Wed") {
  //     var min_date = new Date(subDays(adate, 2));
  //     var max_date = new Date(addDays(adate, 4));
  //   } else if (date[0] == "Thurs") {
  //     var min_date = new Date(subDays(adate, 3));
  //     var max_date = new Date(addDays(adate, 3));
  //   } else if (date[0] == "Fri") {
  //     var min_date = new Date(subDays(adate, 4));
  //     var max_date = new Date(addDays(adate, 2));
  //   } else if (date[0] == "Sat") {
  //     var min_date = new Date(subDays(adate, 5));
  //     var max_date = new Date(addDays(adate, 1));
  //   } else {
  //     var min_date = new Date(subDays(adate, 6));
  //     var max_date = new Date(adate);
  //   }
  //   return [min_date, max_date];
  // };

  // const resetGraph = () => {
  //   setData(bar_initial_state);
  // };

  // const getUserData = async () => {
  //   const uuid = window.localStorage.getItem("uuid");

  //   const need_url = new URL(
  //     `http://127.0.0.1:5000/v1/user/${uuid}/calorie/need`
  //   );
  //   const response = await fetch(need_url);
  //   const uData = await response.json();
  //   setUserData(uData);

  //   const today_url = new URL(
  //     `http://127.0.0.1:5000/v1/user/${uuid}/calorie/today`
  //   );
  //   const today_responce = await fetch(today_url);
  //   const tData = await today_responce.json();

  //   const meals_url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}/meals`);
  //   const meals_responce = await fetch(meals_url);
  //   const mData = await meals_responce.json();

  //   const d_url = new URL(`http://127.0.0.1:5000/v1/today`);
  //   const d_responce = await fetch(d_url);
  //   const dData = await d_responce.json();

  //   var d1 = new Date();
  //   var d1 = addDays(d1, 1);
  //   var minMax = minMaxDays(d1);

  //   setData(bar_initial_state);

  //   for (var i = 0; i < mData.meals.length; i++) {
  //     var meal_date = new Date(mData.meals[i]._time_eaten);
  //     if (
  //       minMax[0].getTime() <= meal_date.getTime() &&
  //       meal_date.getTime() <= minMax[1].getTime()
  //     ) {
  //       for (var j = 0; j < mData.meals[i]._food_items.length; j++) {
  //         let tableDataCopy = [...tableData];

  //         if (meal_date.getDay() === 0) {
  //           const prevCal = tableDataCopy[0][6];
  //           const PrevProt = tableDataCopy[1][6];
  //           tableDataCopy[0][6] =
  //             prevCal + mData.meals[i]._food_items[j]._calories;
  //           tableDataCopy[1][6] =
  //             PrevProt + mData.meals[i]._food_items[j]._nutrient_data.protein;
  //         } else if (meal_date.getDay() === 1) {
  //           const prevCal = tableDataCopy[0][0];
  //           const PrevProt = tableDataCopy[1][0];
  //           tableDataCopy[0][0] =
  //             prevCal + mData.meals[i]._food_items[j]._calories;
  //           tableDataCopy[1][0] =
  //             PrevProt + mData.meals[i]._food_items[j]._nutrient_data.protein;
  //         } else if (meal_date.getDay() === 1) {
  //           const prevCal = tableDataCopy[0][1];
  //           const PrevProt = tableDataCopy[1][1];
  //           tableDataCopy[0][1] =
  //             prevCal + mData.meals[i]._food_items[j]._calories;
  //           tableDataCopy[1][1] =
  //             PrevProt + mData.meals[i]._food_items[j]._nutrient_data.protein;
  //         } else if (meal_date.getDay() === 1) {
  //           const prevCal = tableDataCopy[0][2];
  //           const PrevProt = tableDataCopy[1][2];
  //           tableDataCopy[0][2] =
  //             prevCal + mData.meals[i]._food_items[j]._calories;
  //           tableDataCopy[1][2] =
  //             PrevProt + mData.meals[i]._food_items[j]._nutrient_data.protein;
  //         } else if (meal_date.getDay() === 1) {
  //           const prevCal = tableDataCopy[0][3];
  //           const PrevProt = tableDataCopy[1][3];
  //           tableDataCopy[0][3] =
  //             prevCal + mData.meals[i]._food_items[j]._calories;
  //           tableDataCopy[1][3] =
  //             PrevProt + mData.meals[i]._food_items[j]._nutrient_data.protein;
  //         } else if (meal_date.getDay() === 1) {
  //           const prevCal = tableDataCopy[0][4];
  //           const PrevProt = tableDataCopy[1][4];
  //           tableDataCopy[0][4] =
  //             prevCal + mData.meals[i]._food_items[j]._calories;
  //           tableDataCopy[1][4] =
  //             PrevProt + mData.meals[i]._food_items[j]._nutrient_data.protein;
  //         } else if (meal_date.getDay() === 1) {
  //           const prevCal = tableDataCopy[0][5];
  //           const PrevProt = tableDataCopy[1][5];
  //           tableDataCopy[0][5] =
  //             prevCal + mData.meals[i]._food_items[j]._calories;
  //           tableDataCopy[1][5] =
  //             PrevProt + mData.meals[i]._food_items[j]._nutrient_data.protein;
  //         }
  //         setTableData(tableDataCopy);

  //         // const barDataCopy = cloneDeep(barChartData);
  //         // barDataCopy.datasets[0].data = tableDataCopy[0]
  //         // barDataCopy.datasets[1].data = tableDataCopy[1]
  //         // setData(barDataCopy)
  //       }
  //     }
  //   }

  //   const userHTML = [];
  //   userHTML.push(
  //     <IonRow key={uuid}>
  //       <IonCol>
  //         <IonCard class="ion-text-center">
  //           <IonCardHeader>
  //             <IonCardTitle>Calories Consumed Today:</IonCardTitle>
  //           </IonCardHeader>

  //           <IonCardContent>{tData.calories}</IonCardContent>
  //         </IonCard>
  //       </IonCol>

  //       <IonCard class="ion-text-center">
  //         {/*
  //         <IonCardHeader>
  //           <IonCardTitle>Calories Needed:</IonCardTitle>
  //         </IonCardHeader>
  //         <IonCardContent>
  //           {uData.calorie_need}
  //         </IonCardContent>
  //             */}
  //       </IonCard>
  //     </IonRow>
  //   );
  //   setHTML(userHTML);
  // };

  // return (
  //   <IonPage>
  //     <IonHeader>
  //       <IonToolbar>
  //         <IonTitle class="ion-text-center">MacroFi</IonTitle>
  //       </IonToolbar>
  //     </IonHeader>

  //     <IonContent fullscreen>
  //       <IonGrid>
  //         <IonRow>
  //           <IonCol class="ion-text-center">
  //             {/* <IonButton onClick={getUserData}>
  //               Get Personalized Macros
  //             </IonButton> */}
  //           </IonCol>
  //         </IonRow>

  //         {/* {HTMLs} */}

  //         <IonRow>
  //           <IonCol>
  //             <IonCard>
  //               <Bar data={bar_initial_state} options={{ responsive: true }} />
  //               {/*<ReactFC {...chartConfigs} />*/}
  //             </IonCard>
  //           </IonCol>
  //         </IonRow>
  //       </IonGrid>

  //       {/* <PieChart
  //         data={[
  //           { title: "Carbs", value: 10, color: "#E38627", label: "carb" },
  //           { title: "Fat", value: 15, color: "#C13C37" },
  //           { title: "Protein", value: 20, color: "#6A2135" },
  //           { title: "Sugar", value: 20, color: "#33adff" },
  //         ]}
  //       /> */}
  //     </IonContent>
  //   </IonPage>
  // );

  return (
<></>
  );
};

export default temp;

// const [personalData, setPersonalData] = useState();

//   const getServerData = async () => {
//     const uuid = 1234;
//     const url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}`);
//     const response = await fetch(url);
//     const json = await response.json();
//     setPersonalData(json);
//   };

  /* <IonButton onClick={getServerData}>test</IonButton>
<p>{JSON.stringify(personalData)}</p> */