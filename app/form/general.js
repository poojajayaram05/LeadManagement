import { View, Text, Button, TextInput, StyleSheet, Select, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { formData } from './formData';
import { CustomInput } from '../../customComponents/customInput';
import Collapsible from 'react-native-collapsible';
import { TouchableOpacity } from 'react-native';
//import CalenderModal from '../customComponents/customRadio';
import Dropdown from '../../customComponents/customDropdown';
import RadioButton from '../../customComponents/customRadio';


// Form component
export default function General() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [isSection1Collapsed, setIsSection1Collapsed] = useState(false);
    const [isSection2Collapsed, setIsSection2Collapsed] = useState(false);
    const [isSection3Collapsed, setIsSection3Collapsed] = useState(false);
    const [formValues, setFormValues] = useState([{}]);
    const [selectedValue, setSelectedValue] = useState(null); // State for the selected value
    const[radioSelect, setradioSelect]=useState(null);
    const [phoneNumbers, setPhoneNumbers] = useState(['']);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
    const addPhoneNumberField = () => {
        if (phoneNumbers.length < 3) {
            setPhoneNumbers([...phoneNumbers, '']);
            const updatedFormValues = { ...formValues };
            updatedFormValues[`phoneNumber_${phoneNumbers.length}`] = ''; // Add an empty string for the new phone number
            setFormValues(updatedFormValues);
        } else {
            console.log('Maximum limit of additional phone numbers reached');
            setIsAddButtonDisabled(true);
        }
    };


    const handleSelect = (item) => {
        setSelectedValue(item);
        setFormValues(item); // Update the selected value when an item is selected
        console.log('Selected value:', item); // Log the selected value to the console
    };
    const onSelectRadio = (item) => {
        setradioSelect(item);
        setFormValues(item); // Update the selected value when an item is selected
        console.log('Selected value:', item); // Log the selected value to the console
    };
    



    // const dropdownData = [
    //     { value: 1, label: 'Option 1' },
    //     { value: 2, label: 'Option 2' },
    //     { value: 3, label: 'Option 3' },
    //   ];
      

    const onSubmit = () => {
        console.log("Form data", formValues);
    };
    

    const renderFormElement = (element) => {
        switch (element.type) {
            case 'TextInput':
                return (
                    <CustomInput
                        key={element.name}
                        title={element.title}
                        placeholder={element.placeholder}
                        control={control}
                        name={element.name}
                        rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                        errors={errors}
                        onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                        value={formValues[element.name] || ''}
                    />
                );
            case 'dropdown':
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={styles.label}>{element.title}</Text>
                        <Dropdown style={styles.inputContainer}
                            label={selectedValue ? selectedValue.label : 'Select'}
                            data={element.dropdownData}
                            value={selectedValue}
                            onSelect={handleSelect}
                            
                        />
                    </View>
                );
               
                    case 'RadioButton':
                        return(
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                            {/* <Text style={styles.label}>{element.title}</Text> */}
                                <RadioButton style={styles.inputContainer}
                                     onSelect={onSelectRadio}
                                     SelectedData={selectedValue} 
                                     title={element.title}// Pass the selected data if needed
                                     // Pass the data prop here
                                />
                            </View>

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
                                                        control={control}
                                                        name={`phoneNumber_${index}`}
                                                        rules={{ required: false }}
                                                        errors={errors}
                                                        onChange={(value) => {
                                                            const updatedPhoneNumbers = [...phoneNumbers];
                                                            updatedPhoneNumbers[index] = value;
                                                            setPhoneNumbers(updatedPhoneNumbers);
                                                            const updatedFormValues = { ...formValues };
                                                            updatedFormValues[`phoneNumber_${index}`] = value; // Update the corresponding phone number in formValues
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
                            <Text>Add +</Text>
                        </TouchableOpacity>
                                                                )}
                                            {/* <TouchableOpacity onPress={addPhoneNumberField}  disabled={isAddButtonDisabled} >
                                                {isAddButtonDisabled}
                                                <Text style={styles.addButton}>+ Add</Text>
                                            </TouchableOpacity> */}
                                        </View>
                                    ) : (
                                        <CustomInput
                                            key={element.name}
                                            title={element.title}
                                            placeholder={element.placeholder}
                                            control={control}
                                            name={element.name}
                                            rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                                            errors={errors}
                                            onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                                            value={formValues[element.name] || ''}
                                        />
                                    )}
                                </View>
                            );
    };
}

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle} onPress={() => setIsSection1Collapsed(!isSection1Collapsed)}>Personal Information</Text>
                    <Collapsible collapsed={isSection1Collapsed}>
                        {formData.elements.slice(0, 4).map((element, index) => (
                            <View key={index} style={styles.inputContainer}>
                                {renderFormElement(element)}
                            </View>
                        ))}
                    </Collapsible>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle} onPress={() => setIsSection2Collapsed(!isSection2Collapsed)}>Company Information</Text>
                    <Collapsible collapsed={isSection2Collapsed}>
                        {formData.elements.slice(4, 9).map((element, index) => (
                            <View key={index} style={styles.inputContainer}>
                                {renderFormElement(element)}
                            </View>
                        ))}
                    </Collapsible>
                </View>
               
    
 
        {/* <View style={styles.container}> */}
            {/* <PortalProvider> 
                <SelectDemo/>
            </PortalProvider> */}
        {/* </View> */}
   
