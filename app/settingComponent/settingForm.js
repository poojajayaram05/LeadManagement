import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
 
// Import settingFormData from JSON file
import { settingFormData } from '../../customComponents/formData';
import CustomHeader from '../../customComponents/customLeadHeader';
import { router } from 'expo-router';
 
const SettingForm = () => {
  // State to hold form values
  const [formValues, setFormValues] = useState({});
 
  // Function to handle form submission
  const onSubmit = () => {
    // Validation logic goes here
    console.log('Form submitted:', formValues);
  };
 
  // Function to render form elements
  const renderFormElements = () => {
    return settingFormData.elements.map((element, index) => (
      <View key={index} style={styles.formElement}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{element.title}</Text>
          {element.isRequired && <Text style={{ color: 'red', marginLeft: 5 }}>*</Text>}
        </View>
        {renderFormElement(element)}
      </View>
    ));
  };
 
  // Function to render each form element based on its type
  const renderFormElement = (element) => {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder={element.placeholder}
          onChangeText={(value) => setFormValues({ ...formValues, [element.name]: value })}
          value={formValues[element.name] || ''}
       
        />
      </View>
    );
  };
 
  const goBack=()=>{
    router.back();
  }
 
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
            <CustomHeader title={"Update Profile"} onPress={goBack}/>
          </View>
        <View style={styles.card}>
          {/* Render form elements */}
          {renderFormElements()}
          {/* Submit button */}
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  formElement: {
    marginBottom: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#023B5E',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
 
export default SettingForm;