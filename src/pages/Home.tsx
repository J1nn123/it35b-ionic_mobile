import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Home.css';
import { heart } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
   
      <IonHeader>
        <IonToolbar>
        
          <IonMenuButton slot="start" />
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen className="home-content">
        
      
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

       
        <div className="home-container">

          <h2 className="home-title">Welcome</h2>

          <div className="button-group">
            <IonButton expand="block">Default</IonButton>

            <IonButton expand="block" shape="round">
              Round
            </IonButton>

            <IonButton expand="block">
              <IonIcon slot="start" icon={heart} />
              Like
            </IonButton>
          </div>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;