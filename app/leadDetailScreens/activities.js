import React, { useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { taskData } from '../../customComponents/formData';
import { meetingItemsData } from '../../customComponents/formData';
import LeadDet from '../../leadComponents/leadDetHeader';
import FloatingButton from '../../customComponents/floatingButton';
import useIdStore from '../leadStore';
import { FetchActivities } from '../service/fetchActivities';
import ActivityList from '../../customComponents/activityList';
import groupBy from 'lodash/groupBy';
import { router } from 'expo-router';

const getStatusColor = (state) => {
  const lowerCaseState = state.toLowerCase();
  switch (lowerCaseState) {
    case "in-progress":
      return "skyblue";
    case "pending":
      return "orange";
    case "completed":
      return "green";
    default:
      return "black";
  }
};

const { width } = Dimensions.get('window');

export default function Example() {
  const [currentTab, setCurrentTab] = useState('all');
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
  }

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
    const { activity_type, email,associated_lead, start_time, due_date , date, time, status , description,priority, subject } = item;
    const timee = renderStartTime(start_time);
    const formattedDate =  renderDate(due_date)

    const due_on = formattedDate + " "+ timee;
    return (
      <View style={[styles.section, styles.cardContainer]}>
        {/* <View style={styles.detailBoxLeft}>
          <Text style={styles.detailText}>{start_time}</Text>
          <Text style={styles.detailText}>{description}</Text>
          <Text style={styles.detailText}>{status}</Text>
          <Text style={styles.detailText}>{priority}</Text>
          <Text style={styles.detailText}>{subject}</Text>
          <Text style={styles.detailText}>{associated_lead}</Text>
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
        </View> */}
        <View>
      <View style={styles.row}>
      <Text style={styles.data}>Due Date:</Text>
      <Text style={styles.detail}>{due_on}</Text>
      </View>
      <View style={styles.row}>
      <Text style={styles.data}>Description:</Text>
      <Text style={styles.detail}>{description}</Text>
      </View>
      <View style={styles.row}>
      <Text style={styles.data}>Status:</Text>
      <Text style={styles.detail}>{status}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.data}>Priority:</Text>
      <Text style={styles.detail}>{priority}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.data}>Subject:</Text>
      <Text style={styles.detail}>{subject}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.data}>Created On:</Text>
      <Text style={styles.detail}></Text>
    </View>
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
        <FloatingButton onPress={goToActivityForm}/>

        <ScrollView style={{ flex: 1 }}>
          {Object.entries(groupBy(activityItems, 'activity_type')).map(([key, value])=> {
            const isVisible = tabVisibility[activity_type_map[key]];
            return (
              <View key={key}>
                <TouchableOpacity onPress={() => setTabVisibility(prevState => ({ ...prevState, [activity_type_map[key]]: !isVisible }))}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{activity_type_map[key]}</Text>
                    <Ionicons name={isVisible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
                  </View>
                </TouchableOpacity>
                {isVisible && (
                  <>
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
                    <FlatList data={value} renderItem={renderItemTask} keyExtractor={(item) => item.id} />
                  </>
                )}
              </View>
            );
          })}
        </ScrollView>
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
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  tab: {
    fontSize: 18,
    fontWeight: '600',
    color: 'grey',
    paddingHorizontal: 10,
    borderRadius: 5,
    textAlign: 'center',
    paddingVertical: 8,
  },
  selectedTab: {
    // backgroundColor: '#023B5E',
    color: '#023B5E',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color:'#023B5E',
    marginLeft:5,
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  section: {
    flexDirection: 'coloumn',
    alignItems: 'center',
    padding: 10,
  },
  cardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flex: 1,
    height: 140,
    
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
