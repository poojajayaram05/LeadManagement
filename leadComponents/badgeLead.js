import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const BadgeLead = ({ color, label, textColor}) => {
 
 
  return (  
      <View  style={[styles.badges, {backgroundColor: color}]}>
       <Text style={{ color: textColor }}>{label}</Text>
   
  </View>
  );
};
 
const styles = StyleSheet.create({
  badges: {
   
    paddingVertical: 1,
    paddingHorizontal: 30,
    borderRadius: 50,
    textAlign: 'center',
    alignItems: 'center',
    marginRight:80,
  },
});
 
export default BadgeLead;