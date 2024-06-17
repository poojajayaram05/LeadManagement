 
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  LogBox,
} from 'react-native';
import MultilineTextInput from '../../customComponents/customMultilineInput';
import { router } from 'expo-router';
import { SelectList } from 'react-native-dropdown-select-list';
import {statusFormData} from '../../customComponents/formData';
import { CustomInput } from '../../customComponents/customInput';
import useIdStore from '../leadStore';
import * as SecureStore from 'expo-secure-store';
 
export default function StatusForm({ selectedStatus }) {
  const [selectedValue, setSelectedValue] = useState('');
  const leadId = useIdStore((state) => state.number);
  const [formValues, setFormValues] = useState({});
  const sys_id = useIdStore((state) => state.sys_id);
 
  useEffect(() => {
    const initialFormValues = {};
    statusFormData.elements.forEach((element) => {
      initialFormValues[element.name] = '';
    });
    setFormValues(initialFormValues);
  }, []);
 
  LogBox.ignoreAllLogs();
 
  const onSubmit = async () => {
    const updatedFormValues = {
      ...formValues,
      lead_status: selectedStatus,
      sys_id: sys_id,
    };
 
    setFormValues(updatedFormValues);
    console.log('Form values before submit', updatedFormValues);
 
    const postUrl = `https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_leads_c/${sys_id}`;
    console.log(postUrl);
 
    try {
      const token = await SecureStore.getItemAsync('token');
      const stoken = JSON.parse(token);
      const apiToken = stoken.accessToken;
      console.log(apiToken);
 
      const response = await fetch(postUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + apiToken,
        },
        body: JSON.stringify(updatedFormValues),
      });
 
      console.log('Successfully posted', response);
      Alert.alert('Successfully Submitted!');
      router.navigate('/headerScreens/DrawerScreens/leadList')
    } catch (err) {
      console.log('error', err);
      Alert.alert('Failed to submit');
    }
  };
 
  const goBack = () => {
    router.back();
  };
 
  const handleSelect = (item, elementName) => {
    setSelectedValue(item);
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [elementName]: item,
    }));
 
    console.log('Selected value:', item);
  };
 
  const handleTextChange = (value, elementName) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [elementName]: value,
    }));
    console.log('Text value:', value);
  };
 
  const renderFormElement = (element) => {
    switch (element.type) {
      case 'dropdown':
        return (
          <View key={element.name} style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}</Text>
            <SelectList
              boxStyles={{
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 12,
                paddingVertical: 10,
                paddingHorizontal: 10,
                fontSize: 16,
              }}
              setSelected={(label) => handleSelect(label, element.name)}
              data={element.dropdownData.map((item) => ({
                value: item.value,
                label: item.key,
              }))}
              save="value"
            />
          </View>
        );
 
      case 'multiLineText':
        return (
          <View key={element.name} style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}</Text>
            <MultilineTextInput
              placeholder="Write a note"
              value={formValues[element.name]}
              onChange={(value) => handleTextChange(value, element.name)}
            />
          </View>
        );
 
      // case 'TextInput':
      //   return (
      //     <View key={element.name} style={styles.inputContainer}>
           
      //       <CustomInput
      //         key={element.name}
      //         title={element.title}
      //         placeholder={sys_id}
      //         value={sys_id}
      //         onChange={(value) => handleTextChange(value, element.name)}
      //       />
      //     </View>
      //   );
 
      default:
        return null;
    }
  };
 
  return (
    <View style={styles.cardContainer}>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.section}>
            {statusFormData.elements.map((element, index) => (
              <View key={index} style={styles.inputContainer}>
                {renderFormElement(element)}
              </View>
            ))}
          </View>
          <Button title="Submit" onPress={onSubmit} color="#023B5E" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={goBack}>
              {/* <ArrowBack /> */}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: 'white',
    width: '100%',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
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
 