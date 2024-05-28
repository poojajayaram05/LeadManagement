
import { View, Text, Button, TextInput, StyleSheet, Select, ScrollView, Image, Alert, LogBox} from 'react-native'
import React, { useState, useEffect } from 'react'
import { editLeadformData } from '../../customComponents/formData';
import { CustomInput } from '../../customComponents/customInput';
import Collapsible from 'react-native-collapsible';
import { TouchableOpacity } from 'react-native';
import Dropdown from '../../customComponents/customDropdown';
import RadioButton from '../../customComponents/customRadio';
import { DropdownIcon, DropupIcon } from '../../assets/images';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { CustomInputSocial } from '../../customComponents/customSocialField';
import CustomSwitch from '../../customComponents/customSwitch';
import CustomHeader from '../../customComponents/customLeadHeader';
import useIdStore from '../leadStore';
import axios from 'axios';
import { SelectList } from 'react-native-dropdown-select-list';
export default function EditLead() {
 
    const [formValues, setFormValues] = useState({}); // State to store form values
    const leadId = useIdStore((state) => state.number);
    const[sys_id, setSysId]=useState('');
    const[ownerId, setOwnerId]=useState('');
    const[editedValue, setEditedValues]=useState({});
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await SecureStore.getItemAsync('token');
                const stoken = JSON.parse(token);
                const apiToken = stoken.accessToken;
                const response = await axios.get(`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_leads_c?sysparm_query=number=${leadId}`, {
                    headers: {
                        'Authorization': 'Bearer ' + apiToken
                    }
                });
                // Assuming the response.data contains the lead data
                const leadData = response.data.result[0];
                console.log("sys id data", leadData);
                let sysid=leadData.sys_id;
                console.log(sysid) 
                setSysId(sysid);// Assuming only one lead is returned
                setFormValues(leadData);
                let owner= leadData.new_owner.value;
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
        Contact: false,
        ContactMethod: false,
        Address: false,
        Additional: false,
        Company:false,
        Social: false,
      })
 
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
    const [selectedValue, setSelectedValue] = useState(null);
    const[radioSelect, setradioSelect]=useState(null);
    const [phoneNumbers, setPhoneNumbers] = useState(['']);
    const[testValues, setTestValues]=useState([]);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [userName, setUsername]=useState('');
 
LogBox.ignoreAllLogs();
 
