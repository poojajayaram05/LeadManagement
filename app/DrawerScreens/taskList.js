import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import TaskItem from '../../taskComponents/taskCard'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import {DATA} from '../../taskData';
const DATA = [
  {
    id: '1',
    taskType: "Meeting",
    state: 'follow-up',
    taskName: 'Carla Demo Lead',
    ownerName: 'John Doe',
    dueDate: "2024-03-01",
    dueTime: "10:00 AM",
    description: "Discuss project details with the client",
    leadName:"John Smith",
    dueState: 'Today',
    assignedToMe: 'Carla',
    assignedByMe: 'Sofia',
  },
  {
    id: '2',
    taskType: "Assignment",
    state: 'in-progress',
    taskName: 'Another Task',
    ownerName: 'Jane Smith',
    dueDate: "2024-03-05",
    dueTime: "2:30 PM",
    description: "Implement new features",
    leadName:"Jane Johnson",
    dueState: 'Upcoming',
    assignedToMe: 'Carla',
    assignedByMe: 'Sara',
  },
  {
    id: '3',
    taskType: "Review",
    state: 'completed',
    taskName: 'Final Task',
    ownerName: 'Bob Johnson',
    dueDate: "2024-03-10",
   dueTime: "3:45 PM",
    description: "Review project progress and plan for next steps",
    leadName:"Michael Brown",
    dueState: 'Today',
    assignedToMe: 'Patty',
    assignedByMe: 'Bhumika',
  },
  {
    id: '4',
    taskType: "Task",
    state: 'in-progress',
    taskName: 'Another Task',
    ownerName: 'Jane Smith',
    dueDate: "2024-03-15",
    dueTime: "9:00 AM",
    description: "Start working on the new project",
    leadName:"Emily Jones",
    dueState: 'Upcoming',
    assignedToMe: 'Capy',
    assignedByMe: 'Nikita',
  },
  {
    id: '5',
    taskType: "Event",
    state: 'completed',
    taskName: 'Final Task',
    ownerName: 'Bob Johnson',
    dueDate: "2024-03-20",
    dueTime: "6:00 PM",
    description: "Team-building activities and dinner",
    leadName:"William Garcia",
    dueState: 'Overdue',
    assignedToMe: 'Arpita',
    assignedByMe: 'Sahil',
  },
  {
    id: '6',
    taskType: "Meeting",
    state: 'pending',
    taskName: 'New Project',
    ownerName: 'Alice Williams',
    dueDate: "2024-03-25",
    dueTime: "11:30 AM",
    description: "Discuss project updates and challenges",
    leadName:"Olivia Miller",
    dueState: 'Overdue',
    assignedToMe: 'Carla',
    assignedByMe: 'Sofia',
  },
  {
    id: '7',
    taskType: "Assignment",
    state: 'follow-up',
    taskName: 'Client Meeting',
    ownerName: 'Chris Davis',
    dueDate: "2024-03-20",
    dueTime: "11:35 AM",
    description: "Prepare project documentation",
    leadName:"James Davis",
    dueState: 'Upcoming',
    assignedToMe: 'Ruby',
    assignedByMe: 'Roxy',
  },
  {
    id: '8',
    taskType: "Meeting",
    state: 'in-progress',
    taskName: 'Coding Task',
    ownerName: 'Eva Brown',
    dueDate: "2024-03-30",
    dueTime: "4:15 PM",
    description: "Discuss project updates",
    leadName:"Benjamin Martinez ",
    dueState: 'Overdue',
    assignedToMe: 'Dhanush',
    assignedByMe: 'Yashas',
  },
];
 
 
 
