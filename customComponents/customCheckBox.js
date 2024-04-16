// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
 
// const CustomCheckbox = ({ isChecked, onChange, label }) => {
//   return (
//     <TouchableOpacity onPress={() => onChange(!isChecked)}>
//       <View style={styles.container}>
//         <View style={[styles.checkbox, isChecked && styles.checked]}>
//           {isChecked && <Ionicons name="checkmark" size={18} color="white" />}
//         </View>
//         <Text style={styles.label}>{label}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 3,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // marginRight: 8, // Add some space between checkbox and label
//   },
//   checked: {
//     backgroundColor: 'black',
//   },
//   label: {
//     fontSize: 16,
//   },
// });
 
// export default CustomCheckbox;


import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
const CustomCheckbox = ({ isChecked, onChange, label }) => {
  return (
    <TouchableOpacity onPress={() => onChange(!isChecked)}>
      <View style={styles.container}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && <Ionicons name="checkmark" size={18} color="white" />}
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 8, // Add some space between checkbox and label
  },
  checked: {
    backgroundColor: 'black',
  },
  label: {
    fontSize: 16,
  },
});
 
export default CustomCheckbox;