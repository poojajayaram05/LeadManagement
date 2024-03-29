// import { View, Text,Button, StyleSheet} from 'react-native'
// import React, { useState } from 'react'
// import { leadNoteData } from '../../../customComponents/formData';
// import { ScrollView } from 'react-native-gesture-handler';
// import { CustomInput } from '../../../customComponents/customInput';
// import Dropdown from '../../../customComponents/customDropdown';
// import TouchableOpacity from 'react-native-gesture-handler';
// import MultilineTextInput from '../../../customComponents/customMultilineInput';

// export default function CreateLeadNote() {
//     const [leadId, setLeadId]=useState('');
//     const[leadNotes, setleadNotes]=useState('');
//     const[leadNoteValues, setLeadNoteValues]=useState([]);
//     const[selectedValue, setSelectedValue]=useState('');

//     const handleSelectLead = (lead)=>{
//         setLeadId(lead);
//         console.log(leadId);  
//     }

//     const handleNote = (note)=>{
//         setleadNotes(note);
//     }
//     const onSubmit=()=>{

//     }

//     const renderFormElement = (element) => {
//         switch (element.type) {
//             case 'multiLineText':
//                 return (
//                   <View style = {styles.inputContainer}>
//                       {/* <RNDateTimePicker mode="time" value={new Date()} /> */}
//                       <Text style={styles.label}>{element.title}</Text>
//                     <MultilineTextInput
//                         key={element.name}
//                         title={element.title}
//                         placeholder={element.placeholder}
                        
//                     />
//                     </View>
//                 );
//             case 'dropdown':
//                 return (
                   
//                     <View key={element.name} style={styles.inputContainer}>
//                     <Text style={styles.label}>{element.title}</Text>
//                     <Dropdown
//                         label="Select Lead"
//                         data={element.dropdownData.map((lead) => ({
//                             value: lead.id,
//                             label: `${lead.id} - ${lead.firstname} ${lead.lastname}`,
//                         }))}
//                         value={selectedValue}
//                         onSelect={handleSelectLead}
//                     />
//                 </View>
                    
//                 );
              
//     };
//     }

//   return (
//     <View style={styles.cardContainer}>
//     <ScrollView>
//         <View style={styles.card}>
//             <View style={styles.section}>
                
              
//                     {leadNoteData.elements.map((element, index) => (
//                         <View key={index} style={styles.inputContainer}>
//                             {renderFormElement(element)}
//                         </View>
//                     ))}
//             </View>

//             <Button title="Submit" onPress={onSubmit} />
//         </View>
//     </ScrollView>
// </View>

//   )
// }
// const styles = StyleSheet.create({
//     cardContainer: {
//         flex: 1,
//         paddingHorizontal: 20,
//         paddingTop: 20,
//         paddingBottom:15,
//         backgroundColor: '#D6DBDF'
//     },
//     card: {
//         backgroundColor: '#FFFFFF', // White card background
//         borderRadius: 10,
//         padding: 20,
//         shadowColor: '#000000',
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 5, // For Android shadow
//     },
//     container: {
//         flex: 1,
//         paddingHorizontal: 20,
//         paddingTop: 20,
//         backgroundColor:'#cad5e8'
//     },
//     section: {
//         marginBottom: 20,
        
//     },
//     sectionTitle: {
//         fontSize: 20, // Increase font size for emphasis
//         fontWeight: 'bold',
//         marginBottom: 15, // Increase margin for better separation
//         color: '#333', // Use a darker color for better readability
        
//         paddingBottom: 5, // Add padding to space out the underline from the text
//     },
//     inputContainer: {
//         marginBottom:8
    
//     },
//     dropdownIcon: {
//         width: 20,
//         height: 20,
//         position: 'absolute',
//         right: 10,
//         top: 9,
//     },
//     label: {
//         marginBottom: 3,
//         fontSize: 12,
//         fontWeight: 'bold',
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         backgroundColor:'white',
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//         fontSize: 16,
//     },
//     error: {
//         color: 'red',
//         fontSize: 12,
//     },
//     dateInput: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderRadius: 5,
//       paddingVertical: 10,
//       paddingHorizontal: 15,
//     },
//     dateText: {
//       flex: 1,
//       fontSize: 16,
//     },
//     calendarIcon: {
//       width: 20,
//       height: 20,
//       marginLeft: 10, // Adjust the margin as needed
//     },
    
//     });
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { leadNoteData } from '../../customComponents/formData';
// import { CustomInput } from '../../customComponents/customInput';
// import Dropdown from '../../customComponents/customDropdown';
// import MultilineTextInput from '../../customComponents/customMultilineInput';
// import { router } from 'expo-router';
// import ArrowBack from '../../customComponents/arrowBack';

// export default function CreateLeadNote({ navigation }) {
//   const [leadId, setLeadId] = useState('');
//   const [leadNotes, setleadNotes] = useState('');
//   const [leadNoteValues, setLeadNoteValues] = useState([]);
//   const [selectedValue, setSelectedValue] = useState('');

//   const handleSelectLead = (lead) => {
//     setLeadId(lead);
//     console.log(leadId);
//   };

//   const handleNote = (note) => {
//     setleadNotes(note);
//   };

//   const goToScreen=()=>{
//    router.navigate('leadDetailScreens/notes')
//   };
//   const goBack=()=>{
//    router.replace('leadDetailScreens/notes')
//   }

//   const onSubmit = () => {
    
//   };

