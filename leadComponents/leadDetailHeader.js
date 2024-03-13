import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { leadData } from '../customComponents/formData';
import { router, useLocalSearchParams } from 'expo-router';
// import LeadInfoPage from './detailsTabs/info';
 
const handleCall = () => {
  const phoneNumber = '9900953630';
  Linking.openURL(`tel:${phoneNumber}`);
};
 
const handleEmail = () => {
  const email = 'poojajayaram05@gmail.com';
  Linking.openURL(`mailto:${email}`);
};
 
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
 
const LeadDetail = () => {
  const params = useLocalSearchParams();
  const { id } = params;
 
  const lead = leadData.find((lead) => lead.id === id);
  const { firstname, lastname, phone } = lead || {};
 
  const handleBack = () => {
    // router.replace(-1);
    router.navigate('/DrawerScreens/leadList');
  };
 
  // State variables for modals and selected values
  const [showStatusLabelModal, setShowLabelModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedLabel, setSelectedStatusLabel] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
 
  // Function to handle selecting label value
  const selectLabel = (label) => {
    setSelectedStatusLabel(label);
    setShowLabelModal(false);
  };
 
  // Function to handle selecting status value
  const selectStatus = (status) => {
    setSelectedStatus(status);
    setShowStatusModal(false);
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
          {/* <Ionicons name="person" size={24} color="black" /> */}
          <Text style={styles.userName}>
            {firstname} {lastname}
          </Text>
        </View>
         
        <View>
        <View style={styles.sectionContainer}>
  <Text style={styles.sectionHeading}>Status</Text>
  <TouchableOpacity style={styles.pencilIconContainer} onPress={() => setShowStatusModal(true)}>
    <Ionicons name="pencil" size={18} color="black" />
  </TouchableOpacity>
  <Text style={styles.status}>{selectedStatus}</Text>
</View>
 
<View style={styles.sectionContainer}>
  <Text style={styles.sectionHeading}>Label</Text>
  <TouchableOpacity style={styles.pencilIconContainer} onPress={() => setShowLabelModal(true)}>
    <Ionicons name="pencil" size={18} color="black" />
  </TouchableOpacity>
  <Text style={styles.Label}>{selectedLabel}</Text>
</View>
        </View>
        <View style={styles.actionButtonsContainer}>
          {/* Contact */}
          <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
            <Ionicons name="call" size={24} color="black" />
            <Text style={styles.buttonLabel}>Contact</Text>
          </TouchableOpacity>
 
          {/* Email */}
          <TouchableOpacity style={styles.actionButton} onPress={handleEmail}>
            <Ionicons name="mail" size={24} color="black" />
            <Text style={styles.buttonLabel}>Email</Text>
          </TouchableOpacity>
 
          {/* Direction */}
          <TouchableOpacity style={styles.actionButton} onPress={handleDirections}>
            <Ionicons name="location" size={24} color="black" />
            <Text style={styles.buttonLabel}>Direction</Text>
          </TouchableOpacity>
 
          {/* Attachment */}
          <TouchableOpacity style={styles.actionButton} onPress={handleAttachment}>
            <Ionicons name="attach" size={24} color="black" />
            <Text style={styles.buttonLabel}>Add file</Text>
          </TouchableOpacity>
        </View>
       
        <Modal
          animationType="slide"
          transparent={true}
          visible={showStatusModal}
          onRequestClose={() => setShowStatusModal(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Select Status</Text>
              {/* Options for selecting status */}
              <TouchableOpacity style={styles.modalOption} onPress={() => selectStatus('New Lead')}>
                <Text style={styles.modalOptionText}>New Lead</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOption} onPress={() => selectStatus('Disqualified')}>
                <Text style={styles.modalOptionText}>Disqualified</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOption} onPress={() => selectStatus('Not Reachable')}>
                <Text style={styles.modalOptionText}>Not Reachable</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOption} onPress={() => selectStatus('Working')}>
                <Text style={styles.modalOptionText}>Working</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOption} onPress={() => selectStatus('Closed')}>
                <Text style={styles.modalOptionText}>Closed</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOption} onPress={() => selectStatus('Activated')}>
                <Text style={styles.modalOptionText}>Activated</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOption} onPress={() => selectStatus('Sale')}>
                <Text style={styles.modalOptionText}>Sale</Text>
              </TouchableOpacity>
              {/* Ok Button */}
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setShowStatusModal(false)}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
 
        {/* Label Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showStatusLabelModal}
          onRequestClose={() => setShowLabelModal(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Select Label</Text>
              {/* Options for selecting label */}
              <TouchableOpacity style={styles.modalOption} onPress={() => selectLabel('Hot')}>
                <Text style={styles.modalOptionText}>Hot</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOption} onPress={() => selectLabel('Warm')}>
                <Text style={styles.modalOptionText}>Warm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOption} onPress={() => selectLabel('Cold')}>
                <Text style={styles.modalOptionText}>Cold</Text>
              </TouchableOpacity>
              {/* Ok Button */}
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setShowLabelModal(false)}>
                <Text style={styles.textStyle}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
    // borderTopLeftRadius: 0,
    // borderTopRightRadius: 0,
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,
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
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 30,
    borderWidth: 4,
    borderColor: '#ccc',
    borderRadius: 10,
    height:70,
    width:320,
  },
  actionButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  statuslabelContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width:50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  status: {
    fontSize: 15,
    marginLeft: 100,
  },
  Label: {
    fontSize: 15,
    marginLeft: 100,
  },
  bottomContainer: {
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
    width: '100%',
    height:'20%',
    backgroundColor:'pink',
    flex: 1,
  },
 
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  tabText: {
    fontSize: 16,
  },
  // Modal styles
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalOption: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    backgroundColor: 'transparent'
  },
  modalOptionText: {
    fontSize: 16,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', 
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 13,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pencilIconContainer: {
    alignItems: 'flex-end', 
    marginLeft: 10, 
  },
});
 
export default LeadDetail;
 
 