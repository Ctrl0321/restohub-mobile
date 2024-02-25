import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const AddEmployeePage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [surName, setSurName] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [departmentId, setDepartmentId] = useState<string>('');

  const handleSubmit = () => {
    if (!firstName || !surName || !position || !departmentId) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const formData = {
      firstName: firstName,
      surName: surName,
      position: position,
      departmentId: parseInt(departmentId),
    };

    fetch('http://10.0.2.2:8080/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        setFirstName('');
        setSurName('');
        setPosition('');
        setDepartmentId('');
        Alert.alert('Success', 'Employee added successfully.');
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('Error', 'Failed to submit form. Please try again later.');
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          placeholderTextColor="gray"
          onChangeText={text => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          value={surName}
          placeholderTextColor="gray"
          onChangeText={text => setSurName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Position"
          value={position}
          placeholderTextColor="gray"
          onChangeText={text => setPosition(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Department ID"
          value={departmentId}
          placeholderTextColor="gray"
          onChangeText={text => setDepartmentId(text)}
          keyboardType="numeric"
        />
        <View style={styles.submitButton}>
          <Button color={'#1F8900'} title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
  },
  submitButton: {
    width: 250,
    backgroundColor:'#1F8900'
  },
});

export default AddEmployeePage;
