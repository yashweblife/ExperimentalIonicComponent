import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.scss';
import { appsOutline } from "ionicons/icons"
const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <div className='header'>
        <IonToolbar>
          <IonIcon icon={appsOutline} slot="start" size='large'></IonIcon>
        </IonToolbar>
      </div>
    </IonHeader>
    <IonContent fullscreen>
      
    </IonContent>
  </IonPage>
);

export default Home;
