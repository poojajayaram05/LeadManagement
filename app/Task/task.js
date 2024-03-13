
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
// import {DATA} from '../../taskData'; 


const DATA = [
  {
    id: '1',
    state: 'follow-up',
    taskName: 'Carla Demo Lead',
    ownerName: 'John Doe',
    time: '12:23pm',
    duedate: 'Today',
    assignedToMe: 'Carla',
    assignedByMe: 'Sofia',
  },
  {
    id: '2',
    state: 'in-progress',
    taskName: 'Another Task',
    ownerName: 'Jane Smith',
    time: '3:45pm',
    duedate: 'Upcoming',
    assignedToMe: 'Carla',
    assignedByMe: 'Sara',
  },
  {
    id: '3',
    state: 'completed',
    taskName: 'Final Task',
    ownerName: 'Bob Johnson',
    time: '9:15am',
    duedate: 'Today',
    assignedToMe: 'Patty',
    assignedByMe: 'Bhumika',
  },
  {
    id: '4',
    state: 'in-progress',
    taskName: 'Another Task',
    ownerName: 'Jane Smith',
    time: '3:45pm',
    duedate: 'Upcoming',
    assignedToMe: 'Capy',
    assignedByMe: 'Nikita',
  },
  {
    id: '5',
    state: 'completed',
    taskName: 'Final Task',
    ownerName: 'Bob Johnson',
    time: '9:15am',
    duedate: 'Overdue',
    assignedToMe: 'Arpita',
    assignedByMe: 'Sahil',
  },
  {
    id: '6',
    state: 'pending',
    taskName: 'New Project',
    ownerName: 'Alice Williams',
    time: '2:30pm',
    duedate: 'Overdue',
    assignedToMe: 'Carla',
    assignedByMe: 'Sofia',
  },
  {
    id: '7',
    state: 'follow-up',
    taskName: 'Client Meeting',
    ownerName: 'Chris Davis',
    time: '10:00am',
    duedate: 'Upcoming',
    assignedToMe: 'Ruby',
    assignedByMe: 'Roxy',
  },
  {
    id: '8',
    state: 'in-progress',
    taskName: 'Coding Task',
    ownerName: 'Eva Brown',
    time: '4:45pm',
    duedate: 'Overdue',
    assignedToMe: 'Dhanush',
    assignedByMe: 'Yashas',
  },
];
const TaskItem = ({ state, taskName, ownerName, time }) => (
  <View style={styles.item}>
    <Image
      source={checkbox}
      style={{ width: 30, height: 30, marginRight: 90, marginTop:20 }}
    />
    <View style={styles.textstyle}>
      <Text style={[styles.title, { color: '#4789e6', fontSize: 16 }]}>
        {`${state}`}
      </Text>
      <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>{`${taskName}`}</Text>
      <Text style={styles.subtitle}>{`Owner: ${ownerName}`}</Text>
      <Text style={styles.subtitle}>{`${time}`}</Text>
    
    </View>
    <TouchableOpacity
      onPress={() => console.log('Edit pressed')}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Ionicons name="pencil" size={16} color="black" /> 
    </TouchableOpacity>   
  </View>
);


  // const TaskCard = () => {
  //   const AssignedByMe='Assigned By Me';
  //   const AssignedToMe='Assigned To Me';
  //   const [isDropdownVisible, setDropdownVisible] = useState(false);
  //   const [selectedTaskOption, setSelectedTaskOption] = useState('');
  //   const [filteredData, setFilteredData] = useState(DATA);
  //   let filteredTasks=DATA;
  
   
  //   const [activeTab, setActiveTab] = useState('Today');
  
  //   useEffect(() => {
  //     filterData();
  //   }, [ activeTab]);

 
  
  //   const filterData = (selectedTaskOption) => {

  
  //     if (selectedTaskOption == AssignedByMe) {
  //       filteredTasks = DATA.filter((item) => item.assignedByMe =='Sofia');
  //     } else if (selectedTaskOption == AssignedToMe) {
  //       const currentUser = 'Carla';
  //       filteredTasks = DATA.filter((item) => item.assignedToMe == currentUser);
  //     }
     
  //     console.log("filtered task", filteredTasks);
  
  //     if (activeTab === 'Today') {
  //       filteredTasks = filteredTasks.filter((item) => item.duedate === 'Today');
  //     } else if (activeTab === 'Upcoming') {
  //       filteredTasks = filteredTasks.filter((item) => item.duedate === 'Upcoming');  
  //     } else if (activeTab === 'Overdue') {
  //       filteredTasks = filteredTasks.filter((item) => item.duedate === 'Overdue');
  //     } else if (activeTab === 'Done') {
  //       filteredTasks = filteredTasks.filter((item) => item.state === 'completed');
  //     }

  //     setFilteredData(filteredTasks); 
  //     console.log("filtered data",filteredData);
  //   };

  //   useEffect(() => {
  //     console.log(selectedTaskOption);
  //     filterData(selectedTaskOption);
  //   }, [selectedTaskOption]);

  
  //   const renderDropdownButton = () => ( 
  //     <TouchableOpacity
  //       style={styles.dropdownButton}
  //       onPress={() => setDropdownVisible(!isDropdownVisible)}
  //     >
  //       <Text style={styles.dropdownButtonText}>{selectedTaskOption}</Text>
  //       <Ionicons name="caret-down" size={20} color="white" />
  //     </TouchableOpacity>
  //   );

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
        tempFilteredTasks = tempFilteredTasks.filter((item) => item.duedate === 'Today');
      } else if (activeTab === 'Upcoming') {
        tempFilteredTasks = tempFilteredTasks.filter((item) => item.duedate === 'Upcoming');
      } else if (activeTab === 'Overdue') {
        tempFilteredTasks = tempFilteredTasks.filter((item) => item.duedate === 'Overdue');
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
  
        <FlatList data={filteredData} renderItem={({ item }) => <TaskItem {...item} />} keyExtractor={(item) => item.id} />
  
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
