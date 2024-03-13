
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
 
const SmallCard = ({ label1, label2, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={onPress}
    >
      <Text style={styles.cardText1}>{label1} </Text>
      <Text style={styles.cardText2}>{label2} </Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 100,
    width: 150,
    textAlign:'justify',
    justifyContent:'center'
  },
  selectedCard: {
    backgroundColor: '#e4ebf2',
  },
  cardText1: {
    fontSize: 18,
    textAlign:'center',
    justifyContent:'center'
  },
  cardText2: {
    fontSize: 20,
    textAlign:'center',
    justifyContent:'center',
    fontWeight: 'bold',
  },
});
 
export default SmallCard;
 