import React ,{useState, useEffect}from 'react';
//import { leadData } from './leadData';
import { useCallback } from 'react';
import LeadItem from '../../leadComponents/leadCard';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {FetchLeads} from '../service/fetchLeads';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {leadData} from '../../customComponents/formData';
 

const LeadList = () => {

  const goToLeadCreate=()=>{
    console.log("inside navigation")
    router.navigate('/DrawerScreens/createLead');
    console.log("after natigation")
  }
  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
 

  useEffect(() => {
   
    FetchLeads()
      .then(data => {
       
        console.log('Data received:', data);
      })
      .catch(error => {
       
        console.error('Error fetching leads:', error);
      });
  }, []);

 

  const renderItem = ({ item }) => (
    <TouchableOpacity>
   <LeadItem
      FirstName={item.FirstName}
      LastName={item.LastName}
      Email={item.Email}
      Phone={item.Phone}
      Status={item.Status}
      Id={item.Id}
      label={item.label}
      Gender={item.Gender}
     
     
    />
  </TouchableOpacity>
  );
 
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
          <Text style={styles.myTasksText}>Leads</Text>
     
        </View> */}
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
       
      {/* <TabView
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
       */}
       <FlatList
              data={leadData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
     <View>
  <TouchableOpacity style={styles.plusButton} onPress={goToLeadCreate}>
   
    <Ionicons name="add" size={24} color="white" onPress={goToLeadCreate}/>
   
  </TouchableOpacity>
</View>

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
    backgroundColor: '#023B5E',
    padding: 15,
    borderRadius: 30,
    elevation: 4,
  },
header: {
  backgroundColor: '#023B5E',
  padding: 15,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
},
headerText: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  marginRight:280,
},
myTasksText: {
  color: 'white',
  fontSize: 16,
  marginLeft: 5,
},
 
});
 
export default LeadList;