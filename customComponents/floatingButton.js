import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
export default function FloatingButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top:300,
    right: 20,
    zIndex: 1,
   
  },
  button: {
    backgroundColor: 'grey',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    marginBottom:'160',
    alignItems: 'center',
  },
});
 