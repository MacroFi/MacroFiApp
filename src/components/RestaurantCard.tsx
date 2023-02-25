import React from "react";
import {
    IonCol,
    IonCard,
    IonThumbnail,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
} from "@ionic/react";

const RestaurantCard: React.FC<{
    img_url: string;
    name: string;
    rating: string;
    address: string;
}> = props => {



    return (
        <IonCard className="ion-no-margin">
            <img alt={props.name} src={props.img_url} />
            <IonCardHeader>
                <IonCardTitle>{props.name}</IonCardTitle>
                <IonCardSubtitle>Rating: {props.rating}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{props.address}</IonCardContent>
        </IonCard>
    );
};

export default RestaurantCard