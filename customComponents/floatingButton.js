// import React from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
 
// export default function FloatingButton({ onPress }) {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Ionicons name="add" size={24} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top:600,
//     right: 20,
//     zIndex: 1,
   
//   },
//   button: {
//     backgroundColor: '#023B5E',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     marginBottom:'140',
//     alignItems: 'center',
//   },
// });
 

// FloatingButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FloatingButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Ionicons name="add" size={24} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#023B5E', 
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 8, 
  },
});

export default FloatingButton;
