// import React, { useState, useRef, useEffect } from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   TouchableWithoutFeedback,
//   Text,
//   Dimensions,
//   TouchableOpacity,
//   FlatList,
//   ScrollView,
// } from 'react-native';
// import moment from 'moment';
// import Swiper from 'react-native-swiper';
// import useIdStore from '../leadStore';
// import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
// import { FetchActivities } from '../service/fetchActivities';
//  import { router } from 'expo-router';
 
// const { width } = Dimensions.get('window');
 
// export default function Example() {
 
//   const leadId = useIdStore((state) => state.number);
//   const swiper = useRef();
//   const [value, setValue] = useState(new Date());
//   const [week, setWeek] = useState(0);
 
//   const [selectedTasks, setSelectedTasks] = useState([]);
//   const [selectedMeetings, setSelectedMeetings] = useState([]);
//   const [selectedCalls, setSelectedCalls] = useState([]);
//   const [selectedEmails, setSelectedEmails] = useState([]);
 
//   const [tasksVisible, setTasksVisible] = useState(false);
//   const [meetingsVisible, setMeetingsVisible] = useState(false);
//   const [callsVisible, setCallsVisible] = useState(false);
//   const [emailsVisible, setEmailsVisible] = useState(false);
 
//   const [currentTab, setCurrentTab] = useState('all'); // State for current tab for tasks
//   const [currentMeetingTab, setCurrentMeetingTab] = useState('all'); // State for current tab for meetings
//   const [currentCallTab, setCurrentCallTab] = useState('all');
//   const [currentEmailTab, setCurrentEmailTab] = useState('all');
 
 
//   const[activityData, setActivityData]=useState('');
//   const[activityItems, setActivityItems]=useState('')
 
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ldata = await FetchActivities();
//         setActivityData(ldata.result);
//         console.log("activity date", activityData);
//       } catch (error) {
//         console.error('Error in fetching leads:', error);
//       }
//     };
 
//     fetchData();
//   }, []);
 
 
 
//   const weeks = React.useMemo(() => {
//     const start = moment().add(week, 'weeks').startOf('week');
 
//     return [-1, 0, 1].map(adj => {
//       return Array.from({ length: 7 }).map((_, index) => {
//         const date = moment(start).add(adj, 'week').add(index, 'day');
 
//         return {
//           weekday: date.format('ddd'),
//           date: date.toDate(),
//         };
//       });
//     });
//   }, [week]);
 
//   const handleDateSelect = date => {
//     setValue(date);
   
//     const selectedDate = moment(date).format('YYYY-MM-DD');
 
//     const tasks = activityData.filter(task => task.due_date === selectedDate);
//     const taskAct=tasks.filter(taskdata=>taskdata.activity_type==='task')
 
//     const meetings = activityData.filter(meeting => meeting.due_date === selectedDate);
//     const meetingData = meetings.filter(meetingData=>meetingData.activity_type==='meeting')
 
//     const email = activityData.filter(email => email.due_date === selectedDate);
//     const emailData = email.filter(emaill=>emaill.due_date ==='email')
 
//     const call = activityData.filter(call => call.due_date === selectedDate);
//     const callAct = call.filter(calldata=>calldata.activity_type==='call');
 
//     console.log("call data", call);
   
 
//     setSelectedTasks(taskAct);
//     setSelectedMeetings(meetingData);
//     setSelectedEmails(emailData);
//     setSelectedCalls(callAct);
//     // setSelectedAppointments(callAct);
 
   
//   };
 
//   // // Function to filter tasks based on the selected tab
//   const filteredTasks = selectedTasks.filter(task => {
//     if (currentTab === 'all') {
//       return true; // Show all tasks
//     } else if (currentTab === 'Completed') {
//       return task.status === 'completed';
//     } else if (currentTab === 'Pending') {
//       return task.status === 'pending';
//     }
//   });
 
