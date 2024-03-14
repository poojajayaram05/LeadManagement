import { View, Text, Button, TextInput, StyleSheet, Select, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { formData } from '../../../customComponents/formData'
import { CustomInput } from '../../../customComponents/customInput';
import Collapsible from 'react-native-collapsible';
import { TouchableOpacity } from 'react-native';
import Dropdown from '../../../customComponents/customDropdown';
import RadioButton from '../../../customComponents/customRadio';
//import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { DropdownIcon, DropupIcon } from '../../../assets/images';
import { Ionicons } from '@expo/vector-icons';

// Form component
export default function General() {
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
    const addPhoneNumberField = () => {
        if (phoneNumbers.length < 3) {
            setPhoneNumbers([...phoneNumbers, '']);
            const updatedFormValues = { ...formValues };
            updatedFormValues[`phoneNumber_${phoneNumbers.length}`] = ''; 
            setFormValues(updatedFormValues);
        } else {
            console.log('Maximum limit of additional phone numbers reached');
            setIsAddButtonDisabled(true);
        }
    };


  const handleSelect = (item) => {
    setSelectedValue(item);
    setFormValues(prevFormValues => ({ ...prevFormValues, selectedValue: item }));
    console.log('Selected value:', item);
};

const onSelectRadio = (item) => {
    setradioSelect(item.label);
    setFormValues(prevFormValues => ({ ...prevFormValues, radioSelect: item})); 
    console.log('Selected value:', radioSelect);
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

    
    const toggleSection = (section) => {
        switch (section) {
            case 'section1':
                setIsSection1Collapsed(!isSection1Collapsed);
                break;
            case 'section2':
                setIsSection2Collapsed(!isSection2Collapsed);
                break;
            case 'section3':
                setIsSection3Collapsed(!isSection3Collapsed);
                break;
            default:
                break;
        }
    };


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
                                     
                                     title={element.title}
                                     // Pass the data prop here
                                />
                            
                           

                        )
                        case 'PhoneNumber':
                            return (
                                <View>
                                    {element.name === 'hphone' ? (
                                        <View>
                                            <Text style={styles.label}>Home Phone</Text>
                                            {phoneNumbers.map((phoneNumber, index) => (
                                                <View key={index} style={styles.inputContainer}>
                                                    <CustomInput
                                                        placeholder={`Home Phone Number`}
                                                        // control={control}
                                                        name={`phoneNumber_${index}`}
                                                        rules={{ required: false }}
                                                        // errors={errors}
                                                        onChange={(value) => {
                                                            const updatedPhoneNumbers = [...phoneNumbers];
                                                            updatedPhoneNumbers[index] = value;
                                                            setPhoneNumbers(updatedPhoneNumbers);
                                                            const updatedFormValues = { ...formValues };
                                                            updatedFormValues[`phoneNumber_${index}`] = value; 
                                                            setFormValues(updatedFormValues);
                                                        }}
                                                        value={phoneNumber}
                                                    />
                                                </View>
                                            ))}
                                            {!isAddButtonDisabled && (
                                                <TouchableOpacity
                                                    style={styles.addButton}
                                                    onPress={addPhoneNumberField}
                                                >
                                                    <Text> <Ionicons name='add-circle' size={20} color='black' /> </Text>
                                                </TouchableOpacity>
                                            )}
                                            {phoneNumbers.length > 1 && ( // Render remove button only if there is more than one phone number
                                                <TouchableOpacity
                                                    style={styles.removeButton}
                                                    onPress={() => {
                                                        const updatedPhoneNumbers = [...phoneNumbers];
                                                        updatedPhoneNumbers.pop(); // Remove the last phone number
                                                        setPhoneNumbers(updatedPhoneNumbers);
                                                    }}
                                                >
                                                    <Text><Ionicons name='remove-circle' size={21} color='black' /></Text>
                                                </TouchableOpacity>
                                            )}
                                        </View>
                                    ) : (
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
                                        />
                                    )}
                                </View>
                            );
                
                            
    };
}

    return (
        // <View style={styles.container}>
        //     <ScrollView>
        //         <View style={styles.section}>
        //             <Text style={styles.sectionTitle} onPress={() => setIsSection1Collapsed(!isSection1Collapsed)}>Personal Information</Text>
        //             <Collapsible collapsed={isSection1Collapsed}>
        //                 {formData.elements.slice(0, 4).map((element, index) => (
        //                     <View key={index} style={styles.inputContainer}>
        //                         {renderFormElement(element)}
        //                     </View>
        //                 ))}
        //             </Collapsible>
        //         </View>

        //         <View style={styles.section}>
        //             <Text style={styles.sectionTitle} onPress={() => setIsSection2Collapsed(!isSection2Collapsed)}>Company Information</Text>
        //             <Collapsible collapsed={isSection2Collapsed}>
        //                 {formData.elements.slice(4, 9).map((element, index) => (
        //                     <View key={index} style={styles.inputContainer}>
        //                         {renderFormElement(element)}
        //                     </View>
        //                 ))}
        //             </Collapsible>
        //         </View>
               
    
 

        //         <View style={styles.section}>
        //             <Text style={styles.sectionTitle} onPress={() => setIsSection3Collapsed(!isSection3Collapsed)}>Contact Information</Text>
        //             <Collapsible collapsed={isSection3Collapsed}>
        //                 {formData.elements.slice(9).map((element, index) => (
        //                     <View key={index} style={styles.inputContainer}>
        //                         {renderFormElement(element)}
        //                     </View>
        //                 ))}
        //             </Collapsible>
        //         </View>
                
               

        //         <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        //     </ScrollView>
        // </View>
        //uncommerny
        // <View style={styles.cardContainer}>
        // <ScrollView>
        //     <View style={styles.card}>
        //         <View style={styles.section}>
        //             <Text style={styles.sectionTitle} onPress={() => setIsSection1Collapsed(!isSection1Collapsed)}>Personal Information</Text>
        //             <Image
        //             source={DropdownIcon}
        //             resizeMode="contain"
        //             style={styles.dropdownIcon}
        //         />
        //             <Collapsible collapsed={isSection1Collapsed}>
        //                 {formData.elements.slice(0, 4).map((element, index) => (
        //                     <View key={index} style={styles.inputContainer}>
        //                         {renderFormElement(element)}
        //                     </View>
        //                 ))}
        //             </Collapsible>
        //         </View>

        //         <View style={styles.section}>
        //             <Text style={styles.sectionTitle} onPress={() => setIsSection2Collapsed(!isSection2Collapsed)}>Company Information</Text>
        //             <Image
        //             source={DropdownIcon}
        //             resizeMode="contain"
        //             style={styles.dropdownIcon}
        //         />
        //             <Collapsible collapsed={isSection2Collapsed}>
        //                 {formData.elements.slice(4, 9).map((element, index) => (
        //                     <View key={index} style={styles.inputContainer}>
        //                         {renderFormElement(element)}
        //                     </View>
        //                 ))}
        //             </Collapsible>
        //         </View>

        //         <View style={styles.section}>
        //             <Text style={styles.sectionTitle} onPress={() => setIsSection3Collapsed(!isSection3Collapsed)}>Contact Information</Text>
        //             <Image
        //             source={DropdownIcon}
        //             resizeMode="contain"
        //             style={styles.dropdownIcon}
        //         />
        //             <Collapsible collapsed={isSection3Collapsed}>
        //                 {formData.elements.slice(9).map((element, index) => (
        //                     <View key={index} style={styles.inputContainer}>
        //                         {renderFormElement(element)}
        //                     </View>
        //                 ))}
        //             </Collapsible>
        //         </View>
        //         <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        //     </View>
           

            
        // </ScrollView>
        // </View>
        //till here
        <View style={styles.cardContainer}>
        <ScrollView>
            <View style={styles.card}>
                <View style={styles.section}>
                    <TouchableOpacity onPress={() => toggleSection('section1')}>
                        <Text style={styles.sectionTitle}>Personal Information</Text>
                        <Image
                            source={isSection1Collapsed ? DropdownIcon : DropupIcon}
                            resizeMode="contain"
                            style={styles.dropdownIcon}
                        />
                    </TouchableOpacity>
                    <Collapsible collapsed={isSection1Collapsed}>
                        {formData.elements.slice(0, 4).map((element, index) => (
                            <View key={index} style={styles.inputContainer}>
                                {renderFormElement(element)}
                            </View>
                        ))}
                    </Collapsible>
                </View>

                <View style={styles.section}>
                    <TouchableOpacity onPress={() => toggleSection('section2')}>
                        <Text style={styles.sectionTitle}>Company Information</Text>
                        <Image
                            source={isSection2Collapsed ? DropdownIcon : DropupIcon}
                            resizeMode="contain"
                            style={styles.dropdownIcon}
                        />
                    </TouchableOpacity>
                    <Collapsible collapsed={isSection2Collapsed}>
                        {formData.elements.slice(4, 9).map((element, index) => (
                            <View key={index} style={styles.inputContainer}>
                                {renderFormElement(element)}
                            </View>
                        ))}
                    </Collapsible>
                </View>
                <View style={styles.section}>
                    <TouchableOpacity onPress={() => toggleSection('section3')}>
                        <Text style={styles.sectionTitle}>Contact Information</Text>
                        <Image
                            source={isSection3Collapsed ? DropdownIcon : DropupIcon}
                            resizeMode="contain"
                            style={styles.dropdownIcon}
                        />
                    </TouchableOpacity>
                    <Collapsible collapsed={isSection3Collapsed}>
                        {formData.elements.slice(9).map((element, index) => (
                            <View key={index} style={styles.inputContainer}>
                                {renderFormElement(element)}
                            </View>
                        ))}
                    </Collapsible>
                </View>
                

                {/* Repeat the same structure for other sections (Company Information and Contact Information) */}
                <View style={{backgroundColor:'#023B5E'}}> 
                
                <Button  title="Submit" onPress={onSubmit}  color="#023B5E"  />
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
