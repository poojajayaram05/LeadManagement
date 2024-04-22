import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button,Image,ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useContactStore } from '../app/leadStore';
import { HomeProfile } from '../assets/images'
import useIdStore from '../app/leadStore';

 
const ContactItem = ({ first_name, last_name, mobile,title, description, number, sys_id }) => {
   
    const [showSecondImage, setShowSecondImage] = useState(false);
    const[selectedStar, setSelectedStar]=useState(false);
   
    const{contactId,  setContactId}=useContactStore();
    const [showDropdown, setShowDropdown] = useState(false);
    const{sysId, setSysId}=useIdStore();
 
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
 
const handleNavigateToContactDetails = () => {
    router.navigate(`/contactDetailPage/contactDetail`);
    console.log("cnumber", number);
    setSysId(sys_id);
};
 
return (
  <TouchableOpacity onPress={handleNavigateToContactDetails}>
    {/* <TouchableOpacity> */}
      <View style={{ flex: 1 }}>
      
      <View style={styles.item}>
      <Image
      source={HomeProfile}
      style={{
        width: 40,
        height: 40,
        alignSelf:'center',
        marginRight:20,

       
      }}
    />
      {/* <FontAwesome name="dollar" size={24} color="black" style={{ marginRight: 10 }} /> */}
      <View style={styles.textContainer}>
      <Text style={styles.title}>{first_name} {last_name}</Text>
 
    <View style={styles.subtitleRow}>
   <Text style={styles.subtitle}>{description}</Text>
   <Text style={styles.subtitle}>{title}</Text>
   
    
    </View>
    <View style={styles.subtitleRow}>
              <Text style={[styles.subtitle, styles.bottomRight]}>{mobile}</Text>
    </View>
</View>
 
</View>
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
    textContainer: {
        flex: 1,
        justifyContent: 'space-between', // Align items to space between
    },
    subtitleRow: {
        flexDirection: 'row', // Arrange subtitles horizontally
        justifyContent: 'space-between', // Align subtitles to space between
        marginBottom: 3, // Add margin between subtitle rows
    },
    title: {
        fontSize: 18,
        marginBottom: 9,
        color:"#000000",
    },
    subtitle: {
        fontSize: 14,
        color:"#999999",
    },
    topRight: {
        alignSelf: 'flex-end', // Align text to the right
    },
    bottomRight: {
        alignSelf: 'flex-end', // Align text to the right
    },
};
 
 
export default ContactItem;  