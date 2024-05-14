
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
const HeaderRight = ({ onFilterPress, onNotificationPress }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row' }}>
      <Ionicons name='filter' size={24} color='black' style={{ marginRight: 15 }} onPress={onFilterPress} />
      <Ionicons name='notifications' size={24} color='black' style={{ marginRight: 15 }} onPress={onNotificationPress} />
    </TouchableOpacity>
  );
};
 
export default HeaderRight;