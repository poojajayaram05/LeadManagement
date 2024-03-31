import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
 
export default function LeadActivityCard({ obj, name }) {
  const keys = Object.keys(obj);
 
  return (
    <View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                  <TouchableOpacity style={styles.subtitle}>
                    <Text >All</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subtitle}>
                    <Text >Completed</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.subtitle} >
                    <Text >Pending</Text>
                  </TouchableOpacity>
                </View>
    <View style={styles.card}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.textContainer}>
          {keys.map((key) => (
            <View key={key} style={styles.row}>
            <Text style={styles.data}>{key} : </Text>
            <Text style={styles.detail}>{obj[key]}</Text>
          </View>
          ))}
        </View>
      </TouchableOpacity>
    </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
    subtitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#023B5E',
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        textAlign: 'center', // Align text to center
      },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 5,
    // marginBottom: 10, // Add margin bottom to separate cards
    // backgroundColor: 'red',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures each row occupies the full width
    width: '100%',
},
  detail: {
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'right',
    // backgroundColor: 'yellow',
    fontWeight: 'bold',
},
data: {
    color: '#023B5E',
    fontSize: 14,
    textAlign: 'left',
    // backgroundColor: 'red',
},
});
