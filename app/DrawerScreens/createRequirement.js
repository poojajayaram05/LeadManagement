import { View, Text, Button, TextInput, StyleSheet, Select, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { formData, productData } from '../../customComponents/formData'
import { CustomInput } from '../../customComponents/customInput';
import Collapsible from 'react-native-collapsible';
import { TouchableOpacity } from 'react-native';
import Dropdown from '../../customComponents/customDropdown';
import RadioButton from '../../customComponents/customRadio';
//import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { DropdownIcon, DropupIcon } from '../../assets/images';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import ArrowBack from '../../customComponents/arrowBack';
import MultilineTextInput from '../../customComponents/customMultilineInput';
import { requirementFormData } from '../../customComponents/formData';
import LDropdown from '../../customComponents/customLeadDropdown';

// Form component
export default function CreateRequirement() {
    // const { control, handleSubmit, formState: { errors } } = useForm();
    const [isSection1Collapsed, setIsSection1Collapsed] = useState(false);
    const [isSection2Collapsed, setIsSection2Collapsed] = useState(false);
    const [isSection3Collapsed, setIsSection3Collapsed] = useState(false);
    const [formValues, setFormValues] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null); 
    const[radioSelect, setradioSelect]=useState(null);
    const [phoneNumbers, setPhoneNumbers] = useState(['']);
    const[testValues, setTestValues]=useState([]);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);



  const handleSelect = (item) => {
    setSelectedValue(item);
    setFormValues(prevFormValues => ({ ...prevFormValues, selectedValue: item }));
    console.log('Selected value:', item);
};



const goBack=()=>{
    router.navigate('/DrawerScreens/leadList')
    
}
      

    const onSubmit = async () => {
        const postUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_management`;
        const token="DeC8cB2g6op02J_9-8cvJDwpA_5QTiL_9x8VnZLmwHy3QcoqoVR7KuhWUs-M0KgzLFLlp1NB8d5kekkbt3mCYQ";
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
              'Authorization' : 'Bearer ' + token
             
            },
          body: JSON.stringify(formValues)  
          })

          console.log("Successfully posted",response);
        }
        
    
            catch(err){
                console.log("error");
            }

        }

    


    const renderFormElement = (element) => {
        switch (element.type) {
            case 'TextInput':
                return (
                    <CustomInput
                        key={element.name}
                        title={element.title}
                        placeholder={element.placeholder}
                        // control={control}
                        name={element.name}
                        rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                        // errors={errors}
                        onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                        value={formValues[element.name] || ''}
                        readOnly={element.readOnly}
                    />
                );
            case 'Ldropdown':
                return (
                   
                    <View style={styles.inputContainer}>
                    <Text style={styles.label}>Select Product</Text>
                <LDropdown
  label="Select product"
  data={productData.map((product) => {
    //console.log(lead.id); // Log lead object
    return {
      value: product.id,
      label: `${product.id} - ${product.productName} `,
    };
  })}
  onSelect={handleSelect}
/>
                </View>
                );
                case 'multiLineText':
                    return (
                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>{element.title}</Text>
                        <MultilineTextInput
                          key={element.name}
                          title={element.title}
                          placeholder={element.placeholder}
                        />
                      </View>
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
                         
    };
}

    return (
        
        <View style={styles.cardContainer}>
        <ScrollView>
            <View style={styles.card}>
              
                <View style={styles.section}>
                    <TouchableOpacity onPress={() => toggleSection('section1')}>
                        <Text style={styles.sectionTitle}>Requirement Information</Text>
                        <Image
                            source={isSection1Collapsed ? DropdownIcon : DropupIcon}
                            resizeMode="contain"
                            style={styles.dropdownIcon}
                        />
                    </TouchableOpacity>
                    <Collapsible collapsed={isSection1Collapsed}>
                        {requirementFormData.elements.slice(0, 8).map((element, index) => (
                            <View key={index} style={styles.inputContainer}>
                                {renderFormElement(element)}
                            </View>
                        ))}
                    </Collapsible>
                </View>

              
                

                {/* Repeat the same structure for other sections (Company Information and Contact Information) */}
                <Button title="Submit" onPress={onSubmit} color='#023B5E' />
             
                <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={goBack}>
        <ArrowBack />
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
        color: '#333', // Use a darker color for better readability
        
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
