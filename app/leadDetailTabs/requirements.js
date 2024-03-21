import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  const data = [
    { 
      "requirement": "requirement 1",
      "description": "high demand",
      "product": "topaz",
      "expected_date": "15 days",
      "value": 456000
    },
    {
      "requirement": "requirement 2",
      "description": "low demand",
      "product": "diamond",
      "expected_date": "6 months",
      "value": 958000
    }
  ];

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.label}>Requirement: {item.requirement}</Text>
          <Text style={styles.label}>Product: {item.product}</Text>
          <Text style={styles.label}>Expected Date: {item.expected_date}</Text>
          <Text style={styles.label}>Value: {item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default App;
