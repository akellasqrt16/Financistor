import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Income & Spending</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton color="danger" routerLink="/tab4">
            Update Financial Information:
          </IonButton>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Your budget every day is ((z-(a+(c+d)/2)/b)</IonCardTitle>
            <IonCardSubtitle>Remember: Don't go overboard!</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>

          <IonItem className="ion-activated">
            <IonIcon icon={warning}  slot="start" />
            <IonLabel >Monthly Income (Post Tax): (z)</IonLabel>
          </IonItem>
        
        <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel color="#cdf6fd" >Average Monthly Expenses: (a)</IonLabel>
          </IonItem>
          
          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel color="#cdf6fd">Monthly Disposable Income: (z-(a+c+d))</IonLabel>
          </IonItem>

        </IonCard>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
