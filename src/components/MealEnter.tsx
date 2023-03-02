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
    IonCheckbox,
    useIonToast,
    IonList,
  } from "@ionic/react"
import {closeCircle} from 'ionicons/icons';

const MealEnter: React.FC = () => {
    const newSub = () => {

    };

    const removeSub = () => {
        console.log("did it")
    };

    const [inputFields, setInputFields] = useState([
        {subMeal: '', other: ''}
    ])

    const handleFormChange = (index: number, event: React.FormEvent<HTMLIonInputElement>) => {
        let data = [...inputFields];
        {/*data[index][event.target.name] = event.target.value; */}
        setInputFields(data);
    }
    
    return (
        <React.Fragment>
            <IonGrid class="ion-padding-vertical">
                <IonList lines="none">
                    {inputFields.map((input, index) => {
                        return (
                            <IonItem key="index">
                                <IonInput required type="text" placeholder="simple meal..." name="subMeal" value={input.subMeal} onChange={event => handleFormChange(index, event)}></IonInput>
                                <IonIcon icon={closeCircle} onClick={removeSub} slot="end"></IonIcon>
                            </IonItem>
                        )
                    })}
                </IonList>
                <IonButton expand="full" color="light" onClick={newSub}>Add Sub Meal</IonButton>
            </IonGrid>
        </React.Fragment>
    );
};

export default MealEnter;