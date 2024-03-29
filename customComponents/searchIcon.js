
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
const HeaderRight = ({ onSearchPress, onNotificationPress }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row' }}>
      <Ionicons name='search' size={24} color='black' style={{ marginRight: 15 }} onPress={onSearchPress} />
      <Ionicons name='notifications' size={24} color='black' style={{ marginRight: 15 }} onPress={onNotificationPress} />
    </TouchableOpacity>
  );
};
 
export default HeaderRight;