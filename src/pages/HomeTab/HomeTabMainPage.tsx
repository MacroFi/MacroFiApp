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
  IonLabel,
  IonLoading,
} from "@ionic/react";

import { useRef, useState } from "react";
import RestaurantCard from "../../components/RestaurantCard";
import NutrientCard from "../../components/NutrientCard";

const HomeTabMainPage: React.FC = () => {
  const searchRef = useRef<HTMLIonSearchbarElement>(null);
  const [restaurants, setRestaurants] = useState<JSX.Element[]>([]);
  const [nutrientCards, setNutrientCards] = useState<JSX.Element[]>([]);
  const [showLoading, setShowLoading] = useState(false);

  const getSearch = async () => {
    const searchKey = searchRef.current!.value!;

    const url = new URL("http://127.0.0.1:5000/v1/user/1234/nearby");

    if (searchKey.length !== 0) {
      url.searchParams.append("term", searchKey);
    }

    const response = await fetch(url);
    const nearby = await response.json();

    console.log(nearby)
    var elements = [];
    for (var i = 0; i < nearby.businesses.length; i += 1) {
      var first = nearby.businesses[i];
      // var second =
      //   i + 1 < nearby.businesses.length ? nearby.businesses[i + 1] : null;

      elements.push(
        <IonGrid fixed={true} key={i}>
          <IonRow>
            <IonCol className="RestaurantCard">
              <RestaurantCard
                img_url={first.image_url}
                name={first.name}
                rating={first.rating}
                address={first.address}
                categories={first.categories}
              />
            </IonCol>
            {/* <IonCol className="RestaurantCard">
              {second ? (
                <RestaurantCard
                  img_url={second.image_url}
                  name={second.name}
                  rating={second.rating}
                  address={second.address}
                  categories={first.categories}
                />
              ) : null}
            </IonCol> */}
          </IonRow>
        </IonGrid>
      );
    }

    setNutrientCards([]);
    setRestaurants(elements);
  };

  const getMealReccomendations = async () => {
    console.log("recoomn");

    const uuid = window.localStorage.getItem("uuid");
    const url = new URL(
      `http://127.0.0.1:5000/v1/user/${uuid}/recommendations`
    );
    const response = await fetch(url);
    const recommendations = await response.json();

    console.log(recommendations);
    const nutrientCardsHTML = [];
    for (const foodItem in recommendations) {
      const foodData = recommendations[foodItem];
      nutrientCardsHTML.push(
        <NutrientCard
          key={foodItem}
          foodItem={foodData._food_name}
          calories={foodData._nutrient_data.calories}
          carbs={foodData._nutrient_data.carbohydrates}
          fat={foodData._nutrient_data.fat}
          protein={foodData._nutrient_data.protein}
          sugar={foodData._nutrient_data.sugar}
        ></NutrientCard>
      );
    }
    setRestaurants([]);
    setNutrientCards(nutrientCardsHTML);
    setShowLoading(false);
  };

  const getMealReccomendationsWrapper = async () => {
    setShowLoading(true);
    setTimeout(() => {
      getMealReccomendations();
    }, 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonItem
                routerLink="/app/HomeTab/MealEntry"
                routerDirection="forward"
              >
                <IonLabel class="ion-text-center">Log A Meal</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-center">
              <IonItem button={true} onClick={getMealReccomendationsWrapper}>
                <IonLabel class="ion-text-center">
                  Get Meal Reccomendations
                </IonLabel>
              </IonItem>
              <IonLoading
                isOpen={showLoading}
                message={"Calculating reccomendations..."}
              ></IonLoading>
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
            <IonCol className="ion-text-center">
              <IonButton onClick={getSearch} fill="solid" size="small">
                Enter
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        {restaurants}
        {nutrientCards}
      </IonContent>
    </IonPage>
  );
};

export default HomeTabMainPage;
