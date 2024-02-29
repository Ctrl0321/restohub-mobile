import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView ,TouchableOpacity} from 'react-native';

interface Employee {
  firstName: string;
  surName: string;
  position: string;
  departmentId: number;
}

const ViewEmployees: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8080/api/employees');
      const jsonData = await response.json();
      setData(jsonData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleDelete = async (item: Employee) => {
    try {
      const response = await fetch(`http://10.0.2.2:8080/api/employees/${item.firstName}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const newData = data.filter((employee) => employee.firstName !== item.firstName);
        setData(newData);
      } else {
        console.error('Failed to delete employee');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const renderItem = ({ item }: { item: Employee }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.firstName}</Text>
      <Text style={styles.cell}>{item.surName}</Text>
      <Text style={styles.cell}>{item.position}</Text>
      <Text style={[styles.cell, styles.headerCell]}>{item.departmentId.toString()}</Text>
      <Text style={[styles.deleteButton, styles.cell]} onPress={() => handleDelete(item)}>Delete</Text>
      <Text style={[styles.deleteButton, styles.cell]} onPress={() => handleDelete(item)}>Edit</Text>

    </View>
  );

  return (
    <SafeAreaView>
        <FlatList
         data={data}
         ListHeaderComponent={() => (
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>F Name</Text>
          <Text style={[styles.cell, styles.headerCell]}>S Nname</Text>
          <Text style={[styles.cell, styles.headerCell]}>Position</Text>
          <Text style={[styles.cell, styles.headerCell]}>Dep Id</Text>
          <Text style={[styles.cell, styles.headerCell]}>Delete</Text>
          <Text style={[styles.cell, styles.headerCell]}>Edit</Text>


        </View>
      )}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  headerRow: {
    backgroundColor: 'lightblue',
    borderBottomWidth: 2,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    width:200
  },
  headerCell: {
    fontWeight: 'bold',
  },
  deleteButton:{

  }
});

export default ViewEmployees;
