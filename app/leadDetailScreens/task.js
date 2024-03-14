
import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import FloatingButton from '../../customComponents/floatingButton'
 
export default function Task() {
  const data = [
    { id: '1', name: 'Task 1', description: 'Discuss project details with client', status: 'Working' },
    { id: '2', name: 'Task 2', description: 'Review Sales', status: 'Sale' },
    { id: '3', name: 'Task 3', description: 'Presentation Demo', status: 'Working' },
    { id: '4', name: 'Task 4', description: 'Open new branch', status: 'Activated' },
  ];
 
  const renderItem = ({ item }) => (
    <View>
      <ScrollView>
    <View style={styles.card}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.description}</Text>
      <Text style={styles.text}>{item.status}</Text>
    </View>
    </ScrollView>
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
      <FloatingButton />
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
    // width:'50'
  },
  cardContainer: {
    // backgroundColor: 'grey',
    // backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    margin: 60,
    marginTop: 480,
    width: '100%',
    height: 430,
  },
  card: {
    backgroundColor: '#f0f1f2',
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    marginBottom: 0,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});
 
 