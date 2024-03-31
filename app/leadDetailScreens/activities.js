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

// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import FloatingButton from '../../customComponents/floatingButton';
// import { Ionicons } from '@expo/vector-icons';
// import LeadDet from '../../leadComponents/leadDetHeader';
// import { router } from 'expo-router';
// import LeadDetailCard from '../../customComponents/leadDetailCard';
// import { meetingItemsData } from '../../customComponents/formData';
// import useMeetingStore from '../../meetingComponents/meetingStore';
 
// export default function Meeting() {

//   const goToMeetingDetails=()=>{
//     router.navigate('/meetingDetails')
//   }
 
//   const goToCreateMeeting = () => {
//     router.navigate('/DrawerScreens/createMeeting')
//   }
   
//   const renderItem = ({ item }) => {
//     const goToMeetingDetails=()=>{
//       useMeetingStore.getState().setMeetingId(item.id);
//       router.navigate('/meetingDetails')
//     }
//     // Extracting only the required properties
//     const { title, Description, status,Date } = item;
//     const simplifiedItem = { Description, status,Date };

//     return (
//       <TouchableOpacity onPress={goToMeetingDetails}>
//         <View><Text>{item.title}</Text></View>
//         <LeadDetailCard obj={simplifiedItem} name="calendar" />
//         <View style={styles.divider} />
//       </TouchableOpacity>
//     );
//   };
 
//   return (
//     <View style={styles.container}>
//         <View style={{ height:'27%' }}>
//            <LeadDet/>
//         </View>
//       <FlatList
//         data={meetingItemsData.elements}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
     
