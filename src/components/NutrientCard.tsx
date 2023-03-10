import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonList,
  IonLabel,
} from "@ionic/react";

const NutrientCard: React.FC<{
  foodItem: string;
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
  sugar: number;
}> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.foodItem} Nutritional Facts</IonCardTitle>
        <IonCardSubtitle>Calories: {props.calories}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonLabel>Carbohydrates: {props.carbs}g</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Fat: {props.fat}g</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Protein: {props.protein}g</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Sugar: {props.sugar}g</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default NutrientCard;
