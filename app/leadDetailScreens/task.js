
 


  import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import FloatingButton from '../../customComponents/floatingButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
 
export default function Task() {
  const data = [
    { id: '1', name: 'Task 1', description: 'Discuss project details with client', status: 'Working' },
    { id: '2', name: 'Task 2', description: 'Review Sales', status: 'Sale' },
    { id: '3', name: 'Task 3', description: 'Presentation Demo', status: 'Working' },
    { id: '4', name: 'Task 4', description: 'Open new branch', status: 'Activated' },
    { id: '5', name: 'Task 5', description: 'Presentation Demo', status: 'Working' },
    { id: '6', name: 'Task 6', description: 'Open new branch', status: 'Activated' },
  ];
   const goToCreateTask = () => {
    router.navigate('formComponents/createTask');
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name="list" size={24} color="black" />
      </View>
      <View>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>Description: {item.description}</Text>
      <Text style={styles.text}>Status: {item.status}</Text>
    </View>
    </View>
  );
 
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <FloatingButton onPress={goToCreateTask}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
   
  },
  cardContainer: {
    padding: 10,
    borderRadius: 10,
    marginTop: 400,
    width: '100%',
    height: 430,
   
  },
  card: {
    backgroundColor: '#f0f1f2',
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    marginBottom: 0,
    flexDirection:'row'
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  iconContainer: {
    marginRight: 10,
    marginTop: 25,
    marginRight: 20,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
});
 
