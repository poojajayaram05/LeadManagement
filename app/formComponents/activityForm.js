import { View, Text, StyleSheet, ScrollView, Image, Button, Pressable } from 'react-native'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import React, {useState} from 'react'
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
import { activityFormData, taskFormData } from '../../customComponents/formData';
import { leadData } from '../../customComponents/formData';
import LDropdown from '../../customComponents/customLeadDropdown';
import { router } from 'expo-router';
import ArrowBack from '../../customComponents/arrowBack';
import MultiSelectItems from '../../customComponents/cutsomMultipleSelect';
import * as SecureStore from 'expo-secure-store';
import CustomSwitch from '../../customComponents/customSwitch';


export default function CreateActivity() {
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
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromTime, setFromTime] = useState(null);
  const [toTime, setToTime] = useState(null);

  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivitySelect = (activity) => {
    setFormValues(prevFormValues => ({ ...prevFormValues, ['activity_type']: activity.value }));
      setSelectedActivity(activity);
      console.log("activity", activity.value)
  };

  const handleCancelClicked = () => {
      setIsModalVisible(false);
  };



  

  const renderForm = () => {
    if (selectedActivity) {
        const formData = activityFormData.find(activity => activity.activityType === selectedActivity.value);
        if (formData) {
            return formData.Data.elements.map((element, index) => (
                <View key={index} style={styles.inputContainer}>
                    {renderFormElement(element)}
                </View>
            ));
        }
    }
    return null;
};

  const formatTime = (time) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true // Use 12-hour format
    };
  
    return time.toLocaleString('en-US', options);
  };



const handleSelectDate = (date) => {
    console.log('Selected Date:', date);
    setSelectedDate(date);
};


const goBack=()=>{
  router.back();
}

const onSubmit = async () => {
    const postUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_activity_c`;
        const token = SecureStore.getItem('token');
        const stoken = JSON.parse(token);
        const apiToken = stoken.accessToken;
        console.log("api token",apiToken);   
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
          router.replace('/DrawerScreens/taskList')
        }
        
    
            catch(err){
                console.log("error");
            }
          


  console.log("Form data", formValues);
  }


const renderFormElement = (element) => {
  const handleSelect = (item) => {
   
    setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.value }));
    console.log('Selected value:', item);
};

const handleNotes = ()=>{

    setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.value }));
}
const handleDateChange = (selectedDate, element) => {
    if (selectedDate) {
      setShowCalendarModal(false);
      // Check which date input is being changed
      if (element.name === 'fromDate') {
        setFromDate(selectedDate);
      } else if (element.name === 'toDate') {
        setToDate(selectedDate);
      }
      // Update the respective form value
      setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: selectedDate }));
    }
  };
  
  const handleSelectTime = (time) => {
    console.log('Selected time:', time);
    setSelectedTime(time);
    setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: time }));
  };
  const handleSwitch=(item)=>{
    setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item}));
    console.log(element.name, item);

  }


    switch (element.type) {
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
                />
                </View>
            );
            case 'Date':
                return (
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>{element.title}</Text>
                    <Pressable onPress={() => setShowCalendarModal(true)}>
                      <View style={styles.dateInput}>
                        <Text style={styles.dateText}>
                          {formValues[element.name] ? formValues[element.name].toLocaleDateString() : 'Select date '}
                          <Ionicons name='calendar' size={20} color='black' />
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
              
        // case 'dropdown':
        //     return (
        //         <View>
        //         <View style = {styles.inputContainer}>
        //         <Text style={styles.label}>{element.title}</Text>
               
        //             <Dropdown style={styles.inputContainer}
        //                 label={selectedValue ? selectedValue.label : 'Select'}
        //                 data={element.dropdownData}
        //                 value={selectedValue}
        //                 onSelect={handleSelect}
        //             />
        //         </View>
        //         </View>
                
        //     );
        
            case 'dropdown':
            return (
                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>{element.title}</Text>
                        
                        <Dropdown
                            style={styles.inputContainer}
                            label={selectedDate ? selectedDate.label : 'Select'}
                            data={element.dropdownData}
                            value={selectedDate}
                            onSelect={handleSelect}
                        />
                    </View>
                  


                </View>
            );
            case 'timeInput':
              return(
                <View style={styles.timeInput}>
                <Pressable onPress={() => setShowTimeModal(true)}>
                  <Text style={styles.label}>
                    {/* {customTime ? customTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Select time'} */}
                    Select Time
                  </Text>
                  <View style={styles.dateInput}>
  <Pressable onPress={() => setShowTimeModal(true)}>
    <Text style={styles.dateText}>
    {customTime ? formatTime(customTime) : 'Select time '}
      <Ionicons name='time' size={20} color='black' /> 
    </Text>
   
  </Pressable>
  {showTimeModal && (
      <RNDateTimePicker
        value={ customTime || new Date()}
        mode="time"
        display="default"
        onChange={(event, selectedTime) => {
          if (selectedTime) {
            setShowTimeModal(false);
            setCustomTime(selectedTime);
            handleSelectTime(customTime);
          }
        }}
      />
    )}
</View>
                 
                 
                  
                </Pressable>
              </View>
      
              )
              case 'multilineText':
                return (
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Enter a note</Text>
                        {/* <MultiSelectExample/> */}
                        <MultilineTextInput onChange={handleNotes}/>
                        
                    </View>
                );
                case 'MultipleSelect':
                    return (
                      <View style={styles.inputContainer}>
                        <Text style={styles.label}>{element.title}</Text>
                        <MultiSelectItems
                      dropdownData={element.dropdownData}
                      onSelectedItemsChange={(selectedItems) => {
                        setFormValues(prevFormValues => ({
                          ...prevFormValues,
                          [element.name]: selectedItems // Assuming element.name is the key to store selected items
                        }));
                      }}
                    />
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
      label: `${lead.Id} - ${lead.FirstName} ${lead.LastName}`,
    };
  })}
  onSelect={handleSelect}
/>
                </View>
                  );
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
              
              
                  
                        
};
}
  return (
    <View style={styles.cardContainer}>
    <ScrollView>
            <View style={styles.card}>
                <Text style={styles.label}>Select Activity Type</Text>
                <View style={styles.Dropdown}> 
                <Dropdown
                    label="Select Activity"
                    data={[
                        { value: 'task', label: 'Task' },
                        { value: 'meeting', label: 'Meeting' },
                        { value: 'call', label: 'Call' },
                        { value: 'appointment', label: 'Appointment' },
                        { value: 'email', label: 'Email' },
                        { value: 'follow_up', label: 'Follow Up' },
                        // Add other activity types if needed
                    ]}
                    onSelect={handleActivitySelect}
                />
                </View>
                {renderForm()}
                <Button title="Submit" onPress={onSubmit} color='#023B5E' />
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
Dropdown:{
    marginTop:20,
    marginBottom:15

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

});
