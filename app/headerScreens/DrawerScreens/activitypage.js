import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableWithoutFeedback, Text, Dimensions, TouchableOpacity, FlatList, ScrollView, LogBox, ActivityIndicator } from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import useIdStore from '../../leadStore';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FetchOwnerActivities } from '../../service/fetchOwnerActivities';
import ActivitySection from '../../../customComponents/calenderCard';
 
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
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('All');
  const [activityData, setActivityData] = useState('');
 
  LogBox.ignoreAllLogs();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ldata = await FetchOwnerActivities();
        setActivityData(ldata.result);
        setLoading(false);
      } catch (error) {
        console.error('Error in fetching leads:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
 
  const handleDateSelect = (date) => {
    setValue(date);
    const selectedDate = moment(date).format('YYYY-MM-DD');
    const tasks = activityData.filter((task) => task.due_date === selectedDate && task.activity_type === 'task');
    const meetings = activityData.filter((meeting) => meeting.due_date === selectedDate && meeting.activity_type === 'meeting');
    const emails = activityData.filter((email) => email.due_date === selectedDate && email.activity_type === 'email');
    const calls = activityData.filter((call) => call.due_date === selectedDate && call.activity_type === 'call');
 
    setSelectedTasks(tasks);
    setSelectedMeetings(meetings);
    setSelectedEmails(emails);
    setSelectedCalls(calls);
  };
 
  const renderItemTask = ({ item }) => {
    const { activity_type, email, associated_lead, sys_created_on, start_time, due_date, date, time, status, description, priority, subject } = item;
    const formattedDate = moment(due_date).format('DD/MM/YYYY');
    const timee = moment(start_time).format('HH:mm');
    const due_on = formattedDate + ' ' + timee;
 
    let priorityColor = 'black';
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
        </View>
      </View>
    );
  };
 
  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');
    return [-1, 0, 1].map((adj) => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');
        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);
 
  const handleTabPress = (tabName) => {
    setCurrentTab(tabName);
  };
 
  const filterActivitiesByStatus = (activities, status) => {
    if (status === 'All') {
      return activities;
    }
    return activities.filter((activity) => activity.status.toLowerCase() === status.toLowerCase());
  };
 
  const hasActivities = selectedTasks.length > 0 || selectedMeetings.length > 0 || selectedCalls.length > 0 || selectedEmails.length > 0;
  const filteredTasks = filterActivitiesByStatus(selectedTasks, currentTab);
  const filteredMeetings = filterActivitiesByStatus(selectedMeetings, currentTab);
  const filteredCalls = filterActivitiesByStatus(selectedCalls, currentTab);
  const filteredEmails = filterActivitiesByStatus(selectedEmails, currentTab);
  const noActivitiesForCurrentTab = filteredTasks.length === 0 && filteredMeetings.length === 0 && filteredCalls.length === 0 && filteredEmails.length === 0;
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.selectedDateContainer}>
        <Text style={styles.selectedDateText}>
          {moment(value).format('dddd, MMMM D, YYYY')}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={(ind) => {
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
              <View style={[styles.itemRow, { paddingHorizontal: 16 }]} key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive = value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback key={dateIndex} onPress={() => handleDateSelect(item.date)}>
                      <View style={styles.dateContainer}>
                        <Text style={[styles.weekday, isActive && styles.activeText]}>
                          {item.weekday}
                        </Text>
                        <View style={[styles.dateWrapper, isActive && styles.activeDateWrapper]}>
                          <Text style={[styles.dateText, isActive && styles.activeText]}>
                            {item.date.getDate()}
                          </Text>
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>
 
        <View style={[styles.card]}>
          {hasActivities && (
            <View style={[styles.tabContainer, styles.tabContainerInsideCard]}>
              {['All', 'Pending', 'Completed'].map((tab, index) => (
                <React.Fragment key={tab}>
                  <TouchableOpacity style={[styles.tab, currentTab === tab && styles.activeTab]} onPress={() => handleTabPress(tab)}>
                    <FontAwesome
                      name={tab === 'All' ? 'list' : tab === 'Pending' ? 'clock-o' : 'check'}
                      size={20}
                      color={currentTab === tab ? 'green' : 'black'}
                      style={styles.tabIcon}
                    />
                    <Text style={[styles.tabText, currentTab === tab && styles.activeTabText]}>{tab}</Text>
                  </TouchableOpacity>
                  {index < 2 && <View style={styles.verticalLine} />}
                </React.Fragment>
              ))}
            </View>
          )}
          {loading ? (
            <View style={styles.defaultContainer}>
              <ActivityIndicator size="large" color="#023B5E" />
            </View>
          ) : (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {hasActivities ? (
                <>
                  <ActivitySection
                    key="Tasks"
                    title="Tasks"
                    activities={filteredTasks}
                    visible={tasksVisible}
                    setVisible={setTasksVisible}
                    currentTab={currentTab}
                    handleTabPress={handleTabPress}
                    renderItem={renderItemTask}
                  />
                  <ActivitySection
                    key="Meetings"
                    title="Meetings"
                    activities={filteredMeetings}
                    visible={meetingsVisible}
                    setVisible={setMeetingsVisible}
                    currentTab={currentTab}
                    handleTabPress={handleTabPress}
                    renderItem={renderItemTask}
                  />
                  <ActivitySection
                    key="Calls"
                    title="Calls"
                    activities={filteredCalls}
                    visible={callsVisible}
                    setVisible={setCallsVisible}
                    currentTab={currentTab}
                    handleTabPress={handleTabPress}
                    renderItem={renderItemTask}
                  />
                  <ActivitySection
                    key="Emails"
                    title="Emails"
                    activities={filteredEmails}
                    visible={emailsVisible}
                    setVisible={setEmailsVisible}
                    currentTab={currentTab}
                    handleTabPress={handleTabPress}
                    renderItem={renderItemTask}
                  />
                  {noActivitiesForCurrentTab && (
                    <View style={styles.defaultContainer}>
                      <Text>No activity for the selected status</Text>
                      <Text> </Text>
                      <Text>Select "All" tab to view the other activities</Text>
                    </View>
                  )}
                </>
              ) : (
                <View style={styles.defaultContainer}>
                  <Text style={styles.defaultText}></Text>
                  <Text>No activities for the selected date.</Text>
                </View>
              )}
            </ScrollView>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  activeTabText: {
    color: 'green',
  },
  defaultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E66E7',
  },
  container: {
    flex: 1,
    paddingVertical: 24,
    backgroundColor: 'white',
  },
  picker: {
    height: 90,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  dateContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  weekday: {
    color: '#666',
    fontSize: 12,
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 4,
    backgroundColor: 'white',
    borderColor: '#ccc',
  },
  tabContainerInsideCard: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  verticalLine: {
    width: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  tabIcon: {
    marginRight: 8,
  },
  dateWrapper: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  dateText: {
    color: '#666',
    fontSize: 18,
  },
  activeText: {
    color: '#023B5E',
    fontWeight: 'bold',
  },
  activeDateWrapper: {
    backgroundColor: '#D6E3FF',
    borderRadius:20,
  },
  section: {
    marginVertical: 10,
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderRadius: 9,
    borderColor: '#ccc',
    marginHorizontal: 10,
    marginVertical: 0,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 3,
    justifyContent: 'space-between',
  },
  data: {
    textAlign: 'right',
    marginRight: 5,
  },
  detail: {
    flexShrink: 1,
    textAlign: 'left',
    fontWeight: 'bold',
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
  selectedDateContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#023B5E',
  },
  card: {
    flex: 1,
    // backgroundColor: 'red',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 145,
    minHeight: 400,
    maxHeight: 40,
  },
});
 