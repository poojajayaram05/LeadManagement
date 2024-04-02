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


//.....................bindicode...................................
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import FloatingButton from '../../customComponents/floatingButton';
// import { Ionicons } from '@expo/vector-icons';
// import LeadDet from '../../leadComponents/leadDetHeader';
// import { router } from 'expo-router';
// import LeadDetailCard from '../../customComponents/leadDetailCard';
// import { meetingItemsData } from '../../customComponents/formData';
// import useMeetingStore from '../../meetingComponents/meetingStore';
// import useIdStore from '../leadStore';
// import { FetchActivities } from '../service/fetchActivities';
// import ActivityDetailCard from '../../customComponents/activityDetailCard';

// export default function Meeting() {
//   const [activityData, setActivityData] = useState([]);
//   const [activityItems, setActivityItems] = useState([]);
//   const [expandedItems, setExpandedItems] = useState({});
 
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
//     const activities = activityData.filter((lead) => lead.associated_lead === leadId);
//     setActivityItems(activities);
//   }, [activityData, leadId]);
 
//   const toggleAccordion = (activityType) => {
//     setExpandedItems((prevExpandedItems) => ({
//       ...prevExpandedItems,
//       [activityType]: !prevExpandedItems[activityType],
//     }));
//   };
 
//   const renderStartTime = (startTime) => {
//     const date = new Date(startTime);
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const time = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
//     return time;
//   };
 
//   const renderItem = ({ item }) => {
//     const { activity_type, email, start_time, due_date, date, time, status } = item;
//     const simplifiedItem = { activity_type, email, start_time, due_date, date, time };
//     const timee = renderStartTime(start_time);
 
//     let renderedContent;
//     let activitySpecificData;
//     switch (activity_type) {
//       case 'meeting':
//         activitySpecificData = { 'Meeing Link': item.meeting_link, Location: item.location, 'From Date': item.from_date, 'To Date': item.to_date };
//         break;
//       case 'task':
//         activitySpecificData = { 'Status': item.status,"Due Date":item.due_date, Time:item.time, Description: item.description };
//         break;
//       case 'call':
//         activitySpecificData = { Description: item.description, 'Phone Number': item.number,Date:item.date, Time:item.time };
//         break;
//         case 'email':
//         activitySpecificData = { Email: item.email, Description: item.description,Subject:item.subject, Date:item.date, Time:timee };
//         break;
//         case 'appointment':
//           activitySpecificData = { Date: item.date, Notes: item.appointment_notes,'Start Time':timee, Location:item.location };
//           break;
//           case 'follow_up':
//             activitySpecificData = { Date: item.date, Notes: item.follow_up_notes,'Start Time':timee };
//             break;
//       default:
//         activitySpecificData = {};
//     }
//     const isExpanded = expandedItems[activity_type];
 
//     renderedContent = (
//       <TouchableOpacity onPress={() => toggleAccordion(activity_type)}>
//         <View style={styles.title}>
//           <Text style={styles.titletext}>{item.activity_type}</Text>
//           <Ionicons name={isExpanded ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 12 }} />
//         </View>
//         {isExpanded && (
//           <View>
//              {/* <LeadActivityCard obj={activitySpecificData} /> */}
//             <ActivityDetailCard obj={activitySpecificData} />
//             <View style={styles.divider} />
//           </View>
//         )}
//       </TouchableOpacity>
//     );
 
//     return renderedContent;
//   };
 
//   const goToCreateMeetingForm = () => {
//     router.navigate('/formComponents/activityForm');
//   };
 
//   return (
//     <View style={styles.container}>
//       <View style={{ height: '26%' }}>
//         <LeadDet />
//       </View>
//       <FlatList data={activityItems} renderItem={renderItem} keyExtractor={(item) => item.id} />
//       <FloatingButton onPress={goToCreateMeetingForm} />
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   title: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 20,
//     maxWidth: '90%',
//     padding: 5,
//     borderRadius: 10,
//     backgroundColor: 'white',
//   },
 
//   titletext: {
//     fontWeight: 'bold',
//     color: '#023B5E',
//     flex: 1,
//     fontSize: 18,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
 
 
// });


///............2-4-24........

