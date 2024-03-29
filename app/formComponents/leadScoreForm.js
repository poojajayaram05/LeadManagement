import { View, Text, StyleSheet, ScrollView, Image, Button, Pressable } from 'react-native'
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
import { leadScoreFormData, taskFormData } from '../../customComponents/formData';
import LDropdown from '../../customComponents/customLeadDropdown';
import { meetingData } from '../../customComponents/formData';
import GestureHandlerRootView from 'react-native-gesture-handler';
import {TabMenu} from '../tabsMenu';
import { leadData } from '../../customComponents/formData';
import MultiSelectItems from '../../customComponents/cutsomMultipleSelect';
import CustomSwitch from '../../customComponents/customSwitch';
import ArrowBack from '../../customComponents/arrowBack';
import { router } from 'expo-router';
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
};


const onSelectRadio = (item) => {
    setradioSelect(item.value);
    setFormValues(prevFormValues => ({ ...prevFormValues, ['gender']: item.id})); 
    console.log('Selected value:', item.id);
}



const renderFormElement = (element) => {
    const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;
    const handleSelect = (item) => {
        //setSelectedValue(item);
        setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item.label }));
        console.log(element.name,item.label);
    };

    switch (element.questionType) {
        // case 'RadioButton':
        //     return( 
        //       <View style = {styles.inputContainer}>
        //       <Text style={styles.label}>{element.questionLabel}{starMark}</Text>
                
        //             <RadioButton style={styles.inputContainer}
        //                  onSelect={onSelectRadio}
        //                  SelectedData={selectedValue} 
        //                  disableLine={1}
        //                  value={selectedValue}
        //                  onChange={(onSelectRadio) => setFormValues({ ...formValues, [element.name]: onSelectRadio })}
        //                  data={leadScoreFormData}
        //                  title={element.title}
                         
        //                  // Pass the data prop here
        //             />
        //             </View>

        //     )
            case 'dropdown':
              return (
                  <View>
                  <View style = {styles.inputContainer}>
                  <Text style={styles.label}>{element.questionlabel}{starMark}</Text>
                 
                      <Dropdown style={styles.inputContainer}
                          label={selectedValue ? selectedValue.label : 'Select'}
                          data={element.dropdownData}
                          value={selectedValue}
                          onSelect={handleSelect}
                      />
                  </View>
                  </View>
                  
              );
            case 'leadDropdown':
              return (
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Select Lead</Text>
                <LDropdown
label="Select Lead"
data={leadData.map((lead) => {
console.log(lead.Id); // Log lead object
return {
  value: lead.Id,
  label: `${lead.id} - ${lead.Firstname} ${lead.Lastname}`,
};
})}
onSelect={handleSelect}
/>
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
                    <Text style={styles.sectionTitle}>Lead Score Information</Text>
                  
                    <Image
                        source={isSection1Collapsed ? DropdownIcon : DropupIcon}
                        resizeMode="contain"
                        style={styles.dropdownIcon}
                    />
                     
                </TouchableOpacity>
                <Collapsible collapsed={isSection1Collapsed}>
                    {leadScoreFormData.elements.slice(0, 11).map((element, index) => (
                        <View key={index} style={styles.inputContainer}>
                            {renderFormElement(element)}
                        </View>
                    ))}
                </Collapsible>
            </View>

           {/* <View style={styles.section}>
                <TouchableOpacity onPress={() => toggleSection('section2')}>
                    <Text style={styles.sectionTitle}>Schedule Information</Text>
                    <Image
                        source={isSection2Collapsed ? DropdownIcon : DropupIcon}
                        resizeMode="contain"
                        style={styles.dropdownIcon}
                    />
                </TouchableOpacity>
                <Collapsible collapsed={isSection2Collapsed}>
                    {taskFormData.elements.slice(9).map((element, index) => (
                        <View key={index} style={styles.inputContainer}>
                            {renderFormElement(element)}
                        </View>
                    ))}
                </Collapsible>
            </View>  */}
          
             
            <Button title="Submit" onPress={onSubmit} color='#023B5E' />
            <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={goBack}>
        {/* <ArrowBack /> */}
      </TouchableOpacity>
    </View>
            {/* <MultiSelectItems/> */}
            
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
switch:{
alignItems:'flex-start'
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

});
