import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Options from './src/screens/Options';
import Home from './src/screens/Home';
import AddEmployeePage from './src/screens/AddEmployeePage';
import ViewEmployees from './src/screens/ViewEmployees';
import messaging from '@react-native-firebase/messaging';
import getNewFCMToken from './src/firebase_token/getFCMTToken';
import firebase from '@react-native-firebase/app'; // Import Firebase

export type RootStackParamList = {
  Home: undefined,
  Options: undefined,
  AddEmployee: undefined,
  Employees: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  useEffect(() => {
    // // Initialize Firebase
    // if (!firebase.apps.length) {
    //   firebase.initializeApp({ });
    // }
    
    getNewFCMToken();
    
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="AddEmployee" component={AddEmployeePage} />
        <Stack.Screen name="Employees" component={ViewEmployees} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
