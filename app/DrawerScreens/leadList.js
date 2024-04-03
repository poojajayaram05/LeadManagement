import React ,{useState, useEffect}from 'react';
//import { leadData } from './leadData';
import { useCallback } from 'react';
import LeadItem from '../../leadComponents/leadCard';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {FetchLeads} from '../service/fetchLeads';
import { ActivityIndicator } from 'react-native';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
// import {leadData} from '../../customComponents/formData';
import * as SecureStore from 'expo-secure-store';
 

const LeadList = () => {

  const goToLeadCreate=()=>{
    console.log("inside navigation")
    router.navigate('/formComponents/createLead');
    console.log("after natigation")
  }
  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
  const[leadData, setleadData]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
   
  //   const FetchLeads = async () => {
  //     const token = SecureStore.getItem('token');
  //     const stoken = JSON.parse(token);
  //     const apiToken = stoken.accessToken;
  //     console.log(apiToken);  
  //     const getLeadURL="https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_c" ;
  //     try {
  //         const response = await fetch(getLeadURL, {
  //             method: 'GET',
  //             headers: {
  //               'Content-Type': 'application/json',
  //               'Authorization' : 'Bearer ' + apiToken
               
  //             },
  
  //           })

  //           const data = await response.json();
  //           console.log("leads data is",data.result);
  //           setleadData(data.result);
  
           
  //         //   router.replace('/DrawerScreens/leadList')
  //     } catch (error) {
  //         console.error('Error fetching leads:', error);
  //         throw error; // You can handle the error further or throw it for the caller to handle
  //     }
  // };
 
    const fetchData = async () => {
        try {
            const ldata = await FetchLeads(); // Call FetchLeads and wait for the result
            
            setleadData(ldata.result); // Set the state with the fetched data
            console.log("this is the lead data",ldata.result);
            setleadData(ldata.result);
            console.log(leadData)
            setIsLoading(false); // Log the fetched data
        } catch (error) {
            // Handle errors if any
            console.error('Error in fetching leads:', error);
            setIsLoading(false);
        }
    };

    fetchData(); // Call the fetchData function defined above
}, []); // Empty dependency array means it will run only once on mount


if (isLoading) {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#023B5E" />
    </View>
  );
}

 

 

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      
   <LeadItem
      FirstName={item.first_name}
      LastName={item.last_name}
      Email={item.email}
      Phone={item.mobile_phone}
      lead_status={item.lead_status}
      number={item.number}
      qualification={item.qualification}
      gender={item.gender}
     
     
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust background color as needed
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