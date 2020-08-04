import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Goals, Debts, & Bills</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton color="danger" routerLink="/tab4">
            Update Financial Information:
          </IonButton>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Current Financial Goal: Emergency Fund</IonCardTitle>
            <IonCardSubtitle>Amount Wanted: (c)</IonCardSubtitle>
            <IonCardSubtitle>Time Period: (d) months</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
        <IonItem className="ion-activated">
            <IonIcon icon={warning}  slot="start" />
            <IonLabel >Monthly Goal Savings: (c/d)</IonLabel>
          </IonItem>
        </IonCard>
          
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Current Debt Targeted: Student Loans</IonCardTitle>
            <IonCardSubtitle>Amount: $(f)</IonCardSubtitle>
            <IonCardSubtitle>Time Period: (g) months</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
        <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel color="#cdf6fd" >Monthly Debt Payments: $(f/g) </IonLabel>
          </IonItem>
          </IonCard>
          
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
