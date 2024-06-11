import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
const ActivitySection = ({ title, activities, visible, setVisible, currentTab, handleTabPress, renderItem }) => {
  const filteredActivities = activities.filter(activity => {
    if (currentTab === 'All') {
      return true; // Show all activities
    } else if (currentTab === 'Completed') {
      return activity.status === 'completed'; // Show only completed activities
    } else if (currentTab === 'Pending') {
      return activity.status === 'pending';
    }
  });
 
  return (
    <View style={styles.card}>
      {activities.length > 0 && (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Ionicons name={visible ? 'caret-up' : 'caret-down'} size={24} color="black" style={{ marginLeft: 5, marginTop: 12 }}/>
          </View>
        </TouchableOpacity>
      )}
      {visible && activities.length > 0 && (
        <View>
          {filteredActivities.length > 0 ? (
            <FlatList
              data={filteredActivities}
              keyExtractor={(item, index) => item.activity_number + index}
              renderItem={renderItem}
            />
          ) : (
            <View style={styles.messagedef}>
              <Text>No {title} found.</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};
 
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    // backgroundColor:'green',
    marginHorizontal:15,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#023B5E',
    marginLeft: 5,
    marginTop: 10,
  },
  messagedef: {
    fontSize: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 80,
  },
  card:{
    // backgroundColor:'yellow'
  }
});
 
export default ActivitySection;
 