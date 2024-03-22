import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import BadgeLead from './badgeLead';
import { leadData } from '../customComponents/formData';
import { router } from 'expo-router';
import useIdStore from '../app/leadStore';

const handleDirections = () => {
  const address =
    'XHHR+VF9, Ambedkar Bheedhi, Sampangi Rama Nagara, Bengaluru, Karnataka 560001';
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  Linking.openURL(url);
};

const handleAttachment = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const handleEmail = () => {
    const emailid = email;
    Linking.openURL(`mailto:${emailid}`);
  };

const handleCall = () => {
    const phoneNumber = phone;
    Linking.openURL(`tel:${phoneNumber}`);
  };

const LeadDet = () => {
  const leadId = useIdStore((state) => state.leadId); 
  const lead = leadData.find((lead) => lead.id === leadId);
  const { firstname, lastname, status, temperature } = lead || {};

  const handleBack = () => {
    router.navigate('/DrawerScreens/leadList');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <View style={styles.backButtonContainer}>
          <Text style={styles.backButtonText}>Back</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.userDetailsContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {firstname} {lastname}
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <View>
            <BadgeLead label={'Sale'} color={'#857471'} textColor="white"/>
            <BadgeLead color={'red'} label={'Hot'} textColor="white"/>
          </View>
        </View>
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
          <Ionicons name="call" size={24} color="black" />
          <Text style={styles.buttonLabel}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleEmail}>
          <Ionicons name="mail" size={24} color="black" />
          <Text style={styles.buttonLabel}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleDirections}>
          <Ionicons name="location" size={24} color="black" />
          <Text style={styles.buttonLabel}>Direction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleAttachment}>
          <Ionicons name="attach" size={24} color="black" />
          <Text style={styles.buttonLabel}>Add file</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f1f2',
    paddingTop: 20,
    marginBottom: 2,
    height: '90%',
  },
  backButton: {
    position: 'absolute',
    top: 2,
    right: 2,
    zIndex: 1,
  },
  backButtonContainer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#555',
    fontSize: 16,
  },
  userDetailsContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: '30%',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    color:'#023B5E',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
    borderWidth: 4,
    borderColor: '#023B5E',
    borderRadius: 10,
    height: 70,
    width: '100%',
  },
  actionButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 13,
  },
});

export default LeadDet;

 
 