import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useContactStore } from '../app/leadStore';
import {FetchContacts} from '../app/service/fetchContacts'
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';
 
 
const ContactHeader = () => {
//   const[leadData, setLeadData]=useState([]);
  const [contactData, setContactData] = useState([]);
 const cid= useContactStore((state) => state.number)
 console.log(cid, "cidddd");
 function extractDate(timestamp) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    const formattedDate = `${date < 10 ? '0' + date : date}-${month < 10 ? '0' + month : month}-${year}`;
    return formattedDate;
  }
 
 
 
useEffect(() => {
    const fetchData = async () => {
      try {
        const cdata = await FetchContacts();
        setContactData(cdata.result);
        console.log("contact data",contactData);
      } catch (error) {
        console.error('Error in fetching leads:', error);
      }
    };
    fetchData();
  }, []);
 
const contact = contactData.find((opportunity) => opportunity.number === cid);
console.log(contact,"thisisoppdata")
const{ ckyc_number, title, mailing_address, email,mobile, first_name, last_name}=contact||'';
 
  const handleBack = () => {
    router.navigate('/DrawerScreens/contacts');
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleCall = () => {
    Linking.openURL(`tel:${mobile}`);
  };
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        {/* <ArrowBack/> */}
        <Ionicons name="chevron-back" size={30} color="white" />
      </TouchableOpacity>
   
 
      {/* <View style={styles.userDetailsContainer}>
      <FontAwesome name="user" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.name}>{title}</Text>
      </View> */}
      <View style={styles.iconContainer}>
  <View style={styles.circle}>
    <FontAwesome name="user" size={24} color="#023B5E"  />
  </View>
  <Text style={styles.name}>{first_name} {last_name}</Text>
</View>

 
      <View style={styles.subtitle}>
      {/* <View style={styles.tempContainer}>
          <Text style={styles.tempHeading}>Title</Text>
          <Text style={styles.tempText}>{title}</Text>
        </View> */}
       
        
        <View style={styles.tempContainer}>
          <Text style={styles.tempHeading}>Phone Number</Text>
          <Text style={styles.tempText}>{mobile}</Text>
        </View>
        <View style={styles.lifecycleStage}>
          <Text style={styles.lifecycleHeading}>Email</Text>
          <Text style={styles.lifecycleText}>{email}</Text>
        </View>
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
          <Ionicons name="call" size={24} color="white" />
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.actionButton} onPress={handleEmail}>
          <Ionicons name="mail" size={24} color="white" />      
        </TouchableOpacity>

      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
    // iconContainer: {
    //     position: 'absolute',
    //     top: 2,
    //     left: 2,
    //     zIndex: 1,
    // },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    circle: {
      width: 40,
      height: 40,
      borderRadius: 20, // half of width and height to make it a circle
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    divider: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    container: {
      flex: 1,
      marginBottom: 10,
      backgroundColor: '#023B5E',
      paddingHorizontal: 20,
      paddingTop: 30, // Adjust this value to reduce the height of the blue container
    },
    
  backButton: {
    position: 'absolute',
    top: 2,
    right: 2,
    zIndex: 1,
  },
  backButtonContainer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  userDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
   // Adjust as needed for the desired distance from the left edge
  },
 
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  lifecycleStage: {
    alignItems: 'center',
    flex: 1,
  },
  lifecycleHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  lifecycleText: {
    color: 'white',
    marginTop: 5,
  },
  tempContainer: {
    alignItems: 'center',
    flex: 1,
  },
  tempHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tempText: {
    color: 'white',
    marginTop: 5,
  },

 
  userInfo: {
    marginLeft: 3, // Adjust margin as needed
    width: 140, // Set a fixed width
    height: 60, // Increase height as needed
    // backgroundColor: 'red',
    justifyContent: 'center', // Center vertically
  },
 
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the right
    position: 'absolute',
    top: 33,
    right: 10, // Adjust right position to avoid overlapping with the right edge
    zIndex: 1,
  },
 
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#023B5E',
  },
 
  buttonLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white', // Set text color to white to match the container
  },
});
 
export default ContactHeader;  