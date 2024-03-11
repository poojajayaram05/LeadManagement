import React ,{useState}from 'react';
//import { leadData } from './leadData';
import { useCallback } from 'react';
import LeadItem from '../leadComponents/leadCard';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { FontAwesome } from '@expo/vector-icons';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';

 
 const leadData =
[
 
  {
 
    "firstname": "John",
 
    "lastname": "Smith",
 
    "email": "johnsmith1@gmail.com",
 
    "job-title": "Engineer",
 
    "phone": "8884763231",
    "status":"open",
    "temperature":"hot",
    "id":"1",
 
  },
 
  {
 
    "firstname": "Jane",
 
    "lastname": "Johnson",
 
    "email": "janejohnson2@yahoo.com",
 
    "job-title": "Designer",
 
    "phone": "8891234567",
    "status":"contacted",
    "temperature":"cold",
    "id":"2",
 
  },
 
  {
 
    "firstname": "Michael",
 
    "lastname": "Brown",
 
    "email": "michaelbrown3@hotmail.com",
 
    "job-title": "Manager",
 
    "phone": "8902345678",
    "status":"qualified",
    "temperature":"warm",
    "id":"3",
 
  },
 
  {
 
    "firstname": "Emily",
 
    "lastname": "Jones",
 
    "email": "emilyjones4@outlook.com",
 
    "job-title": "Developer",
 
    "phone": "8913456789",
    "status":"accepted",
    "temperature":"cold",
    "id":"4",
 
  },
 
  {
 
    "firstname": "William",
 
    "lastname": "Garcia",
 
    "email": "williamgarcia5@gmail.com",
 
    "job-title": "Analyst",
 
    "phone": "8924567890",  
    "status":"accepted",
    "temperature":"hot",
    "id":"5",
 
  },
 
  {
 
    "firstname": "Olivia",
 
    "lastname": "Miller",
 
    "email": "oliviamiller6@yahoo.com",
 
    "job-title": "Consultant",
 
    "phone": "8935678901",
    "status":"qualified",
    "temperature":"hot",
    "id":"6",
 
  },
 
  {
 
    "firstname": "James",
 
    "lastname": "Davis",
 
    "email": "jamesdavis7@hotmail.com",
 
    "job-title": "Coordinator",
 
    "phone": "8946789012",
    "status":"qualified",
    "temperature":"cold",
    "id":"7",
 
  },
 
  {
 
    "firstname": "Sophia",
 
    "lastname": "Rodriguez",
 
    "email": "sophiarodriguez8@outlook.com",
 
    "job-title": "Administrator",
 
    "phone": "8957890123",
    "status":"qualified",
    "temperature":"warm",
    "id":"8",
 
  },
 
  {
 
    "firstname": "Benjamin",
 
    "lastname": "Martinez",
 
    "email": "benjaminmartinez9@gmail.com",
 
    "job-title": "Engineer",
 
    "phone": "8968901234",
    "status":"qualified",
    "temperature":"warm",
    "id":"9",
 
  },
 
  {
 
    "firstname": "Emma",
 
    "lastname": "Hernandez",
 
    "email": "emmahernandez10@yahoo.com",
 
    "job-title": "Designer",
 
    "phone": "8979012345",
    "status":"qualified",
    "temperature":"cold",
    "id":"10",
 
  }
]
const LeadList = () => {
  const [routes] = useState([
    { key: 'allLeads', title: 'All Leads' },
    { key: 'starredLeads', title: 'Starred Leads' },
   
  ]);
  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
 
  const toggleStarredLead = (leadId) => {
    if (starredLeads.includes(leadId)) {
      setStarredLeads(starredLeads.filter((id) => id !== leadId));
    } else {
      setStarredLeads([...starredLeads, leadId]);
    }
  };
 
  const goToTask=()=>{
    router.replace('/Task/task');
  }
  const handleFilterClick = () => {
    console.log('Filter clicked!');
  };
 
 
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'allLeads':
        return (
          <View sty>
            <FlatList
              data={leadData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        );
     
      default:
        return null;
    }
  };
 
  const renderItem = ({ item }) => (
    <TouchableOpacity>
    <LeadItem
      firstName={item.firstname}
      lastName={item.lastname}
      email={item.email}
      phone={item.phone}
      status={item.status}
      id={item.id}
      temperature={item.temperature}
      onStarPress={toggleStarredLead}
      isStarred={starredLeads.includes(item.id)}
    />
  </TouchableOpacity>
  );
 
  return (
    <View style={styles.container}>
     {/* <Button title='task' onPress={goToTask}></Button> */}
    
      {/* <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'LEADS', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}
{/*    
    <TouchableOpacity onPress={handleFilterClick} style={styles.filterIcon}>
          <FontAwesome name="filter" size={24} color="black" />
        </TouchableOpacity> */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: '#4789e6' }}
          />
        )}  
      />
       <TouchableOpacity style={styles.plusButton}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor:'#f2f2f2'
  },
  filterIcon: {
    marginLeft: 350,
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
 
export default LeadList;