// // Function to filter meetings based on the selected tab
// const filteredMeetings = selectedMeetings.filter(meeting => {
//     if (currentMeetingTab === 'all') {
//       return true; // Show all meetings
//     } else if (currentMeetingTab === 'Completed') {
//       return meeting.status === 'completed';
//     } else if (currentMeetingTab === 'Pending') {
//       return meeting.status === 'pending';
//     }
//   });
 
//   const filteredEmails = selectedEmails.filter(email => {
//     if (currentEmailTab === 'all') {
//       return true; // Show all meetings
//     } else if (currentEmailTab === 'Completed') {
//       return email.status === 'completed'; // Show only completed meetings
//     } else if (currentEmailTab === 'Pending') {
//       return email.status === 'pending';
//     }
//   });
 
//   const filteredCalls = selectedCalls.filter(call => {
//     if (currentCallTab === 'all') {
//       return true; // Show all meetings
//     } else if (currentCallTab === 'Completed') {
//       return call.status === 'completed'; // Show only completed meetings
//     } else if (currentCallTab === 'Pending') {
//       return call.status === 'pending';
//     }
//   });
 
//   const renderStartTime = (startTime) => {
//     const date = new Date(startTime);
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const time = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
//     return time;
//   };
 
//   const goToMarkAsComplete=()=>
//   {
//     router.navigate('/formComponents/markAsComplete')
//   }
 
 
//   const renderDate = (due_date) => {
//     const date = new Date(due_date);
//     const day = date.getDate();
//     const month = date.getMonth() + 1; // Month starts from 0
//     const year = date.getFullYear();
 
//     const formattedDay = day < 10 ? `0${day}` : day;
//     const formattedMonth = month < 10 ? `0${month}` : month;
//     const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
//     return formattedDate;
//   };
 
//   const renderItemTask = ({ item }) => {
//     const { activity_type, email,associated_lead,sys_created_on,start_time, due_date , date, time, status , description,priority, subject } = item;
//     const timee = renderStartTime(start_time);
//     const formattedDate =  renderDate(due_date)
 
//     let priorityColor = 'black'; // Default color if priority is not recognized
//     let statusColor = 'black';
 
//   switch (priority.toLowerCase()) {
//     case 'low':
//       priorityColor = 'lightblue';
//       break;
//     case 'medium':
//       priorityColor = 'orange';
//       break;
//     case 'high':
//       priorityColor = 'red';
//       break;
//     default:
//       break;
//   }
 
//   switch (status.toLowerCase()) {
//     case 'pending':
//       statusColor = 'green';
//       break;
//     case 'completed':
//       statusColor = 'brown';
//       break;
//     default:
//       break;
//   }
 
