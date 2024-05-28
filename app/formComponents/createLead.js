import { View, Text, Button, TextInput, StyleSheet, Select, ScrollView, Image, Alert, LogBox,Modal, ActivityIndicator} from 'react-native'
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
import { SelectList } from 'react-native-dropdown-select-list';
import ModalSelector from 'react-native-modal-selector-searchable';

export default function CreateLead() {

    const [isCollapsed, setIsCollapsed] = useState({
        Basic: false,
        Additional: false,
      })
    const [zipCode, setZipCode] = useState(''); // State to store entered zip code
    const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
    const [addressInfo, setAddressInfo]=useState()
    const token = SecureStore.getItem('token');
    const stoken = JSON.parse(token);
    const apiToken = stoken.accessToken;

    const closeModal = () => {
      setModalVisible(false);
      setAddressInfo({}); // Reset address information
  };

  const zipcodeValueSet=(item)=>{
    setZipCode(item);
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
    const [formValues, setFormValues] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null); 
    const[radioSelect, setradioSelect]=useState(null);
    const [phoneNumbers, setPhoneNumbers] = useState(['']);
    const[testValues, setTestValues]=useState([]);
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [location, setLocation]=useState('');
    const[district, setDistrict]=useState('')
    const [selectedAddress, setSelectedAddress] = useState("");

LogBox.ignoreAllLogs();

const onSelectRadio = (item) => {
    setradioSelect(item.value);
    setFormValues(prevFormValues => ({ ...prevFormValues, ['gender']: item.id})); 
    console.log('Selected value:', item.id);
}
let index = 0;

  const validateForm = () => {
    const errors = {};
    formData.elements.forEach((element) => {
      if (element.sectionName === "General" && formValues["lead_type"] === "company") {
       
        if (element.name === "salutation" || element.name === "first_name" || element.name === "last_name"|| element.name==="gender") {
          return;
        }
      }
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
    router.navigate('headerScreens/DrawerScreens/leadList');
  }

  useEffect(() => {
    const getUsername = async () => {
        const storedUsername = await SecureStore.getItemAsync('username');
        setUsername(storedUsername);
        setFormValues(prevFormValues => ({ ...prevFormValues, ['new_owner']: storedUsername }));
    };

    getUsername();
}, []);

const searchAddress = async () => { 
  setModalVisible(true);
  console.log("zipcode",zipCode)
    const getAddressUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_postal_code?sysparm_query=postal_code=${zipCode}&sysparm_display_value=true` ;
    try {
      console.log(getAddressUrl)
        const response = await fetch(getAddressUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + apiToken
            },

          })
          const data = await response.json();
          setAddressInfo(data);
          console.log("data", data)
          console.log("adressss", addressInfo)
    }
   catch (error) {
      console.error('Error fetching address:', error);
      
  }
}
    const onSubmit = async () => {
      console.log("usernameee", username);
      console.log("Form data", formValues);
      setFormValues(prevFormValues => ({ ...prevFormValues, ['new_owner']: username}));
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        console.log(validationErrors);
      }
      else{
       
        const postUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_leads_c`;
        console.log(postUrl);
        const token = SecureStore.getItem('token');
        const stoken = JSON.parse(token);
        const apiToken = stoken.accessToken;
        console.log(apiToken);   
        console.log("Form data", formValues);
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
          router.navigate('headerScreens/DrawerScreens/leadList');
        }
            catch(err){
                console.log("error");
            }
          }

        }
    const renderFormElements = (sectionName) => {
        return formData.elements
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
        setFormValues(prevFormValues => ({ ...prevFormValues, ['new_owner']: username }));

      }

    const renderFormElement = (element) => {
        const handleSelect = (item) => {
            //setSelectedValue(item);
            setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item }));
            console.log(element.name, item);
        };
        const handleSwitch=(item)=>{
          setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item}));
          console.log(element.name, item);

        }
        const saveAddress=(data)=>{
          console.log(element.name,data);
          setFormValues({
            ...formValues,
            u_country: data.country.display_value,
            u_state: data.state.display_value,
            u_district: data.district,
            u_location: data.location,
            u_town:data.town,
            zip_postalcode:data.postal_code
            
          });
          console.log("form values", formValues)
        }
        
        const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;

        switch (element.type) {
          case 'TextInputAddress':
            return(
              <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                        onChange= {(text) => zipcodeValueSet(text)} // Update pincode state as user types
                        value={zipCode||''}
                        //value={formValues[element.name] || ''} 
                    />
                {/* Search icon */}
                <TouchableOpacity onPress={searchAddress}>
                  <Ionicons name="search" size={24} />
                </TouchableOpacity>
              </View>
              {modalVisible && (
       <Modal
       animationType="slide"
       transparent={true}
       visible={modalVisible}
       onRequestClose={closeModal}
     >
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
       <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, borderColor: 'black' }}>
      <ScrollView style={styles.scrollViewContainer}>
    {addressInfo && addressInfo.result ? ( // Check if addressInfo and addressInfo.result are available
      // Display address information
      addressInfo.result.map((address, index) => (
        <TouchableOpacity key={index} onPress={() => saveAddress(address)} >
          <View style={styles.addressContainer}>
            <Text style={styles.addressLabel}>Town: {address.town}</Text>
            <Text style={styles.addressLabel}>District: {address.district}</Text>
            <Text style={styles.addressLabel}>Location: {address.location}</Text>
            <Text style={styles.addressLabel}>State: {address.state.display_value}</Text>
            <Text style={styles.addressLabel}>Country: {address.country.display_value}</Text>
            <Text style={styles.addressLabel}>Zipcode: {address.postal_code} </Text>

          </View>
        </TouchableOpacity>
      ))
    ) : (
      
      <ActivityIndicator size="large" color="#0000ff" />
    )}
   
    <TouchableOpacity onPress={closeModal}>
      <Text style={{ color: 'blue', marginTop: 10 }}>Close</Text>
    </TouchableOpacity>
  </ScrollView>
</View>
       </View>
     </Modal>
     
              )}
            </View>
   
            )
            case 'TextInput':
                return (
                  <View>
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
                case 'email':
                    return (
                      <View key={element.name}>
                          <Text style={styles.label}>{element.title}{starMark}</Text>
                        <CustomInput
                          key={element.name}
                          // title={element.title}
                          placeholder={element.placeholder}
                          name={element.name}
                          onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                          value={formValues[element.name] || ''}
                          inputType={element.inputType}
                        />
                        {[...Array(alternateEmailCount)].map((_, i) => (
                          <CustomInput
                            key={`alternate_email${i + 1}`}
                            title={`Alternate Email ${i + 1}`}
                            placeholder={`Alternate Email ${i + 1}`}
                            name={`alternate_email${i + 1}`}
                            onChange={(value) => setFormValues({ ...formValues, [`alternate_email${i + 1}`]: value })}
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
                            placeholder={element.placeholder}
                            // control={control}
                            name={element.name}
                            rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                            // errors={errors}
                            icon={element.logo}
                            onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                            value={formValues[element.name] || ''}
                          
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
                                     onChange={(onSelectRadio) => setFormValues({ ...formValues, [element.name]: onSelectRadio })}
                                     data={formData}
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
            <CustomHeader title={"Create Lead"} onPress={goBack}/>
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
    scrollViewContainer: {
      maxHeight: 350, // Set the maximum height for scrolling
    },
    addressContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    addressLabel: {
      fontSize: 16,
      marginBottom: 5,
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
