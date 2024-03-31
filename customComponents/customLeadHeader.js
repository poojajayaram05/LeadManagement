import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
 
const CustomHeader = ({ title, onSearchPress, onNotificationPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onSearchPress}>
          <Ionicons name="search" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onNotificationPress}>
          <Ionicons name="notifications" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor: "white",
      ...Platform.select({
        android: {
          paddingTop: StatusBar.currentHeight, // Adjust for status bar height on Android
        },
      }),
      position: 'absolute', // Position the header absolutely
      top: 0, // Align the header to the top of the screen
      left: 0, // Align the header to the left of the screen
      right: 0,
      width: '100%', // Occupy full width
      paddingHorizontal: 20, // Add paddingHorizontal to create space on the left and right sides
      zIndex: 999, // Ensure the header appears above other content
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