//     const due_on = formattedDate + " "+ timee;
//     return (
//       <View style={[styles.section, styles.cardContainer]}>
//         <View>
//         <View style={styles.row}>
//             <Text style={styles.data}>Subject:</Text>
//             <Text style={styles.detail}>{subject}</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.data}>Description:</Text>
//             <Text style={styles.detail}>{description}</Text>
//           </View>
//           <View style={styles.row}>
//             <Text style={styles.data}>Due Date:</Text>
//             <Text style={styles.detail}>{due_on}</Text>
//           </View>
//           <View style={styles.row}>
//           <Text style={styles.data}>Priority:</Text>
//           <Text style={[styles.detail, { color: priorityColor }]}>{priority}</Text>
//         </View>
//           <View style={styles.row}>
//           <Text style={styles.data}>Status:</Text>
//           <Text style={[styles.detail, { color: statusColor }]}>{status}</Text>
//         </View>
//           <View style={styles.row}>
//             <Text style={styles.data}>Created On:</Text>
//             <Text style={styles.detail}>{sys_created_on}</Text>
//           </View>
//           {status.toLowerCase() !== 'completed' && ( // Conditionally render the button if status is not completed
//           <TouchableOpacity style={styles.markAsCompleteButton} onPress={goToMarkAsComplete}>
//             <Text>Mark as Complete</Text>
//           </TouchableOpacity>
//           )}
//         </View>
//       </View>
//     );
//   };
 
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <View style={styles.picker}>
//           <Swiper
//             index={1}
//             ref={swiper}
//             loop={false}
//             showsPagination={false}
//             onIndexChanged={ind => {
//               if (ind === 1) {
//                 return;
//               }
//               setTimeout(() => {
//                 const newIndex = ind - 1;
//                 const newWeek = week + newIndex;
//                 setWeek(newWeek);
//                 setValue(moment(value).add(newIndex, 'week').toDate());
//                 swiper.current.scrollTo(1, false);
//               }, 100);
//             }}>
//             {weeks.map((dates, index) => (
//               <View
//                 style={[styles.itemRow, { paddingHorizontal: 16 }]}
//                 key={index}>
//                 {dates.map((item, dateIndex) => {
//                   const isActive =
//                     value.toDateString() === item.date.toDateString();
//                   return (
//                     <TouchableWithoutFeedback
//                       key={dateIndex}
//                       onPress={() => handleDateSelect(item.date)}>
//                       <View
//                         style={[
//                           styles.item,
//                           isActive && {
//                             backgroundColor: '#023B5E',
//                             borderColor: '#023B5E',
//                           },
//                         ]}>
//                         <Text
//                           style={[
//                             styles.itemWeekday,
//                             isActive && { color: 'white' },
//                           ]}>
//                           {item.weekday}
//                         </Text>
//                         <Text
//                           style={[
//                             styles.itemDate,
//                             isActive && { color: 'white' },
//                           ]}>
//                           {item.date.getDate()}
//                         </Text>
//                       </View>
//                     </TouchableWithoutFeedback>
//                   );
//                 })}
//               </View>
//             ))}
//           </Swiper>
//         </View>
 
//         <ScrollView style={{ flex: 1 }}>
//           <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
//             <Text style={styles.date}>{value.toDateString()}</Text>
//             {(selectedTasks.length > 0 || selectedMeetings.length > 0) ? (
//               <View>
 
 
 
//                 {selectedTasks.length > 0 && (
//                 <TouchableOpacity onPress={() => setTasksVisible(!tasksVisible)}>
//                  <View style={styles.titleContainer}>
//                   <Text style={styles.title}>Tasks</Text>
//                    <Ionicons name={tasksVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
//                     </View>
//                  </TouchableOpacity>
//                  )}
//                 {tasksVisible &&  selectedTasks.length > 0 &&(
//                   <View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
//                       <TouchableOpacity onPress={() => setCurrentTab('all')}>
//                         <Text style={[styles.subtitle, currentTab === 'all' && styles.selectedTab]}>All</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity onPress={() => setCurrentTab('Completed')}>
//                         <Text style={[styles.subtitle, currentTab === 'Completed' && styles.selectedTab]}>Completed</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity onPress={() => setCurrentTab('Pending')}>
//                       <Text style={[styles.subtitle, currentTab === 'Pending' && styles.selectedTab]}>Pending</Text>
//                      </TouchableOpacity>
//                     </View>
//                     {filteredTasks.length > 0 && (
//                      <FlatList
//                      data={filteredTasks}
//                      keyExtractor={item => item.id}
//                      renderItem={renderItemTask}
//                    />
//                     )}
//                   </View>
//                 )}
 
 
 
 
 
 
//             {selectedMeetings.length > 0 && (
//             <TouchableOpacity onPress={() => setMeetingsVisible(!meetingsVisible)}>
//              <View style={styles.titleContainer}>
//              <Text style={styles.title}>Meetings</Text>
//                <Ionicons name={meetingsVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
//              </View>
//              </TouchableOpacity>
//               )}
//                 {meetingsVisible && selectedMeetings.length > 0 &&(
//                   <View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
//                       <TouchableOpacity onPress={() => setCurrentMeetingTab('all')}>
//                         <Text style={[styles.subtitle, currentMeetingTab === 'all' && styles.selectedTab]}>All</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity onPress={() => setCurrentMeetingTab('Completed')}>
//                         <Text style={[styles.subtitle, currentMeetingTab === 'Completed' && styles.selectedTab]}>Completed</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity onPress={() => setCurrentMeetingTab('Pending')}>
//                       <Text style={[styles.subtitle, currentMeetingTab === 'Pending' && styles.selectedTab]}>Pending</Text>
//                       </TouchableOpacity>
//                     </View>
//                     {selectedMeetings.length > 0 && (
//                       <FlatList
//                         data={filteredMeetings}
//                         keyExtractor={item => item.id}
//                         renderItem={renderItemTask}
//                       />
//                     )}
//                   </View>
//                 )}
 
 
 
 
 
