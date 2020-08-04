import React, { useState } from 'react';
import { IonContent, IonHeader, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonToggle, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import './Tab4.css';
const Tab4: React.FC = () => {

  const [text, setText] = useState<string>();
  // Each of these are variables for one of the boxes
  const [values, setValues] = React.useState({ amount: null} as any);
  const [a, Sa] = React.useState({ amount:  null} as any);
  const [number, setNumber] = useState<number>();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Financistor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome! Please answer the following questions so we can provide you your own custom-made budget and financial plan!</IonCardTitle>
            <IonCardSubtitle>Note: All amounts inputted should be in dollars.</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonList>

          <IonItem>
            <IonLabel position="floating">What is your current monthly income? (Post tax)</IonLabel>
            <IonInput type ="number" z={number} 
              ></IonInput>
            
          </IonItem>

          <IonItem>
            <IonLabel position="floating">What was the total of your monthly expenses last month? (Bills, Utilities, Rent, etc.)</IonLabel>
            <IonInput type ="number" a={number} ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">What is the one financial goal you want to focus on for the next few months? (Emergency Fund, Retirement Savings, etc.)</IonLabel>
            <IonInput type ="text" b={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">What is the end amount of money you want to have saved for that goal?</IonLabel>
            <IonInput type ="number" c={number}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">In how many months do you want to achieve that goal?</IonLabel>
            <IonInput type ="number" d={number}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">What is one debt you have that you want to focus on this month? (Student Loans, Mortagages, Credit Card Debt, etc.)</IonLabel>
            <IonInput type ="text" e={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">How much do you owe?</IonLabel>
            <IonInput type ="number" f={number}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">How many months do you want the payment period to be?</IonLabel>
            <IonInput type ="number" g={number}></IonInput>
          </IonItem>

          <IonButton color="success" routerLink="/tab1">
            Submit:
          </IonButton>




  
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Tab4;