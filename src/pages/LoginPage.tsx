import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonInput,
  IonContent,
  IonGrid,
  IonIcon,
  IonButton,
  IonSegment,
  IonSegmentButton,
  useIonToast,
} from "@ionic/react";

import {
  personOutline,
  lockClosedOutline,
  reloadOutline,
  alertOutline,
  checkmarkOutline,
} from "ionicons/icons";

import React from "react";

import { useState, useRef } from "react";

const LoginPage: React.FC = () => {
  const [segment, setSegment] = useState<"login" | "signup">("login");

  const username = useRef<HTMLIonInputElement>(null);
  const password = useRef<HTMLIonInputElement>(null);
  const confirmPassword = useRef<HTMLIonInputElement>(null);

  const [present] = useIonToast();

  const segmentHandler = (event: CustomEvent) => {
    setSegment(event.detail.value);
  };

  // Generates uuid only based on username
  const simpleHashFunction = (username: string | number | null | undefined) => {
    if (typeof username !== "string") {
      return -1;
    }
    let uuid = 0;
    for (let i = 0; i < username.length; i++) {
      uuid += username.charCodeAt(i) * (i * i);
    }
    return uuid;
  };

  // FOR LOGIN
  const checkLogin = async () => {
    const uuid = simpleHashFunction(username.current?.value);
    const url = new URL(`http://127.0.0.1:5000/v1/user/${uuid}`);
    const response = await fetch(url);

    if (response.status === 400) {
      present({
        message: "Invalid Account",
        duration: 2500,
        position: "top",
        icon: alertOutline,
        color: "danger",
      });
      return;
    } else {
      window.location.href = "/app";
    }
  };

  // FOR SIGNUP
  const createAccount = async () => {
    if (password.current?.value !== confirmPassword.current?.value) {
      present({
        message: "Passwords do NOT match",
        duration: 2500,
        position: "top",
        icon: alertOutline,
        color: "danger",
      });
      return;
    }

    const data = {
      uuid: simpleHashFunction(username.current?.value),
      height: -1,
      weight: -1,
      age: -1,
      sex: "other",
      goal: [],
      food_preferences: [],
      dietary_restrictions: [],
    };

    const url = new URL(`http://127.0.0.1:5000/v1/user/${data.uuid}`);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      present({
        message: "Account created successfully!",
        duration: 2500,
        position: "top",
        icon: checkmarkOutline,
      });
      setSegment("login");
      console.log("Created User:", data.uuid);
    }
    if (response.status === 400) {
      present({
        message: "COULDN'T CONNECT TO BACKEND",
        duration: 2500,
        position: "top",
        icon: alertOutline,
        color: "danger",
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">MacroFi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow className="ion-padding-horizontal">
            <IonCol>
              <IonSegment
                value={segment}
                onIonChange={segmentHandler}
                color="dark"
              >
                <IonSegmentButton value="login">
                  <IonLabel>login</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="signup">
                  <IonLabel>signup</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding-horizontal">
            <IonCol>
              <IonItem fill="outline">
                <IonIcon icon={personOutline} slot="start"></IonIcon>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput
                  placeholder="Enter username"
                  ref={username}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow className="ion-padding-horizontal">
            <IonCol>
              <IonItem fill="outline">
                <IonIcon icon={lockClosedOutline} slot="start"></IonIcon>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  placeholder="Enter password"
                  type="password"
                  ref={password}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          {segment === "login" ? (
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  className="ion-padding-horizontal"
                  onClick={checkLogin}
                >
                  Login
                </IonButton>
              </IonCol>
            </IonRow>
          ) : (
            <React.Fragment>
              <IonRow class="ion-padding-horizontal">
                <IonCol>
                  <IonItem fill="outline">
                    <IonIcon icon={reloadOutline} slot="start"></IonIcon>
                    <IonLabel position="floating">Confirm password</IonLabel>
                    <IonInput
                      placeholder="Confirm password"
                      type="password"
                      ref={confirmPassword}
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton
                    expand="block"
                    className="ion-padding-horizontal"
                    onClick={createAccount}
                  >
                    Signup
                  </IonButton>
                </IonCol>
              </IonRow>
            </React.Fragment>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
