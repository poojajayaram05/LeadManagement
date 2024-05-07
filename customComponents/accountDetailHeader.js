import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import InitialsAvatar from './initialAvatar';
import { router } from 'expo-router';
import useIdStore from '../app/leadStore';


const AccountHeader = ({ header }) => {
  const[navigatePath, setNavigatePath]=useState('');
  let name = {}; // Initialize an empty object to store first_name and last_name

  Object.entries(header).forEach(([key, { label, value }]) => {
    if (key === 'first_name') {
      name.first_name = value; // Assign value to first_name property of name object
    } else if (key === 'last_name') {
      name.last_name = value; // Assign value to last_name property of name object
    }
  });


  if(flag=='contact')
  setNavigatePath('formComponents/editContact')
else if(flag=='account')
setNavigatePath('formComponents/editAccount')
else if(flag=='opportunity')
setNavigatePath('formComponents/editOpportunity')
  
  const flag = useIdStore((state)=>state.flag);
  const accountType = useIdStore((state)=>state.account_type)
console.log(flag,"flag from header")
  const handleBack = () => {
    router.back();
  };

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
      // Skip rendering if the key is 'first_name' or 'last_name'
      if (key === 'first_name' || key === 'last_name') {
        return null;
      }
  
      return (
        <View style={styles.headerDetailContainer} key={key}>
          <Text style={styles.headerDetailLabel}>{value.label}</Text>
          <Text style={styles.headerDetailValue}>{value.value}</Text>
        </View>
      );
    });
  };
  
  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="chevron-back" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.userDetailsContainer}>
      {(flag !== 'opportunity' && accountType !== 'corporate') && <InitialsAvatar name={`${name.first_name} ${name.last_name}`} />}
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name.first_name} {name.last_name}</Text>
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
    paddingTop: 30,
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
  userInfo: {
    marginLeft: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  headerDetails: {
    marginTop: 20,
    flexDirection: 'row', // Display details in a row
    flexWrap: 'wrap', // Allow wrapping if content exceeds width
  },
  headerDetailContainer: {
    marginRight: 20, // Add margin between detail items
    marginBottom: 10,
    flexDirection: 'row', // Display label and value in a row
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
    height: 40,
    borderRadius: 20,
    backgroundColor: '#023B5E',
  },
 
});

export default AccountHeader;
