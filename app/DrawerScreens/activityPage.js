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
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import { taskData } from '../../customComponents/formData';
import { meetingItemsData } from '../../customComponents/formData';

const getStatusColor = (state) => {
  switch (state.toLowerCase()) {
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
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [selectedMeetings, setSelectedMeetings] = useState([]);
  const [tasksVisible, setTasksVisible] = useState(true);
  const [meetingsVisible, setMeetingsVisible] = useState(true);

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

        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
          <Text style={styles.subtitle}>{value.toDateString()}</Text>
          {(selectedTasks.length > 0 || selectedMeetings.length > 0) ? (
            <View>
              <TouchableOpacity onPress={() => setTasksVisible(!tasksVisible)}>
                <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>Tasks</Text>
              </TouchableOpacity>
              {tasksVisible && selectedTasks.length > 0 && (
                <FlatList
                  data={selectedTasks}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <View style={[styles.section, styles.cardContainer]}>
                      <View style={styles.detailBox}>
                        <Text style={[styles.title1, { color: "black" }]}>
                          {item.taskName}
                        </Text>
                        <Text style={[styles.detailText, { color: "grey" }]}>
                          {item.dueDate}
                        </Text>
                        <Text style={[styles.detailText, { color: "grey" }]}>
                          {item.ownerName}
                        </Text>
                        <Text style={[styles.detailText, { color: "grey" }]}>
                          {item.description}
                        </Text>
                        <View style={styles.meetProg}>
                          <Text style={styles.statusTxt}>{item.taskType}</Text>
                          <Text
                            style={[
                              styles.statusTxt, styles.bgColor,
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

              <TouchableOpacity onPress={() => setMeetingsVisible(!meetingsVisible)}>
                <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>Meetings</Text>
              </TouchableOpacity>
              {meetingsVisible && selectedMeetings.length > 0 && (
                // <FlatList
                //   data={selectedMeetings}
                //   keyExtractor={item => item.id}
                //   renderItem={({ item }) => (
                //     <View style={styles.meetingCard}>
                //       <Text>{item.title}</Text>
                //       <Text>{item.Description}</Text>
                //       <Text>{item.organizer}</Text>
                //     </View>
                //   )}
                // />
                <FlatList
                  data={selectedMeetings}
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
                        <View style={styles.meetProg}>
                          <Text style={styles.statusTxt}>{item.status}</Text>
                          {/* <Text
                            style={[
                              styles.statusTxt, styles.bgColor,
                              { color: getStatusColor(item.state) },
                            ]}
                          >
                            {item.state}
                          </Text> */}
                        </View>
                      </View>
                    </View>
                  )}
                />
              )}
            </View>
          ) : (
            <View style={styles.placeholder}>
              <Text>No tasks and meetings assigned for the day.</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    meetProg: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    statusTxt: {
      backgroundColor: "#023B5E",
      paddingHorizontal: 8, // Reduce paddingHorizontal
      paddingVertical: 4, // Reduce paddingVertical
      borderRadius: 5,
      fontSize: 14, // Reduce fontSize
      color: "white",
      fontWeight: "600",
      minWidth: 80, // Reduce minWidth
      textAlign: "center",
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
      backgroundColor:"white"
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
      color: '#999999',
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
      backgroundColor: 'lightblue',
      padding: 10,
      marginBottom: 10,
      width: '100%',
      borderRadius: 5,
    },
  });
  