//             {selectedEmails.length > 0 && (
//             <TouchableOpacity onPress={() => setEmailsVisible(!emailsVisible)}>
//              <View style={styles.titleContainer}>
//              <Text style={styles.title}>Emails</Text>
//                <Ionicons name={emailsVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
//              </View>
//              </TouchableOpacity>
//             )}
//                 {emailsVisible && selectedEmails.length > 0 &&(
//                   <View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
//                       <TouchableOpacity onPress={() => setCurrentEmailTab('all')}>
//                         <Text style={[styles.subtitle, currentEmailTab === 'all' && styles.selectedTab]}>All</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity onPress={() => setCurrentEmailTab('Completed')}>
//                         <Text style={[styles.subtitle, currentEmailTab === 'Completed' && styles.selectedTab]}>Completed</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity onPress={() => setCurrentEmailTab('Pending')}>
//                       <Text style={[styles.subtitle, currentEmailTab === 'Pending' && styles.selectedTab]}>Pending</Text>
//                       </TouchableOpacity>
//                     </View>
//                     {selectedEmails.length > 0 && (
//                       <FlatList
//                         data={filteredEmails}
//                         keyExtractor={item => item.activity_number}
//                         renderItem={renderItemTask}
//                       />
//                     )}
//                   </View>
//                 )}
 
 
       
 
       
//                  {selectedCalls.length > 0 && (
//                  <TouchableOpacity onPress={() => setCallsVisible(!callsVisible)}>
//                  <View style={styles.titleContainer}>
//                  <Text style={styles.title}>Calls</Text>
//                 <Ionicons name={callsVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
//                 </View>
//                 </TouchableOpacity>
//                  )}
//                 {callsVisible && selectedCalls.length > 0 &&(
//                   <View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
//                       <TouchableOpacity onPress={() => setCurrentCallTab('all')}>
//                         <Text style={[styles.subtitle, currentMeetingTab === 'all' && styles.selectedTab]}>All</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity onPress={() => setCurrentCallTab('Completed')}>
//                         <Text style={[styles.subtitle, currentMeetingTab === 'Completed' && styles.selectedTab]}>Completed</Text>
//                       </TouchableOpacity>
//                       <TouchableOpacity onPress={() => setCurrentCallTab('Pending')}>
//                       <Text style={[styles.subtitle, currentMeetingTab === 'Pending' && styles.selectedTab]}>Pending</Text>
//                        </TouchableOpacity>
//                     </View>
//                     {selectedCalls.length > 0 && (
//                       <FlatList
//                         data={filteredCalls}
//                         keyExtractor={item => item.activity_number}
//                         renderItem={renderItemTask}
//                       />
//                     )}
//                   </View>
//                 )}
 
 
 
//               </View>
//             ) : (
//               <View style={styles.placeholder}>
//                 <Text style={styles.alert}>No tasks and meetings assigned for the day.</Text>
//               </View>
//             )}
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// }
 
// const styles = StyleSheet.create({
 
//   markAsCompleteButtonContainer: {
//     position: 'relative', // Change to relative positioning if needed
//     flexDirection: 'row', // Arrange children horizontally
//     justifyContent: 'flex-end', // Align children to the right
//     width:'10%'
// },
// markAsCompleteButton: {
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 5,
//     marginLeft: 180,
// },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 3,
//   },
//   detail: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'right',
//   },
//   data: {
//     color: '#023B5E',
//     fontSize: 14,
//     textAlign: 'left',
//   },
//     divider: {
//         borderBottomWidth: 1,
//         borderBottomColor: 'lightgrey',
//       },
     
