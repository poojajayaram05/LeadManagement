import { View, Text, StyleSheet, ScrollView, Image, Button, Pressable, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, {useState} from 'react'
//mport { taskFormData } from '../../../customComponents/formData';
import Collapsible from 'react-native-collapsible';
import Dropdown from '../../customComponents/customDropdown';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { DropdownIcon, DropupIcon } from '../../assets/images';
import RadioButton from '../../customComponents/customRadio';
import { CustomInput } from '../../customComponents/customInput';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { date } from 'zod';
import { Ionicons } from '@expo/vector-icons';
import MultilineTextInput from '../../customComponents/customMultilineInput';
import CustomMultipleSelect from '../../customComponents/cutsomMultipleSelect';
import { leadScoreFormData } from '../../customComponents/formData';
import LDropdown from '../../customComponents/customLeadDropdown';
import { meetingData } from '../../customComponents/formData';
import GestureHandlerRootView from 'react-native-gesture-handler';
import {TabMenu} from '../tabsMenu';
import { leadData } from '../../customComponents/formData';
import MultiSelectItems from '../../customComponents/cutsomMultipleSelect';
import CustomSwitch from '../../customComponents/customSwitch';
import ArrowBack from '../../customComponents/arrowBack';
import { router } from 'expo-router';
import LeadDet  from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import { SelectList } from 'react-native-dropdown-select-list';


export default function LeadScoreForm() {
  // const { control, handleSubmit, formState: { errors } } = useForm();
  const [isSection1Collapsed, setIsSection1Collapsed] = useState(false);
  const [isSection2Collapsed, setIsSection2Collapsed] = useState(false);
  const [isSection3Collapsed, setIsSection3Collapsed] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false); 
  const [formValues, setFormValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null); 
  const[selectedDate, setSelectedDate] = useState('');
  const[selectedTime, setSelectedTime]=useState(null);
  const [phoneNumbers, setPhoneNumbers] = useState(['']);
  const[customDate, setCustomDate]=useState(null);
  const[customTime, setCustomTime]=useState(null);
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [meetingName, setMeetingName] = useState('');
  const [meetingDescription, setMeetingDescription] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromTime, setFromTime] = useState(null);
  const [toTime, setToTime] = useState(null);
  const[radioSelect, setradioSelect]=useState(null);

  const handleCancelClicked = () => {
      setIsModalVisible(false);
  };

  const goBack=()=>{
    router.back();
  }

  const leadId = useIdStore((state) => state.number);




const onSubmit = async () => {
//   const formData = {
//     age,
//     familyIncome,
//     occupation,
//     qualification,
//     leadCategory,
//     fywp,
//   };
  //console.log("Form data", formData);
  console.log(formValues);
  const keys = Object.keys(formValues);
  if (keys.length > 0) {
    Alert.alert('Successfully submitted!');
  } else {
    Alert.alert('Form is empty!');
  }
};



const renderFormElement = (element) => {
    const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;
    const handleSelect = (item) => {
        //setSelectedValue(item);
        setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item.label }));
        console.log(element.name,item.label);
    };

    switch (element.questionType) {

      // case 'TextInputLead':
        // return (
        //   <View>
        //      <Text style={styles.qlabel}>{element.questionlabel}</Text>
        //      <CustomInput
        //             key={element.name}
        //             title={element.title}
        //             placeholder={leadId}
        //             // control={control}
        //             name={element.name}
        //            questionlabel={questionlabel}
        //             // errors={errors}
                    
        //             value={leadId}
        //             readOnly={true}
        //         />
             

        //     </View>
        // );
      
            case 'dropdown':
              return (
                  <View>
                        <View style={styles.inputContainer}>
                        <Text style={styles.label}>{element.questionvalue}{starMark}</Text>
                        
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
                data={element.dropdownData.map(item => ({ value: item.value, label: item.label }))}
                save="key"
                onSelect={() => handleSelect(selectedValue) } // Log selected values
            />
                    </View>
                  </View>
                  
              );
            
            
               

      
                        
};
}
  return (
   
   
   
    <View style={styles.container}>
      <View style={styles.header}>
      <LeadDet/>
      </View>
      <ScrollView>
            <View style={styles.card}>
       
      
      
        
  
   
      
          
           
                
                  
                              
                    {leadScoreFormData.elements.slice(0, 11).map((element, index) => (
                        <View key={index} style={styles.inputContainer}>
                            {renderFormElement(element)}
                        </View>
                    ))}
        
        <Button title="Submit" onPress={onSubmit} color='#023B5E' />
            </View>
          

       
          
             
           
            </ScrollView>
           
    </View>
        
      

   
  
   





);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#d1e0ed',
    paddingHorizontal:-10,
    paddingTop: -20,
    paddingBottom:15,

 
  },
  qlabel:{
    fontSize: 12,
    fontWeight: 'bold'

  },
card: {
  backgroundColor: '#FFFFFF',
  // borderRadius: 10,
  padding: 20,
  shadowColor: '#000000',
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
  marginBottom: 20,
},
   
switch:{
alignItems:'flex-start'
},
// container: {
//     flex: 1,
//     paddingHorizontal: 20,
   
//     backgroundColor:'#cad5e8'
// },
section: {
    // marginBottom: 20,
    
},
switchContainer:{
  flexDirection:'row'
},
buttonContainer:{
  flex: 1,
  flexDirection: 'row', // Align items horizontally
  alignItems: 'flex-end', // Align items to the start (left)
  justifyContent: 'flex-end', // Align items to the start (left)
  padding: 10,
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
    marginTop: 3,
    fontSize: 12,
    fontWeight: 'bold',
},
labelswitch: {
  marginTop: 15,
  fontSize: 12,
  fontWeight: 'bold',
  alignContent:'space-between'
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
header: {
  height:200,
  // paddingHorizontal: 5,
  paddingVertical:90,
  paddingTop: 0,
  paddingBottom: 5,
  backgroundColor: '#ffffff',
},
});




