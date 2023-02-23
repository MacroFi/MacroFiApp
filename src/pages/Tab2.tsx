import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/react';
import './css/Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>

        <IonRow>

          <IonCol>
            <IonCard>
              <img alt="Sessions West Coast Deli" src="https://s3-media2.fl.yelpcdn.com/bphoto/q72MWqqmQuMTL-WbuDo1sQ/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>Sessions West Coast Deli</IonCardTitle>
                <IonCardSubtitle>Rating: 4.0</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>4736 Barranca Pkwy, Irvine, CA 92604</IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard>
              <img alt="S'wich Bistro" src="https://s3-media2.fl.yelpcdn.com/bphoto/wFtJFW-ghuRGF8GOjBZoSA/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>S'wich Bistro</IonCardTitle>
                <IonCardSubtitle>Rating: 4.5</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>16277 Laguna Canyon Rd, Unit B, Irvine, CA 92618</IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard>
              <img alt="Kosher Bite" src="https://s3-media3.fl.yelpcdn.com/bphoto/klkHX14eAFW4RhfzTS5IVg/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>Kosher Bite</IonCardTitle>
                <IonCardSubtitle>Rating: 4.5</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>23595 Moulton Pkwy, Ste H , Laguna Hills, CA 92653</IonCardContent>
            </IonCard>
          </IonCol>

        </IonRow>

        <IonRow>
          <IonCol>
            <IonCard>
              <img alt="Moe's Deli & Catering" src="https://s3-media1.fl.yelpcdn.com/bphoto/9280aAhZ28FmVaU-9k3aDA/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>Moe's Deli & Catering</IonCardTitle>
                <IonCardSubtitle>Rating: 4.5</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>23052 Lake Forest Dr, Laguna Hills, CA 92653</IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard>
              <img alt="Larry's Catering & Deli" src="https://s3-media4.fl.yelpcdn.com/bphoto/vsZ1GOscPzqGuPlWduQKRQ/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>Larry's Catering & Deli</IonCardTitle>
                <IonCardSubtitle>Rating: 4.5</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>17145 Von Karman Ave, Ste 102, Irvine, CA 92614</IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard>
              <img alt="Mr Sandwich" src="https://s3-media1.fl.yelpcdn.com/bphoto/wr-QweTgXz-jgOFtICqDOg/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>Mr Sandwich</IonCardTitle>
                <IonCardSubtitle>Rating: 4.5</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>92 Corporate Park ,Ste J ,Irvine, CA 92606</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>


        <IonItem lines="full">
          <IonLabel>Food Prefrences</IonLabel>
        </IonItem>

      </IonContent>

    </IonPage>
  );
};


export default Tab2;
