import React from 'react';
import {
Text,
View,
SafeAreaView
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import AppPro from './AppPro';

export type RootStackParamList={
    Home:undefined,
    Profile:{profileId:String}
}

const Stack = createNativeStackNavigator<RootStackParamList>();


function App(){
 return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen
        name='Home'
        component={AppPro}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="Profile" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
 )

}

export default App;