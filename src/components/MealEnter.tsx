import React, { useState } from "react";
import {
    IonItem,
    IonInput,
    IonGrid,
    IonButton,
    IonIcon,
    IonList,
    InputChangeEventDetail,
  } from "@ionic/react"
import {closeCircle} from 'ionicons/icons';
import { IonInputCustomEvent } from "@ionic/core";

const MealEnter: React.FC = () => {
    const newSub = () => {
        setInputList([...inputList, {subMeal: ""}]);
    };

    const removeSub = (index: number) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const [inputList, setInputList] = useState([
        {subMeal: ""}
    ]);

    const handleInputChange = (index: number, event: IonInputCustomEvent<InputChangeEventDetail>) => {
        const {name, value} = event.target;
        const list = [...inputList];
        list[index].subMeal = value as string;
        setInputList(list)
    };
    
    return (
        <React.Fragment>
            <IonGrid class="ion-padding-vertical">
                {inputList.map((input, index) => {
                    return (
                        <IonItem key={index}>
                            <IonInput required type={'text'} placeholder="simple meal..." name="subMeal" value={input.subMeal} onIonChange={event => handleInputChange(index, event)}></IonInput>
                            {inputList.length !== 1 && <IonIcon icon={closeCircle} onClick={() => removeSub(index)} slot="end"></IonIcon>}
                        </IonItem>
                    )
                })}

                <IonButton expand="full" color="light" onClick={newSub}>Add Sub Meal</IonButton>
            </IonGrid>
        </React.Fragment>
    );
};

export default MealEnter;