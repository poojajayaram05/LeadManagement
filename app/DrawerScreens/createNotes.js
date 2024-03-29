


import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { leadNoteData, meetingData, taskData } from '../../customComponents/formData';
import { CustomInput } from '../../customComponents/customInput';
import Dropdown from '../../customComponents/customDropdown';
import MultilineTextInput from '../../customComponents/customMultilineInput';
import { router } from 'expo-router';
import ArrowBack from '../../customComponents/arrowBack';
import LDropdown from '../../customComponents/customLeadDropdown';
import { leadData } from '../../customComponents/formData';
import { meetingItemsData } from '../../customComponents/formData';

export default function CreateLeadNote({ navigation }) {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [leadId, setLeadId] = useState('');
  const [taskId, setTaskId] = useState('');
  const [meetingId, setMeetingId] = useState('');
  const [notes, setNotes] = useState('');

  const handleSelectAccount = (account) => {
    setSelectedAccount(account);
    console.log(selectedAccount);
    // Reset other input fields when a different account is selected
    setLeadId('');
    setTaskId('');
    setMeetingId('');
  };

  const onSubmit = () => {
    // Submit logic here
  };

  // const goBack=()=>{
  //   router.back();
  // }

  const handleSelect = (item) => {
    // setSelectedValue(item);
    // setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.value }));
    console.log('Selected value:', item);
};

  const renderAdditionalFields = () => {
    switch (selectedAccount.value) {
      case 'lead':
        return (
          <View>
            <Text style={styles.label}> Select Lead </Text>
          <LDropdown
           label="Select Lead"
           data={leadData.map((lead) => {
             console.log(lead.id); // Log lead object
             return {
               value: lead.id,
               label: `${lead.id} - ${lead.firstname} ${lead.lastname}`,
             };
           })}
           onSelect={handleSelect}
          />
          </View>
        );
      case 'task':
       
        return (
          <View>
            <Text style={styles.label}> Select Task</Text>
          <LDropdown
           label="Select Lead"
           data={taskData.map((task) => {
             console.log(task.id); // Log lead object
             return {
               value: task.id,
               label: `${task.id} - ${task.taskName}`,
             };
           })}
           onSelect={handleSelect}
          />
          </View>
        
        );
      case 'meeting':
        return (
          <View>
            <Text style={styles.label}>Select Meeting</Text>
          <LDropdown
           label="Select Meeting"
           data={meetingItemsData.elements.map((meeting) => {
             console.log(meeting.id); // Log lead object
             return {
               value: meeting.id,
               label: `${meeting.id} - ${meeting.title}`,
             };
           })}
           onSelect={handleSelect}
          />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.cardContainer}>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.section}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Entity</Text>
              <Dropdown
                label="Select"
                data={leadNoteData.elements[0].dropdownData}
                value={selectedAccount}
                onSelect={handleSelectAccount}
              />
            </View>
            {renderAdditionalFields()}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Lead Notes</Text>
              <MultilineTextInput
                placeholder="Write a note"
                value={notes}
                onChange={setNotes}
              />
            </View>
          </View>
          <Button title="Submit" onPress={onSubmit} color='#023B5E' />
        </View>
      </ScrollView>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity >
          <ArrowBack onPress={goBack} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: '#d1e0ed',
  },
  backButton: {
    alignSelf: 'flex-end',
    marginRight: 'auto',
    color:'#023B5E',
  },
  card: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },
  backButtonText: {
    fontSize: 12,
    color: '#007AFF', 
  },
  section: {
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
