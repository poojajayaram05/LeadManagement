import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { router } from 'expo-router';
import useIdStore from '../app/leadStore';
import InitialsAvatar from '../customComponents/initialAvatar';
import { FetchLeads } from '../app/service/fetchLeads';  
 
const LeadDet = () => {
  const[leadData, setLeadData]=useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ldata = await FetchLeads(); // Call FetchLeads and wait for the result
        setLeadData(ldata.result); // Set the state with the fetched data 
        console.log("this is the lead data", ldata); // Log the fetched data
      } catch (error) {
        console.error('Error in fetching leads:', error);
      }
    };
    fetchData(); 
  }, []); 

  const leadId = useIdStore((state) => state.number);
  const lead = leadData.find((lead) => lead.number === leadId);
  const { firstname, lastname, email, qualification, leadstatus, number, gender, mobilephone} = lead || {};

  const goToleadEdit = () => {
    router.navigate('/formComponents/editLead')
  };
  const handleBack = () => {
    router.navigate('/DrawerScreens/leadList');
  };
  const handleCall = () => {
    Linking.openURL(`tel:${mobilephone}`);
  };
  const handleEmail = () => {
  Linking.openURL(`mailto:${email}`);
  };
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
 
      <View style={styles.userDetailsContainer}>
        <InitialsAvatar name={`${firstname} ${lastname}`} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{firstname} {lastname}</Text>
        </View>
      </View>
 
      <View style={styles.headingContainer}>
        <View style={styles.heading}>
          <Text style={styles.subheading}>Status</Text>
          <Text style={styles.subheadingText}>{leadstatus}</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.subheading}>Qualification</Text>
          <Text style={styles.subheadingText}>{qualification}</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.subheading}>Score</Text>
          <Text style={styles.subheadingText}>15</Text>
        </View>
      </View>
 
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
          <Ionicons name="call" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleEmail}>
          <Ionicons name="mail" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={goToleadEdit}>
          <Ionicons name="pencil" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
 
  divider: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
  container: {
    flex: 1,
    marginBottom:10,
    backgroundColor: '#023B5E',
    paddingHorizontal: 20,
    paddingTop: 20, // Add padding top to avoid overlapping with the back button
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
    justifyContent: 'flex-start',
    marginLeft: 0, // Adjust as needed for the desired distance from the left edge
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
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  heading: {
    alignItems: 'center',
    flex: 1,
  },
  subheading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subheadingText: {
    color: 'white',
    marginTop: 5,
  },
 
  userInfo: {
    marginLeft: 3, // Adjust margin as needed
    width: 140, // Set a fixed width
    height: 60, // Increase height as needed
    justifyContent: 'center', // Center vertically
  },
 
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the right
    position: 'absolute',
    top: 33,
    right: 10, 
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
 
export default LeadDet;