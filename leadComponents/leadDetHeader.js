
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Linking } from 'react-native';
// import BadgeLead from './badgeLead';
// import { leadData } from '../customComponents/formData';
// import { router } from 'expo-router';
// import * as DocumentPicker from 'expo-document-picker';
// import useIdStore from '../app/leadStore';
// import ArrowBack from '../customComponents/arrowBack';
 
// const handleDirections = () => {
//   const address =
//     'XHHR+VF9, Ambedkar Bheedhi, Sampangi Rama Nagara, Bengaluru, Karnataka 560001';
//   const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
//   Linking.openURL(url);
// };
 
// const handleAttachment = async () => {
//   try {
//     const result = await DocumentPicker.getDocumentAsync();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const goBack=()=>{
//     router.navigate(-1);
// }
 

 
// const LeadDet = () => {
//     const handleEmail = () => {
//         const emailid = email;
//         Linking.openURL(`mailto:${emailid}`);
//       };
     
//     const handleCall = () => {
//         const phoneNumber = phone;
//         Linking.openURL(`tel:${phoneNumber}`);
//       };
//   const leadId = useIdStore((state) => state.leadId);
//   const lead = leadData.find((lead) => lead.id === leadId);
// //   const { firstname, lastname, status, temperature, } = lead || {};
// const { firstname, lastname, phone, email, status, temperature, id, jobTitle} = lead || {};
 
//   const handleBack = () => {
//     router.navigate('/DrawerScreens/leadList');
//   };
 
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.backButton} onPress={handleBack}>
//         <View style={styles.backButtonContainer}>
//          <ArrowBack onPress={goBack}/>
//         </View>
//       </TouchableOpacity>
 
//       <View style={styles.userDetailsContainer}>
//         <View style={styles.userInfo}>
//           <Text style={styles.userName}>
//             {firstname} {lastname}
//           </Text>
//         </View>
//         {/* <View style={styles.sectionContainer}>
//           <View>
//             <BadgeLead label={'Sale'} color={'#857471'} textColor="white" />
//             <BadgeLead color={'red'} label={'Hot'} textColor="white" />
//           </View>
//         </View> */}
//       </View>
 
//       <View style={{flex: 1, justifyContent: 'center', marginBottom:50}}>
//       <View style={styles.actionButtonsContainer}>
//         <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
//           <Ionicons name="call" size={24} color="black" />
//           <Text style={styles.buttonLabel}>Contact</Text>
//         </TouchableOpacity>
 
//         <TouchableOpacity style={styles.actionButton} onPress={handleEmail}>
//           <Ionicons name="mail" size={24} color="black" />
//           <Text style={styles.buttonLabel}>Email</Text>
//         </TouchableOpacity>
 
//         <TouchableOpacity style={styles.actionButton} onPress={handleDirections}>
//           <Ionicons name="location" size={24} color="black" />
//           <Text style={styles.buttonLabel}>Direction</Text>
//         </TouchableOpacity>
 
//         <TouchableOpacity style={styles.actionButton} onPress={handleAttachment}>
//           <Ionicons name="attach" size={24} color="black" />
//           <Text style={styles.buttonLabel}>Add file</Text>
//         </TouchableOpacity>
//       </View>
//       </View>
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginBottom: 2,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 2,
//     right: 2,
//     zIndex: 1,
//   },
//   backButtonContainer: {

