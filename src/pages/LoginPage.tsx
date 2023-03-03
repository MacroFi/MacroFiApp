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
    IonButton
} from '@ionic/react';

import { personOutline, lockClosedOutline } from 'ionicons/icons';



const LoginPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="ion-text-center">MacroFi</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonLabel position="floating">Login</IonLabel>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem fill="outline">
                                <IonIcon icon={personOutline} slot="start"></IonIcon>
                                <IonLabel position="floating">Username</IonLabel>
                                <IonInput placeholder="Enter username"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem fill="outline">
                                <IonIcon icon={lockClosedOutline} slot="start"></IonIcon>
                                <IonLabel position="floating">Password</IonLabel>
                                <IonInput placeholder="Enter password" type="password"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" className="ion-padding-horizontal">
                                Login
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" className="ion-padding-horizontal">
                                Signup
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
