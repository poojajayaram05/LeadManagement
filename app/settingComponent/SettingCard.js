import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // Import suitable icons from Expo vector icons library
import { router } from 'expo-router';
 
// Map icons to setting titles
const iconMap = {
  'General Settings': 'settings',
  'Manage Integration': 'link',
  'Manage Subscription': 'credit-card',
  'Manage Team': 'group',
  'Customization': 'palette',
  'Manage Lead Distribution': 'group', // Updated icon name
  'Export Data': 'download', // Updated icon name
  'Disclosure': 'security', // Updated icon name
};
 
// const handleNavigation = () => {
//     router.navigate(navigation);
// }
 
const SettingCard = ({ title, options, navigation }) => {
  // Get the icon name based on the title
  const iconName = iconMap[title] || 'question';
 
  const handleNavigation = () => {
    console.log(navigation)
    router.navigate(navigation);
}
 
  return (
    <TouchableOpacity onPress={handleNavigation}>
    <View style={[styles.card, styles.container]}>
      {/* Icon */}
      <View style={styles.iconContainer}>
        {iconName.startsWith('fa') ? (
          <FontAwesome5 name={iconName} size={24} color="#999999" />
        ) : (
          <MaterialIcons name={iconName} size={24} color="#999999" />
        )}
      </View>
      {/* Setting title */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {/* Options */}
        {options && (
          <View style={styles.optionsContainer}>  
            <Text style={styles.option}>
              {options.join(', ')}
            </Text>
          </View>
        )}
      </View>
      {/* Forward arrow icon */}
      {title !== 'Export Data' && (
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
  option: {
    fontSize: 16,
    color: '#999999', // Grey option color
    marginBottom: 5,
  },
});
 
export default SettingCard;