//     detailBoxLeft: {
//         flex: 1,
//         marginRight: 10, // Adjust margin as needed
//       },
//       detailBoxRight: {
//         alignItems: 'flex-end', // Align items to the right
//         minWidth: 100, // Adjust minimum width as needed
//       },
//   row1: {
//     // backgroundColor: "#023B5E",
//     flexDirection: "row",
//   },
//   meetProg: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   alert: {
//     fontSize: 14,
//     color: 'lightgrey',
//     fontWeight: 'bold',
//     marginTop: 80,
//   },
//   statusTxt: {
//     backgroundColor: "#023B5E",
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 5,
//     fontSize: 14,
//     color: "white",
//     fontWeight: "600",
//     minWidth: 80,
//     textAlign: "center",
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
   
//     justifyContent: 'space-between', // Add this line
//     paddingRight: 10, // Add paddingRight to create space between the title and the icon
//   },
//   bgColor: {
//     backgroundColor: 'white',
//     borderColor: 'grey',
//     borderWidth: 1,
//   },
//   section: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//   },
//   cardContainer: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgrey',
//     flex: 1,
//   },
//   detailBox: {
//     flex: 1,
//   },
//   title1: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 2,
//   },
//   detailText: {
//     fontSize: 14,
//     marginBottom: 2,
//   },
//   container: {
//     flex: 1,
//     paddingVertical: 24,
//     backgroundColor: "white"
//   },
//   picker: {
//     flex: 1,
//     maxHeight: 74,
//     paddingVertical: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   subtitle: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#023B5E',
//     marginBottom: 10,
//     marginTop: 10,
//     // backgroundColor: '#023B5E',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//     textAlign: 'center', // Align text to center
//   },
//   selectedTab: {
//     borderRadius: 50,
//     color:'blue'
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '600',
//     color:'#023B5E',
//    marginLeft:5,
//     marginTop: 10,
//   },
//   date: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#023B5E',
//     marginBottom: 12,
//   },
//   item: {
//     flex: 1,
//     height: 50,
//     marginHorizontal: 4,
//     paddingVertical: 6,
//     paddingHorizontal: 4,
//     borderWidth: 1,
//     borderRadius: 8,
//     borderColor: '#e3e3e3',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   itemRow: {
//     width: width,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     marginHorizontal: -4,
//   },
//   itemWeekday: {
//     fontSize: 13,
//     fontWeight: '500',
//     color: '#737373',
//     marginBottom: 4,
//   },
//   itemDate: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#111',
//   },
//   placeholder: {
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//     marginTop: 0,
//     padding: 0,
//     backgroundColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   taskCard: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     marginBottom: 10,
//     width: '100%',
//     borderRadius: 5,
//   },
//   meetingCard: {
//     padding: 10,
//     marginBottom: 10,
//     width: '100%',
//     borderRadius: 5,
//   },
// });


import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import useIdStore from '../leadStore';
import { Ionicons } from '@expo/vector-icons';
import { FetchActivities } from '../service/fetchActivities';
 import { router } from 'expo-router';
 
const { width } = Dimensions.get('window');
 
