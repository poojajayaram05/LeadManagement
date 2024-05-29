import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LeadDet from '../../leadComponents/leadDetHeader';
import FloatingButton from '../../customComponents/floatingButton';
import useIdStore, { useActivityStore } from '../leadStore';
import { FetchActivities } from '../service/fetchActivities';
import groupBy from 'lodash/groupBy';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Example() {
  console.reportErrorsAsExceptions = false;
  const [currentTab, setCurrentTab] = useState('All');
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [tasksVisible, setTasksVisible] = useState(true);
  const [meetingsVisible, setMeetingsVisible] = useState(false);
  const [activityData, setActivityData] = useState([]);
  const [activityItems, setActivityItems] = useState([]);
  const [tabVisibility, setTabVisibility] = useState({
    Tasks: false,
    Meetings: false,
    'Follow Up': false,
    Emails: false,
    Appointment: false,
    Calls: false
  });
  const [activity_id, setActivityId] = useState('')

  const { sys_id,setAsysId  } = useActivityStore();
  const{subject , setSubject}=useActivityStore();


  const sysId = useIdStore((state) => state.sys_id);

  const activity_type_map = {
    "task": "Tasks",
    "meeting": "Meetings",
    "follow_up": "Follow Up",
    "email": "Emails",
    "call": "Calls",
    "appointment": "Appointments"
  }

  const leadId = useIdStore((state) => state.number);
  useEffect(() => {
    // Initialize currentTab with 'All' when the component mounts
    setCurrentTab('All');

    const fetchData = async () => {
      try {
        const ldata = await FetchActivities(sysId);
        setActivityData(ldata.result);
        console.log("activity data", ldata.result)
      } catch (error) {
        console.error('Error in fetching leads:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const activities = activityData.filter((lead) => lead.associated_lead === sysId);
    setActivityItems(activities);
    console.log("activity number", activities);
    //setActivityNumber(activities.number)

  }, [activityData, leadId]);

  const renderStartTime = (startTime) => {
    const date = new Date(startTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return time;
  };

  const goToMarkAsComplete = () => {
    router.navigate('/formComponents/markAsComplete')
    //setActivityNumber(activity_number);

  }

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


  const handleTabPress = (tabName) => {
    setCurrentTab(tabName); // Set the current tab
  };

  const renderItemTask = ({ item }) => {
    //setActivityNumber(activity_number);
    const { activity_type, email, associated_lead, sys_created_on, start_time, due_date, date, time, status, description, priority, subject, number, sys_id } = item;
    const timee = renderStartTime(start_time);
    console.log("activityidnumber", number);
    //setAsysId(sys_id);
    
    const formattedDate = renderDate(due_date)
      //setActivityNumber(activity_number);
    let priorityColor = 'black'; // Default color if priority is not recognized
    let statusColor = 'black';

    const goToMarkAsComplete = () => {
      router.navigate('/formComponents/markAsComplete')
      console.log("number", number);
      setSubject(subject)
     setAsysId(sys_id);
  
    }

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

    const due_on = formattedDate + " " + timee;

    return (
      <View style={[styles.section, styles.cardContainer]}>
        <View>
          <View style={styles.row}>
            <Text style={styles.data}>Subject:</Text>
            <Text style={styles.detail}>{subject}</Text>
          </View>
          {/* <View style={styles.row}>
            <Text style={styles.data}>Activity Number:</Text>
            <Text style={styles.detail}>{number}</Text>
          </View> */}
          <View style={styles.row}>
            <Text style={styles.description}>Description:</Text>
            <Text style={styles.detail}>{description}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.data}>Due Date:</Text>
            <Text style={styles.detail}>{due_on}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.data}>Priority:</Text>
            <Text style={[styles.detail,{color: priorityColor}]}>{priority}</Text>
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
        <View style={{ height: '26%' }}>
          <LeadDet />
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => handleTabPress("All")}>
            <Text style={[styles.tab, currentTab === 'All' && styles.selectedTab]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress("Completed")}>
            <Text style={[styles.tab, currentTab === 'Completed' && styles.selectedTab]}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress("Pending")} >
            <Text style={[styles.tab, currentTab === 'Pending' && styles.selectedTab]}>Pending</Text>
          </TouchableOpacity>
        </View>
        <FloatingButton onPress={goToActivityForm} />

        {Object.entries(groupBy(activityData, 'activity_type')).length === 0 ? (
          <Text style={styles.noActivityText}>No recent activities</Text>
        ) : (
          <ScrollView style={{ flex: 1 }}>
            {Object.entries(groupBy(activityData, 'activity_type')).map(([key, value]) => {
              const activityType = activity_type_map[key];
              const isVisible = tabVisibility[activityType];
              const hasActivities = value.length > 0;
              return (
                <View key={key}>
                  <TouchableOpacity onPress={() => setTabVisibility(prevState => ({ ...prevState, [activityType]: !isVisible }))}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>{activityType}</Text>
                      <Ionicons name={isVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }} />
                    </View>
                  </TouchableOpacity>

                  {isVisible && hasActivities && (
                    <>
                      <FlatList
                        data={value.filter(
                          (item) =>
                            currentTab === "All" || // Display all activities if "All" tab is selected
                            (currentTab === "Completed" && item.status === "completed") || // Display completed activities if "Completed" tab is selected
                            (currentTab === "Pending" && item.status === "pending") // Display pending activities if "Pending" tab is selected
                        )}
                        renderItem={renderItemTask}
                        keyExtractor={(item, index) => item.activity_number + index}
                        ListEmptyComponent={() => (
                          <View style={styles.default}>
                            <Text style={styles.defaultMessage}>
                              No {activityType} to display
                            </Text>
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
  noActivityText: {
    color: 'grey',
    marginTop: 20,
    textAlign: 'center',

    fontWeight: 'bold'
  },
  defaultMessage: {
    color: 'grey',
    // textAlign: 'center',
    // backgroundColor: '#FAF9F6',
    marginTop: 20,
    marginLeft: 100,
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
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1, // Add a thin border above
    borderBottomWidth: 1, // Add a thin border below
    borderColor: 'grey', // You can adjust the color as needed
  },
  tab: {
    flex: 1,
    fontSize: 14,
    justifyContent: 'space-around',
    fontWeight: '600',
    flexDirection: 'row',

    borderRadius: 5,
    paddingHorizontal: 35,
  },
  selectedTab: {
    flex: 1,
    color: 'red', // Set selected tab color to blue
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#023B5E',
    marginLeft: 5,
    marginTop: 10,
    // backgroundColor:'red',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    // backgroundColor:'red',
    marginHorizontal: 20,
  },
  markAsCompleteButtonContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '10%',
  },
  markAsCompleteButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginLeft: 'auto',
    // Adjust horizontal margin
  },

  section: {
    flexDirection: 'coloumn',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: '20'
  },
  cardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flex: 1,
    height: 165,
    marginHorizontal: 20,
    borderColor: 'lightgrey', // Adjust the color to match your design
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
  description: {
    color: '#023B5E',
    fontSize: 14,
    textAlign: 'left',

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