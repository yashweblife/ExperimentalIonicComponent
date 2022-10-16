import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Menu.scss";

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem detail={true}>
            <IonLabel>Contacts</IonLabel>
          </IonItem>
          <IonItem detail={true}>
            <IonLabel>Todos</IonLabel>
          </IonItem>
          <IonItem detail={true}>
            <IonLabel>Profile</IonLabel>
          </IonItem>
          <IonItem detail={true}>
            <IonLabel>Settings</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
