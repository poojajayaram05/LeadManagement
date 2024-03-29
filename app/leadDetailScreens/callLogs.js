import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Text,View } from 'react-native';
import CallLogCard from '../../customComponents/callLogCard';
import { callLogData } from '../../customComponents/formData';
import { router } from 'expo-router';
 
const goToCallLogForm =() => {
  router.navigate('/formComponents/callLogForm')
}
 
const CallLogItem = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={callLogData}
        renderItem={({ item }) => (
          <CallLogCard
            PhoneNumber={item.PhoneNumber}
            Type={item.Type}
            Outcome={item.Outcome}
            Time={item.Time}
            Date={item.Date}
 
           
          />
        )}
        keyExtractor={(item) => item.id}
      />
 
   
      <TouchableOpacity style={styles.addButton} onPress={goToCallLogForm}>
        <Text style={styles.plusSymbol}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#023B5E',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  plusSymbol: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
 
export default CallLogItem;