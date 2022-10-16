import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { personOutline } from "ionicons/icons";

interface NotificationcardDataInterface {
  id: string;
  priority: string;
  sender: string;
  message: string;
}

const NotificationCardComponent: React.FC<NotificationcardDataInterface> = (
  item
) => {
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
};

export default NotificationCardComponent;
