
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
import {checkbox} from '../../assets/images';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import TaskItem from './taskCard';
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
    let filteredTasks = DATA;
    const [activeTab, setActiveTab] = useState('Today');
  
    useEffect(() => {
      filterData();
    }, [activeTab, selectedTaskOption]);
  
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
      <Modal transparent={true} visible={isDropdownVisible} animationType="slide">
        <TouchableWithoutFeedback onPress={closeDropdown}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.dropdownRow}
           
          >
            <Text  onPress={() => {
              setSelectedTaskOption("Assigned By Me");
              filterData('Assigned By Me');
              console.log("hiiiii",selectedTaskOption);
              closeDropdown();
            }} style={styles.dropdownRowText}>Assigned By Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownRow}
            onPress={() => {
              setSelectedTaskOption('Assigned To Me');
              filterData(selectedTaskOption);
              closeDropdown();
            }}
          >
            <Text style={styles.dropdownRowText}>Assigned To Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownRow}
            onPress={() => {
              setSelectedTaskOption('All');
              filterData(selectedTaskOption);
              closeDropdown();
            }}
          >
            <Text style={styles.dropdownRowText}>All</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
      
        // Make sure to add the missing properties
    />
  )}
  keyExtractor={(item) => item.id}
/>

  
        {renderDropdown()}
        <TouchableOpacity style={styles.plusButton}>
        <FontAwesome name="plus" size={24} color="white"/>
      </TouchableOpacity>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
  },
  title: {
    fontSize: 32,
  },
  textstyle:{
    marginLeft:-70,
    flex:1,
  },
  filterIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  header: {
    backgroundColor: '#4789e6',
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:80,
  },
  myTasksText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:280,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    top: 60,
    right: 10,
    backgroundColor: '#4789e6',
    borderRadius: 8,
    padding: 10,
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
    backgroundColor: '#4789e6',
    paddingVertical: 10,
  },

  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },

  activeTab: {
    backgroundColor: '#29579B',
  },

  tabText: {
    color: 'white',
  },
  plusButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4789e6',
    padding: 15,
    borderRadius: 30,
    elevation: 4,
  },
});
export default TaskCard;
