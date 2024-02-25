import React from 'react';
import {
Text,
View,
SafeAreaView
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Options from './src/screens/Options';
import Home from './src/screens/Home';
import AddEmployeePage from './src/screens/AddEmployeePage';
import ViewEmployees from './src/screens/ViewEmployees';

export type RootStackParamList={
    Home:undefined,
    Options:undefined,
    AddEmployee:undefined,
    Employees:undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();


function App(){
 return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="AddEmployee" component={AddEmployeePage} />
      <Stack.Screen name="Employees" component={ViewEmployees} />


    </Stack.Navigator>
  </NavigationContainer>
 )

}

export default App;