//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//   },
//   backButtonText: {
//     color: '#555',
//     fontSize: 16,
//   },
//   userDetailsContainer: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     height: '30%',
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 10,
//   },
//   userName: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginLeft: 10,
//     color:'#023B5E',
//   },
// actionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around', // Change to 'space-around'
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginTop: 30,
//     borderWidth: 4,
//     borderColor: '#023B5E',
//     borderRadius: 10,
//     height: 70,
//     width: '88%', // Adjust the width to 100%
//     alignSelf: 'center', // Center the container horizontally
//   },
//   actionButton: {
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   buttonLabel: {
//     fontSize: 12,
//     textAlign: 'center',
//   },
//   sectionContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     marginTop: 13,
//   },
// });
 
// export default LeadDet;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import BadgeLead from './badgeLead';
import { leadData } from '../customComponents/formData';
import { router } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import useIdStore from '../app/leadStore';
import InitialsAvatar from '../customComponents/initialAvatar';
import ArrowBack from '../customComponents/arrowBack';
import { FetchLeads } from '../app/service/fetchLeads'; 

 
// const handleAttachment = async () => {
//   try {
//     const result = await DocumentPicker.getDocumentAsync();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
 
 
 
 
const LeadDet = () => {
  const[leadData, setLeadData]=useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ldata = await FetchLeads(); // Call FetchLeads and wait for the result
        setLeadData(ldata.result); // Set the state with the fetched data
        // console.log("this is the lead data", ldata); // Log the fetched data
      } catch (error) {
        // Handle errors if any
        console.error('Error in fetching leads:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); 

  const leadId = useIdStore((state) => state.number);
  const lead = leadData.find((lead) => lead.number === leadId);
  const { firstname, lastname, email, qualification, leadstatus, number, gender, mobilephone} = lead || {};
  const goToleadEdit = () => {
    router.navigate('/formComponents/editLead')
  };
 
  const handleBack = () => {
    router.navigate('headerScreens/DrawerScreens/leadList');
  };
 
  const handleCall = () => {
    
    Linking.openURL(`tel:${mobilephone}`);
  };
 
  const handleDirections = () => {
    const address =
      'XHHR+VF9, Ambedkar Bheedhi, Sampangi Rama Nagara, Bengaluru, Karnataka 560001';
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };
 
 
const handleEmail = () => {
  
  Linking.openURL(`mailto:${email}`);
};
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        {/* <ArrowBack/> */}
        <Ionicons name="chevron-back" size={24} color="white" />
        {/* <View style={styles.backButtonContainer}>
          <Text style={styles.backButtonText}>Back</Text>
        </View> */}
 
      </TouchableOpacity>
 
      <View style={styles.userDetailsContainer}>
        <InitialsAvatar name={`${firstname} ${lastname}`} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{firstname} {lastname}</Text>
  
          {/* <Text style={styles.title}>{jobTitle}</Text> */}
        </View>
      </View>
 
      <View style={styles.lifestyleContainer}>
        <View style={styles.lifecycleStage}>
          <Text style={styles.lifecycleHeading}>Status</Text>
          <Text style={styles.lifecycleText}>{leadstatus}</Text>
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.tempHeading}>Qualification</Text>
          <Text style={styles.tempText}>{qualification}</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreHeading}>Score</Text>
          <Text style={styles.scoreText}>15</Text>
        </View>
      </View>
 
      {/* <View style={styles.divider} /> */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
          <Ionicons name="call" size={24} color="white" />
          {/* <Text style={styles.buttonLabel}>Contact</Text> */}
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.actionButton} onPress={handleEmail}>
          <Ionicons name="mail" size={24} color="white" />
          {/* <Text style={styles.buttonLabel}>Email</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={goToleadEdit}>
          <Ionicons name="pencil" size={24} color="white" />
        </TouchableOpacity>
 
        {/* <TouchableOpacity style={styles.actionButton} onPress={handleDirections}>
          <Ionicons name="location" size={24} color="white" />
         
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.actionButton} onPress={handleAttachment}>
          <Ionicons name="attach" size={24} color="white" />
          <Text style={styles.buttonLabel}>Add file</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
 
    divider: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
  container: {
    flex: 1,
    marginBottom:10,
    backgroundColor: '#023B5E',
    paddingHorizontal: 20,
    paddingTop: 20, // Add padding top to avoid overlapping with the back button
  },
  backButton: {
    position: 'absolute',
    top: 2,
    right: 2,
    zIndex: 1,
  },
  backButtonContainer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  // userDetailsContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginHorizontal:60,
  //   justifyContent: 'space-between', // Add this line to space items evenly
  // },
  // userInfo: {
  //   marginLeft: 10,
  //   flex: 1, // Add flex: 1 to make the container take up available space
  // },
 
  userDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 0, // Adjust as needed for the desired distance from the left edge
  },
  // userInfo: {
  //   marginLeft: 10,
  //   flex: 1,
  //  backgroundColor:'red'
  // },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  lifestyleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  lifecycleStage: {
    alignItems: 'center',
    flex: 1,
  },
  lifecycleHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  lifecycleText: {
    color: 'white',
    marginTop: 5,
  },
  tempContainer: {
    alignItems: 'center',
    flex: 1,
  },
  tempHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tempText: {
    color: 'white',
    marginTop: 5,
  },
  scoreContainer: {
    alignItems: 'center',
    flex: 1,
  },
  scoreHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scoreText: {
    color: 'white',
    marginTop: 5,
  },
 
  // actionButtonsContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   position: 'absolute',
  //   top: 33,
  //   right: 0,
  //   zIndex: 1,
  // },
 
  userInfo: {
    marginLeft: 3, // Adjust margin as needed
    width: 140, // Set a fixed width
    height: 60, // Increase height as needed
    // backgroundColor: 'red',
    justifyContent: 'center', // Center vertically
  },
 
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the right
    position: 'absolute',
    top: 33,
    right: 10, // Adjust right position to avoid overlapping with the right edge
    zIndex: 1,
  },
 
 
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#023B5E',
  },
 
  buttonLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white', // Set text color to white to match the container
  },
});
 
export default LeadDet;