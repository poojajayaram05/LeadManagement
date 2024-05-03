
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Content = ({ leadstatus, qualification, leadscore }) => {
  return (
    <View >
      <View style={styles.headingContainer}>
        <View style={styles.heading}>
          <Text style={styles.subheading}>Status</Text>
          <Text style={styles.subheadingText}>{leadstatus}</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.subheading}>Qualification</Text>
          <Text style={styles.subheadingText}>{qualification}</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.subheading}>Score</Text>
          <Text style={styles.subheadingText}>30</Text>
        </View>
      </View>
    </View>
  );
};

const ActionButtonContainer = ({ onCall, onEmail, onEdit }) => {
    return (
   
        <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={onCall}>
          <Ionicons name="call" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onEmail}>
          <Ionicons name="mail" size={24} color="white" />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.actionButton} onPress={onEdit}>
          <Ionicons name="pencil" size={24} color="white" />
        </TouchableOpacity> */}
      </View>
      
    );
  };

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  userDetailsContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  headingContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  heading: {
    alignItems: 'center',
    flex: 1,
  },
  subheading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subheadingText: {
    color: 'white',
    marginTop: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#023B5E',
    marginLeft: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the right
    position: 'absolute',
    top: 33,
    right: 10, 
    zIndex: 1,
  },

});

export {Content, ActionButtonContainer};
