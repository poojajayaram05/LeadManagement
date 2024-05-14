import { View, Text, StyleSheet, ScrollView, Image, Button, Pressable, TextInput, Alert } from 'react-native'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
//mport { taskFormData } from '../../../customComponents/formData';
import Collapsible from 'react-native-collapsible';
import Dropdown from '../../customComponents/customDropdown';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { DropdownIcon, DropupIcon } from '../../assets/images';
import { CustomInput } from '../../customComponents/customInput';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { date, number } from 'zod';
import { Ionicons } from '@expo/vector-icons';
import MultilineTextInput from '../../customComponents/customMultilineInput';
import CustomMultipleSelect from '../../customComponents/cutsomMultipleSelect';
import { activityFormData, taskFormData } from '../../customComponents/formData';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import { leadData } from '../../customComponents/formData';
import LDropdown from '../../customComponents/customLeadDropdown';
import { router } from 'expo-router';
import ArrowBack from '../../customComponents/arrowBack';
import MultiSelectItems from '../../customComponents/cutsomMultipleSelect';
import * as SecureStore from 'expo-secure-store';
import CustomSwitch from '../../customComponents/customSwitch';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import { FetchLeads } from '../service/fetchLeads';


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
  const[leadData, setLeadData]=useState([])
  const[validationErrors, setValidationErrors]=useState([])
  const[selectedMulti, setSelectedMulti]=useState([]);
  const [userName, setUsername]=useState('');

  const [selectedActivity, setSelectedActivity] = useState(null);
  const username= SecureStore.getItem('username');

  const handleActivitySelect = (activity) => {
    setFormValues(prevFormValues => ({ ...prevFormValues, ['activity_type']: activity.value }));
      setSelectedActivity(activity);
      console.log("activity", activity.value)
  };

  const handleCancelClicked = () => {
      setIsModalVisible(false);
  };

  function extractDate(timestamp) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    return formattedDate;
  }
  
  function extractTime(timestamp) {
    const dateObject = new Date(timestamp);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    return formattedTime;
  }


  


  useEffect(() => {
   
    //   const FetchLeads = async () => {
    //     const token = SecureStore.getItem('token');
    //     const stoken = JSON.parse(token);
    //     const apiToken = stoken.accessToken;
    //     console.log(apiToken);  
    //     const getLeadURL="https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_c" ;
    //     try {
    //         const response = await fetch(getLeadURL, {
    //             method: 'GET',
    //             headers: {
    //               'Content-Type': 'application/json',
    //               'Authorization' : 'Bearer ' + apiToken
                 
    //             },
    
    //           })
  
    //           const data = await response.json();
    //           console.log("leads data is",data.result);
    //           setleadData(data.result);
    
             
    //         //   router.replace('/DrawerScreens/leadList')
    //     } catch (error) {
    //         console.error('Error fetching leads:', error);
    //         throw error; // You can handle the error further or throw it for the caller to handle
    //     }
    // };
   
      const fetchData = async () => {
          try {
              const ldata = await FetchLeads(); // Call FetchLeads and wait for the result
              setLeadData(ldata.result); // Set the state with the fetched data
              console.log("this is the lead data",ldata.result);
              setLeadData(ldata.result);
              console.log(leadData) // Log the fetched data
          } catch (error) {
              // Handle errors if any
              console.error('Error in fetching leads:', error);
          }
      };
  
      fetchData(); // Call the fetchData function defined above
  }, []); // Empty dependency array means it will run only once on mount
  
  
