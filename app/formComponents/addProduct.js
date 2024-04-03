import { View, Text, StyleSheet, ScrollView, Image, Button, Pressable, Alert } from 'react-native'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
//mport { taskFormData } from '../../../customComponents/formData';
import Collapsible from 'react-native-collapsible';
import Dropdown from '../../customComponents/customDropdown';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { DropdownIcon, DropupIcon } from '../../assets/images';
import { CustomInput } from '../../customComponents/customInput';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { date } from 'zod';
import { Ionicons } from '@expo/vector-icons';
import MultilineTextInput from '../../customComponents/customMultilineInput';
import CustomMultipleSelect from '../../customComponents/cutsomMultipleSelect';
import { productData, productFormData, taskFormData } from '../../customComponents/formData';
import { leadData } from '../../customComponents/formData';
import LDropdown from '../../customComponents/customLeadDropdown';
import { router } from 'expo-router';
import ArrowBack from '../../customComponents/arrowBack';
import CustomSwitch from '../../customComponents/customSwitch';
import ImageUpload from '../../customComponents/imageUpload';
// import RadioButton from '../../customComponents/customRadio';
import useIdStore from '../leadStore';
import LeadDet from '../../leadComponents/leadDetHeader';
import * as SecureStore from 'expo-secure-store'

 
 
export default function CreateProduct() {
  // const { control, handleSubmit, formState: { errors } } = useForm();
  const [isSection1Collapsed, setIsSection1Collapsed] = useState(false);
  const [isSection2Collapsed, setIsSection2Collapsed] = useState(false);
  const [isSection3Collapsed, setIsSection3Collapsed] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const[radioSelect, setradioSelect]=useState(null);
  const [formValues, setFormValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const[selectedDate, setSelectedDate] = useState('');
  const[selectedTime, setSelectedTime]=useState(null);
  const [phoneNumbers, setPhoneNumbers] = useState(['']);
  const[customDate, setCustomDate]=useState(null);
  const[customTime, setCustomTime]=useState(null);
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);

  const leadId = useIdStore((state) => state.number);
 
  const handleCancelClicked = () => {
      setIsModalVisible(false);
  };
 
  const formatTime = (time) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true // Use 12-hour format
    };
 
    return time.toLocaleString('en-US', options);
  };
 
  const handleSelect = (item) => {
   
    setFormValues(prevFormValues => ({ ...prevFormValues, selectedValue: item }));
    console.log('Selected value:', item);
};
 
const onSelectRadio = (item) => {
    setradioSelect(item.label);
    setFormValues(prevFormValues => ({ ...prevFormValues, radioSelect: item}));
    console.log('Selected value:', radioSelect);
}
 
 
// const handleSelectDate = (date) => {
//     console.log('Selected Date:', date);
//     setSelectedDate(date);
// };
// const handleSelectTime = (time) => {
//   console.log('Selected Date:', time);
//   setSelectedTime(time);
// };
 
// const goBack=()=>{
//   router.navigate('/DrawerScreens/taskList');

useEffect(() => {
 
      setFormValues(prevFormValues => ({ ...prevFormValues, ['associated_lead']: leadId }));
  }
, [leadId]);
// }
 
