# SplitEasy

Questa repository fornisce un esempio di struttura e alcuni suggerimenti per realizzare un'app mobile che aiuti a dividere le spese tra amici.

## Caratteristiche principali
- Registrazione e login degli utenti.
- Creazione di gruppi e invito degli amici tramite email o link.
- In ogni gruppo, ogni membro può aggiungere una spesa.
- Le spese possono essere divise equamente tra tutti i membri o solo tra alcuni partecipanti.
- Calcolo automatico dei debiti e crediti di ciascun partecipante.
- Riepilogo finale per pareggiare i conti (ad esempio alla fine di una vacanza).

## Tecnologie consigliate
Per un approccio semplice e multipiattaforma è possibile utilizzare **React Native** con [Expo](https://expo.dev/). Per la gestione di autenticazione e database una soluzione pratica è **Firebase** (Authentication e Cloud Firestore).

## Struttura dati di esempio
Di seguito un possibile schema (in TypeScript) per i documenti salvati in Firestore.

```ts
export interface User {
  uid: string;
  email: string;
  displayName: string;
}

export interface Group {
  id: string;
  name: string;
  members: string[]; // array di uid degli utenti
}

export interface Split {
  uid: string; // riferimento all'utente
  amount: number; // quota attribuita
}

export interface Expense {
  id: string;
  groupId: string;
  description: string;
  amount: number;
  paidBy: string; // uid di chi ha pagato
  splits: Split[]; // elenco delle quote per ogni utente coinvolto
}
```

## Esempio di componente React Native
La cartella `example` contiene un piccolo esempio di app creato con Expo.

Per eseguirlo è sufficiente installare le dipendenze (`npm install`) e avviare `expo start`.

```tsx
// example/App.tsx
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Benvenuto su SplitEasy!</Text>
    </View>
  );
}
```

Questo file non implementa ancora la logica di login o la gestione delle spese, ma rappresenta il punto di partenza su cui costruire il resto dell'applicazione.

## Passi successivi
1. Inizializzare un progetto Expo (`npx create-expo-app SplitEasy`).
2. Configurare Firebase per l'autenticazione e il database.
3. Implementare le schermate di registrazione e login.
4. Creare il flusso per la gestione dei gruppi (lista gruppi, creazione, inviti).
5. Aggiungere la schermata per inserire nuove spese e scegliere come dividerle.
6. Calcolare in automatico i totali dovuti/da ricevere per ogni membro del gruppo.
7. Fornire un riepilogo finale che aiuti a saldare i conti.

Questo è solo un punto di partenza; l'app può essere estesa con notifiche push, gestione delle valute, e sincronizzazione in tempo reale.
