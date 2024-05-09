import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Import suitable icons from Expo vector icons library
import { router } from 'expo-router';
 
const GeneralSettingCard = ({ title, onPress, navigation}) => {
  // Map icons to setting titles
  const iconMap = {
    'My Account': 'person',
    'Notifications': 'notifications',
    'Delete My Account': 'delete',
  };
 
  // Get the icon name based on the title
  const iconName = iconMap[title] || 'question'; // Default icon for unknown titles
 
  const handleeNavigation = () => {
    console.log(navigation)
    router.navigate(navigation);
}
 
  return (
    <TouchableOpacity onPress={handleeNavigation}>
    <View  style={[styles.card, styles.container]}>
      {/* Icon */}
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={24} color="#999999" />
      </View>
      {/* Setting title */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {/* Forward arrow icon */}
      {title !== 'Delete My Account' && (
        <View style={styles.arrowContainer}>
          <MaterialIcons name="chevron-right" size={24} color="#999999" />
        </View>
      )}
    </View>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Align items horizontally
    backgroundColor: '#ffffff', // Grey background color
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center', // Center items vertically
  },
  card: {
    backgroundColor: '#f2f2f2', // White card background color
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000002',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flex: 1, // Take up remaining horizontal space
    flexDirection: 'row', // Align items horizontally
  },
  content: {
    flex: 1, // Take up remaining horizontal space
  },
  iconContainer: {
    padding: 10, // Add padding around the icon
  },
  arrowContainer: {
    paddingRight: 10, // Add padding around the arrow
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000', // Black title color
  },
});
 
export default GeneralSettingCard;