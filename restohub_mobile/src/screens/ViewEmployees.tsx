import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

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

  const renderItem = ({ item }: { item: Employee }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.firstName}</Text>
      <Text style={styles.cell}>{item.surName}</Text>
      <Text style={styles.cell}>{item.position}</Text>
      <Text style={styles.cell}>{item.departmentId.toString()}</Text>
    </View>
  );

  return (
    <SafeAreaView>
        <FlatList
      data={data}
      ListHeaderComponent={() => (
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>First Name</Text>
          <Text style={[styles.cell, styles.headerCell]}>Surname</Text>
          <Text style={[styles.cell, styles.headerCell]}>Position</Text>
          <Text style={[styles.cell, styles.headerCell]}>Department ID</Text>
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
  },
  headerCell: {
    fontWeight: 'bold',
  },
});

export default ViewEmployees;
