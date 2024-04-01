import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const DataRow = ({ label, detail }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.data}>{label}</Text>
      <Text style={styles.detail}>{detail}</Text>
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
 
});
 
export default DataRow;