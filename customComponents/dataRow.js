

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
 
// const DataRow = ({ label, detail, color}) => {
//   return (
//     <View style={styles.row}>
//       <Text style={styles.data}>{label}</Text>
//       <Text style={{ fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'right',color:color}}>{detail}</Text>
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 10,
//   },
//   detail: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'right',
//   },
//   data: {
//     color: '#023B5E',
//     fontSize: 14,
//     textAlign: 'left',
//   },
 
// });
 
// export default DataRow;


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
 
const DataRow = ({ key,label, detail}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.data}>{label}</Text>
      <Text style={{ fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right'}}>{detail}</Text>
    </View>
  );
};
 
const Section = ({ title, isOpen, onPress, children }) => {
  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{title}</Text>
          <Ionicons name={isOpen ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 10 }} />
        </View>
      </TouchableOpacity>
      {isOpen && <View>{children}</View>}
    </View>
  );
};
 
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  data: {
    color: '#023B5E',
    fontSize: 14,
    textAlign: 'left',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
 
});
 
export { DataRow, Section };