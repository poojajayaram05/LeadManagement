import React, { useState, useRef } from 'react';
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
import { taskData } from '../../customComponents/formData';
import { meetingItemsData } from '../../customComponents/formData';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

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
  

const { width } = Dimensions.get('window');

export default function Example() {
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [selectedMeetings, setSelectedMeetings] = useState([]);
  const [tasksVisible, setTasksVisible] = useState(false);
  const [meetingsVisible, setMeetingsVisible] = useState(false);
  const [currentTab, setCurrentTab] = useState('all'); // State for current tab for tasks
  const [currentMeetingTab, setCurrentMeetingTab] = useState('all'); // State for current tab for meetings

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
    const tasks = taskData.filter(task => task.dueDate === selectedDate);
    const meetings = meetingItemsData.elements.filter(meeting => meeting.Date === selectedDate);
    setSelectedTasks(tasks);
    setSelectedMeetings(meetings);
  };

  // Function to filter tasks based on the selected tab
  const filteredTasks = selectedTasks.filter(task => {
    if (currentTab === 'all') {
      return true; // Show all tasks
    } else if (currentTab === 'Completed') {
      return task.state === 'Completed'; // Show only completed tasks
    } else if (currentTab === 'Pending') {
      return task.state === 'Pending'; // Show only pending tasks
    }
  });

// Function to filter meetings based on the selected tab
const filteredMeetings = selectedMeetings.filter(meeting => {
    if (currentMeetingTab === 'all') {
      return true; // Show all meetings
    } else if (currentMeetingTab === 'Completed') {
      return meeting.status === 'Completed'; // Show only completed meetings
    } else if (currentMeetingTab === 'Pending') {
      // Add your condition for pending meetings if available
      return meeting.status === 'Pending'; // Example condition
    }
  });
  
  

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
            {(selectedTasks.length > 0 || selectedMeetings.length > 0) ? (
              <View>
                <TouchableOpacity onPress={() => setTasksVisible(!tasksVisible)}>
  <View style={styles.titleContainer}>
    <Text style={styles.title}>Tasks</Text>
    <Ionicons name={tasksVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
  </View>
</TouchableOpacity>

                {tasksVisible && (
                  <View>
                    {/* <View style={styles.divider}></View> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                      <TouchableOpacity onPress={() => setCurrentTab('all')}>
                        <Text style={[styles.subtitle, currentTab === 'all' && styles.selectedTab]}>All</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setCurrentTab('Completed')}>
                        <Text style={[styles.subtitle, currentTab === 'Completed' && styles.selectedTab]}>Completed</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setCurrentTab('Pending')}>
  <Text style={[styles.subtitle, currentTab === 'Pending' && styles.selectedTab]}>Pending</Text>
</TouchableOpacity>
                    </View>
                    {/* <View style={styles.divider}></View> */}
                    {filteredTasks.length > 0 && (
                     <FlatList
                     data={filteredTasks}
                     keyExtractor={item => item.id}
                     renderItem={({ item }) => (
                       <View style={[styles.section, styles.cardContainer]}>
                         <View style={styles.detailBoxLeft}>
                           <Text style={[styles.title1, { color: "black" }]}>
                             {item.taskName}
                           </Text>
                           <Text style={[styles.detailText, { color: "grey" }]}>
                             {item.ownerName}
                           </Text>
                           <Text style={[styles.detailText, { color: "grey" }]}>
                             {item.dueDate}
                           </Text>
                           <Text style={[styles.detailText, { color: "grey" }]}>
                             {item.description}
                           </Text>
                         </View>
                         <View style={styles.detailBoxRight}>
                           <View style={styles.meetProg}>
                             <Text
                               style={[
                                 styles.statusTxt,
                                 styles.bgColor,
                                 { color: getStatusColor(item.state) },
                               ]}
                             >
                               {item.state}
                             </Text>
                           </View>
                           
                         </View>
                       </View>
                     )}
                   />
                   
                    )}
                  </View>
                )}
            
  <TouchableOpacity onPress={() => setMeetingsVisible(!meetingsVisible)}>
    <View style={[styles.titleContainer, { justifyContent: 'space-between' }]}>
      <Text style={styles.title}>Meetings</Text>
      <Ionicons name={meetingsVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
    </View>
  </TouchableOpacity>




                {meetingsVisible && (
                  <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                      <TouchableOpacity onPress={() => setCurrentMeetingTab('all')}>
                        <Text style={[styles.subtitle, currentMeetingTab === 'all' && styles.selectedTab]}>All</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setCurrentMeetingTab('Completed')}>
                        <Text style={[styles.subtitle, currentMeetingTab === 'Completed' && styles.selectedTab]}>Completed</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => setCurrentMeetingTab('Pending')}>
  <Text style={[styles.subtitle, currentMeetingTab === 'Pending' && styles.selectedTab]}>Pending</Text>
</TouchableOpacity>
                    </View>
                    {filteredMeetings.length > 0 && (
                      <FlatList
                        data={filteredMeetings}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                          <View style={[styles.section, styles.cardContainer]}>
                            <View style={styles.detailBox}>
                              <Text style={[styles.title1, { color: "black" }]}>
                                {item.title}
                              </Text>
                              <Text style={[styles.detailText, { color: "grey" }]}>
                                {item.Date}
                              </Text>
                              <Text style={[styles.detailText, { color: "grey" }]}>
                                {item.organizer}
                              </Text>
                              <Text style={[styles.detailText, { color: "grey" }]}>
                                {item.Description}
                              </Text>
                              {/* <View style={styles.meetProg}>
                                <Text style={styles.statusTxt}>{item.status}</Text>
                              </View> */}
                            </View>
                          </View>
                        )}
                      />
                    )}
                  </View>
                )}
              </View>
            ) : (
              <View style={styles.placeholder}>
                <Text style={styles.alert}>No tasks and meetings assigned for the day.</Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        // marginBottom: 10,
      },
      
    detailBoxLeft: {
        flex: 1,
        marginRight: 10, // Adjust margin as needed
      },
      detailBoxRight: {
        alignItems: 'flex-end', // Align items to the right
        minWidth: 100, // Adjust minimum width as needed
      },
  row: {
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
    borderRadius: 50, 
    backgroundColor: 'lightgrey', 
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
