import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type OptionsProps=NativeStackScreenProps<RootStackParamList,'Options'>

const Home = ({navigation}:OptionsProps) => {
  return (
   <View style={style.optionContainer}>
    <View style={style.optionButtosContainer}>
    {/* <Text style={style.optionHeading}>Select a Option</Text> */}
    <TouchableOpacity style={style.optionButton} onPress={()=>navigation.navigate("AddEmployee")}>
      <Text style={style.buttonText}>Add Employee</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.optionButton} onPress={()=>navigation.navigate("Employees")}>
      <Text style={style.buttonText}>View All Employees</Text>
    </TouchableOpacity>
    </View>
   </View>
  )
}

const style=StyleSheet.create({
  optionContainer:{
    flex:1,
    backgroundColor:'black',
    color:'white',
    fontFamily:'Poppins',
    display:'flex',
    justifyContent:'center',
  },
  optionHeading:{
    color:"white",
    fontSize:24,
    fontWeight:'600',
    textAlign:'center',
    fontFamily:'Poppins',
    marginBottom:30
  },
  optionButton:{
    backgroundColor: '#1F8900',
    paddingVertical: 10, 
    width:250,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 50,
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:'Poppins'
  },
  optionButtosContainer:{
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
  }
})

export default Home