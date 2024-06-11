// import React, { useState } from "react";
// import { View, Text, StyleSheet, Button, TextInput, Alert, TouchableOpacity } from "react-native";
// import { router } from 'expo-router';
// import ArrowBack from "../../customComponents/arrowBack";
 
// export const formData = {
//     "elements":  [
//           {
//             "id": "1",
//             "taskType": "Meeting",
//             "dueDate": "2024-03-01",
//             "dueTime": "10:00 AM",
//             "createdDate": "2024-02-28",
//             "createdBy": "John Doe",
//             "completedDate": null,
//             "title": "Client Meeting",
//             "description": "Discuss project details with the client",
//             "status": "In Progress",
//             "owner": "Alice",
//             "outcome": null,
//             "collaborators": ["Bob", "Charlie"],
//             "duedate": 'Today',
//             "assignedToMe": 'Carla',
//             "assignedByMe": 'Sofia',
//           },
//           {
//             "id": "2",
//             "taskType": "Assignment",
//             "dueDate": "2024-03-05",
//             "dueTime": "2:30 PM",
//             "createdDate": "2024-03-01",
//             "createdBy": "Jane Smith",
//             "completedDate": null,
//             "title": "Coding Task",
//             "description": "Implement new features",
//             "status": "Pending",
//             "owner": "Eva",
//             "outcome": null,
//             "collaborators": ["David", "Emily"],
//             "duedate": 'Upcoming',
//             "assignedToMe": 'Carla',
//             "assignedByMe": 'Sara',
//           },
//           {
//             "id": "3",
//             "taskType": "Review",
//             "dueDate": "2024-03-10",
//             "dueTime": "3:45 PM",
//             "createdDate": "2024-03-05",
//             "createdBy": "Bob Johnson",
//             "completedDate": null,
//             "title": "Project Review",
//             "description": "Review project progress and plan for next steps",
//             "status": "Upcoming",
//             "owner": "Chris",
//             "outcome": null,
//             "collaborators": ["Frank", "Grace"],
//             "duedate": 'Today',
//             "assignedToMe": 'Patty',
//             "assignedByMe": 'Bhumika',
 
//           },
//           {
//             "id": "4",
//             "taskType": "Task",
//             "dueDate": "2024-03-15",
//             "dueTime": "9:00 AM",
//             "createdDate": "2024-03-10",
//             "createdBy": "Alice Williams",
//             "completedDate": null,
//             "title": "New Project Kickoff",
//             "description": "Start working on the new project",
//             "status": "In Progress",
//             "owner": "Harry",
//             "outcome": null,
//             "collaborators": ["Ivy", "Jack"],
//             "duedate": 'Upcoming',
//             "assignedToMe": 'Capy',
//             "assignedByMe": 'Nikita',
 
//           },
//           {
//             "id": "5",
//             "taskType": "Event",
//             "dueDate": "2024-03-20",
//             "dueTime": "6:00 PM",
//             "createdDate": "2024-03-15",
//             "createdBy": "Chris Davis",
//             "completedDate": null,
//             "title": "Team Building Event",
//             "description": "Team-building activities and dinner",
//             "status": "Pending",
//             "owner": "Kathy",
//             "outcome": null,
//             "collaborators": ["Liam", "Mia"],
//             "duedate": 'Overdue',
//             "assignedToMe": 'Arpita',
//             "assignedByMe": 'Sahil',
 
//           },
//           {
//             "id": "6",
//             "taskType": "Meeting",
//             "dueDate": "2024-03-25",
//             "dueTime": "11:30 AM",
//             "createdDate": "2024-03-20",
//             "createdBy": "Sara Johnson",
//             "completedDate": null,
//             "title": "Weekly Team Meeting",
//             "description": "Discuss project updates and challenges",
//             "status": "Upcoming",
//             "owner": "Mike",
//             "outcome": null,
//             "collaborators": ["Nina", "Oliver"],
//             "duedate": 'Overdue',
//             "assignedToMe": 'Carla',
//             "assignedByMe": 'Sofia',
 