{/* </View>

                <View style={styles.section}>
                    <Text style={styles.label}>Lead types</Text>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Dropdown
                            label={selectedValue ? selectedValue.label : 'Select'}
                            data={dropdownData}
                            value={selectedValue}
                            onSelect={handleSelect}
                        />
                    </View> 
                </View>  */}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle} onPress={() => setIsSection3Collapsed(!isSection3Collapsed)}>Contact Information</Text>
                    <Collapsible collapsed={isSection3Collapsed}>
                        {formData.elements.slice(9).map((element, index) => (
                            <View key={index} style={styles.inputContainer}>
                                {renderFormElement(element)}
                            </View>
                        ))}
                    </Collapsible>
                </View>
                
               

                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'darkblue',
        textDecorationLine: 'underline',
    },
    inputContainer: {
        marginBottom: 10,
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
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
    
});
// export default function General() {
//     const { control, handleSubmit, formState: { errors } } = useForm();
//     const [isSection1Collapsed, setIsSection1Collapsed] = useState(false);
//     const [isSection2Collapsed, setIsSection2Collapsed] = useState(false);
//     const [isSection3Collapsed, setIsSection3Collapsed] = useState(false);
//     const [formValues, setFormValues] = useState({});
//     const [selectedValue, setSelectedValue] = useState(null);

//     const handleSelect = (item) => {
//       setSelectedValue(item);
//     };
  

//     const onSubmit = (data) => {
//         console.log("form data",formValues);
//     };

//     const dropdownData = [
//         { value: 1, label: 'Option 1' },
//         { value: 2, label: 'Option 2' },
//         { value: 3, label: 'Option 3' },
//       ];
      

//     const renderFormElement = (element) => {
//         return (
//             <CustomInput
//                 key={element.name}
//                 title={element.title}
//                 placeholder={element.placeholder}
//                 control={control}
//                 name={element.name}
//                 rules={{ required: element.isRequired ? `${element.title} is required` : false }}
//                 errors={errors}
//                 onChange={(value) => setFormValues({ ...formValues, [element.name]: value })} // Update form field values
//                 value={formValues[element.name] || ''} // Set value from state
//             />
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <ScrollView>
              
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle} onPress={() => setIsSection1Collapsed(!isSection1Collapsed)}>Personal Information</Text>
//                     <Collapsible collapsed={isSection1Collapsed}>
//                         {formData.elements.slice(0, 4).map((element, index) => (
//                             <View key={index} style={styles.inputContainer}>
//                                 {renderFormElement(element)}
//                             </View>
//                         ))}
//                     </Collapsible>
//                 </View>

              
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle} onPress={() => setIsSection2Collapsed(!isSection2Collapsed)}>Company Information</Text>
//                     <Collapsible collapsed={isSection2Collapsed}>
//                         {formData.elements.slice(4, 9).map((element, index) => (
//                             <View key={index} style={styles.inputContainer}>
//                                 {renderFormElement(element)}
//                             </View>
//                         ))}
//                     </Collapsible>
//                 </View>

//                 <View style={styles.section}>
//                     <Text style={styles.label}>Lead types</Text>
//                     {/* <View style={styles.inputContainer}>
//                     <ExampleScreen /> 
//                     </View> */}
//                         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {/* <Text>Selected Value: {selectedValue ? selectedValue.label : 'None'}</Text> */}
//       <Dropdown
//         label={selectedValue ? selectedValue.label : 'Select'}
//         data={dropdownData}
//         value={selectedValue}
//         onSelect={handleSelect}
//       />
//     </View>
                
//                 {/* <DropdownComponent/> */}
//                 </View>
//                 <View style={styles.section}>
//                     <Text style={styles.sectionTitle} onPress={() => setIsSection3Collapsed(!isSection3Collapsed)}>Contact Information</Text>
//                     <Collapsible collapsed={isSection3Collapsed}>
//                         {formData.elements.slice(9).map((element, index) => (
//                             <View key={index} style={styles.inputContainer}>
//                                 {renderFormElement(element)}
//                             </View>
//                         ))}
//                     </Collapsible>
//                 </View>
               

          
//                 <Button title="Submit" onPress={handleSubmit(onSubmit)} />
                
//             </ScrollView>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: 20,
//         paddingTop: 20,
//     },
//     section: {
//         marginBottom: 20,
//     },
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         color:'darkblue',
//         textDecorationLine: 'underline',
//     },
//     inputContainer: {
//         marginBottom: 10,
//     },
//     label: {
//         marginBottom: 5,
//         fontSize: 12,
//         fontWeight: 'bold',
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//         fontSize: 16,
//     },
//     error: {
//         color: 'red',
//         fontSize: 12,
//     },
// });