const TaskCard = () => {
  const AssignedByMe = 'Assigned By Me';
  const AssignedToMe = 'Assigned To Me';
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedTaskOption, setSelectedTaskOption] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);
  const [activeTab, setActiveTab] = useState('Today');
 
  useEffect(() => {
    filterData();
  }, [activeTab, selectedTaskOption]);

  goToTaskCreate=()=>{
    router.navigate('/DrawerScreens/createTask')
  }
 
  const filterData = () => {
    let tempFilteredTasks = DATA;
 
    if (selectedTaskOption === AssignedByMe) {
      tempFilteredTasks = tempFilteredTasks.filter((item) => item.assignedByMe === 'Sofia');
    } else if (selectedTaskOption === AssignedToMe) {
      const currentUser = 'Carla';
      tempFilteredTasks = tempFilteredTasks.filter((item) => item.assignedToMe === currentUser);
    }
 
    if (activeTab === 'Today') {
      tempFilteredTasks = tempFilteredTasks.filter((item) => item.dueState === 'Today');
    } else if (activeTab === 'Upcoming') {
      tempFilteredTasks = tempFilteredTasks.filter((item) => item.dueState === 'Upcoming');
    } else if (activeTab === 'Overdue') {
      tempFilteredTasks = tempFilteredTasks.filter((item) => item.dueState === 'Overdue');
    } else if (activeTab === 'Done') {
      tempFilteredTasks = tempFilteredTasks.filter((item) => item.state === 'completed');
    }
 
    setFilteredData(tempFilteredTasks);
  };
 
  const renderDropdownButton = () => (
    <TouchableOpacity
      style={styles.dropdownButton}
      onPress={() => setDropdownVisible(!isDropdownVisible)}
    >
      <Text style={styles.dropdownButtonText}>{selectedTaskOption}</Text>
      <Ionicons name="caret-down" size={20} color="white" />
    </TouchableOpacity>
  );
 
  const closeDropdown = () => {
    setDropdownVisible(false);
  };
 
  const renderDropdown = () => (
    <TouchableWithoutFeedback onPress={closeDropdown}>
      <View style={[styles.dropdown, { display: isDropdownVisible ? 'flex' : 'none' }]}>
        <TouchableOpacity
          style={styles.dropdownRow}
          onPress={() => {
            setSelectedTaskOption("Assigned By Me");
            filterData();
            closeDropdown();
          }}
        >
          <Text style={styles.dropdownRowText}>Assigned By Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropdownRow}
          onPress={() => {
            setSelectedTaskOption('Assigned To Me');
            filterData();
            closeDropdown();
          }}
        >
          <Text style={styles.dropdownRowText}>Assigned To Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropdownRow}
          onPress={() => {
            setSelectedTaskOption('All');
            filterData();
            closeDropdown();
          }}
        >
          <Text style={styles.dropdownRowText}>All</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
 
  const renderTab = (tabName) => (
    <TouchableOpacity
      style={[styles.tab, activeTab === tabName && styles.activeTab]}
      onPress={() => {
        setActiveTab(tabName);
        filterData();
      }}
    >
      <Text style={styles.tabText}>{tabName}</Text>
    </TouchableOpacity>
  );
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.myTasksText}>Tasks</Text>
        {renderDropdownButton()}
      </View>
 
      <View style={styles.tabsContainer}>
        {renderTab('Today')}
        {renderTab('Upcoming')}
        {renderTab('Overdue')}
        {renderTab('Done')}
      </View>
 
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TaskItem
            ownerName={item.ownerName}
            taskName={item.taskName}
            state={item.state}
            description={item.description}
            taskType={item.taskType}
            dueDate={item.dueDate}
            dueTime={item.dueTime}
            leadName={item.leadName}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.plusButton} onPress={goToTaskCreate}>
        <Ionicons name="add" size={24} color="white" onPress={goToTaskCreate} />
      </TouchableOpacity>
 
      {renderDropdown()}
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    backgroundColor: '#023B5E',
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  myTasksText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownButtonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 5,
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    right: 10,
    backgroundColor: '#023B5E',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownRow: {
    padding: 10,
  },
  dropdownRowText: {
    color: 'white',
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#023B5E',
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#023B5E',
  },
  tabText: {
    color: 'white',
  },
  plusButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#023B5E',
    padding: 15,
    borderRadius: 30,
    elevation: 4,
  },
});
 
export default TaskCard;
 
 
