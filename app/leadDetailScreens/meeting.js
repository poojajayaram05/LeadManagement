import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import FloatingButton from '../../customComponents/floatingButton';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
 
export default function Meeting() {
  const data = [
    { id: '1', name: 'Meeting 1', description: 'Meet at 12:30pm', status: 'Working', date: '2024-03-14' },
    { id: '2', name: 'Meeting 2', description: 'Review Sales at central branch', status: 'Sale', date: '2024-03-15' },
    { id: '3', name: 'Meeting 3', description: 'Follow-up', status: 'Working', date: '2024-03-16' },
    { id: '4', name: 'Meeting 4', description: 'New meet', status: 'Activated', date: '2024-03-17' },
    { id: '5', name: 'Meeting 5', description: 'Presentation Demo at Head office', status: 'Working', date: '2024-03-18' },
  ];

  const goToCreateMeeting=()=>{
    router.replace('/formComponents/createMeeting')
  }
 
  // const handleMeetingPress = (date) => {
  //   Linking.openURL(`content://com.android.calendar/time/${date}`);
  // };
  // const handleMeetingPress = (date) => {
  //   const url = `calshow:${date}`; // URL scheme to open the calendar app
  //   Linking.canOpenURL(url)
  //     .then((supported) => {
  //       if (supported) {
  //         return Linking.openURL(url);
  //       } else {
  //         console.log("Don't know how to open URI: " + url);
  //       }
  //     })
  //     .catch((err) => console.error('An error occurred', err));
  // };
 
 
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="book" size={24} color="black" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>Description: {item.description}</Text>
        <Text style={styles.text}>Status: {item.status}</Text>
        <Text style={styles.text} onPress={() => handleMeetingPress(item.date)}>Date: {item.date} </Text>
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
      <FloatingButton onPress={goToCreateMeeting}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
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
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  iconContainer: {
    marginRight: 10,
    marginTop: 25,
    marginRight: 20,
    alignItems: 'center', // Align items vertically
  },
  textContainer: {
    flex: 1, // Take remaining space
  },
});