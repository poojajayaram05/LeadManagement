import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const InitialsAvatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
 
  return (
    <View style={styles.avatar}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#023B5E',
    fontWeight: 'bold',
    fontSize: 28,
  },
});
 
export default InitialsAvatar;