//           },
//           {
//             "id": "7",
//             "taskType": "Assignment",
//             "dueDate": "2024-03-30",
//             "dueTime": "4:15 PM",
//             "createdDate": "2024-03-25",
//             "createdBy": "David White",
//             "completedDate": null,
//             "title": "Documentation Task",
//             "description": "Prepare project documentation",
//             "status": "Pending",
//             "owner": "Patty",
//             "outcome": null,
//             "collaborators": ["Quincy", "Rachel"],
//             "duedate": 'Upcoming',
//             "assignedToMe": 'Ruby',
//             "assignedByMe": 'Roxy',
 
//           }
//         ]
//   }
// const MarkAsComplete = () => {
//   const task = formData.elements[0];
//   const [completedDate, setCompletedDate] = useState(task.completedDate || "");
 
//   const handleCompletedDateChange = (date) => {
//     setCompletedDate(date);
//   };
 
//   const handleSubmit = () => {
//     Alert.alert("Task Completed");
//   };
 
//   const handleTopButtonClick = () => {
//     router.navigate('/DrawerScreens/taskList');
//   };
 
//   return (
//     <View style={styles.container}>
//       <View style={styles.topButtonContainer}>
//         <TouchableOpacity style={styles.topButton} onPress={handleTopButtonClick} >
//         <ArrowBack onPress={handleTopButtonClick}/ >
//         </TouchableOpacity>
//       </View>
 
//       <View style={styles.section}>
//         <View style={styles.detailBox}>
//           <Text style={[styles.title, { color: "black" }]}>{task.title}</Text>
//           <Text style={[styles.detailText, { color: "grey" }]}>
//             {task.createdDate}
//           </Text>
//           <Text style={[styles.detailText, { color: "grey" }]}>
//             {task.createdBy}
//           </Text>
//           <Text style={[styles.detailText, { color: "grey" }]}>
//             {task.description}
//           </Text>
//         </View>
//         <View style={styles.horizontalLine} />
//       </View>
 
//       <View style={styles.formSection}>
//         <Text style={styles.formLabel}>Completed Task Date</Text>
//         <TextInput
//           style={styles.dateInput}
//           onChangeText={(text) => handleCompletedDateChange(text)}
//           value={completedDate}
//           placeholder="MM/DD/YYYY"
//         />
 
//         <Text style={styles.formLabel}>Lead Notes</Text>
//         <TextInput
//           style={styles.textArea}
//           multiline={true}
//           numberOfLines={4}
//           placeholder="Enter lead notes..."
//         />
 
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText} >Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#d1e0ed",
//     width: "100%",
//   },
//   section: {
//     marginBottom: 20,
//     backgroundColor: "#d1e0ed",
//     borderRadius: 10,
//     padding: 8,
//     shadowColor: "#d1e0ed",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   detailBox: {
//     backgroundColor: "white",
//     padding: 10,
//     borderRadius: 10,
//   },
//   detailText: {
//     fontSize: 17,
//     marginBottom: 10,
//   },
//   formSection: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 10,
//     marginTop: -20,
//   },
//   formLabel: {
//     fontSize: 18,
//     marginBottom: 5,
//     fontWeight:'600'
//   },
//   textArea: {
//     height: 100,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   dateInput: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: "#023B5E",
//     width: "100%",
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
    
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   topButtonContainer: {
//     alignSelf: 'flex-end',
//     marginVertical: 10,
//     marginRight: 20,
//   },
//   topButton: {
//     backgroundColor: "#d1e0ed",
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   topButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });
 
// export default MarkAsComplete;


