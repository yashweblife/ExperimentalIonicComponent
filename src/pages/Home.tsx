import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.scss";
import {
  appsOutline,
  home,
  listOutline,
  notifications,
  person,
  personOutline,
} from "ionicons/icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Menu from "../components/Menu";
import { generateID } from "../utils/utils";
import { Link } from "react-router-dom";
const messages = [
  {
    sender: "Yash Giri",
    message: "Come home soon",
    priority: "high",
    id: generateID(),
  },
  {
    sender: "Yash Giri",
    message: "Come home soon",
    priority: "low",
    id: generateID(),
  },
  {
    sender: "Yash Giri",
    message: "Come home soon",
    priority: "normal",
    id: generateID(),
  },
];

const Home: React.FC = () => (
  <IonPage id="main-content">
    <Menu />
    <IonHeader>
      <div className="header">
        <IonToolbar class="ion-padding-start">
          <IonMenuButton slot="start">
            <IonIcon icon={appsOutline} size="large"></IonIcon>
          </IonMenuButton>
        </IonToolbar>
        <IonList>
          {messages.map((item: any) => {
            return (
              <IonCard key={`${item.id}`}>
                <IonCardHeader>
                  <IonToolbar>
                    <IonIcon
                      icon={personOutline}
                      className={`${item.priority}`}
                      slot="start"
                    ></IonIcon>
                    <IonTitle class="ion-margin-start">{item.sender}</IonTitle>
                  </IonToolbar>
                </IonCardHeader>
                <IonCardContent>{item.message}</IonCardContent>
              </IonCard>
            );
          })}
        </IonList>
        <div className="progress">
          <CircularProgressbar
            maxValue={100}
            minValue={0}
            value={2}
            text={`${0} Todos`}
            styles={buildStyles({
              pathColor: "#6FFF97",
              trailColor: "#3D3D3D",
              textColor: "white",
              textSize: "12px",
            })}
          ></CircularProgressbar>
        </div>
      </div>
    </IonHeader>
    <IonContent fullscreen>
      <IonCard>
        <IonCardHeader>
          <IonToolbar class="ion-padding-start">
            <IonIcon icon={person} slot="start"></IonIcon>
            <IonTitle>Hi Emily!</IonTitle>
            <div slot="end">
              <IonIcon icon={notifications}></IonIcon>
              <IonBadge slot="end">1</IonBadge>
            </div>
          </IonToolbar>
        </IonCardHeader>
        <IonCardContent>
          <Link to={"/home"}>
            <IonChip>
              <IonIcon icon={home}></IonIcon>
              <IonLabel>Home</IonLabel>
            </IonChip>
          </Link>
          <Link to={"/todolist"}>
            <IonChip>
              <IonIcon icon={listOutline}></IonIcon>
              <IonLabel>Todos</IonLabel>
            </IonChip>
          </Link>
          <Link to={"/chat"}>
            <IonChip>
              <IonIcon icon={notifications}></IonIcon>
              <IonLabel>Messages</IonLabel>
            </IonChip>
          </Link>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Home;