const onSelectRadio = (item) => {
    setradioSelect(item.value);
    setFormValues(prevFormValues => ({ ...prevFormValues, ['gender']: item.id}));
    console.log('Selected value:', item.id);
}
 
  const validateForm = () => {
    const errors = {};
    editLeadformData.elements.forEach((element) => {
      // Check if the field is visible based on lead type

      // Perform validation for visible fields
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
    router.navigate('leadDetailScreens');
  }
 
 
  useEffect(() => {
    const getUsername = async () => {
        // const storedUsername = await SecureStore.getItemAsync('username');
        // setUsername(storedUsername);
        setFormValues(prevFormValues => ({ ...prevFormValues, ['new_owner']: ownerId }));
    };
 
    getUsername();
}, []);
 
 
    const onSubmit = async () => {
      console.log("usernameee", ownerId);
      // setFormValues(prevFormValues => ({ ...prevFormValues, ['new_owner']: ownerId}));
      // setEditedValues(prevFormValues=>({...prevFormValues, }))
      console.log("edit dataaaaaaaaaaaaaaaaaaaaaaa..........", editedValue);
      
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        // If there are validation errors, set them in state
        setValidationErrors(errors);
        console.log(validationErrors);
      }
      else{
       
        const postUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_leads_c/${sys_id}`;
        console.log(postUrl);
        const token = SecureStore.getItem('token');
        const stoken = JSON.parse(token);
        const apiToken = stoken.accessToken;
        console.log(apiToken);
        console.log("Form data", formValues);
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
          router.replace('/DrawerScreens/leadList')
        }
            catch(err){
                console.log("error");
            }
          }
 
        }
    const renderFormElements = (sectionName) => {
        return editLeadformData.elements
          .filter((element) => element.sectionName === sectionName)
          .map((element, index) => (
            <View key={index} style={styles.formElement}>
              {renderFormElement(element)}
              {validationErrors[element.name] && <Text style={styles.error}>{validationErrors[element.name]}</Text>}
            </View>
          ));
      };
 
      const saveOwner=()=>{
        console.log("usernameee", username);
        setFormValues(prevFormValues => ({ ...prevFormValues, ['new_owner']: ownerId }));
 
      }
 
    const renderFormElement = (element) => {
        const handleSelect = (item) => {
            //setSelectedValue(item);
            setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item }));
            setEditedValues(prevFormValues=>({...prevFormValues, [element.name]:item}));
            console.log(element.name, item);
        };
        const handleSwitch=(item)=>{
          setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item}));
          setEditedValues(prevFormValues=>({...prevFormValues, [element.name]:item}));
          console.log(element.name, item);
 
        }
 
        const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;
 
       
   
        switch (element.type) {
            case 'TextInput':
                return (
                  <View>
                      {/* <Text style={styles.label}>{element.title}{starMark} </Text> */}
                    <CustomInput
                        key={element.name}
                        title={element.title}
                        placeholder={formValues[element.name] || ''}
                        isRequired={element.isRequired}
                        inputType={element.inputType}
                        name={element.name}
                        rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                        onChange={(value) => setEditedValues({ ...editedValue, [element.name]: value })}
                        
                    />
                    </View>
                );
 
                case 'TextInputL':
                  return (
                    <View>
                        {/* <Text style={styles.label}>{element.title}{starMark} </Text> */}
                      <CustomInput
                          key={element.name}
                          title={element.title}
                          placeholder={element.placeholder}
                          // isRequired={element.isRequired}
                          inputType={element.inputType}
                          name={element.name}
                          readOnly={true}
                          value={leadId}
                          rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                          onChange={(value) => setEditedValues({ ...editedValue, [element.name]: value })}
                          // value={formValues[element.name] || ''}
                      />
                      </View>
                  );
                case 'email':
                    return (
                      <View key={element.name}>
                          <Text style={styles.label}>{element.title}{starMark}</Text>
                        <CustomInput
                          key={element.name}
                          // title={element.title}
                          placeholder={element.placeholder}
                          name={element.name}
                          onChange={(value) => setEditedValues({ ...editedValue, [element.name]: value })}
                          value={formValues[element.name] || ''}
                          inputType={element.inputType}
                        />
                        {/* Render alternate email fields */}
                        {[...Array(alternateEmailCount)].map((_, i) => (
                          <CustomInput
                            key={`alternate_email${i + 1}`}
                            title={`Alternate Email ${i + 1}`}
                            placeholder={`Alternate Email ${i + 1}`}
                            name={`alternate_email${i + 1}`}
                            onChange={(value) => setEditedValues({ ...editedValue, [`alternate_email${i + 1}`]: value })}
                            value={formValues[`alternate_email${i + 1}`] || ''}
                            inputType={element.inputType}
                          />
                        ))}
                        {/* Plus Button */}
                        <TouchableOpacity onPress={onAddAlternateEmail}>
                          <Ionicons name="add-circle" size={24} color="black" style={styles.plusButton} />
                        </TouchableOpacity>
                      </View>
                    );
 
                case 'socialMediaInput':
                    return (
                        <CustomInputSocial
                            key={element.name}
                            title={element.title}
                            placeholder={formValues[element.name] || ''}
                            // control={control}
                            name={element.name}
                            rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                            // errors={errors}
                            icon={element.logo}
                            onChange={(value) => setEditedValues({ ...editedValue, [element.name]: value })}
                            
                         
                        />
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
                   // handleSelect(label); // Call handleSelect to save the selected value
                    setSelectedValue(label); // Update selected values
                }}
                placeholder={formValues[element.name] || ''}
                data={element.dropdownData.map(item => ({ value: item.key, label: item.value }))}
                save="value"
                onSelect={() => handleSelect(selectedValue) } // Log selected values
            />
                    </View>
                    {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
                    </View>
                );
               
            case 'dropdownL':
                return (
                    <View>
                    <View style = {styles.inputContainer}>
                    <Text style={styles.label}>{element.title}{starMark}</Text>
                    <SelectList
                boxStyles={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 12,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    fontSize: 16
                }}
                setSelected={(label) => {
                   // handleSelect(label); // Call handleSelect to save the selected value
                    setSelectedValue(label); // Update selected values
                }}
                placeholder={formValues[element.name] || ''}
                readOnly={true}
                data={element.dropdownData.map(item => ({ value: item.key, label: item.value }))}
                save="value"
                onSelect={() => handleSelect(selectedValue) } // Log selected values
            />
                    </View>
                    {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
                    </View>
                );
               
                    case 'RadioButton':
                        return(
                          <View style = {styles.inputContainer}>
                          <Text style={styles.label}>{element.title}{starMark}</Text>
                           
                                <RadioButton style={styles.inputContainer}
                                     onSelect={onSelectRadio}
                                     SelectedData={selectedValue}
                                     disableLine={1}
                                     value={selectedValue}
                                     onChange={(onSelectRadio) => setEditedValues({ ...formValues, [element.name]: onSelectRadio })}
                                     data={editLeadformData}
                                     title={element.title}
                                     // Pass the data prop here
                                />
                                </View>
 
                        )
                        case 'Switch':
                        return(
                          <View style={styles.inputContainer}>
       
                          <View style={styles.switchContainer}>
                          <Text style={styles.label}>{element.title}</Text>
                          <View style={styles.switch}>
                            <CustomSwitch onToggle={handleSwitch}
 
                          /></View>
                          </View>
                         
                       </View>
                        )
                        case 'TextInputO':
                          return(
                          <View>
                          <CustomInput
                                 key={element.name}
                                 title={element.title}
                                 placeholder={username}
                                //  onChange={(value) => setFormValues({ ...formValues, ['new_owner']: value })}
                                  value={username}
                                 name={element.name}
                                 
                             />
                             </View>
                          )
             
    };
}
 
    return (
     
        <View style={styles.cardContainer}>
          <View>
            <CustomHeader title={"Edit Lead"} onPress={goBack}/>
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
        marginBottom:8
 
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
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
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
   
});
 
 