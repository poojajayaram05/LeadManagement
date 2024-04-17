import { View, Text, Button, TextInput, StyleSheet, Select, ScrollView, Image, Pressable, Alert, LogBox} from 'react-native'
import React, { useState, useEffect } from 'react'
import { formData } from '../../customComponents/formData'
import { CustomInput } from '../../customComponents/customInput';
import Collapsible from 'react-native-collapsible';
import { TouchableOpacity } from 'react-native';
import Dropdown from '../../customComponents/customDropdown';
import RadioButton from '../../customComponents/customRadio';
import { DropdownIcon, DropupIcon } from '../../assets/images';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import ArrowBack from '../../customComponents/arrowBack';
import * as SecureStore from 'expo-secure-store';
import { CustomInputSocial } from '../../customComponents/customSocialField';
import CustomSwitch from '../../customComponents/customSwitch';
import CustomHeader from '../../customComponents/customLeadHeader';
import { contactFormData } from '../../customComponents/formData';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import AddAccounts from './accountsDropdown';
// Form component
import { SelectList } from 'react-native-dropdown-select-list';
export default function CreateContact() {
    // const { control, handleSubmit, formState: { errors } } = useForm();
    const [showCalendarModal, setShowCalendarModal] = useState(false); 
    const[selectedDate, setSelectedDate] = useState('');
    const [isCollapsed, setIsCollapsed] = useState({
      
        General: false,
        Contact: false,
       Address:false,
       Personal:false
      })

      console.disableYellowBox = true;

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
    const [formValues, setFormValues] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null); 
    const[radioSelect, setradioSelect]=useState(null);
    const [phoneNumbers, setPhoneNumbers] = useState(['']);
    const[testValues, setTestValues]=useState([]);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [userName, setUsername]=useState('');



//   const handleSelect = (item) => {a
//     setSelectedValue(item);
//     setFormValues(prevFormValues => ({ ...prevFormValues, selectedValue: item.value }));
//     console.log('Selected value:', item.value);
// };



