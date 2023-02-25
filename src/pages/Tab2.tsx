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
} from '@ionic/react';
import { useRef, useState } from 'react';
import './css/Tab2.css';
import RestaurantCard from '../components/RestaurantCard';

const Tab2: React.FC = () => {
  const searchRef = useRef<HTMLIonSearchbarElement>(null);
  const [restaurants, setRestaurants] = useState<JSX.Element[]>([]);

  const getSearch = async () => {
    // const searchKey = searchRef.current?.value;
    // console.log(searchKey);
    const url = "http://127.0.0.1:5000/v1/user/1234/nearby";
    const response = await fetch(url);
    const nearby = await response.json();

    var elements = [];
    for (var i = 0; i < nearby.businesses.length; i += 2) {
      var first = nearby.businesses[i];
      var second = (i + 1 < nearby.businesses.length) ? nearby.businesses[i + 1] : null

      elements.push((
        <IonGrid fixed={true} key={i}>
          <IonRow>
            <IonCol>
              <RestaurantCard img_url={first.image_url} name={first.name} rating={first.rating} address={first.address} />
            </IonCol>
            <IonCol>
              {second ?
                <RestaurantCard img_url={second.image_url} name={second.name} rating={second.rating} address={second.address} />
                : null}
            </IonCol>
          </IonRow>
        </IonGrid>
      ))
    };

    setRestaurants(elements);
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
            <IonCol size="12">
              <IonSearchbar ref={searchRef} showClearButton="focus" inputmode="text"></IonSearchbar>
            </IonCol>
            <IonCol class="ion-text-center">
              <IonButton onClick={getSearch} shape="round" fill="solid" size="small">Enter</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        {restaurants}

      </IonContent>

    </IonPage>
  );
};


export default Tab2;
