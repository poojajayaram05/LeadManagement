import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import FloatingButton from '../../customComponents/floatingButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import CreateMeeting from '../DrawerScreens/createMeeting';
 
export default function Meeting() {
  const data = [
    { id: '1', name: 'Meeting 1', description: 'Meet at central branch', status: 'New Lead', date: '2024-03-14' },
    { id: '2', name: 'Meeting 2', description: 'Review Sales', status: 'Sale', date: '2024-03-15' },
    { id: '3', name: 'Meeting 3', description: 'Follow-up', status: 'Working', date: '2024-03-16' },
  ];
 
  const goToCreateMeeting=()=>{
    router.navigate('/DrawerScreens/createMeeting')
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name="book" size={24} color="black" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.boldText}><Text style={styles.text}>{item.name}</Text></Text>
        <Text style={styles.boldText}>Description: <Text style={styles.text}>{item.description}</Text></Text>
        <Text style={styles.boldText}>Status: <Text style={styles.text}>{item.status}</Text></Text>
        <Text style={styles.boldText} >Date: <Text style={styles.text}>{item.date}</Text></Text>
      </View>
    </TouchableOpacity>
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
      <View style={styles.button}>
      <FloatingButton onPress={goToCreateMeeting}/>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  cardContainer: {
    padding: 10,
    borderRadius: 10,
    width: '100%',
   
  },
  button:{
    marginBottom: 95,
    // marginRight:100,
    marginLeft:400,
  },
  card: {
    
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    // marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    // backgroundColor: '#e6ebe7',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  // boldText: {
  //   fontWeight: 'bold',
  // },
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