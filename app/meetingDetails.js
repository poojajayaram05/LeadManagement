import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import useMeetingStore from '../meetingComponents/meetingStore';
import { meetingItems, meetingItemsData } from '../customComponents/formData';
import ArrowBack from '../customComponents/arrowBack';
import { router } from 'expo-router';
import DetailCard from '../customComponents/detailCard';
// import { TouchableOpacity } from 'react-native-gesture-handler';
 
const goBack=()=>{
    router.back();
  }
 
const LeadMeetingCard = () => {
   
    const meetingId = useMeetingStore((state) => state.meetingId);
    // console.log(meetingId);
    // console.log("Meeting items:", meetingItems);
    const meeting = meetingItemsData.elements.find((meeting) => meeting.id === meetingId);
 
    const { id, title, organizer, status, description, location, timezone, from, to, all_day } = meeting || {};
 
    return (
        <View style={styles.container}>
             <DetailCard obj={meeting}/>
            <Text style={styles.title}>Meeting details</Text>
 
            {/* <Text style={styles.data}>Title: </Text>
            <Text style={styles.detail}>{title}</Text>
 
            <Text style={styles.data}>Organizer:  </Text>
            <Text style={styles.detail}>{organizer}</Text>
 
            <Text style={styles.data}>Status:  </Text>
            <Text style={styles.detail}>{status}</Text>
 
            <Text style={styles.data}>Description: </Text>
            <Text style={styles.detail}>{description}</Text>
 
            <Text style={styles.data}>Location: </Text>
            <Text style={styles.detail}>{location}</Text>
 
            <Text style={styles.data}>Timezone: </Text>
            <Text style={styles.detail}>{timezone}</Text>
 
            <Text style={styles.data}>From:</Text>
            <Text style={styles.detail}>{from}</Text>
 
            <Text style={styles.data}>To: </Text>
            <Text style={styles.detail}>{to}</Text>
 
            <Text style={styles.data}>All Day: </Text>
            <Text style={styles.detail}>{all_day}</Text> */}
           
            {/* <ArrowBack/> */}
            <TouchableOpacity onPress={goBack}>
        <ArrowBack />
      </TouchableOpacity>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:40,
        marginHorizontal: 10,
     
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    detail: {
        fontSize: 16,
        marginBottom: 5,
        marginBottom:15,
    },
    data: {
        color: '#023B5E',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
 
export default LeadMeetingCard;