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



import React, { useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LeadDet from '../../leadComponents/leadDetHeader';
import FloatingButton from '../../customComponents/floatingButton';
import useIdStore from '../leadStore';
import { FetchActivities } from '../service/fetchActivities';
import groupBy from 'lodash/groupBy';
import { router } from 'expo-router';
 

 
const { width } = Dimensions.get('window');
 
export default function Example() {
  const [currentTab, setCurrentTab] = useState({});
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [tasksVisible, setTasksVisible] = useState(true);
  const [meetingsVisible, setMeetingsVisible] = useState(false);
  const [activityData, setActivityData] = useState([]);
  const [activityItems, setActivityItems] = useState([]);
  const [tabVisibility, setTabVisibility] = useState({
    Tasks: true,
    Meetings: true,
    'Follow Up': true,
    Emails: true,
    Appointment: true,
    Calls: true
  });
 
  const activity_type_map = {
    "task": "Tasks",
    "meeting":"Meetings",
    "follow_up":"Follow Up",
    "email":"Emails",
    "call":"Calls",
    "appointment":"Appointments"
  }
 
  const leadId = useIdStore((state) => state.number);
 
  useEffect(() => {
    // Initialize currentTab with 'All' for each activity type
    const initialTabs = {};
    Object.values(activity_type_map).forEach(type => {
      initialTabs[type] = 'all';
    });
    setCurrentTab(initialTabs);
 
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
 
  const renderStartTime = (startTime) => {
    const date = new Date(startTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return time;
  };
 
  const renderDate = (due_date) => {
    const date = new Date(due_date);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month starts from 0
    const year = date.getFullYear();
 
    // Ensure leading zeros for single-digit values
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
 
    // Construct the formatted date string
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
 
    return formattedDate;
  };
 
  const goToActivityForm = () => {
    router.navigate('/formComponents/activityForm')
  }
 
  const renderItemTask = ({ item }) => {
    const { activity_type, email,associated_lead,sys_created_on,start_time, due_date , date, time, status , description,priority, subject } = item;
    const timee = renderStartTime(start_time);
    const formattedDate =  renderDate(due_date)
 
    const due_on = formattedDate + " "+ timee;
    return (
      <View style={[styles.section, styles.cardContainer]}>
        <View>
        <View style={styles.row}>
            <Text style={styles.data}>Subject:</Text>
            <Text style={styles.detail}>{subject}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.data}>Description:</Text>
            <Text style={styles.detail}>{description}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.data}>Due Date:</Text>
            <Text style={styles.detail}>{due_on}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.data}>Priority:</Text>
            <Text style={styles.detail}>{priority}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.data}>Status:</Text>
            <Text style={styles.detail}>{status}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.data}>Created On:</Text>
            <Text style={styles.detail}>{sys_created_on}</Text>
          </View>
        </View>
      </View>
    );
  };
 
  const handleTabPress = (activityType, tabName) => {
    setCurrentTab(prevState => ({
      ...prevState,
      [activityType]: tabName
    }));
  };
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ height: '26%' }}>
          <LeadDet />
        </View>
        <FloatingButton onPress={goToActivityForm}/>
 
        {Object.entries(groupBy(activityItems, 'activity_type')).length === 0 ? (
          <Text style={styles.noActivityText}>No recent activities</Text>
        ) : (
          <ScrollView style={{ flex: 1 }}>
            {Object.entries(groupBy(activityItems, 'activity_type')).map(([key, value]) => {
              const activityType = activity_type_map[key];
              const isVisible = tabVisibility[activityType];
              const hasActivities = value.length > 0; // Check if there are any activities for the current type
              return (
                <View key={key}>
                  <TouchableOpacity onPress={() => setTabVisibility(prevState => ({ ...prevState, [activityType]: !isVisible }))}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>{activityType}</Text>
                      <Ionicons name={isVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
                    </View>
                  </TouchableOpacity>
                  {(!isVisible && !hasActivities) && ( // Only render the message if accordion is not open and there are no activities
                    <View style={styles.default}>
                      <Text style={styles.defaultMessage}>No {activityType} found</Text>
                    </View>
                  )}
                  {isVisible && hasActivities && ( // Render the FlatList only if accordion is open and there are activities
                    <>
                      <View style={styles.tabContainer}>
                        <TouchableOpacity onPress={() => handleTabPress(activityType, 'all')}>
                          <Text style={[styles.tab, currentTab[activityType] === 'all' && styles.selectedTab]}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleTabPress(activityType, 'completed')}>
                          <Text style={[styles.tab, currentTab[activityType] === 'completed' && styles.selectedTab]}>Completed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleTabPress(activityType, 'pending')}>
                          <Text style={[styles.tab, currentTab[activityType] === 'pending' && styles.selectedTab]}>Pending</Text>
                        </TouchableOpacity>
                      </View>
                      <FlatList
                        data={value.filter(item => currentTab[activityType] === 'all' || item.status.toLowerCase() === currentTab[activityType])}
                        renderItem={renderItemTask}
                        keyExtractor={(item) => item.id}
                        ListEmptyComponent={() => (
                          <View style={styles.default}>
                            <Text style={styles.defaultMessage}>No {activityType} to display</Text>
                          </View>
                        )}
                      />
                    </>
                  )}
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
          }  
 
 
 
const styles = StyleSheet.create({
  noActivityText:{
    color: 'grey',
    marginTop: 20,
    textAlign: 'center',
    font:'80',
    fontWeight:'bold'
  },
 
  defaultMessage: {
    color: 'grey',
    // textAlign: 'center',
    // backgroundColor: '#FAF9F6',
    marginTop: 20,
    marginLeft:100,
    marginHorizontal: 20, // Add margin on left and right sides
    marginBottom: 10, // Bring the text down by adding margin at the bottom
  },
 
  default: {
    color: 'grey',
    textAlign: 'center',
    // backgroundColor: '#FAF9F6',
    marginHorizontal: 20, // Add margin on left and right sides
    marginBottom: 10, // Bring the text down by adding margin at the bottom
  },
 
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 25,
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1, // Add a thin border above
    borderBottomWidth: 1, // Add a thin border below
    borderColor: 'black', // You can adjust the color as needed
},

 
  tab: {
    flex: 1, // Make the tab flex to occupy available space
    fontSize: 14,
    justifyContent: 'space-around',
    fontWeight: '600',
    flexDirection: 'row',
    color: 'grey',
    borderRadius: 5,
    paddingHorizontal: 35, // Increase padding to make the green boxes wider
    // backgroundColor: 'green',
  },
  selectedTab: {
    flex: 1, // Make the selected tab flex to occupy available space
    // Same background color as the card container
    color: 'blue',
    // backgroundColor:'#FAF9F6',
    borderRadius: 10, // Add border radius to the top corners
    justifyContent: 'center', // Center the text vertically
    textAlign: 'center', // Center the text horizontally
 
    paddingHorizontal: 35, // Match the paddingHorizontal value of the green boxes
  },
 
  title: {
    fontSize: 16,
    fontWeight: '600',
    color:'#023B5E',
    marginLeft:5,
    marginTop: 10,
    // backgroundColor:'red',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    // backgroundColor:'red',
    marginHorizontal:20,
   
  },
  section: {
    flexDirection: 'coloumn',
    alignItems: 'center',
    padding: 10,
    marginHorizontal:'20'
  },
  cardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flex: 1,
    height: 140,
    marginHorizontal:20,
    // backgroundColor:'#FAF9F6',
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
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
    minWidth: 80,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 3,
   
  },
  detail: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
   
    // backgroundColor:'yellow',
  },
  data: {
    color: '#023B5E',
    fontSize: 14,
    textAlign: 'left',
   
   
  },
});