//   const renderFormElement = (element) => {
//     switch (element.type) {
//       case 'dropdown':
//         return (
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>{element.title}</Text>
//             <MultilineTextInput
//               key={element.name}
//               title={element.title}
//               placeholder={element.placeholder}
//             />
//           </View>
//         );
//       case 'multiLineText':
//         return (
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>{element.title}</Text>
//             <MultilineTextInput
//               key={element.name}
//               title={element.title}
//               placeholder={element.placeholder}
//             />
//           </View>
//         );
//       case 'dropdown':
//         return (
//           <View key={element.name} style={styles.inputContainer}>
//             <Text style={styles.label}>{element.title}</Text>
//             <Dropdown
//               label="Select Lead"
//               data={element.dropdownData.map((lead) => ({
//                 value: lead.id,
//                 label: `${lead.id} - ${lead.firstname} ${lead.lastname}`,
//               }))}
//               value={selectedValue}
//               onSelect={handleSelectLead}
//             />
//           </View>
//         );
//     }
//   };

//   return (
//     <View style={styles.cardContainer}>
//       <ScrollView>
//         <View style={styles.card}>
//           <View style={styles.section}>
//             {leadNoteData.elements.map((element, index) => (
//               <View key={index} style={styles.inputContainer}>
//                 {renderFormElement(element)}
//               </View>
//             ))}
//           </View>
//           <Button title="Submit" onPress={onSubmit} color='#023B5E' />
//         </View>
//       </ScrollView>
//       <View style={styles.buttonContainer}>
//       <TouchableOpacity onPress={goBack}>
//         <ArrowBack />
//       </TouchableOpacity>
//     </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cardContainer: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 15,
//     backgroundColor: '#d1e0ed',
//   },
//   backButton: {
//     alignSelf: 'flex-end', // Align button to the start (left)
//     marginRight: 'auto',
//     color:'#023B5E'
//      // Push button to the leftmost corner
//   },
//   card: {
//     backgroundColor: '#FFFFFF', 
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: '#000000',
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5, 
//   },
 
//   backButtonText: {
//     fontSize: 12,
//     color: '#007AFF', 
//   },
//   section: {
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginBottom: 8,
//   },
//   buttonContainer:{
//     flex: 1,
//     flexDirection: 'row', // Align items horizontally
//     alignItems: 'flex-end', // Align items to the start (left)
//     justifyContent: 'flex-end', // Align items to the start (left)
//     padding: 10,
//     },
//   label: {
//     marginBottom: 3,
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
// });


import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { leadNoteData, meetingData, taskData } from '../../customComponents/formData';
import { CustomInput } from '../../customComponents/customInput';
import Dropdown from '../../customComponents/customDropdown';
import MultilineTextInput from '../../customComponents/customMultilineInput';
import { router } from 'expo-router';
import ArrowBack from '../../customComponents/arrowBack';
import LDropdown from '../../customComponents/customLeadDropdown';
import { leadData } from '../../customComponents/formData';
import { meetingItemsData } from '../../customComponents/formData';

export default function CreateLeadNote({ navigation }) {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [leadId, setLeadId] = useState('');
  const [taskId, setTaskId] = useState('');
  const [meetingId, setMeetingId] = useState('');
  const [notes, setNotes] = useState('');

  const handleSelectAccount = (account) => {
    setSelectedAccount(account);
    console.log(selectedAccount);
    // Reset other input fields when a different account is selected
    setLeadId('');
    setTaskId('');
    setMeetingId('');
  };

  const onSubmit = () => {
    // Submit logic here
  };

  const goBack=()=>{
    router.back();
  }

  const handleSelect = (item) => {
    // setSelectedValue(item);
    // setFormValues(prevFormValues => ({ ...prevFormValues, [element.name]: item.value }));
    console.log('Selected value:', item);
};

  const renderAdditionalFields = () => {
    switch (selectedAccount.value) {
      case 'lead':
        return (
          <View>
            <Text style={styles.label}> Select Lead </Text>
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
      case 'task':
       
        return (
          <View>
            <Text style={styles.label}> Select Task</Text>
          <LDropdown
           label="Select Lead"
           data={taskData.map((task) => {
             console.log(task.id); // Log lead object
             return {
               value: task.id,
               label: `${task.id} - ${task.taskName}`,
             };
           })}
           onSelect={handleSelect}
          />
          </View>
        
        );
      case 'meeting':
        return (
          <View>
            <Text style={styles.label}>Select Meeting</Text>
          <LDropdown
           label="Select Meeting"
           data={meetingItemsData.elements.map((meeting) => {
             console.log(meeting.id); // Log lead object
             return {
               value: meeting.id,
               label: `${meeting.id} - ${meeting.title}`,
             };
           })}
           onSelect={handleSelect}
          />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.cardContainer}>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.section}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Entity</Text>
              <Dropdown
                label="Select"
                data={leadNoteData.elements[0].dropdownData}
                value={selectedAccount}
                onSelect={handleSelectAccount}
              />
            </View>
            {renderAdditionalFields()}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Lead Notes</Text>
              <MultilineTextInput
                placeholder="Write a note"
                value={notes}
                onChange={setNotes}
              />
            </View>
          </View>
          <Button title="Submit" onPress={onSubmit} color='#023B5E' />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity >
          {/* <ArrowBack onPress={goBack} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: '#d1e0ed',
  },
  backButton: {
    alignSelf: 'flex-end',
    marginRight: 'auto',
    color:'#023B5E',
  },
  card: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },
  backButtonText: {
    fontSize: 12,
    color: '#007AFF', 
  },
  section: {
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
