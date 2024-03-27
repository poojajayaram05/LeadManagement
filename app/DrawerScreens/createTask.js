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

export default function CreateTask() {
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



const handleSelectDate = (date) => {
    console.log('Selected Date:', date);
    setSelectedDate(date);
};
const handleSelectTime = (time) => {
  console.log('Selected Date:', time);
  setSelectedTime(time);
};

const goBack=()=>{
  router.back();
}

const onSubmit = async () => {

  console.log("Form data", formValues);
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
  const handleSelect = (item) => {
    setSelectedValue(item);
    setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.value }));
    console.log('Selected value:', item);
};

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
            case 'calenderDropdown':
            return (
                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>{element.title}</Text>
                        
                        <Dropdown
                            style={styles.inputContainer}
                            label={selectedDate ? selectedDate.label : 'Select'}
                            data={element.dropdownData}
                            value={selectedDate}
                            onSelect={handleSelectDate}
                        />
                    </View>
                    {selectedDate && selectedDate.label === 'Custom Date' && (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>Select Date</Text>
    <Pressable onPress={() => setShowCalendarModal(true)}>
    <View style={styles.dateInput}>
  <Pressable onPress={() => setShowCalendarModal(true)}>
    <Text style={styles.dateText}>
      {customDate ? customDate.toLocaleDateString() : 'Select date '}
      <Ionicons name='calendar' size={20}  color='black' /> 
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
        onChange={(event, selectedDate) => {
          if (selectedDate) {
            setShowCalendarModal(false);
            setCustomDate(selectedDate);
          }
        }}
      />
    )}
  </View>
)}
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
          }
        }}
      />
    )}
</View>
                  {/* <RNDateTimePicker
        value={ new Date()}
        mode="time"
        display="default"
        onChange={(event, selectedTime) => {
          if (selectedTime) {
            setShowTimeModal(false); // Close the modal
            setCustomTime(selectedTime); // Set the selected time
          }
        }}
      /> */}
                 
                  
                </Pressable>
              </View>
      
              )
              case 'multilineInput':
                return (
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Enter a note</Text>
                        {/* <MultiSelectExample/> */}
                        <MultilineTextInput/>
                        
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
      <GestureHandlerRootView>
        <View style={styles.card}>
       
            <View style={styles.section}>
                <TouchableOpacity onPress={() => toggleSection('section1')}>
                    <Text style={styles.sectionTitle}>Task Information</Text>
                  
                    <Image
                        source={isSection1Collapsed ? DropdownIcon : DropupIcon}
                        resizeMode="contain"
                        style={styles.dropdownIcon}
                    />
                     
                </TouchableOpacity>
                <Collapsible collapsed={isSection1Collapsed}>
                    {taskFormData.elements.slice(0, 9).map((element, index) => (
                        <View key={index} style={styles.inputContainer}>
                            {renderFormElement(element)}
                        </View>
                    ))}
                </Collapsible>
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
      <TouchableOpacity onPress={goBack}>
        {/* <ArrowBack /> */}
      </TouchableOpacity>
    </View>
        </View>
        
        </GestureHandlerRootView>
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
