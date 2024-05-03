import React ,{useState, useEffect}from 'react';
//import { leadData } from './leadData';
import { useCallback } from 'react';
import LeadItem from '../../leadComponents/leadCard';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {FetchLeads} from '../service/fetchLeads'
import { ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';

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
import { TextInput } from 'react-native-gesture-handler';
 

const LeadList = () => {

  const goToLeadCreate=()=>{
    console.log("inside navigation")
    router.navigate('/formComponents/createLead');
    console.log("after natigation")
  }
  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
  const[leadData, setleadData]=useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const[searchQuery, setSearchQuery]=useState('')

  const handleSearch=(item)=>{
    setSearchQuery(item);
  }



 

//   useEffect(() => {

//     const fetchData = async () => {
      
//         const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: FetchLeads });
//         console.log("leads",data.result);
//         setleadData(data.result)

//         if (isLoading) {
//           return (
//             <View style={styles.loadingContainer}>
//               <ActivityIndicator size="large" color="#023B5E" />
//             </View>
//           );
//         }
//         if (error) {
//           return (
//             <View style={styles.loadingContainer}>
//              <Text>Error in fetching leads</Text>
//             </View>
//           );
//         }
//     };

  

//     fetchData(); 
// }, []); 

const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: FetchLeads});

  useEffect(() => {
    if (data) {
      setleadData(data.result);
    }
  }, [data]);

  console.log(leadData);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#023B5E" />
      </View>
    );
  }
  const filteredLeads = leadData.filter((item) => {
    const fullName = `${item.firstname} ${item.lastname}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error in fetching leads</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      
   <LeadItem
      FirstName={item.firstname}
      LastName={item.lastname}
      Email={item.email}
      Phone={item.mobilephone}
      lead_status={item.leadstatus}
      number={item.number}
      qualification={item.qualification}
      gender={item.gender}
      sys_id={item.sys_id}
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
    <SafeAreaView style={{ marginHorizontal:20, flexDirection:'row'}}>
       <FontAwesome name='search' size={15} color='black' style={{marginTop:10, marginRight:10}}/>
      
        <TextInput 
        placeholder='Search'
        //clearButtonMode='always'
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={handleSearch}
        ></TextInput>
       </SafeAreaView>
       <FlatList
              data={filteredLeads}
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