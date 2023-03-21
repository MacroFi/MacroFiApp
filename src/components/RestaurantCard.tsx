import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonChip,
  IonRow,
  IonCol,
  IonIcon,
  IonLabel
} from "@ionic/react";

import { pinOutline } from "ionicons/icons";

const RestaurantCard: React.FC<{
  img_url: string;
  name: string;
  rating: string;
  address: string;
  categories: Array<string>;
}> = (props) => {
  return (
    <IonCard className="ion-no-margin">
      <img alt={props.name} src={props.img_url} />
      <IonCardHeader>
        <IonCardTitle>{props.name}</IonCardTitle>
        <IonCardSubtitle>Rating: {props.rating}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonRow>
          <IonCol>{props.address}</IonCol>
        </IonRow>

        {props.categories.map((cat, index) => (
          <IonChip key={index}>
            <IonIcon icon={pinOutline}></IonIcon>
            <IonLabel>{cat}</IonLabel>
          </IonChip>
        ))}
      </IonCardContent>
    </IonCard>
  );
};

export default RestaurantCard;
