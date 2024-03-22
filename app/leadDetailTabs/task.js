import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FloatingButton from '../../customComponents/floatingButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import LeadDet from '../../leadComponents/leadDetHeader';


export default function Task() {
  const data = [
    { id: '1', name: 'Task 1', description: 'Discuss details with client', status: 'Working' },
    { id: '2', name: 'Task 2', description: 'Review Sales', status: 'Sale' },
    { id: '3', name: 'Task 3', description: 'Presentation Demo', status: 'Working' },
    { id: '4', name: 'Task 4', description: 'Open new branch', status: 'Activated' },
  ];

  const goToCreateTask = () => {
    router.navigate('/DrawerScreens/createTask')
  }

  const goToTaskDetail=()=>{
    router.navigate('/taskDetails')
  }

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Ionicons name="list" size={24} color="black" />
        </View>
        <TouchableOpacity onPress={goToTaskDetail}>

        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.boldText]}>{item.name}</Text>
          <Text style={styles.text}>Description: {item.description}</Text>
          <Text style={styles.text}>Status: {item.status}</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={{ height:'30%' }}>
           <LeadDet/>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FloatingButton onPress={goToCreateTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
});