//   useEffect(() => {
//     if (leadData.length > 0) {
//         const lead = leadData.find((lead) => lead.number === sysId);
//         const leadNumber = lead ? lead.number : '';
//         setLeadNumber(leadNumber);
//         setFormValues(prevFormValues => ({ ...prevFormValues, ['associated_lead']: leadNumber }));
//     }
// }, [leadNumber, leadData]);


  const sysId = useIdStore((state) => state.sys_id);
  // const lead = leadData.find((lead) => lead.number === leadId);
  // const{number}=lead||'';
  // console.log("leaaaaad", number);
  const[leadNumber, setLeadNumber]=useState('');
  const [selectedValues, setSelectedValues] = useState([]);
  // setLeadNumber(number);

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
  const errors = {};
  
  const validateForm = () => {
    

    
  
    activityFormData.forEach((formData) => {
      // Check if the selected activity matches the current formData activityType
      if (selectedActivity && formData.activityType === selectedActivity.value) {
        formData.Data.elements.forEach((element) => {
          // Perform validation for visible fields
          if (element.isRequired && !formValues[element.name]) {
            errors[element.name] = `${element.title} is required`;
          }
          if (element.validation && element.validation.regex && !element.validation.regex.test(formValues[element.name])) {
            errors[element.name] = element.validation.message;
           
          }
        });
      }
    });
 
    // Additional validation checks can be added here
  
    return errors;
  };
  


const handleSelectDate = (date) => {
    console.log('Selected Date:', date);
    setSelectedDate(date);
};


const goBack=()=>{
  router.back();
}

useEffect(() => {
  const getUsername = async () => {
      const storedUsername = await SecureStore.getItemAsync('username');
      setUsername(storedUsername);
      setFormValues(prevFormValues => ({ ...prevFormValues, ['activity_owner']: storedUsername }));
  };

  getUsername();
}, []);

const onSubmit = async () => {
  const errors = validateForm();
  setFormValues(prevFormValues => ({ ...prevFormValues, ['associated_lead']: sysId }));
  setFormValues(prevFormValues => ({ ...prevFormValues, ['activity_owner']: username }))
  if (Object.keys(errors).length > 0) {
    // If there are validation errors, set them in state
    setValidationErrors(errors);
    console.log(validationErrors);
  }

  else {  setFormValues(prevFormValues => ({ ...prevFormValues, ['associated_lead']: sysId }));
  
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
          Alert.alert("Successfully Submitted!")
          router.back();
        }
        
    
            catch(err){
                console.log("error");
            }
  }


  console.log("Form data", formValues);
  }


  const leadNumberSubmit=()=>{
    setFormValues(prevFormValues => ({ ...prevFormValues, ['associated_lead']: leadNumber }));
  }


const renderFormElement = (element) => {
  const handleSelect = (item) => {
   
    setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item }));
    console.log('Selected value:', item);
    
};

