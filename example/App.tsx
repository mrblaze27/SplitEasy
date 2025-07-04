import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import GroupsScreen from './src/screens/GroupsScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';

const Stack = createStackNavigator();

interface Group {
  id: string;
  name: string;
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [groups] = useState<Group[]>([
    { id: '1', name: 'Vacanza' },
    { id: '2', name: 'Casa' },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!loggedIn ? (
          <Stack.Screen name="Login">
            {() => <LoginScreen onLogin={() => setLoggedIn(true)} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Gruppi">
              {() => (
                <GroupsScreen
                  groups={groups}
                  onAddExpense={() => {}}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Nuova spesa">
              {() => <AddExpenseScreen onSave={() => {}} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