export default function Example() {
 
  const leadId = useIdStore((state) => state.number);
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
 
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [selectedMeetings, setSelectedMeetings] = useState([]);
  const [selectedCalls, setSelectedCalls] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
 
  const [tasksVisible, setTasksVisible] = useState(false);
  const [meetingsVisible, setMeetingsVisible] = useState(false);
  const [callsVisible, setCallsVisible] = useState(false);
  const [emailsVisible, setEmailsVisible] = useState(false);
 
  const [currentTab, setCurrentTab] = useState('all');
  const [currentMeetingTab, setCurrentMeetingTab] = useState('all');
  const [currentCallTab, setCurrentCallTab] = useState('all');
  const [currentEmailTab, setCurrentEmailTab] = useState('all');
 
 
  const[activityData, setActivityData]=useState('');
  const[activityItems, setActivityItems]=useState('')
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ldata = await FetchActivities();
        setActivityData(ldata.result);
        console.log("activity date", activityData);
      } catch (error) {
        console.error('Error in fetching leads:', error);
      }
    };
 
    fetchData();
  }, []);
 
 
 
  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');
 
    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');
 
        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);
 
  const handleDateSelect = date => {
    setValue(date);
   
    const selectedDate = moment(date).format('YYYY-MM-DD');
 
    const tasks = activityData.filter(task => task.due_date === selectedDate);
    const taskAct=tasks.filter(taskdata=>taskdata.activity_type==='task')
 
    const meetings = activityData.filter(meeting => meeting.due_date === selectedDate);
    const meetingData = meetings.filter(meetingData=>meetingData.activity_type==='meeting')
 
    const email = activityData.filter(email => email.due_date === selectedDate);
    const emailData = email.filter(emaill=>emaill.due_date ==='email')
 
    const call = activityData.filter(call => call.due_date === selectedDate);
    const callAct = call.filter(calldata=>calldata.activity_type==='call');
 
    console.log("call data", call);
   
 
    setSelectedTasks(taskAct);
    setSelectedMeetings(meetingData);
    setSelectedEmails(emailData);
    setSelectedCalls(callAct);
    // setSelectedAppointments(callAct);
 
   
  };
 
  // // Function to filter tasks based on the selected tab
  const filteredTasks = selectedTasks.filter(task => {
    if (currentTab === 'All') {
      return true; // Show all tasks
    } else if (currentTab === 'Completed') {
      return task.status === 'completed';
    } else if (currentTab === 'Pending') {
      return task.status === 'pending';
    }
  });
 
 