const handleNotes = ()=>{

    setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.value }));
}
const handleDateChange = (selectedDate, element) => {
  if (selectedDate) {
    setShowCalendarModal(false);
    
    // Check which date input is being changed
     console.log("dateeeeee", extractDate(selectedDate))
    if (element.name === 'due_date') {
      setFromDate(selectedDate);
      
        setFormValues(prevFormValues => ({ ...prevFormValues, ['due_date']: extractDate(selectedDate) }));
    
      }
    // else if (element.name === 'from_date') {
    //   setToDate(selectedDate);
     
    //     setFormValues(prevFormValues => ({ ...prevFormValues, ['from_date']: extractDate(selectedDate) }));
     
    //   }
      setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: extractDate(selectedDate) }));
    }
  }

  const handleSelectTime = (time) => {
    console.log('Selected time:', time);
    setSelectedTime(time);
    const atime = extractTime(time)
    console.log("timeeee", atime);
    setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: atime }));
  };
  const handleSwitch=(item)=>{
    setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item}));
    console.log(element.name, item);

  }



    switch (element.type) {
      case 'TextInputLead':
        return (
          <View>
             <CustomInput
                    key={element.name}
                    title={element.title}
                    placeholder={sysId}
                    // control={control}
                    name={element.name}
                    onChange={(value) => setFormValues({ ...formValues, [element.name]: value } )}
                    // errors={errors}
                    
                    value={sysId}
                    readOnly={true}
                />
             

            </View>
        );
        case 'MultilineText':
                    return (
                        <View>
                        <Text style={styles.label}>{element.title}</Text>
                      <TextInput
                       style={[styles.input, styles.multilineInput]} // Add styles for multiline input
                    onChangeText={(value) => setFormValues({ ...formValues, [element.name]: value } )}
                    value={formValues[element.name] || ''}
                 placeholder={element.placeholder}
 multiline={true} // Set multiline prop to true
 numberOfLines={4} // Specify the number of lines you want to display
/>
                       </View>
                    );
        case 'TextInput':
            return (
              <View>
                 {/* <Text style={styles.label}>
                {element.title}
                {element.isRequired && <Text style={{ color: 'red' }}> *</Text>} 
            </Text> */}
                  {/* <RNDateTimePicker mode="time" value={new Date()} /> */}
                <CustomInput
                    key={element.name}
                    title={element.title}
                    placeholder={element.placeholder}
                    // control={control}
                    isRequired={element.isRequired}

                    inputType={element.inputType}
                    name={element.name}
                   
                    errors={errors}
                    onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                    value={formValues[element.name] || ''}
                />
                 {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
                </View>
            );
            case 'Date':
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
                   {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
                  </View>
                  
                );
              
        case 'multipleSelect':
            return (
                <View>
                <View style = {styles.inputContainer}>
                <Text style={styles.label}>{element.title}</Text>
               
                <MultipleSelectList 
          setSelected={(val) => setSelectedValues(val)} // Update selected values
        data={element.dropdownData} 
        save="value"
        onSelect={() => console.log(selectedValues)} // Log selected values

        label="Attendees"
    />
                </View>
                </View>
                
            );
        
            case 'dropdown':
            return (
                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>{element.title}</Text>
                        
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
                data={element.dropdownData.map(item => ({ value: item.key, label: item.label }))}
                save="key"
                onSelect={() => handleSelect(selectedValue) } // Log selected values
            />
                    </View>
                    {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
                  


                </View>
            );
            case 'timeInput':
              return(
                <View style={styles.timeInput}>
                <Pressable onPress={() => setShowTimeModal(true)}>
                  <Text style={styles.label}>
                    {/* {customTime ? customTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Select time'} */}
                    {element.title}
                  </Text>
                  <View style={styles.dateInput}>
  <Pressable onPress={() => setShowTimeModal(true)}>
    <Text style={styles.dateText}>
    {customTime ? formatTime(customTime) : 'Select time '}
    <View style={styles.icon}>
      <Ionicons name='time' size={20} color='black' /> 
      </View>
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
{validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
                  
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
                    case 'TextInputO':
                          return( 
                          <View>
                          <CustomInput
                                 key={element.name}
                                 title={element.title}
                                 placeholder={username}
                                 // control={control}
                                 value={username}
                                 name={element.name}
                                 // errors={errors}
                                //  readOnly={true}
                             />
                             </View>
                          )
              
               
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
    <View style={styles.container}>
      <View style={styles.header}>
      <LeadDet/>
      </View>
    <ScrollView>
            <View style={styles.card}>
              
                <Text style={styles.label}>Select Activity Type</Text>
                <View style={styles.Dropdown}> 
                <Dropdown
                    label="Select Activity"
                    data={[
                        { value: 'task', label: 'Task' },
                        { value: 'call', label: 'Call' },
                        { value: 'email', label: 'Email' },
                        { value: 'follow_up', label: 'Follow Up' },
                        { value: 'meeting', label: 'Meeting' },
                        // Add other activity types if needed
                    ]}
                    onSelect={handleActivitySelect}
                />
                </View>
                {renderForm()}
                {selectedActivity && <Button title="Submit" onPress={onSubmit} color='#023B5E' />}
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
    paddingHorizontal: -10,
    paddingTop:0,
    paddingBottom:15,
 
  },
  header: {
    height:200,
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 5,
    backgroundColor: '#ffffff',
  },
  backButton: {
    alignSelf: 'flex-end',
    marginRight: 'auto',
    color: '#023B5E',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
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
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10,
    top: 9,
  },
  inputContainer: {
    marginBottom: 8,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
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
    marginLeft: 10,
  },
  errorMessage: {
    color: 'red',
    fontSize:12
    // Add any other necessary styles
},
icon:{
  paddingLeft:180
},
ticon:{
  paddingLeft:200
},
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  backgroundColor:'white',
  paddingVertical: 10,
  paddingHorizontal: 11,
  fontSize: 16,
},
});