import React, { useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native'; // Import Dimensions
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { taskData } from '../../customComponents/formData';
import { meetingItemsData } from '../../customComponents/formData';
import LeadDet from '../../leadComponents/leadDetHeader';
import FloatingButton from '../../customComponents/floatingButton';
import useIdStore from '../leadStore';
import { FetchActivities } from '../service/fetchActivities';

const getStatusColor = (state) => {
  const lowerCaseState = state.toLowerCase(); // Convert state to lowercase

  switch (lowerCaseState) {
    case "in-progress":
      return "skyblue";
    case "pending": // Match exact case in data
      return "orange";
    case "completed": // Match exact case in data
      return "green";
    default:
      return "black";
  }
};

const { width } = Dimensions.get('window'); // Retrieve window width

export default function Example() {
  const [currentTab, setCurrentTab] = useState('all'); // State for current tab for tasks
  const [currentMeetingTab, setCurrentMeetingTab] = useState('all'); // State for current tab for meetings
  const [selectedTasks, setSelectedTasks] = useState([]); 
  const [tasksVisible, setTasksVisible] = useState(true);
  const [meetingsVisible, setMeetingsVisible] = useState(false);
  const[activityData, setActivityData]=useState([]);
  const[activityItems, setActivityItems]=useState([]);


  const activity_type_map = {
    "task": "Tasks",
    "meeting":"Meetings",
    "follow_up":"Follow Up",
    "email":"Emails",
    "appointment":"Appointment",
    "call":"Calls",
}

  // Function to filter tasks based on the selected tab
  const filteredTasks = taskData.filter(task => {
    if (currentTab === 'all') {
      return true; // Show all tasks
    } else if (currentTab === 'Completed') {
      return task.state === 'Completed'; // Show only completed tasks
    } else if (currentTab === 'Pending') {
      return task.state === 'Pending'; // Show only pending tasks
    }
  });

    const leadId = useIdStore((state) => state.number);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ldata = await FetchActivities();
        setActivityData(ldata.result);
       // console.log("activity data",activityData)
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
  console.log("this is activiy itemsss", activityItems)

  let grouped_activities=[]
  const groupBy = require('lodash/groupBy');
   grouped_activities = groupBy(activityItems, function(n) {
    return n.activity_type;
  });

  console.log("sdfguioigfgiof", grouped_activities)

// rendering item format
  const renderItemTask = ({ item }) => {
    const { activity_type, email, start_time, due_date, date, time, status, description } = item;
    let renderedContent;
    if (activity_type === 'task') {
      renderedContent = (
        <View style={[styles.section, styles.cardContainer]}>
          <View style={styles.detailBoxLeft}>
            {/* <Text style={styles.title1}>{activity_type_map}</Text> */}
            <Text style={styles.detailText}>{description}</Text>
            <Text style={styles.detailText}>{time}</Text>
            <Text style={styles.detailText}>{due_date}</Text>
          </View>
          <View style={styles.detailBoxRight}>
            <View style={styles.meetProg}>
              <Text
                style={[
                  styles.statusTxt,
                  styles.bgColor,
                  { color: getStatusColor(status) },
                ]}
              >
                {status}
              </Text>
            </View>
          </View>
        </View>
      );
    } 
    return renderedContent;
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ height: '26%' }}>
          <LeadDet />
        </View>
        <FloatingButton />

  {  grouped_activities &&   <ScrollView style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
            <TouchableOpacity onPress={() => setTasksVisible(!tasksVisible)}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}></Text>
                <Ionicons name={tasksVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
              </View>
            </TouchableOpacity>
  
              <View>
                <View style={styles.tabContainer}>
                  <TouchableOpacity onPress={() => setCurrentTab('all')}>
                    <Text style={[styles.tab, currentTab === 'all' && styles.selectedTab]}>All</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setCurrentTab('Completed')}>
                    <Text style={[styles.tab, currentTab === 'Completed' && styles.selectedTab]}>Completed</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setCurrentTab('Pending')}>
                    <Text style={[styles.tab, currentTab === 'Pending' && styles.selectedTab]}>Pending</Text>
                  </TouchableOpacity>
                </View>
                 <FlatList data={activityItems} renderItem={renderItemTask} keyExtractor={(item) => item.id} />
              </View>
          </View>
        </ScrollView>} 
      </View>  
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: '#023B5E',
  },
  tab: {
    fontSize: 14,
    fontWeight: '600',
    color: 'grey',
    marginBottom: 10,
    marginTop: 10,
    // backgroundColor: 'red',
    paddingHorizontal: 10,
    
    borderRadius: 5,
    textAlign: 'center', 
  },
  selectedTab: {
    borderRadius: 50,
    color: 'white',
  },
  title1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 2,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  cardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flex: 1,
  },
  detailBoxLeft: {
    flex: 1,
    marginRight: 10,
  },
  detailBoxRight: {
    alignItems: 'flex-end',
    minWidth: 100,
  },
  meetProg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusTxt: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    borderRadius: 5,
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
    minWidth: 80,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color:'#023B5E',
   marginLeft:5,
    marginTop: 10,
    // backgroundColor: '#023B5E',
    // textAlign: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Add this line
    paddingRight: 10, // Add paddingRight to create space between the title and the icon
  },
});

