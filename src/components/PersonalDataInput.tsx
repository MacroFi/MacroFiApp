import React, { useRef, useState } from "react";
import {
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  useIonToast,
} from "@ionic/react";

import {
  fastFoodOutline,
  alertCircleOutline,
  checkmarkOutline,
  alertOutline,
} from "ionicons/icons";

const PersonalDataInput: React.FC = () => {
  const foodPrefAlertOptions = {
    header: "Food Preferences",
    subHeader: "Select all that apply",
  };
  const dietRestrAlertOptions = {
    header: "Dietary Restrictions",
    subHeader: "Select all that apply",
  };

  const sexPopoverOptions = {
    message: "Select Sex",
  };

  const goalPopoverOptions = {
    message: "Select Goal",
  };

  interface PersonalData {
    uuid: number;
    height: string | number | null | undefined;
    weight: string | number | null | undefined;
    age: string | number | null | undefined;
    sex: string | number | null | undefined;
    goal: string | null;
    food_preferences: Array<string>;
    dietary_restrictions: Array<string>;
  }

  const getLocalData = () => {
    const local = window.localStorage.getItem("data");
    if (local == null) {
      return null;
    }
    return JSON.parse(local);
  };
  
  const [personalData, setPersonalData] = useState<PersonalData>(
    getLocalData() || {
      uuid: 1234,
      height: null,
      weight: null,
      age: null,
      sex: null,
      goal: null,
      food_preferences: [],
      dietary_restrictions: [],
    }
  );

  const heightRef = useRef<HTMLIonInputElement>(null);
  const weightRef = useRef<HTMLIonInputElement>(null);
  const ageRef = useRef<HTMLIonInputElement>(null);
  const sexRef = useRef<HTMLIonSelectElement>(null);
  const goalRef = useRef<HTMLIonSelectElement>(null);
  const foodPreferencesRef = useRef<HTMLIonSelectElement>(null);
  const dietRestrictionsRef = useRef<HTMLIonSelectElement>(null);

  const [present] = useIonToast();

  const collectData = async () => {
    const data = {
      uuid: 1234,
      height: heightRef.current?.value,
      weight: weightRef.current?.value,
      age: ageRef.current?.value,
      sex: sexRef.current?.value,
      goal: goalRef.current?.value,
      food_preferences: foodPreferencesRef.current?.value,
      dietary_restrictions: dietRestrictionsRef.current?.value,
    };

    setPersonalData(data);

    console.log("DATA", data);
    const url = new URL(`http://127.0.0.1:5000/v1/user/${data.uuid}`);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("UPDATED PERSONAL DATA SUCCESSFULLY");
      present({
        message: "Updated Successful",
        duration: 1500,
        position: "top",
        icon: checkmarkOutline,
      });
    } else if (response.status === 400) {
      console.log("FAILED TO UPDATE PERSONAL DATA");
      present({
        message: "ERROR 400: UPDATE FAILED",
        duration: 1500,
        position: "top",
        icon: alertOutline,
      });
    }

    window.localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <React.Fragment>
      <IonGrid class="ion-padding-vertical">
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="stacked">Your Height (in.)</IonLabel>
              <IonInput
                placeholder="Enter height"
                type="number"
                ref={heightRef}
                value={personalData.height}
              ></IonInput>
              {/* value props sets default value */}
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="stacked">Your Weight (lbs)</IonLabel>
              <IonInput
                placeholder="Enter weight"
                type="number"
                ref={weightRef}
                value={personalData.weight}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="stacked">Your Age</IonLabel>
              <IonInput
                placeholder="Enter age"
                type="number"
                ref={ageRef}
                value={personalData.age}
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Sex</IonLabel>
              <IonSelect
                placeholder="Make a Selection"
                interface="popover"
                interfaceOptions={sexPopoverOptions}
                ref={sexRef}
                value={personalData.sex}
              >
                <IonSelectOption value="male">Male</IonSelectOption>
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="other">Other</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel>Goal</IonLabel>
              <IonSelect
                placeholder="Make a Selection"
                interface="popover"
                interfaceOptions={goalPopoverOptions}
                ref={goalRef}
                value={personalData.goal}
              >
                <IonSelectOption value="lose_weight">
                  Lose Weight
                </IonSelectOption>
                <IonSelectOption value="gain_weight">
                  Gain Weight
                </IonSelectOption>
                <IonSelectOption value="bulk">Bulk</IonSelectOption>
                <IonSelectOption value="lean">Lean</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonItem lines="full">
          <IonIcon icon={fastFoodOutline} slot="start"></IonIcon>
          <IonLabel>Food Prefrences</IonLabel>
        </IonItem>

        <IonItem>
          <IonSelect
            placeholder="Select food preferences"
            multiple={true}
            interfaceOptions={foodPrefAlertOptions}
            ref={foodPreferencesRef}
            value={personalData.food_preferences}
          >
            <IonSelectOption value="american">American</IonSelectOption>
            <IonSelectOption value="mexican">Mexican</IonSelectOption>
            <IonSelectOption value="chinese">Chinese</IonSelectOption>
            <IonSelectOption value="indian">Indian</IonSelectOption>
            <IonSelectOption value="thai">Thai</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonGrid>

      <IonGrid>
        <IonItem lines="full">
          <IonIcon icon={alertCircleOutline} slot="start"></IonIcon>
          <IonLabel>Dietary Restrictions</IonLabel>
        </IonItem>

        <IonItem>
          <IonSelect
            placeholder="Select dietary restrictions"
            multiple={true}
            interfaceOptions={dietRestrAlertOptions}
            ref={dietRestrictionsRef}
            value={personalData.dietary_restrictions}
          >
            <IonSelectOption value="vegetarian">Vegetarian</IonSelectOption>
            <IonSelectOption value="vegan">Vegan</IonSelectOption>
            <IonSelectOption value="keto">Keto</IonSelectOption>
            <IonSelectOption value="no_gluten">NO Gluten</IonSelectOption>
            <IonSelectOption value="no_nuts">NO Nuts</IonSelectOption>
            <IonSelectOption value="no_fish_and_shellfish">
              NO Fish or Shellfish
            </IonSelectOption>
            <IonSelectOption value="no_eggs">NO Eggs</IonSelectOption>
            <IonSelectOption value="no_soy">NO Soy</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-center">
            <IonButton onClick={collectData}>Update Data</IonButton>
          </IonCol>
        </IonRow>

        <p>{JSON.stringify(personalData)}</p>
      </IonGrid>
    </React.Fragment>
  );
};

export default PersonalDataInput;
