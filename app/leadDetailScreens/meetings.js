// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
// import FloatingButton from '../../customComponents/floatingButton';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';
// import CreateMeeting from '../DrawerScreens/createMeeting';
 
// export default function Meeting() {
//   const data = [
//     { id: '1', name: 'Meeting 1', description: 'Meet at central branch', status: 'New Lead', date: '2024-03-14' },
//     { id: '2', name: 'Meeting 2', description: 'Review Sales', status: 'Sale', date: '2024-03-15' },
//     { id: '3', name: 'Meeting 3', description: 'Follow-up', status: 'Working', date: '2024-03-16' },
//   ];
 
//   const goToCreateMeeting=()=>{
//     router.navigate('/DrawerScreens/createMeeting')
//   }
//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.card}>
//       <View style={styles.iconContainer}>
//         <Ionicons name="book" size={24} color="black" />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.boldText}><Text style={styles.text}>{item.name}</Text></Text>
//         <Text style={styles.boldText}>Description: <Text style={styles.text}>{item.description}</Text></Text>
//         <Text style={styles.boldText}>Status: <Text style={styles.text}>{item.status}</Text></Text>
//         <Text style={styles.boldText} >Date: <Text style={styles.text}>{item.date}</Text></Text>
//       </View>
//     </TouchableOpacity>
//   );
 
//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//       <FloatingButton onPress={goToCreateMeeting}/>
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//   },
//   cardContainer: {
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 400,
//     width: '100%',
//     height: 430,
//   },
//   card: {
//     backgroundColor: '#f0f1f2',
//     marginVertical: 5,
//     padding: 10,
//     borderRadius: 8,
//     // marginBottom: 10,
//     marginTop: 10,
//     flexDirection: 'row',
//   },
//   text: {
//     fontSize: 14,
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   // boldText: {
//   //   fontWeight: 'bold',
//   // },
//   iconContainer: {
//     marginRight: 10,
//     marginTop: 25,
//     marginRight: 20,
//     alignItems: 'center',
//   },
//   textContainer: {
//     flex: 1,
//   },
// });

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FloatingButton from '../../customComponents/floatingButton';
import { Ionicons } from '@expo/vector-icons';
import LeadDet from '../../leadComponents/leadDetHeader';
import { router } from 'expo-router';
import LeadDetailCard from '../../customComponents/leadDetailCard';
import { meetingItemsData } from '../../customComponents/formData';
import useMeetingStore from '../../meetingComponents/meetingStore';
 
export default function Meeting() {

  const goToMeetingDetails=()=>{
    router.navigate('/meetingDetails')
  }
 
  const goToCreateMeeting = () => {
    router.navigate('/DrawerScreens/createMeeting')
  }
   
  const renderItem = ({ item }) => {
    const goToMeetingDetails=()=>{
      useMeetingStore.getState().setMeetingId(item.id);
      router.navigate('/meetingDetails')
    }
    // Extracting only the required properties
    const { title, Description, status,Date } = item;
    const simplifiedItem = { Description, status,Date };

    return (
      <TouchableOpacity onPress={goToMeetingDetails}>
        <View><Text>{item.title}</Text></View>
        <LeadDetailCard obj={simplifiedItem} name="calendar" />
        <View style={styles.divider} />
      </TouchableOpacity>
    );
  };
 
  return (
    <View style={styles.container}>
        <View style={{ height:'27%' }}>
           <LeadDet/>
        </View>
      <FlatList
        data={meetingItemsData.elements}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
     
      <FloatingButton onPress={goToCreateMeeting} />
     
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
  floatingButtonContainer: {
   
   
   
  },
});