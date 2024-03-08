import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);
 
  const handleCardPress = (cardIndex) => {
    setSelectedCard(selectedCard === cardIndex ? null : cardIndex);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard</Text>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.row1}>
          <TouchableOpacity
            style={[styles.card, selectedCard === 0 && styles.selectedCard]}
            onPress={() => handleCardPress(0)}
          >
            <Text style={styles.cardText}>Total Leads</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.card, selectedCard === 1 && styles.selectedCard]}
            onPress={() => handleCardPress(1)}
          >
            <Text style={styles.cardText}>Total Calls</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={[styles.card, selectedCard === 2 && styles.selectedCard]}
            onPress={() => handleCardPress(2)}
          >
            <Text style={styles.cardText}>Total Activites</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.card, selectedCard === 3 && styles.selectedCard]}
            onPress={() => handleCardPress(3)}
          >
            <Text style={styles.cardText}>Sales</Text>
          </TouchableOpacity>
        </View>
 
        <View style={styles.totalSalesCard}>
          <Text style={styles.totalSalesText}>Total Sales</Text>
        </View>
       
        {selectedCard !== null && (
          <View style={styles.bigCard}>
            <Text style={styles.cardText}>Lead by source {selectedCard +1}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6DBDF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 10,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 150,
    width: 150,
  },
  selectedCard: {
    backgroundColor: '#ccc',
  },
  cardText: {
    fontSize: 18,
  },
  bigCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 390,
    width: 350,
    alignSelf: 'center',
  },
  totalSalesCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#000',
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    marginBottom:40,
  },
  totalSalesText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
 
export default App;