import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonSearchbar,
  IonButton,
  IonGrid,
  IonItem,
  IonLabel
} from "@ionic/react";

import { useRef, useState } from "react";
import RestaurantCard from "../../components/RestaurantCard";


const HomeTabMainPage: React.FC = () => {
  const searchRef = useRef<HTMLIonSearchbarElement>(null);
  const [restaurants, setRestaurants] = useState<JSX.Element[]>([]);

  const getSearch = async () => {
    const searchKey = searchRef.current!.value!;

    const url = new URL("http://127.0.0.1:5000/v1/user/1234/nearby");

    if (searchKey.length !== 0) {
      url.searchParams.append("term", searchKey);
    }

    const response = await fetch(url);
    const nearby = await response.json();

    var elements = [];
    for (var i = 0; i < nearby.businesses.length; i += 2) {
      var first = nearby.businesses[i];
      var second =
        i + 1 < nearby.businesses.length ? nearby.businesses[i + 1] : null;

      elements.push(
        <IonGrid fixed={true} key={i}>
          <IonRow>
            <IonCol>
              <RestaurantCard
                img_url={first.image_url}
                name={first.name}
                rating={first.rating}
                address={first.address}
              />
            </IonCol>
            <IonCol>
              {second ? (
                <RestaurantCard
                  img_url={second.image_url}
                  name={second.name}
                  rating={second.rating}
                  address={second.address}
                />
              ) : null}
            </IonCol>
          </IonRow>
        </IonGrid>
      );
    }

    setRestaurants(elements);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol class="ion-text-center">
              <IonItem
                routerLink="/app/HomeTab/MealEntry"
                routerDirection="forward"
              >
                <IonLabel class="ion-text-center">Log A Meal</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonSearchbar
                ref={searchRef}
                showClearButton="focus"
                inputmode="text"
              ></IonSearchbar>
            </IonCol>
            <IonCol class="ion-text-center">
              <IonButton
                onClick={getSearch}
                shape="round"
                fill="solid"
                size="small"
              >
                Enter
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        {restaurants}
      </IonContent>
    </IonPage>
  );
};

export default HomeTabMainPage;
