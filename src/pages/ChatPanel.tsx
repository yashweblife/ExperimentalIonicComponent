import { IonContent, IonHeader, IonPage, IonTitle } from "@ionic/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ChatPanel.scss";
const ChatPanel: React.FC = () => {
  return (
    <IonPage className="chat-room">
      <IonHeader>
        <div className="progress">
          <CircularProgressbar
            value={1}
            minValue={0}
            maxValue={100}
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
        <div className="content">
          <IonTitle> Hello World</IonTitle>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ChatPanel;
