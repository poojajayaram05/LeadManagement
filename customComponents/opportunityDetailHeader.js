
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';

import { leadData } from '../customComponents/formData';
import { router } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import useIdStore from '../app/leadStore';
import InitialsAvatar from '../customComponents/initialAvatar';
import ArrowBack from '../customComponents/arrowBack';
import { FetchLeads } from '../app/service/fetchLeads';
import { useOpportunityStore } from '../app/leadStore';
import { FetchOpportunities } from '../app/service/fetchOpportunities';
import { FontAwesome } from '@expo/vector-icons';
 
const OpportunityHeader = () => {
//   const[leadData, setLeadData]=useState([]);
  const [opportunityData, setOpportunityData] = useState([]);
 const oid= useOpportunityStore((state) => state.number)
 console.log(oid, "oidddd");
 function extractDate(timestamp) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    const formattedDate = `${date < 10 ? '0' + date : date}-${month < 10 ? '0' + month : month}-${year}`;
    return formattedDate;
  }
 
  const goToDealEdit=()=>{
    router.navigate('formComponents/editOpportunity')
  }
 
 
useEffect(() => {
    const fetchData = async () => {
      try {
        const odata = await FetchOpportunities();
        setOpportunityData(odata.result);
        console.log("oppp data",opportunityData);
      } catch (error) {
        console.error('Error in fetching leads:', error);
      }
    };
    fetchData();
  }, []);

  if (!opportunityData || !oid) {
    return null;
  }


  const opp = opportunityData.find((opportunity) => opportunity.number === oid);

  if (!opp) {
    // If opp is undefined, return null or handle the scenario accordingly
    return null;
  }
 
//const opp = opportunityData.find((opportunity) => opportunity.number === oid);
console.log(opp,"thisisoppdata")
const{  opportunity_name, category, opportunity_value, forecast_close_date, states}=opp||' ';
const fdata = extractDate(forecast_close_date);
  const handleBack = () => {
   
    router.navigate('/DrawerScreens/deals');
  };
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        {/* <ArrowBack/> */}
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.actionButtonsContainer}>
      
        <TouchableOpacity style={styles.actionButton} onPress={goToDealEdit}>
          <Ionicons name="pencil" size={24} color="white" />
        </TouchableOpacity>

      </View>
   
{/*  
      <View style={styles.userDetailsContainer}>
      <FontAwesome name="dollar" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.name}>{opportunity_name}</Text>
     
      </View> */}

<View style={styles.iconContainer}>
  <View style={styles.circle}>
    <FontAwesome name="user" size={24} color="#023B5E"  />
  </View>
  <Text style={styles.name}>{opportunity_name}</Text>
     
</View>
 
      <View style={styles.lifestyleContainer}>
        <View style={styles.lifecycleStage}>
          <Text style={styles.lifecycleHeading}>Status</Text>
          <Text style={styles.lifecycleText}>{states}</Text>
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.tempHeading}>Close Date</Text>
          <Text style={styles.tempText}>{fdata}</Text>
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.tempHeading}>Value</Text>
          <Text style={styles.tempText}>INR {opportunity_value}</Text>
        </View>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
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
    marginBottom:10,
    backgroundColor: '#023B5E',
    paddingHorizontal: 20,
    paddingTop: 40, // Add padding top to avoid overlapping with the back button
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
    // backgroundColor: '#f0f0f0',
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
  lifestyleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
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
  scoreContainer: {
    alignItems: 'center',
    flex: 1,
  },
  scoreHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scoreText: {
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
 
export default OpportunityHeader;