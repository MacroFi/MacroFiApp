import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonRow,
  IonCol

} from '@ionic/react';

import './Tab2.css';

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
              <img alt="Silhouette of mountains" src="https://s3-media2.fl.yelpcdn.com/bphoto/wFtJFW-ghuRGF8GOjBZoSA/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard>
              <img alt="Silhouette of mountains" src="https://s3-media3.fl.yelpcdn.com/bphoto/klkHX14eAFW4RhfzTS5IVg/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
              </IonCardContent>
            </IonCard>
          </IonCol>

        </IonRow>

        <IonRow>
          <IonCol>
            <IonCard>
              <img alt="Sessions West Coast Deli" src="https://s3-media1.fl.yelpcdn.com/bphoto/9280aAhZ28FmVaU-9k3aDA/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>Sessions West Coast Deli</IonCardTitle>
                <IonCardSubtitle>Rating: 4.0</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>4736 Barranca Pkwy, Irvine, CA 92604</IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard>
              <img alt="Silhouette of mountains" src="https://s3-media4.fl.yelpcdn.com/bphoto/vsZ1GOscPzqGuPlWduQKRQ/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard>
              <img alt="Silhouette of mountains" src="https://s3-media1.fl.yelpcdn.com/bphoto/wr-QweTgXz-jgOFtICqDOg/o.jpg" />
              <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

      </IonContent>

    </IonPage>
  );
};

export default Tab2;
