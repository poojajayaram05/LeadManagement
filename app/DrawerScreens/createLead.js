import { View, Text, Button, TextInput, StyleSheet, Select, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
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
// Form component
export default function CreateLead() {
    // const { control, handleSubmit, formState: { errors } } = useForm();
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
    

  
    const [formValues, setFormValues] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null); 
    const[radioSelect, setradioSelect]=useState(null);
    const [phoneNumbers, setPhoneNumbers] = useState(['']);
    const[testValues, setTestValues]=useState([]);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
    


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

const goBack=()=>{
    router.back()
    
}
      

    const onSubmit = async () => {
        const postUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_c`;
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
          router.replace('/DrawerScreens/leadList')
        }
        
    
            catch(err){
                console.log("error");
            }

        }
    // const toggleSection = (section) => {
    //     switch (section) {
    //         case 'section1':
    //             setIsSection1Collapsed(!isSection1Collapsed);
    //             break;
    //         case 'section2':
    //             setIsSection2Collapsed(!isSection2Collapsed);
    //             break;
    //         case 'section3':
    //             setIsSection3Collapsed(!isSection3Collapsed);
    //             break;
    //         default:
    //             break;
    //     }
    // };
    const renderFormElements = (sectionName) => {
        return formData.elements
          .filter((element) => element.sectionName === sectionName)
          .map((element, index) => (
            <View key={index} style={styles.formElement}>
              {renderFormElement(element)}
            </View>
          ));
      };

    const renderFormElement = (element) => {
        const handleSelect = (item) => {
            setSelectedValue(item);
            setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item.value }));
            console.log(element.name, item.value);
        };
        
        if (element.sectionName === "General" && formValues["lead_type"] === "company") {
            // If lead type is company and the element is related to personal information, skip rendering
            if (element.name === "salutation" || element.name === "first_name" || element.name === "last_name" || element.name === "gender"|| element.name==="job_title") {
                return null;
            }
            
        }
        switch (element.type) {
            case 'TextInput':
                return (
                    <CustomInput
                        key={element.name}
                        title={element.title}
                        placeholder={element.placeholder}
                        // control={control}
                        inputType={element.inputType}
                        name={element.name}
                        rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                        // errors={errors}
                        onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                        value={formValues[element.name] || ''} 
                    />
                );
                case 'email':
                    return (
                      <View key={element.name}>
                        <CustomInput
                          key={element.name}
                          title={element.title}
                          placeholder={element.placeholder}
                          name={element.name}
                          onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
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
                    <Text style={styles.label}>{element.title}</Text>
                        <Dropdown style={styles.inputContainer}
                            label={selectedValue ? selectedValue.label : 'Select'}
                            data={element.dropdownData}
                            value={selectedValue}
                            onSelect={handleSelect}
                        />
                    </View>
                    </View>
                );
               
                    case 'RadioButton':
                        return( 
                            
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
                        )
              
    };
}

    return (
      
        <View style={styles.cardContainer}>
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
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom:15,
        backgroundColor: '#d1e0ed'
    },
    card: {
        backgroundColor: '#FFFFFF', // White card background
        borderRadius: 10,
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
        paddingHorizontal: 15,
        fontSize: 16,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
    
});