const onSelectRadio = (item) => {
    setradioSelect(item.value);
    setFormValues(prevFormValues => ({ ...prevFormValues, ['gender']: item.id})); 
    console.log('Selected value:', item.id);
}



  const validateForm = () => {
    const errors = {};
    contactFormData.elements.forEach((element) => {
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
  LogBox.ignoreAllLogs();


  const goBack=()=>{
    router.back();
  }


  function extractDate(timestamp) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    return formattedDate;
  }

  useEffect(() => {
    const getUsername = async () => {
        const storedUsername = await SecureStore.getItemAsync('username');
        setUsername(storedUsername);
        setFormValues(prevFormValues => ({ ...prevFormValues, ['owner']: storedUsername }));
    };

    getUsername();
}, []);


    const onSubmit = async () => {
      console.log("usernameee", username);
      console.log("Form data", formValues);
      setFormValues(prevFormValues => ({ ...prevFormValues, ['owner']: username}));
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        // If there are validation errors, set them in state
        setValidationErrors(errors);
        console.log(validationErrors);
      }
      else{
       
        const postUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_contact_c`;
        console.log(postUrl);
        const token = SecureStore.getItem('token');
        const stoken = JSON.parse(token);
        const apiToken = stoken.accessToken;
        console.log(apiToken);   
        // const token="DeC8cB2g6op02J_9-8cvJDwpA_5QTiL_9x8VnZLmwHy3QcoqoVR7KuhWUs-M0KgzLFLlp1NB8d5kekkbt3mCYQ";
        console.log("Form data", formValues);
        // try{
            
        //     const response = axios.post(`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_management`, formValues);
        //     console.log('success',response);
        // }
        try{
        const response = await fetch(postUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + apiToken
             
            },
          body: JSON.stringify(formValues)  
          })

          console.log("Successfully posted",response);
          Alert.alert("Successfully Submitted!")
          router.replace('/DrawerScreens/contacts')
        }
        
    
            catch(err){
                console.log("error");
            }
          }

        }

    const renderFormElements = (sectionName) => {
        
          
        return contactFormData.elements
          .filter((element) => element.sectionName === sectionName)
          .map((element, index) => (
            <View key={index} style={styles.formElement}>
              {renderFormElement(element)}
              {validationErrors[element.name] && <Text style={styles.error}>{validationErrors[element.name]}</Text>}
            </View>
          ));
      };

   

    const renderFormElement = (element) => {
        const handleDateChange = (selectedDate, element) => {
            if (selectedDate) {
              setShowCalendarModal(false);
              
              // Check which date input is being changed
               console.log("dateeeeee", extractDate(selectedDate))
          
          
                setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: extractDate(selectedDate) }));
              }
            }
            const onSelectAccount = (accountName, sys_id) => {
              console.log("account sysid", sys_id);
              setFormValues(prevFormValues => ({
                ...prevFormValues,
                [element.name]: sys_id // Update the accountName field in formValues
              }));
            };
          
        const handleSelect = (item) => {
            //setSelectedValue(item);
            setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item }));
            console.log(element.name, item);
        };
        const handleSwitch=(item)=>{
          setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item}));
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
                        placeholder={element.placeholder}
                        // control={control}
                        isRequired={element.isRequired}
                        inputType={element.inputType}
                        name={element.name}
                        rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                        // errors={errors}
                        onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                        value={formValues[element.name] || ''} 
                    />
                    </View>
                );
                // case 'email':
                //     return (
                //       <View key={element.name}>
                //           <Text style={styles.label}>{element.title}{starMark}</Text>
                //         <CustomInput
                //           key={element.name}
                //           // title={element.title}
                //           placeholder={element.placeholder}
                //           name={element.name}
                //           onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                //           value={formValues[element.name] || ''}
                //           inputType={element.inputType}
                //         />
                //         {/* Render alternate email fields */}
                //         {[...Array(alternateEmailCount)].map((_, i) => (
                //           <CustomInput
                //             key={`alternate_email${i + 1}`}
                //             title={`Alternate Email ${i + 1}`}
                //             placeholder={`Alternate Email ${i + 1}`}
                //             name={`alternate_email${i + 1}`}
                //             onChange={(value) => setFormValues({ ...formValues, [`alternate_email${i + 1}`]: value })}
                //             value={formValues[`alternate_email${i + 1}`] || ''}
                //             inputType={element.inputType}
                //           />
                //         ))}
                //         {/* Plus Button */}
                //         <TouchableOpacity onPress={onAddAlternateEmail}>
                //           <Ionicons name="add-circle" size={24} color="black" style={styles.plusButton} />
                //         </TouchableOpacity>
                //       </View>
                //     );

                case 'MultilineText':
                    return (
                        <View>
                        <Text style={styles.label}>{element.title}</Text>
                      <TextInput
                       style={[styles.input, styles.multilineInput]} // Add styles for multiline input
                    onChangeText={(value) => setFormValues({ ...formValues, [element.name]: value } )}
                    value={formValues[element.name] || ''}
                 placeholder={element.placeholder}
 multiline={true} // Set multiline prop to true
 numberOfLines={4} // Specify the number of lines you want to display
/>
                       </View>
                    );
            case 'dropdown':
                return (
                   
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
                data={element.dropdownData.map(item => ({ value: item.key, label: item.label }))}
                save="key"
                onSelect={() => handleSelect(selectedValue) } // Log selected values
            />
                   
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
                                     onChange={(onSelectRadio) => setFormValues({ ...formValues, [element.name]: onSelectRadio })}
                                     data={contactFormData}
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
                        case 'dropdownAccounts':
                            return( 
                              <View style={styles.inputContainer}>
            
                              
                              <Text style={styles.label}>{element.title}</Text>
                          
                                <AddAccounts onSelectAccount={onSelectAccount}/>
    
                              </View>
                       
                            )
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
                        case 'TextInputO':
                          return( 
                          <View>
                          <CustomInput
                                 key={element.name}
                                 title={element.title}
                                 placeholder={username}
                                 // control={control}
                                 value={username}
                                 name={element.name}

                                readOnly={true}
                             />
                             </View>
                          )
              
    };
}

    return (
      
        <View style={styles.cardContainer}>
          <View>
            <CustomHeader title={"Create Contact"} onPress={goBack}/>
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
        borderRadius:12,

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
    dateInput: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 12,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    error: {
        color: 'red',
        marginBottom:3,
        fontSize: 12,
    },
    switch:{
      alignItems:'flex-start'
      },
      icon: {
        marginLeft: 'auto', // Align the icon to the rightmost edge of its container
      },
    
});
