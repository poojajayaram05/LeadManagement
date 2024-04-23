import { View, Text, Button, TextInput, StyleSheet, Select, ScrollView, Image,  Pressable, Alert,LogBox} from 'react-native'
import React, { useState, useEffect } from 'react'
import { CustomInput } from '../../customComponents/customInput';
import Collapsible from 'react-native-collapsible';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';
import { DropdownIcon, DropupIcon } from '../../assets/images';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import CustomHeader from '../../customComponents/customLeadHeader';
import { editOpportunityFormData } from '../../customComponents/formData'
import AddAccounts from './accountsDropdown';
import { SelectList } from 'react-native-dropdown-select-list';
import { FetchAccounts } from '../service/fetchAccounts';
import AddContacts from '../../customComponents/contactsDropdown';
import axios from 'axios';
import { useOpportunityStore } from '../leadStore';
import useIdStore from '../leadStore';
 
 
export default function editOpportunity() {
 
    const [formValues, setFormValues] = useState({}); // State to store form values
    // const oppId = useIdStore((state) => state.number);
    const oppId = useOpportunityStore((state) => state.number);
    console.log("opp idddd", oppId)
    const[sys_id, setSysId]=useState('');
    const[ownerId, setOwnerId]=useState('');
    const[editedValue, setEditedValues]=useState({});
    const sysId = useIdStore(state=>state.sys_id)
    
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await SecureStore.getItemAsync('token');
                const stoken = JSON.parse(token);
                const apiToken = stoken.accessToken;
                const response = await axios.get(`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_opportunity_c?sysparm_query=sys_id=${sysId}`, {
                    headers: {
                        'Authorization': 'Bearer ' + apiToken
                    }
                });
                // Assuming the response.data contains the lead data
                // const leadData = response.data.result[0]; // Assuming only one lead is returned
                // setFormValues(leadData);
                const oppData = response.data.result[0];
                // console.log("sys id data", oppData);
                // let sysid=oppData.sys_id;
                // console.log(sysid)
                // setSysId(sysid);// Assuming only one lead is returned
                setFormValues(oppData);
                let owner= oppData.new_owner.value;
                setOwnerId(owner);
                console.log("this is owner sys id", ownerId);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
 
 
    const [isCollapsed, setIsCollapsed] = useState({
        General: false,
        Forecast:false
      })
 
    const handleSelectDate = (date) => {
    console.log('Selected Date:', date);
    setSelectedDate(date);
};
 
useEffect(() => {
    const fetchData = async () => {
        try {
            const ldata = await FetchAccounts(); // Call FetchLeads and wait for the result
            setAccountsData(ldata.result); // Set the state with the fetched data
            console.log("this is the accounts data", ldata.result);
           // Log the fetched data
        } catch (error) {
            // Handle errors if any
            console.error('Error in fetching leads:', error);
        }
    };
 
    fetchData();
}, []);
 
console.disableYellowBox = true;
 
function extractDate(timestamp) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    return formattedDate;
  }
      const toggleSection = (sectionName) => {
        setIsCollapsed({ ...isCollapsed, [sectionName]: !isCollapsed[sectionName] });
      };
      const [alternateEmailCount, setAlternateEmailCount] = useState(0);
 
      const onAddAlternateEmail = () => {
        if (alternateEmailCount < 2) {
            setAlternateEmailCount(prevCount => prevCount + 1);
          }
      };
    const username= SecureStore.getItem('username');
    const [validationErrors, setValidationErrors] = useState({});
    const [showCalendarModal, setShowCalendarModal] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [phoneNumbers, setPhoneNumbers] = useState(['']);
    const[testValues, setTestValues]=useState([]);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
    const [userName, setUsername]=useState('');
    const[selectedDate, setSelectedDate] = useState('');
    const[accountsData, setAccountsData]=useState([]);  
      
 
  const validateForm = () => {
    const errors = {};
    editOpportunityFormData.elements.forEach((element) => {
      if (element.isRequired && !formValues[element.name]) {
        errors[element.name] = `${element.title} is required`;
      }
      if (element.validation && element.validation.regex && !element.validation.regex.test(formValues[element.name])) {
        errors[element.name] = element.validation.message;
      }
    });
    return errors;
  };
 
  const goBack=()=>{
    router.back();
  }
 
  LogBox.ignoreAllLogs();
 
 
  useEffect(() => {
    const getUsername = async () => {
        const storedUsername = await SecureStore.getItemAsync('username');
        setUsername(storedUsername);
        setFormValues(prevFormValues => ({ ...prevFormValues, ['owner']: storedUsername }));
    };
    getUsername();
}, []);
 
 
    const onSubmit = async () => {
    //   console.log("usernameee", username);
    //   console.log(formValues);
    console.log("usernameee", ownerId);
    // setFormValues(prevFormValues => ({ ...prevFormValues, ['new_owner']: ownerId}));
    // setEditedValues(prevFormValues=>({...prevFormValues, }))
    console.log("edit opportunity dataaaaaaaaaaaaaaaaaaaaaaa..........", editedValue);
 
    //   setFormValues(prevFormValues => ({ ...prevFormValues, ['owner']: username}));
 
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        // If there are validation errors, set them in state
        setValidationErrors(errors);
        console.log(validationErrors);
      }
      else{
        const postUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_opportunity_c/${sysId}`;
        console.log( "This is sys_id of opportunity", sys_id);
        console.log(postUrl);
        const token = SecureStore.getItem('token');
        const stoken = JSON.parse(token);
        const apiToken = stoken.accessToken;
        console.log(apiToken);  
   
        console.log("Form data", editedValue);
        try{
        const response = await fetch(postUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + apiToken
            },
          body: JSON.stringify(editedValue)  
          })
 
          console.log("Successfully posted",response);
          Alert.alert("Successfully Submitted!")
          router.replace('/DrawerScreens/deals')
        }
            catch(err){
                console.log("error");
            }
          }
        }
 
 
 
    const renderFormElements = (sectionName) => {
        return editOpportunityFormData.elements
          .filter((element) => element.sectionName === sectionName)
          .map((element, index) => (
            <View key={index} style={styles.formElement}>
              {renderFormElement(element)}
              {validationErrors[element.name] && <Text style={styles.error}>{validationErrors[element.name]}</Text>}
            </View>
          ));
      };
 
   
 
    const renderFormElement = (element) => {
        const handleSelect = (item) => {
            //setSelectedValue(item);
            setEditedValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item }));
            console.log(element.name, item.value);
        };
        const handleSwitch=(item)=>{
          setEditedValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item}));
          console.log(element.name, item);
        }
        const onSelectAccount = (accountName, sys_id) => {
          setEditedValues(prevFormValues => ({
            ...prevFormValues,
            [element.name]: sys_id // Update the accountName field in formValues
          }));
        };
 
        const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;
 
        const handleDateChange = (selectedDate, element) => {
            if (selectedDate) {
              setShowCalendarModal(false);
               console.log("dateeeeee", extractDate(selectedDate))
              if (element.name === 'due_date') {
                setFromDate(selectedDate);
                  setFormValues(prevFormValues => ({ ...prevFormValues, ['due_date']: extractDate(selectedDate) }));
                }
                setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: extractDate(selectedDate) }));
              }
            }
        switch (element.type) {
            case 'TextInput':
                return (
                  <View>
                    <CustomInput
                        key={element.name}
                        title={element.title}
                        placeholder={formValues[element.name] || ''}
                        onChange={(value) => setEditedValues({ ...editedValue, [element.name]: value })}
                        isRequired={element.isRequired}
                        inputType={element.inputType}
                        name={element.name}
                        rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                    />
                    </View>
                );
 
                case 'CurrencyInput':
                    return (
                      <View>
                        <CustomInput
                            key={element.name}
                            title={element.title}
                            // placeholder={element.placeholder}
                            isRequired={element.isRequired}
                            inputType={element.inputType}
                            name={element.name}
                            rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                            // onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                            // value={formValues[element.name] || ''}
                        placeholder={formValues[element.name] || ''}
                        onChange={(value) => setEditedValues({ ...editedValue, [element.name]: value })}
                        />
                        </View>
                    );
 
 
                case 'TextInputMultiLine':
                    return (
                      <View>
                         <Text style={styles.label}>{element.title}</Text>
                       <TextInput
                        style={[styles.input, styles.multilineInput]} // Add styles for multiline input
//   onChangeText={(value) => setFormValues({ ...formValues, [element.name]: value } )}
//   value={formValues[element.name] || ''}
                        placeholder={formValues[element.name] || ''}
                        onChange={(value) => setEditedValues({ ...editedValue, [element.name]: value })}
//   placeholder={element.placeholder}
                        multiline={true} // Set multiline prop to true
                        numberOfLines={4} // Specify the number of lines you want to display
/>
                        </View>
                    );
 
                case 'Adropdown':
                    return (
                      <View>
                        <Text style={styles.label}>Accounts</Text>
                        <AddAccounts onSelectAccount={onSelectAccount}/>
                        </View>
                    );
                    case 'Pdropdown':
                        return (
                        <View>
                          <Text style={styles.label}>Contacts</Text>
                          <AddContacts onSelectAccount={onSelectAccount}/>
                          </View>
                      );
                case 'TextInputP':
                    return (
                        <View>
                            <CustomInput
                                key={element.name}
                                title={element.title}
                                // placeholder={element.placeholder}
                                isRequired={element.isRequired}
                                inputType={element.inputType}
                                name={element.name}
                                rules={{
                                    required: element.isRequired ? `${element.title} is required` : false,
                                    pattern: {
                                        value: /^100$|^\d{0,2}(\.\d{1,2})?%?$/, // Regular expression to match percentage
                                        message: 'Please enter a valid percentage (e.g., 50%, 0.5)'
                                    }
                                }}
                                // onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                                // value={formValues[element.name] || ''}
                                placeholder={formValues[element.name] || ''}
                                onChange={(value) => setEditedValues({ ...editedValue, [element.name]: value })}
                            />
                        </View>
                    );
               
                case 'TextInputO':
                    return (
                      <View>
                        <CustomInput
                            key={element.name}
                            title={element.title}
                            placeholder={username}
                            value={username}
                            readOnly={true}
                          
                        />
                        </View>
                    );
 
 
                    case 'Currency':
  return (
    <View style={styles.inputContainer}>
      <CustomInput
                            key={element.name}
                            title={element.title}
                            // placeholder={'INR'}
                            rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                            // onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                            // value={formValues[element.name]}
                            isRequired={element.isRequired}
                            placeholder={formValues[element.name] || ''}
                            onChange={(value) => setEditedValues({ ...editedValue, [element.name]: value })}
                        />
    </View>
  );
 
  case 'Date':
    return (
      <View style={styles.inputContainer}>
      <Text style={styles.label}>{element.title}{starMark}</Text>
      <Pressable onPress={() => setShowCalendarModal(true)}>
        <View style={styles.dateInput}>
          <Text style={styles.dateText}>
            {formValues[element.name] ? extractDate(formValues[element.name]) : 'Select date '}
          </Text>
          <Ionicons name='calendar' size={20} color='black' style={styles.icon} />
        </View>
      </Pressable>
      {/* Calendar Modal */}
      {showCalendarModal && (
        <RNDateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => handleDateChange(selectedDate, element)}
        />
      )}
      {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
    </View>
     
    );
            case 'dropdown':
                return (
                    <View>
                    <View style = {styles.inputContainer}>
                <Text style={styles.label}>{element.title}{starMark}</Text>
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
                placeholder={formValues[element.name] || ''}
                data={element.dropdownData.map(item => ({ value: item.key, label: item.value }))}
                save="value"
                onSelect={() => handleSelect(selectedValue) } // Log selected values
            />
                </View>
                    </View>
                );      
    };
}
 
    return (
     
        <View style={styles.cardContainer}>
          <View>
            <CustomHeader title={"Edit Opportunity"} onPress={goBack}/>
          </View>
                     <ScrollView>
          <View style={styles.card}>
            <View style={styles.section}>
              {Object.keys(isCollapsed).map((sectionName, index) => (
                <View key={index} style={styles.sectionContainer}>
                  <TouchableOpacity onPress={() => toggleSection(sectionName)}>
                    <Text style={styles.sectionTitle}>{sectionName}</Text>
                    <Image
                      source={isCollapsed[sectionName] ? DropdownIcon : DropupIcon}
                      resizeMode="contain"
                      style={styles.dropdownIcon}
                    />
                  </TouchableOpacity>
                  <Collapsible collapsed={isCollapsed[sectionName]}>
                    {renderFormElements(sectionName)}
                  </Collapsible>
                </View>
              ))}
            </View>
     
            <Button title="Submit" onPress={onSubmit} color="#023B5E" />
     
            <View style={styles.buttonContainer}>
             
            </View>
          </View>
        </ScrollView>
      </View>
     
    );
}
 
const styles = StyleSheet.create({
  cardContainer: {
      flex: 1,
      paddingHorizontal: 5,
      paddingTop: 2,
      paddingBottom:15,
      backgroundColor: '#d1e0ed'
  },
  card: {
      backgroundColor: '#FFFFFF', // White card background
      borderRadius: 2,
      padding: 20,
      shadowColor: '#000000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5, // For Android shadow
  },
  container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor:'#cad5e8'
  },
  buttonContainer:{
  flex: 1,
  flexDirection: 'row', // Align items horizontally
  alignItems: 'flex-end', // Align items to the start (left)
  justifyContent: 'flex-end', // Align items to the start (left)
  padding: 10,
  },
  section: {
      marginBottom: 20,
  },
  sectionTitle: {
      fontSize: 20, // Increase font size for emphasis
      fontWeight: 'bold',
      marginBottom: 15, // Increase margin for better separation
      color: 'black', // Use a darker color for better readability
     
      paddingBottom: 5, // Add padding to space out the underline from the text
  },
  inputContainer: {
      marginBottom:8,
      // borderRadius:12,
  },
  backButton: {
      alignSelf: 'flex-end', // Align button to the start (left)
      marginRight: 'auto',
      color:'#023B5E'
       // Push button to the leftmost corner
    },
  dropdownIcon: {
      width: 20,
      height: 20,
      position: 'absolute',
      right: 10,
      top: 9,
  },
  label: {
      marginBottom: 3,
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius:12,
  },
 
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 12,
  paddingVertical: 10,
  paddingHorizontal: 10,
  fontSize: 16,
},
multilineInput: {
  minHeight: 100, // Adjust the minimum height as needed
  textAlignVertical: 'top', // Set the text alignment to start from the top
},
  input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 12,
      backgroundColor:'white',
      paddingVertical: 10,
      paddingHorizontal: 11,
      fontSize: 16,
  },
  error: {
      color: 'red',
      marginBottom:3,
      fontSize: 12,
  },
  switch:{
    alignItems:'flex-start'
    },
 
    dateInput: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 12,
      paddingVertical: 10,
      paddingHorizontal: 15,
      justifyContent: 'space-between',
    },
    dateText: {
      flex: 1,
      fontSize: 14,
    },
    calendarIcon: {
      width: 20,
      height: 20,
      marginLeft: 10, // Adjust the margin to create space between the date text and the icon
    },
    errorMessage: {
      color: 'red',
      fontSize:12
      // Add any other necessary styles
  },
});
 