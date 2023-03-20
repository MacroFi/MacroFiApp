import React, { useState } from "react";
import {
  IonItem,
  IonInput,
  IonGrid,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  InputChangeEventDetail,
  useIonToast,
} from "@ionic/react";

import { closeCircle, checkmarkOutline, alertOutline } from "ionicons/icons";

import { IonInputCustomEvent } from "@ionic/core";

const MealEnter: React.FC = () => {
  // const [nutrientCards, setNutrientCards] = useState<JSX.Element[]>([]);
  // const [nutrientData, setNutrientData] = useState<any>();
  const [inputList, setInputList] = useState([{ foodItem: "" }]);

  const [present] = useIonToast();

  const newSub = () => {
    setInputList([...inputList, { foodItem: "" }]);
  };

  const removeSub = (index: number) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleInputChange = (
    index: number,
    event: IonInputCustomEvent<InputChangeEventDetail>
  ) => {
    const { name, value } = event.target;
    const list = [...inputList];
    list[index].foodItem = value as string;
    setInputList(list);
  };

  const saveMealBackEnd = async () => {
    if (inputList.length === 1 && inputList[0].foodItem === "") {
      return;
    }
    const meal = {
      food_items: new Array(),
    };

    for (let i = 0; i < inputList.length; i++) {
      meal["food_items"].push(inputList[i]["foodItem"]);
    }

    console.log(meal);
    const uuid = window.localStorage.getItem("uuid");
    const url = new URL(`http://127.0.0.1:5000//v1/user/${uuid}/meals`);
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(meal),
    });

    if (response.status === 200) {
      present({
        message: "Saved meal!",
        duration: 2500,
        position: "top",
        icon: checkmarkOutline,
      });
    }
  };

  // const getNutrientData = async () => {
  //   const url = new URL("http://127.0.0.1:5000/v1/meal_nutrients");

  //   const meal = inputList.map((input) => input.foodItem);
  //   url.searchParams.append("meal", meal.toString());

  //   const response = await fetch(url);
  //   const mealNutrients = await response.json();

  //   setNutrientData(mealNutrients);

  //   const nutrientCardsHTML = [];
  //   for (const foodItem in mealNutrients) {
  //     const nutrients = mealNutrients[foodItem];
  //     nutrientCardsHTML.push(
  //       <NutrientCard
  //         key={foodItem}
  //         foodItem={foodItem}
  //         calories={nutrients.calories}
  //         carbs={nutrients.carbohydrates}
  //         fat={nutrients.fat}
  //         protein={nutrients.protein}
  //         sugar={nutrients.sugar}
  //       ></NutrientCard>
  //     );
  //   }

  //   setNutrientCards(nutrientCardsHTML);
  // };

  return (
    <React.Fragment>
      <IonGrid class="ion-padding-vertical">
        {inputList.map((input, index) => {
          return (
            <IonItem key={index}>
              <IonInput
                required
                type="text"
                placeholder="food item..."
                name="foodItem"
                value={input.foodItem}
                onIonChange={(event) => handleInputChange(index, event)}
              ></IonInput>
              {inputList.length !== 1 && (
                <IonIcon
                  icon={closeCircle}
                  onClick={() => removeSub(index)}
                  slot="end"
                ></IonIcon>
              )}
            </IonItem>
          );
        })}
        <IonButton expand="full" color="light" onClick={newSub}>
          Add Food Item
        </IonButton>
      </IonGrid>

      <IonGrid class="ion-padding-vertical">
        <IonRow>
          <IonCol class="ion-text-center">
            <IonButton color="primary" onClick={saveMealBackEnd}>
              Save Meal
            </IonButton>
            {/* <IonButton color="primary" onClick={getNutrientData}>
              Get Nutrition Data
            </IonButton> */}
          </IonCol>
        </IonRow>
      </IonGrid>

      {/* {nutrientCards} */}
      {/* <p>{JSON.stringify(nutrientData)}</p> */}
    </React.Fragment>
  );
};

export default MealEnter;