//       <FloatingButton onPress={goToCreateMeeting} />
     
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   iconContainer: {
//     marginRight: 10,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: 'black',
//     marginHorizontal: 20,
//   },
//   floatingButtonContainer: {
   
   
   
//   },
// });

//......................................

// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import FloatingButton from '../../customComponents/floatingButton';
// import { Ionicons } from '@expo/vector-icons';
// import LeadDet from '../../leadComponents/leadDetHeader';
// import { router } from 'expo-router';
// import LeadDetailCard from '../../customComponents/leadDetailCard';
// import { meetingItemsData } from '../../customComponents/formData';
// import useMeetingStore from '../../meetingComponents/meetingStore';
// import useIdStore from '../leadStore';
// import { FetchActivities } from '../service/fetchActivities';


 
 
// export default function Meeting() {
//   const [activityData, setActivityData] = useState([]);
//   const [activityItems, setActivityItems] = useState([]);
//   const leadId = useIdStore((state) => state.number);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ldata = await FetchActivities();
//         setActivityData(ldata.result);
//       } catch (error) {
//         console.error('Error in fetching leads:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     console.log("leadiddd", leadId);
//     const activities = activityData.filter((lead) => lead.associated_lead === leadId);
//     setActivityItems(activities);
//     console.log("this is activvity, ", activityItems);
//   }, [activityData, leadId]);
  
//   const goToCreateMeetingForm =()=>{
//     router.navigate('/formComponents/activityForm')
//   }
 
//   const renderItem = ({ item }) => {
//     // Extracting only the required properties
//     const { activity_type, email, start_time, due_date, date, time, status } = item;
//     const simplifiedItem = { activity_type, email, start_time, due_date, date, time };
  
//     let renderedContent;
//     let activitySpecificData;
  
//     switch (activity_type) {
//       case 'meeting':
//         activitySpecificData = { meeting_link: item.meeting_link, location: item.location, from_date: item.from_date, to_date: item.to_date };
//         break;
//       case 'task':
//         activitySpecificData = { status: item.status, time:item.time, description: item.description, status:item.status, };
//         break;
//       case 'call':
//         activitySpecificData = { description: item.description, phone_number: item.number,date:item.date, time:item.time };
//         break;
//         case 'email':
//         activitySpecificData = { email: item.email, description: item.description,subject:item.subject, date:item.date, time:item.start_time };
//         break;
//         case 'appointment':
//           activitySpecificData = { date: item.date, Notes: item.appointment_notes,startTime:item.start_time, location:item.location };
//           break;
//       // Add cases for other activity types as needed
//       default:
//         activitySpecificData = {};
//     }
  
//     renderedContent = (
//       <TouchableOpacity>
//         <View>
//           {/* Render additional activity-specific content */}
//         </View>
//         <View style={styles.title}>
//           <Text style={styles.titletext}>{item.activity_type}</Text>
//         </View>
//         <LeadDetailCard obj={activitySpecificData } />
//         <View style={styles.divider} />
//       </TouchableOpacity>
//     );
  
//     return renderedContent;
//   };
  
 
//   return (
//     <View style={styles.container}>
//         <View style={{ height:'26%' }}>
//            <LeadDet/>
//         </View>
//       <FlatList
//         data={activityItems}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//       <FloatingButton onPress={goToCreateMeetingForm} />
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   title: {
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // flex: 1,
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 20,
//     flexDirection:'row',
//     maxWidth: '90%',
//     padding: 5,
//     borderRadius: 10,
//     //  backgroundColor:'#023B5E',
//   },
 
//   titletext:{
//     fontWeight:'bold',
//     color:'#023B5E',
//    },
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
 
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   text: {
//     fontSize: 14,
//     marginBottom: 5,
   
//   },
//   iconContainer: {
//     marginRight: 10,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: 'black',
//     marginHorizontal: 20,
//     marginBottom:10,
//   },
//   floatingButtonContainer: {
//   },
// });

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FloatingButton from '../../customComponents/floatingButton';
import { Ionicons } from '@expo/vector-icons';
import LeadDet from '../../leadComponents/leadDetHeader';
import { router } from 'expo-router';
import LeadDetailCard from '../../customComponents/leadDetailCard';
import { meetingItemsData } from '../../customComponents/formData';
import useMeetingStore from '../../meetingComponents/meetingStore';
import useIdStore from '../leadStore';
import { FetchActivities } from '../service/fetchActivities';
import LeadActivityCard from '../../customComponents/leadActivityCard';

export default function Meeting() {
  const [activityData, setActivityData] = useState([]);
  const [activityItems, setActivityItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});

  const leadId = useIdStore((state) => state.number);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ldata = await FetchActivities();
        setActivityData(ldata.result);
      } catch (error) {
        console.error('Error in fetching leads:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const activities = activityData.filter((lead) => lead.associated_lead === leadId);
    setActivityItems(activities);
  }, [activityData, leadId]);

  const toggleAccordion = (activityType) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [activityType]: !prevExpandedItems[activityType],
    }));
  };

  const renderItem = ({ item }) => {
    const { activity_type, email, start_time, due_date, date, time, status } = item;
    const simplifiedItem = { activity_type, email, start_time, due_date, date, time };

    let renderedContent;
    let activitySpecificData;

    switch (activity_type) {
            case 'meeting':
              activitySpecificData = { meeting_link: item.meeting_link, location: item.location, from_date: item.from_date, to_date: item.to_date };
              break;
            case 'task':
              activitySpecificData = { status: item.status, time:item.time, description: item.description, status:item.status, };
              break;
            case 'call':
              activitySpecificData = { description: item.description, phone_number: item.number,date:item.date, time:item.time };
              break;
              case 'email':
              activitySpecificData = { email: item.email, description: item.description,subject:item.subject, date:item.date, time:item.start_time };
              break;
              case 'appointment':
                activitySpecificData = { date: item.date, Notes: item.appointment_notes,startTime:item.start_time, location:item.location };
                break;
            default:
              activitySpecificData = {};
          }

    const isExpanded = expandedItems[activity_type];

    renderedContent = (
      <TouchableOpacity onPress={() => toggleAccordion(activity_type)}>
        <View style={styles.title}>
          <Text style={styles.titletext}>{item.activity_type}</Text>
          <Ionicons name={isExpanded ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }} />
        </View>
        {isExpanded && (
          <View>
             {/* <LeadActivityCard obj={activitySpecificData} /> */}
            <LeadDetailCard obj={activitySpecificData} />
            <View style={styles.divider} />
          </View>
        )}
      </TouchableOpacity>
    );

    return renderedContent;
  };

  const goToCreateMeetingForm = () => {
    router.navigate('/formComponents/activityForm');
  };

  return (
    <View style={styles.container}>
      <View style={{ height: '26%' }}>
        <LeadDet />
      </View>
      <FlatList data={activityItems} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <FloatingButton onPress={goToCreateMeetingForm} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    maxWidth: '90%',
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  titletext: {
    fontWeight: 'bold',
    color: '#023B5E',
    flex: 1,
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  divider: {
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

