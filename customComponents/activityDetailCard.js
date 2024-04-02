import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ActivityDetailCard({ obj, name }) {
  const keys = Object.keys(obj);

  const goTomarkAsComplete = () => {
    router.navigate('/formComponents/markAsComplete');
  };

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        {keys.map((key) => (
          <View key={key} style={styles.row}>
            <Text style={styles.data}>{key} : </Text>
            <View style={styles.detailContainer}>
              <Text style={styles.detail}>{obj[key]}</Text>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.completeButton} onPress={goTomarkAsComplete}>
        <Text style={styles.completeText}>Mark as Complete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '84%',
    borderRadius: 5,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  data: {
    color: '#023B5E',
    fontSize: 14,
    textAlign: 'left',
  },
  completeButton: {
    borderColor: '#023B5E',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-end', // Align the button to the right
  },
  completeText: {
    color: '#023B5E',
    fontSize: 12,
    fontWeight: 'bold',
  },
 
});