const onSubmit = async () => {
 
  const postUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_product_c`;
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
    router.replace('/DrawerScreens/leadList')
  }
  

      catch(err){
          console.log("error");
      }
    }

    function extractDate(timestamp) {
      const dateObject = new Date(timestamp);
      const year = dateObject.getFullYear();
      const month = dateObject.getMonth() + 1;
      const date = dateObject.getDate();
      const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
      return formattedDate;
    }
    

 
const renderFormElement = (element) => {
  const handleDateChange = (selectedDate, element) => {
    if (selectedDate) {
      setShowCalendarModal(false);
      
      // Check which date input is being changed
      console.log("dateeeeee", extractDate(selectedDate))
     
        setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: extractDate(selectedDate) }));
      }
    }
    const handleSelect = (item) => {
   
      setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.value }));
      console.log('Selected value:', item);
      
  };
    switch (element.type) {
      
      case 'TextInputLead':
        return (
          <View>
             <CustomInput
                    key={element.name}
                    title={element.title}
                    placeholder={leadId}
                    // control={control}
                    name={element.name}
                   
                    // errors={errors}
                    value={leadId}
                    readOnly={true}
                />
             

            </View>
        );
        case 'TextInput':
            return (
              <View>
                  {/* <RNDateTimePicker mode="time" value={new Date()} /> */}
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
                    readOnly={element.readOnly}
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
           
           
              // case 'multilineInput':
              //   return (
              //       <View style={styles.inputContainer}>
              //           <Text style={styles.label}>Enter a note</Text>
              //           {/* <MultiSelectExample/> */}
              //           <MultilineTextInput/>
                       
              //       </View>
              //   );
               
                  // case 'switch':
                  // return (
                   
                  //   <View style={styles.switchContainer}>
                  //   <Text style={styles.labelswitch}>Active</Text>
                  //   <View style={styles.switch}><CustomSwitch/></View>
                  //   </View>
                  // );
 
                  // case 'imageUpload':
                  //   return (
                  //     <View>
                  //       <Text style={styles.label}>Product Images</Text>
                  //       <ImageUpload />
                  //     </View>
                  //   );
                   
                    // case 'RadioButton':
                    //     return(
                           
                           
                    //             <RadioButton style={styles.inputContainer}
                    //                  onSelect={onSelectRadio}
                    //                  SelectedData={selectedValue}
                    //                  disableLine={1}
                    //                  value={selectedValue}
                    //                  onChange={(onSelectRadio) => setFormValues({ ...formValues, [element.label]: onSelectRadio })}
                    //                  title={element.title}
                    //                  data={productFormData}
                    //                  // Pass the data prop here
                    //             />
                           
                           
 
                    //     )
 
               
 
                 
                 
             
                  // case 'leadDropdown':
                  //   return (
                  //     <View>
                  //     <View style = {styles.inputContainer}>
                  //     <Text style={styles.label}>{element.title}</Text>
                     
                  //         <Dropdown style={styles.inputContainer}
                  //             label={selectedValue ? selectedValue.firstname : 'Select'}
                  //             data={element.dropdownData}
                  //             value={selectedValue.firstname}
                  //             onSelect={handleSelect}
                  //         />
                  //     </View>
                  //     </View>
                  //   );
                  case 'date':
                    return (
                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>{element.title}</Text>
                        <Pressable onPress={() => setShowCalendarModal(true)}>
                          <View style={styles.dateInput}>
                            <Text style={styles.dateText}>
                            {formValues[element.name] ? extractDate(formValues[element.name]) : 'Select date '}
                            <View style={styles.icon}>
                              <Ionicons name='calendar' size={20} color='black' />
                              </View>
                            </Text>
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
                    
                      </View>
                      
                    );
                       
};
}
  return (
    <View style={styles.cardContainer}>
        <View style={styles.header}>
      <LeadDet/>
      </View>
    <ScrollView>
     
        <View style={styles.card}>
       
            <View style={styles.section}>
    
            
                    {productFormData.elements.slice(0, 11).map((element, index) => (
                        <View key={index} style={styles.inputContainer}>
                            {renderFormElement(element)}
                        </View>
                    ))}
               
               
               
            </View>
 
            {/* <View style={styles.section}>
                <TouchableOpacity onPress={() => toggleSection('section2')}>
                    <Text style={styles.sectionTitle}>Company Information</Text>
                    <Image
                        source={isSection2Collapsed ? DropdownIcon : DropupIcon}
                        resizeMode="contain"
                        style={styles.dropdownIcon}
                    />
                </TouchableOpacity>
                <Collapsible collapsed={isSection2Collapsed}>
                    {taskFormData.elements.slice(4, 9).map((element, index) => (
                        <View key={index} style={styles.inputContainer}>
                            {renderFormElement(element)}
                        </View>
                    ))}
                </Collapsible>
            </View> */}
         
           
 
            {/* Repeat the same structure for other sections (Company Information and Contact Information) */}
 
            <Button title="Submit" onPress={onSubmit} color='#023B5E' />
           
             <View style={styles.buttonContainer}>
      {/* <TouchableOpacity onPress={goBack}>
        <ArrowBack />
      </TouchableOpacity> */}
   
    </View>
        </View>
       
 
    </ScrollView>
   
 
</View>
 
);
}
 
const styles = StyleSheet.create({
cardContainer: {
    flex: 1,
    paddingHorizontal: -10,
    paddingTop: -20,
    paddingBottom:15,
    flexDirection:"column", 
    backgroundColor: '#d1e0ed',
},
card: {
    backgroundColor: '#FFFFFF', 
    // borderRadius: 10,
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
buttonContainer:{
  flex: 1,
  flexDirection: 'row', // Align items horizontally
  alignItems: 'flex-end', // Align items to the start (left)
  justifyContent: 'flex-end', // Align items to the start (left)
  padding: 10,
  },
  backButton: {
    alignSelf: 'flex-end', // Align button to the start (left)
    marginRight: 'auto',
    color:'#023B5E'
     // Push button to the leftmost corner
  },
  header: {
    height:200,
    // paddingHorizontal: 5,
    paddingVertical:90,
    paddingTop: 0,
    paddingBottom: 5,
    backgroundColor: '#ffffff',
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
dateInput: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  paddingVertical: 10,
  paddingHorizontal: 15,
},
dateText: {
  flex: 1,
  fontSize: 16,
},
calendarIcon: {
  width: 20,
  height: 20,
  marginLeft: 10, // Adjust the margin as needed
},
switch:{
    alignItems:'flex-start',
    marginTop:-10,
    },
     switchContainer:{
        flexDirection:'row'
      },
      icon:{
        paddingLeft:100
      }
 
});