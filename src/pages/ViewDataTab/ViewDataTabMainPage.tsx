import React from "react";

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
} from "@ionic/react";

import { PieChart } from "react-minimal-pie-chart";
import { Bar } from "react-chartjs-2";



let bar_initial_state = {
  labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Calories",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [1, 1, 4, 1, 4, 1, 1, 6]
    },
    {
      label: "Protein",
      backgroundColor: "rgba(0, 133, 255, 0.2)",
      borderColor: "rgba(0, 133, 255, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(0, 133, 255, 0.4)",
      hoverBorderColor: "rgba(0, 133, 255, 1)",
      data: [3, 3, 3, 3, 3, 3, 3, 9]
    }
  ]
};

const ViewDataMainPage: React.FC = () => {

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
              {/* <IonButton onClick={getUserData}>
                Get Personalized Macros
              </IonButton> */}
            </IonCol>
          </IonRow>

          {/* {HTMLs} */}

          <IonRow>
            <IonCol>
              <IonCard>
                <Bar data={bar_initial_state} options={{ responsive: true }} />
                {/*<ReactFC {...chartConfigs} />*/}
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <PieChart
          data={[
            { title: "Carbs", value: 10, color: "#E38627", label: "carb" },
            { title: "Fat", value: 15, color: "#C13C37" },
            { title: "Protein", value: 20, color: "#6A2135" },
            { title: "Sugar", value: 20, color: "#33adff" },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default ViewDataMainPage;