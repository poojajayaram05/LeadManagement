import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button,Image,ScrollView } from 'react-native';
import { router } from 'expo-router';
import {profile} from '../assets/images';
import BadgeLead from './badgeLead';
import { FontAwesome } from '@expo/vector-icons';
import useIdStore from '../app/leadStore';
import { set } from 'zod';
import { Ionicons } from '@expo/vector-icons';
import { avatarPic } from '../assets/images';
import { femaleAvatar } from '../assets/images';
import Colors from '@/constants/Colors';
import { Linking } from 'react-native';

 
const LeadItem = ({ FirstName, LastName, Email, Phone, lead_status,qualification, number, gender,sys_id}) => {
   
    const [showSecondImage, setShowSecondImage] = useState(false);
    const[selectedStar, setSelectedStar]=useState(false);
    const{ leadId, setLeadId } = useIdStore();
    const{status, setStatus}=useIdStore();
    const{qualifications, setQualification}=useIdStore()
    const [showDropdown, setShowDropdown] = useState(false);

      const{sys_idd, setSysId}=useIdStore();
      const{flag,setFlag}=useIdStore();
 
    const goToEditLead = () => {
        setLeadId(Id);
        router.navigate('formComponents/editLead');
        closeDropdown();
    };
 
 
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
  };
  const closeDropdown = () => {
    setShowDropdown(false);
};
 
const handleNavigateToLeadDetails = () => {
    setLeadId(number);
    setSysId(sys_id);
    setFlag('lead')
    router.navigate('/leadDetailScreens/info');
};
const handleChangeStatus = () => {
    router.navigate('../../formComponents/changeStatus');
    setLeadId(number)
    setStatus(lead_status);
    closeDropdown(); // Close the dropdown after action
};
 
const handleCallLog = () => {
    router.navigate('../../formComponents/callLogForm');
    setLeadId(number);
    closeDropdown(); // Close the dropdown after action
};
 
const handleReassign = () => {
    router.navigate('/formComponents/reassignForm')
    setLeadId(number);
    setSysId(sys_id);
    setQualification(qualification);
    
    closeDropdown();
};

const handleCall = () => {
    Linking.openURL(`tel:${Phone}`);
  };
 
  const handleEmail = () => {
    Linking.openURL(`mailto:${Email}`);
  };
 
return (
  <TouchableOpacity onPress={handleNavigateToLeadDetails}>
      <View style={{ flex: 1 }}>
          <View style={styles.item}>
              <View style={styles.avatarContainer}>
              
                     {gender == 'female' ? (
                            <Image
                                source={femaleAvatar}
                                style={{ width: 40, height: 40, borderRadius: 20, marginBottom: 10 }}
                            />
                        ) : (
                            <Image
                                source={avatarPic}
                                style={{ width: 40, height: 40, borderRadius: 20, marginBottom: 10 }}
                            />
                        )}
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.title}>{`${FirstName} ${LastName}`}</Text>
                  <Text style={styles.subtitle}>{Email}</Text>
                  <Text style={styles.subtitle}>{Phone}</Text>
            
                  <View style={styles.badgeBox}>
                      <BadgeLead  label={lead_status}   />
                      <BadgeLead label={qualification}   />
                  </View>
              </View>
              <View style={styles.actionsContainer}>
              <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={handleCall} style={styles.actionIcon}>
                            <Ionicons name="call" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleEmail} style={styles.actionIcon}>
                            <Ionicons name="mail" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                  <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownIcon}>
                      <Ionicons name="ellipsis-vertical" size={24} color="black" />
                  </TouchableOpacity>
              </View>
          </View>
          {showDropdown && (
    <View style={styles.dropdownContainer}>
    <ScrollView style={styles.dropdownScrollView}>
            <View style={styles.dropdownMenu}>
            <TouchableOpacity onPress={handleChangeStatus}>
                <Text style={styles.dropdownMenuItem}>Change Status</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCallLog()}>
                <Text style={styles.dropdownMenuItem}>Call Log</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleReassign()}>
                <Text style={styles.dropdownMenuItem}>Reassign</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
</View>
          )}
          </View>
      </TouchableOpacity>
 
 
);
};
const styles = {
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 1,
        marginHorizontal: 16,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000002',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    badgeBox:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 6,
    },
    badgeSecond:{
        marginLeft:20,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        marginBottom: 2,
        color:"#000000",
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 3,
        color:"#999999",
    },
    avatarContainer: {
        marginRight: 10,
    },
    image:
    {
        height:60,
        width:30,
    },
    avatar: {
        width:  40,
        height: 40,
        borderRadius: 20,
    },
    badgeContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
      },
      badge: {
        marginBottom: 1,
        marginRight:150,
        width:80,
        flexDirection:'row',
      },
      smallButton: {
        padding: 5,
      },
      smallButton: {
        padding: 3,
        backgroundColor: 'lightgray',
        borderRadius: 2,
      },
      actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:-10,
    },
    dropdownIcon: {
        marginLeft: 10,
    },
    dropdownContainer: {
        position: 'absolute',
        top: -10, // Adjust this value to move the dropdown above the card
        right: 20,
        width: 'auto',
        zIndex: 999,
    },
    dropdownScrollView: {
        maxHeight: 200, // Set max height for scroll view
    },
    dropdownMenu: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 3,
        zIndex: 999,
    },
    dropdownMenuItem: {
        fontSize: 16,
        paddingVertical: 8,
    },
    actionIcon: {
        marginRight: 10,
        marginBottom:70,
    },
    iconContainer: {
        flexDirection: 'row',   
    },

   
};
export default LeadItem;          