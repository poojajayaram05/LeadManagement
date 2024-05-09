import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
 
import { background_color_map, text_color_map,NEW_LEAD, QUALIFIED, CONTACTED, CLOSED, HOT, WARM, COLD,AZURE_COLOR, BEIGE, GREEN , YELLOWGREEN, DARKGREEN } from './constants'
const RED =  'red'
 
 
const BadgeLead = ({ label, textColor="black" }) => {
 
 
 
   
    //     return <BadgeLead label={'New Lead'} color={'rgba(133, 116, 113, 0.2)'} textColor="black"/>
    //     } else if (Status === 'Qualified') {
    //         return <BadgeLead label={'Qualified'} color={'rgba(192, 45, 217, 0.2)'} textColor="black"/>
    //     } else if (Status === 'Contacted') {
    //         return <BadgeLead label={'Contacted'} color={'rgba(128, 0, 0, 0.2)'} textColor="black"/>
    //     } else if (Status === 'Closed') {
    //         return <BadgeLead label={'Closed'} color={'rgba(0, 128, 0, 0.2)'} textColor="black"/>
    //     }  
 
 
    return (
      <View style={[styles.badges, { backgroundColor: background_color_map[label] }]}>
        <Text style={{ color: text_color_map[label] }}>{label}</Text>
 
      </View>
    );
  };
 
  const styles = StyleSheet.create({
    badges: {

      paddingVertical: 1,
      paddingHorizontal: 10,
      borderRadius: 2,
      textAlign: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
  });
 
  export default BadgeLead;