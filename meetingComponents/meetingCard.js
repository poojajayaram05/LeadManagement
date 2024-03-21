import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import useMeetingStore from './meetingStore';
 
const MeetingCard = ({ title, id, location,organizer }) => {
  const { meetingId, setMeetingId } = useMeetingStore();
  const goToMeeting = () => {
    setMeetingId(id);
    router.navigate('/meetingDetails');
  };
 
  return (
    <TouchableOpacity onPress={goToMeeting}>
      <View style={styles.card}>
        <View>
          <Ionicons name="calendar" size={32} color="black" />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>Organizer:{organizer}</Text>
        <Text style={styles.details}>Location:{location}</Text>
      </View>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 16,
  },
});
 
export default MeetingCard;