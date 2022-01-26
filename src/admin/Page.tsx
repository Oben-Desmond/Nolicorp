import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
// import './Page.css';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle size="large">{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name={name} />
    </IonContent>
  );
};

export default Page;