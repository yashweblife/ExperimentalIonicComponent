import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack, play } from "ionicons/icons";
import { Link } from "react-router-dom";
import { generateID } from "../utils/utils";
import "./Chatroom.scss";
const messages: any = [];

for (var i = 0; i < 20; i++) {
  messages.push({
    sender: i % 2 == 0,
    message: "Something big is coming",
    time: new Date(),
    id: generateID(),
  });
}

const ChatRoom: React.FC = () => {
  return (
    <IonPage className="chat-room">
      <IonHeader>
        <IonToolbar>
          <IonTitle slot="start">Yash Giri</IonTitle>
          <Link slot="end" to="/chat">
            <IonButton fill="clear">
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </Link>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {messages.map((item: any) => {
            return (
              <IonItem key={`${item.id}`} lines="none">
                <IonChip slot={`${item.sender ? "start" : "end"}`}>
                  {item.message}
                </IonChip>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonCard>
          <IonCardHeader>
            <IonToolbar>
              <IonInput></IonInput>
              <IonButton slot="end" fill="clear">
                <IonIcon icon={play}></IonIcon>
              </IonButton>
            </IonToolbar>
          </IonCardHeader>
        </IonCard>
      </IonFooter>
    </IonPage>
  );
};

export default ChatRoom;