import { View, Text, StyleSheet, ScrollView, Image, Button, Pressable, Alert, TextInput } from 'react-native'
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
import { markAsCompletedFormData, productData, productFormData, taskFormData } from '../../customComponents/formData';
import { leadData } from '../../customComponents/formData';
import LDropdown from '../../customComponents/customLeadDropdown';
import { router } from 'expo-router';
import ArrowBack from '../../customComponents/arrowBack';
import CustomSwitch from '../../customComponents/customSwitch';
import ImageUpload from '../../customComponents/imageUpload';
// import RadioButton from '../../customComponents/customRadio';
import useIdStore, { useActivityStore } from '../leadStore';
import LeadDet from '../../leadComponents/leadDetHeader';
import * as SecureStore from 'expo-secure-store'
 
 
 
export default function markAsCompletedForm() {
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
  const activityNumber = useIdStore((state)=>state.activity_number);
  const sysId = useActivityStore((state) => state.sys_id);
  const subject=useActivityStore((state)=>state.subject);
 
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
      setFormValues(prevFormValues => ({ ...prevFormValues, ["status"]: "completed" }));
  }
, [leadId]);
// }
 
const onSubmit = async () => {

  setFormValues(prevFormValues => ({ ...prevFormValues, ["status"]: "completed" }));
  
 
  const postUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_activity_c/${sysId}`;
  const token = SecureStore.getItem('token');
  const stoken = JSON.parse(token);
  const apiToken = stoken.accessToken;
console.log(postUrl,"mark as complete url");
  console.log(apiToken);  
  // const token="DeC8cB2g6op02J_9-8cvJDwpA_5QTiL_9x8VnZLmwHy3QcoqoVR7KuhWUs-M0KgzLFLlp1NB8d5kekkbt3mCYQ";
  console.log("Form data", formValues);
  // try{
     
  //     const response = axios.post(`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_management`, formValues);
  //     console.log('success',response);
  // }
  try{
    //setFormValues(prevFormValues => ({ ...prevFormValues, ['mark_as_complete']: true }));
  const response = await fetch(postUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + apiToken
       
      },
    body: JSON.stringify(formValues)  
    })
 
    console.log("Successfully posted",response);
   
    router.back();
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
    const handleSwitch=(item)=>{
      setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item}));
      console.log(element.name, item);

    }
    switch (element.type) {
     
      // case 'TextInputLead':
      //   return (
      //     <View>
      //        <CustomInput
      //               key={element.name}
      //               title={element.title}
      //               placeholder={leadId}
      //               name={element.name}
      //               value={leadId}
      //               readOnly={true}
      //           />
      //       </View>
      //   );
       
        case 'TextInputLeadS':
        return (
          <View>
             <CustomInput
                    key={element.name}
                    title={element.title}
                    placeholder={subject}
                    // control={control}
                    name={element.name}
                    value={subject}
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
                    isRequired={element.isRequired}
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
             case 'Date':
            return (
              <View style={styles.inputContainer}>
              <Text style={styles.label}>{element.title}</Text>
              <Pressable onPress={() => setShowCalendarModal(true)}>
                <View style={styles.dateInput}>
                  <Text style={styles.dateText}>
                    {formValues[element.name] ? extractDate(formValues[element.name]) : 'Select date '}
                  </Text>
                  <Ionicons name='calendar' size={20} color='black' style={styles.icon} />
                </View>
              </Pressable>
              {/* Calendar Modal */}
              {showCalendarModal && (
                <RNDateTimePicker
                  value={selectedDate || new Date()}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => handleDateChange(selectedDate, element)}
                  maximumDate={new Date()}
                />
              )}
             </View>
             
            );
              
           
           
       
              case 'multiLineText':
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
            {/* <View style={styles.inputContainer}>
              <Text style={styles.label}>Completion Notes</Text>
              <MultilineTextInput
                placeholder="Write a note"
                value={notes}
                onChange={setNotes}
              />
              </View> */}
   
           
                    {markAsCompletedFormData.elements.slice(0, 11).map((element, index) => (
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