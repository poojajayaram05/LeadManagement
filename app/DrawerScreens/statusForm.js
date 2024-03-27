
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { leadNoteData, meetingData, taskData } from '../../customComponents/formData';
import Dropdown from '../../customComponents/customDropdown';
import MultilineTextInput from '../../customComponents/customMultilineInput';
import { router } from 'expo-router';
import { statusFormData } from '../../customComponents/formData';
import { leadData } from '../../customComponents/formData';
import { meetingItemsData } from '../../customComponents/formData';
import { DropdownIcon } from '../../assets/images';
import { DropupIcon } from '../../assets/images';


export default function StatusForm({ navigation }) {
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

  const goBack=()=>{
    router.back();
  }

  const handleSelect = (item) => {
    // setSelectedValue(item);
    // setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.value }));
    console.log('Selected value:', item);
};

const renderFormElement = (element) => {
    switch (element.type) {

  
        
    case 'multiLineText':
      return (
        <View style={styles.inputContainer}>
              <Text style={styles.label}>{element.name}</Text>
              <MultilineTextInput
                placeholder="Write a note"
                value={notes}
                onChange={setNotes}
              />
            </View>
      );
      
  
};
}


  return (
    <View style={styles.cardContainer}>
       
      
      
    <ScrollView>
  
   
        <View style={styles.card}>
            <View style={styles.section}>
           
                <TouchableOpacity onPress={() => toggleSection('section1')}>
                    <Text style={styles.title}>Status</Text>
                  
                    {/* <Image
                        source={isSection1Collapsed ? DropdownIcon : DropupIcon}
                        resizeMode="contain"
                        style={styles.dropdownIcon}
                    /> */}
                     
                </TouchableOpacity>
              
                    {statusFormData.elements.slice(0, 11).map((element, index) => (
                        <View key={index} style={styles.inputContainer}>
                            {renderFormElement(element)}
                        </View>
                    ))}
               
            </View>

           {/* <View style={styles.section}>
                <TouchableOpacity onPress={() => toggleSection('section2')}>
                    <Text style={styles.sectionTitle}>Schedule Information</Text>
                    <Image
                        source={isSection2Collapsed ? DropdownIcon : DropupIcon}
                        resizeMode="contain"
                        style={styles.dropdownIcon}
                    />
                </TouchableOpacity>
                <Collapsible collapsed={isSection2Collapsed}>
                    {taskFormData.elements.slice(9).map((element, index) => (
                        <View key={index} style={styles.inputContainer}>
                            {renderFormElement(element)}
                        </View>
                    ))}
                </Collapsible>
            </View>  */}
          
             
            <Button title="Submit" onPress={onSubmit} color='#023B5E' />
            <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={goBack}>
        {/* <ArrowBack /> */}
      </TouchableOpacity>
    </View>
            {/* <MultiSelectItems/> */}
            
        </View>
      
    </ScrollView>
   
  
   
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
