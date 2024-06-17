
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import InitialsAvatar from './initialAvatar';
import { router } from 'expo-router';
import useIdStore from '../app/leadStore';
import { FontAwesome } from '@expo/vector-icons';
 

const AccountHeader = ({ header }) => {
  const[navigatePath, setNavigatePath]=useState('');
  const[backNavigation, setBackNavigation]=useState('');
  const flag = useIdStore((state)=>state.flag);
  let name = {};
  Object.entries(header).forEach(([key, { label, value }]) => {
    if (key === 'first_name') {
      name.first_name = value;
    } else if (key === 'last_name') {
      name.last_name = value;
    } else if (key === 'opportunity_name') {
      name.opportunity_name = value;
    } else if (key === 'account_name') {
      name.account_name = value;
    }
  });
 
 
 
 
  const accountType = useIdStore((state)=>state.account_type)
console.log(flag,"flag from header")
  const handleBack = () => {
    if(flag=='contact'){
     
      router.navigate('headerScreens/DrawerScreens/contacts')
      }
      else if(flag=='account'){
     
      router.navigate('headerScreens/DrawerScreens/accounts')
      }
      else if(flag=='opportunity'){
     
      router.navigate('headerScreens/DrawerScreens/deals')
  };
}
 
  const goToEdit=()=>{
    if(flag=='contact')
    router.navigate('formComponents/editContact');
  else if(flag=='account')
  router.navigate('formComponents/editAccount');
else if(flag=='opportunity')
router.navigate('formComponents/editOpportunity')
  }
 
  const renderHeaderDetails = () => {
    return Object.entries(header).map(([key, value]) => {
      if (key === 'first_name' || key === 'last_name') {
        return null;
      }
      else if (key === 'opportunity_name') {
        return null;
      }
      else if (key === 'account_name') {
        return null;
      }
      else if (key==='account'){
        return null;
      }
 
      return (
        <View style={styles.headerDetailContainer} key={key}>
          <View><Text style={styles.headerDetailLabel}>{value.label}</Text></View>
          <View><Text style={styles.headerDetailValue}>{value.value}</Text></View>
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
 
 
      <View style={styles.userDetailsContainer}>
   
      {(flag == 'contact') && (accountType == 'person') &&
      <View style={styles.opportunityIcon}>
        <FontAwesome name="user" size={28} color="white" />
      </View>}
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name.first_name} {name.last_name}</Text>
        </View>
 
        {(flag == 'opportunity')&&
        <View style={styles.opportunityIcon}>
        <Ionicons name="book" size={24} color="white" />
        </View>}
        <View style={styles.userInfo1}>
        <Text style={styles.name}>{name.opportunity_name}</Text>
        </View>
 
        {(accountType == 'corporate')&&
        <View style={styles.opportunityIcon}>
        <Ionicons name="business" size={24} color="white" />
        </View>}
          <View style={styles.userInfo1}>
            <Text style={styles.name}>{name.account_name}</Text>
            </View>
      </View>
 
 
      <View style={styles.headerDetails}>
        {renderHeaderDetails()}
      </View>
      <View style={styles.actionButtonsContainer}>
      <TouchableOpacity style={styles.actionButton} onPress={goToEdit}>
          <Ionicons name="pencil" size={24} color="white" />
        </TouchableOpacity>
        </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#023B5E',
    paddingHorizontal: 20,
    // paddingTop: 30,
  },
  backButton: {
    position: 'absolute',
    top: 2,
    right: 2,
    zIndex: 1,
  },
  userDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  opportunityIcon: {
    marginRight: 10,
    top: 33// can remove
  },
  userInfo: {
    marginLeft: 10,
    top: 33
  },
  userInfo1: {
    marginLeft: 10,
    top: 33// can remove
    // backgroundColor:'red',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },  
  headerDetails: {
    marginTop: 20,
    top: 53,// can remove
    flexDirection: 'row', // Display details in a row
    justifyContent: 'space-between', // Equal space between elements
    flexWrap: 'wrap', // Allow wrapping if content exceeds width
  },
  headerDetailContainer: {
    marginBottom: 10,
    alignItems: 'center',
    // backgroundColor: 'red',
    flexDirection: 'coloumn', // Display label and value in a row
    flex: 1, // Take up available space equally
  },
  headerDetailLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 5, // Add spacing between label and value
  },
  headerDetailValue: {
    color: 'white',
    marginTop: 5,
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
    height: 30,
   
    borderRadius: 20,
    backgroundColor: '#023B5E',
  },
 
 
 
});
 
export default AccountHeader;