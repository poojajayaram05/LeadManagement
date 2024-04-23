
import React, { useState, useEffect } from 'react';
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
import { SelectList } from 'react-native-dropdown-select-list';
import { CustomInput } from '../../customComponents/customInput';
import useIdStore from '../leadStore';

export default function StatusForm({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [taskId, setTaskId] = useState('');
  const [meetingId, setMeetingId] = useState('');
  const [notes, setNotes] = useState('');
  const leadId = useIdStore(state=>state.number)
 

 
  const onSubmit = () => {
    // Submit logic here
  };
 
  const goBack=()=>{
    router.back();
  }
 
  const handleSelect = (item) => {
     setSelectedValue(item.value);
    // setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.value }));
    console.log('Selected value:', item.value);
};
 
const renderFormElement = (element) => {
    switch (element.type) {
 
      case 'dropdown':
        return (
            <View>
            <View style = {styles.inputContainer}>
            <Text style={styles.label}>{element.title}</Text>
            <SelectList
                boxStyles={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 12, // Make the border oval by using a large border radius
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    fontSize: 16
                }}
                setSelected={(label) => {
                    setSelectedValue(label); // Update selected values
                }}
                //placeholder={formValues[element.name] || ''}
                data={element.dropdownData.map(item => ({ value: item.value, label: item.key }))}
                save="value"
                onSelect={() => handleSelect(selectedValue) } // Log selected values
            />
            </View>
            </View>
        );
 
 
       
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
      case 'TextInput':
      return (
        <View style={styles.inputContainer}>
             
              <CustomInput
                            key={element.name}
                            title={element.title}
                            placeholder={leadId}
                           
                            // onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                            // value={formValues[element.name]}
                           
                            
                            ></CustomInput>
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
    backgroundColor: 'white',
    width:"100%",
  },
  backButton: {
    alignSelf: 'flex-end',
    marginRight: 'auto',
    color:'#023B5E',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius:2,
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
