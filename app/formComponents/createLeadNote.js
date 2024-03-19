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
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { leadNoteData } from '../../customComponents/formData';
import { CustomInput } from '../../customComponents/customInput';
import Dropdown from '../../customComponents/customDropdown';
import MultilineTextInput from '../../customComponents/customMultilineInput';
import { router } from 'expo-router';
import ArrowBack from '../../customComponents/arrowBack';

export default function CreateLeadNote({ navigation }) {
  const [leadId, setLeadId] = useState('');
  const [leadNotes, setleadNotes] = useState('');
  const [leadNoteValues, setLeadNoteValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectLead = (lead) => {
    setLeadId(lead);
    console.log(leadId);
  };

  const handleNote = (note) => {
    setleadNotes(note);
  };

  const goToScreen=()=>{
   router.navigate('leadDetailScreens/notes')
  };
  const goBack=()=>{
   router.replace('leadDetailScreens/notes')
  }

  const onSubmit = () => {
    
  };

  const renderFormElement = (element) => {
    switch (element.type) {
      case 'multiLineText':
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}</Text>
            <MultilineTextInput
              key={element.name}
              title={element.title}
              placeholder={element.placeholder}
            />
          </View>
        );
      case 'dropdown':
        return (
          <View key={element.name} style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}</Text>
            <Dropdown
              label="Select Lead"
              data={element.dropdownData.map((lead) => ({
                value: lead.id,
                label: `${lead.id} - ${lead.firstname} ${lead.lastname}`,
              }))}
              value={selectedValue}
              onSelect={handleSelectLead}
            />
          </View>
        );
    }
  };

  return (
    <View style={styles.cardContainer}>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.section}>
            {leadNoteData.elements.map((element, index) => (
              <View key={index} style={styles.inputContainer}>
                {renderFormElement(element)}
              </View>
            ))}
          </View>
          <Button title="Submit" onPress={onSubmit} color='#023B5E' />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={goBack}>
        <ArrowBack />
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
    alignSelf: 'flex-end', // Align button to the start (left)
    marginRight: 'auto',
    color:'#023B5E'
     // Push button to the leftmost corner
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
  buttonContainer:{
    flex: 1,
    flexDirection: 'row', // Align items horizontally
    alignItems: 'flex-end', // Align items to the start (left)
    justifyContent: 'flex-end', // Align items to the start (left)
    padding: 10,
    },
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

    