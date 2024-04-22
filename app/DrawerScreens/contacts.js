import React ,{useState, useEffect}from 'react';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { FetchContacts } from '../service/fetchContacts';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
 
import * as SecureStore from 'expo-secure-store';

import ContactItem from '../../customComponents/contactCard';
 
 
const ContactList = () => {
  const goToCreateContact=()=>{
    console.log("inside navigation")
    router.navigate('/formComponents/createContact');
    console.log("after navigation")
  }

  const[contactData, setContactData]=useState([]);

 
 
  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: FetchContacts});

  useEffect(() => {
    if (data) {
      setContactData(data.result);
    }
  }, [data]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#023B5E" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error in fetching Contacts</Text>
      </View>
    );
  }

 
 
if (isLoading) {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#023B5E" />
    </View>
  );
}
  const renderItem = ({ item }) => (
    <TouchableOpacity>  
   <ContactItem
      first_name={item.first_name}
      last_name={item.last_name}
      mobile={item.mobile}
      title={item.title}
      description={item.description}
      number={item.number}
      sys_id={item.sys_id}
     
 
    />
  </TouchableOpacity>
  );
 
  return (
    <View style={styles.container}>
       <FlatList
              data={contactData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
     <View>
  <TouchableOpacity style={styles.plusButton} >
    <Ionicons name="add" size={24} color="white" onPress={goToCreateContact}/>
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
 
export default ContactList;