import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button,Image,ScrollView } from 'react-native';
import { router } from 'expo-router';
import useIdStore from '../app/leadStore';
 
const OpportunityItem = ({ AccountName, OpportunityName, ProbabilityValue,ForecastCloseDate,OpportunityValue }) => {
   
    const [showSecondImage, setShowSecondImage] = useState(false);
    const[selectedStar, setSelectedStar]=useState(false);
    const { leadId, setLeadId } = useIdStore();
    const{status, setStatus}=useIdStore();
    const [showDropdown, setShowDropdown] = useState(false);
 
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
    router.navigate(`/formComponents/OpportunityDetailPage`);
    setOpportunityId(number);
};
 
return (
  <TouchableOpacity onPress={handleNavigateToLeadDetails}>
    {/* <TouchableOpacity> */}
      <View style={{ flex: 1 }}>
      <View style={styles.item}>
      <View style={styles.textContainer}>
      <Text style={styles.title}>{OpportunityName}</Text>
    <View style={styles.subtitleRow}>
        <Text style={styles.subtitle}>{OpportunityName}</Text>
        <Text style={[styles.subtitle, styles.topRight]}>{ProbabilityValue}%</Text>
    </View>
    <View style={styles.subtitleRow}>
        <Text style={styles.subtitle}>{ForecastCloseDate}</Text>
        <Text style={[styles.subtitle, styles.bottomRight]}>INR {OpportunityValue}</Text>
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
 
 
export default OpportunityItem;  