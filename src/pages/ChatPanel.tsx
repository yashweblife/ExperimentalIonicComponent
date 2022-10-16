import { IonBadge, IonCard, IonCardHeader, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { home } from "ionicons/icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { generateID } from "../utils/utils";
import "./ChatPanel.scss";

const contacts:any = []

for(var i=0;i<15;i++){
  contacts.push(
    {
      name:"Yash Giri",
      messages:Math.floor(Math.random()*20),
      id:generateID()
    }
  )
}

const ChatPanel: React.FC = () => {
  return (
    <IonPage className="chat-panel">
      <IonHeader>
        <div className="progress">
          <CircularProgressbar
            value={1}
            minValue={0}
            maxValue={100}
            text={`${0} Unread`}
            styles={buildStyles({
              pathColor: "#6FFF97",
              trailColor: "#3D3D3D",
              textColor: "white",
              textSize: "12px",
            })}
          ></CircularProgressbar>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <Link to={'/home'}>
            <IonFabButton>
              <IonIcon icon={home}></IonIcon>
            </IonFabButton>
          </Link>
        </IonFab>
            <IonList>
              {
                contacts.map((item:any)=>{
                  return(
                    <Link to="/room">
                      <IonCard key={`${item.id}`}>
                        <IonCardHeader>
                          <IonToolbar>
                            <IonTitle slot="start">{item.name}</IonTitle>
                            <IonBadge slot="end">{item.messages}</IonBadge>
                          </IonToolbar>
                        </IonCardHeader>
                      </IonCard>
                    </Link>
                  )
                })
              }
            </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ChatPanel;
