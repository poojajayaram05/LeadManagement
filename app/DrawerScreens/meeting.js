// import { View, Text } from 'react-native'
// import React from 'react'

// export default function meeting() {
//   return (
//     <View>
//       <Text>meeting</Text>
//     </View>
//   )
// }


// export const meetingData = {
//     elements: [
//       {
//           "id": "1",
//           "title": "Example All-Day Event",
//           "organizer": "Jane Smith",
//           "status": "Confirmed",
//           "description": "This is an example all-day event description.",
//           "location": "Another Example Venue",
//           "timezone": "UTC-5",
//           "from": null,
//           "to": null,
//           "all_day": "yes"
//         },
//         {
//           "id": "2",
//           "title": "Example Event",
//           "organizer": "John Doe",
//           "status": "Confirmed",
//           "description": "This is an example event description.",
//           "location": "Example Venue",
//           "timezone": "UTC+0",
//           "from": "2024-03-20T09:00:00",
//           "to": "2024-03-20T17:00:00",
//           "all_day": "no"
//         }
//     ],
//   };
//..............................................

// import React from 'react';
// import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';
// import useMeetingStore from '../../../meetingComponents/meetingStore';
// // JSON data
// const meetingData = {
//   elements: [
//     {
//       id: '1',
//       title: 'Lead Meeting',
//       organizer: 'Jane Smith',
//       status: 'Confirmed',
//       description: 'New lead with potential customers.',
//       location: 'Bangalore',
//       timezone: 'UTC-5',
//       from: 'all day',
//       to: 'all day',
//       all_day: 'yes',
//     },
//     {
//       id: '2',
//       title: 'Lead follow-up',
//       organizer: 'John Steve',
//       status: 'Confirmed',
//       description: 'High demand lead looking for property at head quaters.',
//       location: 'Chennai',
//       timezone: 'UTC+0',
//       from: '2024-03-20T09:00:00',
//       to: '2024-03-20T17:00:00',
//       all_day: 'no',
//     },
//   ],
// };

// const renderMeetingItem = ({ item }) => (
    
//     <TouchableOpacity  onPress={goToMeeting}>
//     <View style={styles.card}>
//         <View><Ionicons name='calendar' size={32} color='black' /></View>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.details}>Organizer: {item.organizer}</Text>
//       <Text style={styles.details}>From: {item.from}</Text>
//       {/* {item.all_day === 'no' && (
//         <Text style={styles.details}>From: {item.from}</Text>
//       )} */}
//     </View>
//     </TouchableOpacity>
//   );

// const MeetingList = ({ meetingData }) => {
//     const { meetingId, setMeetingId } = useMeetingStore();
//     setMeetingId(item.id);
//   return (
//     <FlatList
//       data={meetingData.elements}
//       renderItem={renderMeetingItem}
//       keyExtractor={(item) => item.id}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     margin: 10,
//     padding: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   details: {
//     fontSize: 16,
//   },
// });

// // Main component
// const Meeting = () => {
//   return <MeetingList meetingData={meetingData} />;
// };
// const goToMeeting=()=>{
//     // router.navigate('/DrawerScreens/leadList')
//     router.navigate('/meetingDetails')  
// }

// export default Meeting;


import React from 'react';
import { View, FlatList } from 'react-native';
import { router } from 'expo-router';
// import MeetingCard from '../../../meetingComponents/meetingCard';
import MeetingCard from '../meetingComponents/meetingCard';

const meetingItems = {
  elements: [
    {
      id: '1',
      title: 'Lead Meeting',
      organizer: 'Jane Smith',
      status: 'Confirmed',
      description: 'New lead with potential customers.',
      location: 'Bangalore',
      timezone: 'UTC-5',
      from: 'all day',
      to: 'all day',
      all_day: 'yes',
    },
    {
      id: '2',
      title: 'Lead follow-up',
      organizer: 'John Steve',
      status: 'Confirmed',
      description: 'High demand lead looking for property at headquarters.',
      location: 'Chennai',
      timezone: 'UTC+0',
      from: '2024-03-20T09:00:00',
      to: '2024-03-20T17:00:00',
      all_day: 'no',
    },
  ],
};

const Meeting = ({}) => {
  return (
    <View>
      <FlatList
        data={meetingItems.elements}
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
