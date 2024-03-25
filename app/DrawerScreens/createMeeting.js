import { View, Text, StyleSheet, ScrollView, Image, Button, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
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
import { taskFormData } from '../../customComponents/formData';
import LDropdown from '../../customComponents/customLeadDropdown';
import { meetingData } from '../../customComponents/formData';
import GestureHandlerRootView from 'react-native-gesture-handler';
import {TabMenu} from '../tabsMenu';
import { leadData } from '../../customComponents/formData';
import MultiSelectItems from '../../customComponents/cutsomMultipleSelect';
import CustomSwitch from '../../customComponents/customSwitch';
import ArrowBack from '../../customComponents/arrowBack';
import { activityFormData } from '../../customComponents/formData';
import { router } from 'expo-router';
export default function CreateMeeting() {
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

  const handleCancelClicked = () => {
      setIsModalVisible(false);
  };

  const goBack=()=>{
    router.back();
  }
  const handleMeetingNameChange = (value) => {
    setMeetingName(value);
  };

  const handleMeetingDescriptionChange = (value) => {
    setMeetingDescription(value);
  };
  const handleDateChange = (selectedDate) => {
    if (selectedDate) {
      setShowCalendarModal(false);
      // Check which date input is being changed
      if (element.name === 'fromDate') {
        handleFromDateChange(selectedDate);
      } else if (element.name === 'toDate') {
        handleToDateChange(selectedDate);
      }
      setCustomDate(selectedDate);
    }
  };

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const handleFromTimeChange = (time) => {
    setFromTime(time);
  };

  const handleToTimeChange = (time) => {
    setToTime(time);
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
    setSelectedValue(item);
    setFormValues(prevFormValues => ({ ...prevFormValues, selectedValue: item }));
    console.log('Selected value:', item);
};


const handleSelectFromDate = (date) => {
    console.log('Selected Date:', date);
    setSelectedDate(date);
};
const handleSelectTime = (time) => {
  console.log('Selected Date:', time);
  setSelectedTime(time);
};

const onSubmit = async () => {
  const formData = {
    meetingName,
    meetingDescription,
    fromDate,
    toDate,
    fromTime,
    toTime,
  };
  console.log("Form data", formData);
  console.log(formValues);
};

  
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
              <View>
                  {/* <RNDateTimePicker mode="time" value={new Date()} /> */}
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
            case 'leadDropdown':
              return (
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Select Lead</Text>
                <LDropdown
label="Select Lead"
data={leadData.map((lead) => {
console.log(lead.id); // Log lead object
return {
  value: lead.id,
  label: `${lead.id} - ${lead.firstname} ${lead.lastname}`,
};
})}
onSelect={handleSelect}
/>
            </View>
              );
              case 'Date':
                return (
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>{element.title}</Text>
                    <Pressable onPress={() => setShowCalendarModal(true)}>
                      <View style={styles.dateInput}>
                        <Pressable onPress={() => setShowCalendarModal(true)}>
                          <Text style={styles.dateText}>
                            {customDate ? customDate.toLocaleDateString() : 'Select date '}
                            <Ionicons name='calendar' size={20} color='black' />
                          </Text>
                        </Pressable>
                      </View>
                    </Pressable>
                    {/* Calendar Modal */}
                    {showCalendarModal && (
                      <RNDateTimePicker
                        value={customDate || new Date()}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => handleDateChange(selectedDate)}
                      />
                    )}
                  </View>
                );
                case 'leadDropdown':
                  return (
                      <View style={styles.inputContainer}>
                          <Text style={styles.label}>Select Lead</Text>
                          <LDropdown
                              label={selectedValue ? selectedValue.label : 'Lead'}
                              data={element.dropdownData} // Pass the entire dropdownData array
                              value={selectedValue}
                              onSelect={handleSelect}
                          />
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
      case 'timeInputFrom':
      return (
           <View style={styles.timeInput}>
      <Pressable onPress={() => setShowTimeModal(true)}>
        <Text style={styles.label}>
          {element.title}
        </Text>
        <View style={styles.dateInput}>
          <Pressable onPress={() => setShowTimeModal(true)}>
            <Text style={styles.dateText}>
              {fromTime ? formatTime(fromTime) : 'Select time '}
              <Ionicons name='time' size={20} color='black' /> 
            </Text>
          </Pressable>
          {showTimeModal && (
            <RNDateTimePicker
              value={ fromTime || new Date()}
              mode="time"
              display="default"
              onChange={(event, selectedTime) => {
                if (selectedTime) {
                  setShowTimeModal(false);
                  setFromTime(selectedTime);
                }
              }}
            />
          )}
        </View>
      </Pressable>
    </View>
      );
      case 'switch':
      return (
        <View style={styles.inputContainer}>
        
           <View style={styles.switchContainer}>
           <Text style={styles.labelswitch}>All day</Text>
           <View style={styles.switch}><CustomSwitch/></View>
           </View>
          
        </View>
       
      );
      case 'timeInputTo':
       
        return (
             <View style={styles.timeInput}>
        <Pressable onPress={() => setShowTimeModal(true)}>
          <Text style={styles.label}>
            {element.title}
          </Text>
          <View style={styles.dateInput}>
            <Pressable onPress={() => setShowTimeModal(true)}>
              <Text style={styles.dateText}>
                {toTime ? formatTime(toTime) : 'Select time '}
                <Ionicons name='time' size={20} color='black' /> 
              </Text>
            </Pressable>
            {showTimeModal && (
              <RNDateTimePicker
                value={ toTime || new Date()}
                mode="time"
                display="default"
                onChange={(event, selectedTime) => {
                  if (selectedTime) {
                    setShowTimeModal(false);
                    setToTime(selectedTime);
                  }
                }}
              />
            )}
          </View>
        </Pressable>
      </View>
        )
      
     
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
                 
                        
};
}
  return (
   
   
    <View style={styles.cardContainer}>
       
      
      
    <ScrollView>
  
   
        <View style={styles.card}>
            <View style={styles.section}>
           
                <TouchableOpacity onPress={() => toggleSection('section1')}>
                    <Text style={styles.sectionTitle}>Meeting Information</Text>
                  
                    <Image
                        source={isSection1Collapsed ? DropdownIcon : DropupIcon}
                        resizeMode="contain"
                        style={styles.dropdownIcon}
                    />
                     
                </TouchableOpacity>
                <Collapsible collapsed={isSection1Collapsed}>
                    {activityFormData.slice(0, 11).map((element, index) => (
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
        <ArrowBack />
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
