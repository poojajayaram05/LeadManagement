
 


  import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import FloatingButton from '../../customComponents/floatingButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
 
export default function Task() {
  const data = [
    { id: '1', name: 'Task 1', description: 'Discuss details with client', status: 'Working' },
    { id: '2', name: 'Task 2', description: 'Review Sales', status: 'Sale' },
    { id: '3', name: 'Task 3', description: 'Presentation Demo', status: 'Working' },
    { id: '4', name: 'Task 4', description: 'Open new branch', status: 'Activated' },
    // { id: '5', name: 'Task 5', description: 'Presentation Demo', status: 'Working' },
    // { id: '6', name: 'Task 6', description: 'Open new branch', status: 'Activated' },
  ];

  const goToCreateTask=()=>{
    router.navigate('/DrawerScreens/createTask')
  }
 
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name="list" size={24} color="black" />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.boldText]}>{item.name}</Text>
        <Text style={[styles.text, styles.boldText]}>Description: <Text style={styles.text}>{item.description}</Text></Text>
        <Text style={[styles.text, styles.boldText]}>Status: <Text style={styles.text}>{item.status}</Text></Text>
      </View>
    </View>
  );
 
 
  return (
    // <View style={styles.container}>
      <View style={styles.cardContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
     
     
    <FloatingButton onPress={goToCreateTask}/>
    </View>
   
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
    width: '100%',
    height: 430,
   
  },
  boldText: {
  fontWeight: 'bold',
},
  cardContainer: {
    padding: 10,
    borderRadius: 10,
   //..............................
    // marginTop: 400,
    // width: '100%',
    height: 400,
    // backgroundColor:'yellow'
   
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
    fontSize: 14,
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