// Function to filter meetings based on the selected tab
const filteredMeetings = selectedMeetings.filter(meeting => {
    if (currentTab === 'All') {
      return true; // Show all meetings
    } else if (currentTab === 'Completed') {
      return meeting.status === 'completed';
    } else if (currentTab === 'Pending') {
      return meeting.status === 'pending';
    }
  });
 
  const filteredEmails = selectedEmails.filter(email => {
    if (currentEmailTab === 'All') {
      return true; // Show all meetings
    } else if (currentTab === 'Completed') {
      return email.status === 'completed'; // Show only completed meetings
    } else if (currentTab === 'Pending') {
      return email.status === 'pending';
    }
  });
 
  const filteredCalls = selectedCalls.filter(call => {
    if (currentTab === 'All') {
      return true; // Show all meetings
    } else if (currentTab === 'Completed') {
      return call.status === 'completed'; // Show only completed meetings
    } else if (currentTab === 'Pending') {
      return call.status === 'pending';
    }
  });
 
  const renderStartTime = (startTime) => {
    const date = new Date(startTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return time;
  };
 
  const goToMarkAsComplete=()=>
  {
    router.navigate('/formComponents/markAsComplete')
  }
 
 
  const renderDate = (due_date) => {
    const date = new Date(due_date);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month starts from 0
    const year = date.getFullYear();
 
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
    return formattedDate;
  };
  const handleTabPress = (tabName, activityType) => {
    switch (activityType) {
      case 'tasks':
        setCurrentTab(tabName);
        break;
      case 'meetings':
        setCurrentMeetingTab(tabName);
        break;
      case 'calls':
        setCurrentCallTab(tabName);
        break;
      case 'emails':
        setCurrentEmailTab(tabName);
        break;
      default:
        break;
    }
  };
 
 
  const renderItemTask = ({ item }) => {
    const { activity_type, email,associated_lead,sys_created_on,start_time, due_date , date, time, status , description,priority, subject } = item;
    const timee = renderStartTime(start_time);
    const formattedDate =  renderDate(due_date)
 
    let priorityColor = 'black'; // Default color if priority is not recognized
    let statusColor = 'black';
 
  switch (priority.toLowerCase()) {
    case 'low':
      priorityColor = 'lightblue';
      break;
    case 'medium':
      priorityColor = 'orange';
      break;
    case 'high':
      priorityColor = 'red';
      break;
    default:
      break;
  }
 
  switch (status.toLowerCase()) {
    case 'pending':
      statusColor = 'green';
      break;
    case 'completed':
      statusColor = 'brown';
      break;
    default:
      break;
  }
 
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
          <Text style={[styles.detail, { color: priorityColor }]}>{priority}</Text>
        </View>
          <View style={styles.row}>
          <Text style={styles.data}>Status:</Text>
          <Text style={[styles.detail, { color: statusColor }]}>{status}</Text>
        </View>
          <View style={styles.row}>
            <Text style={styles.data}>Created On:</Text>
            <Text style={styles.detail}>{sys_created_on}</Text>
          </View>
          {status.toLowerCase() !== 'completed' && ( // Conditionally render the button if status is not completed
          <TouchableOpacity style={styles.markAsCompleteButton} onPress={goToMarkAsComplete}>
            <Text>Mark as Complete</Text>
          </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => handleDateSelect(item.date)}>
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            backgroundColor: '#023B5E',
                            borderColor: '#023B5E',
                          },
                        ]}>
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: 'white' },
                          ]}>
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: 'white' },
                          ]}>
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>
 
        <ScrollView style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
            <Text style={styles.date}>{value.toDateString()}</Text>
            {(selectedTasks.length > 0 || selectedMeetings.length > 0 || selectedEmails.length > 0 || selectedCalls.length > 0) && (
              <View>
 
              <View style={styles.tabContainer}>
              <TouchableOpacity onPress={() => handleTabPress("All", "tasks")}>
  <Text style={[styles.tab, currentTab === 'All' && styles.selectedTab]}>All</Text>
</TouchableOpacity>
 
<TouchableOpacity onPress={() => handleTabPress("Completed", "tasks")}>
  <Text style={[styles.tab, currentTab === 'Completed' && styles.selectedTab]}>Completed</Text>
</TouchableOpacity>
 
<TouchableOpacity onPress={() => handleTabPress("Pending", "tasks")} >
  <Text style={[styles.tab, currentTab === 'Pending' && styles.selectedTab]}>Pending</Text>
</TouchableOpacity>
 
        </View>
 
                {selectedTasks.length > 0 && (
                <TouchableOpacity onPress={() => setTasksVisible(!tasksVisible)}>
                 <View style={styles.titleContainer}>
                  <Text style={styles.title}>Tasks</Text>
                   <Ionicons name={tasksVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
                    </View>
                 </TouchableOpacity>
                 )}
                {tasksVisible &&  selectedTasks.length > 0 &&(
                  <View>
                   {filteredTasks.length > 0 ? (
  <FlatList
    data={filteredTasks}
    keyExtractor={item => item.activity_number}
    renderItem={renderItemTask}
  />
) : (
  <View style={styles.messagedef}>
  <Text >No Tasks found.</Text>
  </View>
)}
                  </View>
                )}
 
 
            {selectedMeetings.length > 0 && (
            <TouchableOpacity onPress={() => setMeetingsVisible(!meetingsVisible)}>
             <View style={styles.titleContainer}>
             <Text style={styles.title}>Meetings</Text>
               <Ionicons name={meetingsVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
             </View>
             </TouchableOpacity>
              )}
                {meetingsVisible && selectedMeetings.length > 0 &&(
                  <View>
                    {filteredMeetings.length > 0 ? (
  <FlatList
    data={filteredMeetings}
    keyExtractor={item => item.activity_number}
    renderItem={renderItemTask}
  />
) : (<View style={styles.messagedef}>
  <Text >No Meetings found.</Text>
  </View>
)}
                  </View>
                )}
 
 
            {selectedEmails.length > 0 && (
            <TouchableOpacity onPress={() => setEmailsVisible(!emailsVisible)}>
             <View style={styles.titleContainer}>
             <Text style={styles.title}>Emails</Text>
               <Ionicons name={emailsVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
             </View>
             </TouchableOpacity>
            )}
                {emailsVisible && selectedEmails.length > 0 &&(
                  <View>
                     {filteredEmails.length > 0 ? (
  <FlatList
    data={filteredEmails}
    keyExtractor={item => item.activity_number}
    renderItem={renderItemTask}
  />
) : ( <View style={styles.messagedef}>
  <Text >No Emails found.</Text>
  </View>
)}
                  </View>
                )}
 
       
                 {selectedCalls.length > 0 && (
                 <TouchableOpacity onPress={() => setCallsVisible(!callsVisible)}>
                 <View style={styles.titleContainer}>
                 <Text style={styles.title}>Calls</Text>
                <Ionicons name={callsVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
                </View>
                </TouchableOpacity>
                 )}
                {callsVisible && selectedCalls.length > 0 &&(
                  <View>
                     {filteredCalls.length > 0 ? (
  <FlatList
    data={filteredCalls}
    keyExtractor={item => item.activity_number}
    renderItem={renderItemTask}
  />
) : ( <View style={styles.messagedef}>
  <Text >No Calls found.</Text>
  </View>
)}
                  </View>
                )}
              </View>
              )}
               {/* Display default message if there are no activities for the selected date */}
    {!(selectedTasks.length > 0 || selectedMeetings.length > 0 || selectedEmails.length > 0 || selectedCalls.length > 0) && (
      <Text style={styles.message}>No activities found for the selected date.</Text>
    )}
           </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
message:{
  fontSize: 14,
  fontWeight: 'bold',
  color:'grey',
 
},
messagedef:{
  fontSize: 14,
  // fontWeight: 'bold',
  // color:'red',
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop:'80',
 
 
 
},
tabContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  height: 25,
  marginHorizontal: 20,
  paddingHorizontal: 10,
  borderTopWidth: 1, // Add a thin border above
  borderBottomWidth: 1, // Add a thin border below
  borderColor: 'grey', // You can adjust the color as needed
},
 
  markAsCompleteButtonContainer: {
    position: 'relative', // Change to relative positioning if needed
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'flex-end', // Align children to the right
    width:'10%'
},
markAsCompleteButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginLeft: 180,
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
  },
  data: {
    color: '#023B5E',
    fontSize: 14,
    textAlign: 'left',
  },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
      },
     
    detailBoxLeft: {
        flex: 1,
        marginRight: 10, // Adjust margin as needed
      },
      detailBoxRight: {
        alignItems: 'flex-end', // Align items to the right
        minWidth: 100, // Adjust minimum width as needed
      },
  row1: {
    // backgroundColor: "#023B5E",
    flexDirection: "row",
  },
  meetProg: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  alert: {
    fontSize: 14,
    color: 'lightgrey',
    fontWeight: 'bold',
    marginTop: 80,
  },
  statusTxt: {
    backgroundColor: "#023B5E",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontSize: 14,
    color: "white",
    fontWeight: "600",
    minWidth: 80,
    textAlign: "center",
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   
    justifyContent: 'space-between', // Add this line
    paddingRight: 10, // Add paddingRight to create space between the title and the icon
  },
  bgColor: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  cardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flex: 1,
  },
  detailBox: {
    flex: 1,
  },
  title1: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 2,
  },
  container: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: "white"
  },
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#023B5E',
    marginBottom: 10,
    marginTop: 10,
    // backgroundColor: '#023B5E',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    textAlign: 'center', // Align text to center
  },
  selectedTab: {
    flex: 1,
    color: 'red', // Set selected tab color to blue
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
   
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color:'#023B5E',
   marginLeft:5,
    marginTop: 10,
  },
  date: {
    fontSize: 17,
    fontWeight: '600',
    color: '#023B5E',
    marginBottom: 12,
  },
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e3e3e3',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: '500',
    color: '#737373',
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginTop: 0,
    padding: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskCard: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 5,
  },
  meetingCard: {
    padding: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 5,
  },
});