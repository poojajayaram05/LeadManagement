import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ArrowBack from './arrowBack';
import { router } from 'expo-router';

 
const CustomHeader = ({ title, onPress }) => {

    // const goBack=()=>{
    //     router.navigate(-1);
    // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onPress}>
         <ArrowBack onPress={onPress}/>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={onNotificationPress}>
          <Ionicons name="notifications" size={24} color="black" style={styles.icon} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    width:'100%',
  },
   
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    iconsContainer: {
      flexDirection: 'row',
    },
    icon: {
      marginLeft: 15,
    },
  });
  export default CustomHeader;