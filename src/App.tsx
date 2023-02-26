import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, clipboardOutline, pieChartOutline } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Nav Components */
import HomeTabMainPage from './pages/HomeTab/HomeTabMainPage';
import PersonalDataMainPage from './pages/PersonalDataTab/PersonalDataTabMainPage';
import ViewDataMainPage from './pages/ViewDataTab/ViewDataTabMainPage';
import PageTwo from './pages/PersonalDataTab/PageTwo';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>

        <IonRouterOutlet>
          <Route exact path="/PeronalDataTab">
            <PersonalDataMainPage/>
          </Route>
          <Route path="/PeronalDataTab/PageTwo">
            <PageTwo/>
          </Route>
          <Route exact path="/HomeTab">
            <HomeTabMainPage/>
          </Route>
          <Route path="/ViewDataTab">
            <ViewDataMainPage/>
          </Route>
          <Route exact path="/">
            <Redirect to="/HomeTab" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="PeronalDataTab" href="/PeronalDataTab">
            <IonIcon icon={clipboardOutline} />
            <IonLabel>Personal Data</IonLabel>
          </IonTabButton>
          <IonTabButton tab="HomeTab" href="/HomeTab">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ViewDataTab" href="/ViewDataTab">
            <IonIcon icon={pieChartOutline} />
            <IonLabel>View Data</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
