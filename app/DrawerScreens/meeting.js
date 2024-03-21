import React from 'react';
import { View, FlatList } from 'react-native';
import { router } from 'expo-router';
// import MeetingCard from '../../../meetingComponents/meetingCard';
import MeetingCard from '../../meetingComponents/meetingCard'
import { meetingItemsData } from '../../customComponents/formData';
 
const Meeting = ({}) => {
  return (
    <View>
      <FlatList
        data={meetingItemsData.elements}
        renderItem={({ item }) =>
        <MeetingCard
        id={item.id}
        title={item.title}
        location={item.location}
        organizer={item.organizer}
        />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
 
export default Meeting;