// import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native'
// import React, { useState } from 'react'
// import { useForm, Controller } from 'react-hook-form';
// import { formData } from './formData';
// import { CustomInput } from '../customComponents/customInput';
// import Collapsible from 'react-native-collapsible';

// // Form component
// export default function Address() {
//     const { control, handleSubmit, formState: { errors } } = useForm();
//     const [isSection1Collapsed, setIsSection1Collapsed] = useState(false);
//     const [isSection2Collapsed, setIsSection2Collapsed] = useState(false);
//     const [isSection3Collapsed, setIsSection3Collapsed] = useState(false);

//     const onSubmit = (data) => {
//         console.log(data);
//     };

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
//         //textDecorationLine: 'underline',
//     },
//     inputContainer: {
//         marginBottom: 10,
//     },
//     label: {
//         marginBottom: 5,
//         fontSize: 16,
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
