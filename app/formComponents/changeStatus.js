// // import React, { useState } from "react";
// // import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// // import ArrowBack from "../../customComponents/arrowBack";
// // import DetailCard from "../../customComponents/detailCard";
// // import { leadData } from "../../customComponents/formData";
// // import SwitchSelector from 'react-native-switch-selector';
// // import { router } from 'expo-router';
// // import useIdStore from "../leadStore";
// // import StatusForm from "../DrawerScreens/statusForm";
// import LeadDet from "../../leadComponents/leadDetHeader";
 
 
// // export default  function ChangeStatus() {
// //   const leadId = useIdStore((state) => state.leadId);
// //   const [selectedStatus, setSelectedStatus] = useState(null);
// //   const lead = leadData.find((lead) => lead.Id === leadId);
// //   const { FirstName, LastName, Phone, Email, Status, Label, Id, Gender, LeadType} = lead || {};
// //   const status = Status;
 
// //   const filteredLead = {
// //     LeadType: LeadType,
// //     Name: `${lead.FirstName} ${lead.LastName}`,  
// //     Gender: Gender,
// //     Email: Email,
// //     Phone:Phone,
// //     Status: Status,
// //   };
 
//   // const handleStatusChange = (value) => {
//   //   setSelectedStatus(value);
//   // };
 
//   // const goBackToLeadCard = () => (
//   //   router.navigate('/DrawerScreens/leadList')
//   // );
 
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.box}>
// //       <View style={{ height: '30%' }}>
// //                 <LeadDet/>
// //             </View>
// //             </View>
// //       <SwitchSelector
// //         options={generateOptions(status).options}
// //         initial={0}
// //         onPress={handleStatusChange}
// //         selectedColor="white"
// //         buttonColor="#023B5E"
// //       />
// //       {selectedStatus && <StatusForm selectedStatus={selectedStatus} />}
// //       <TouchableOpacity style={styles.backButton} onPress={goBackToLeadCard}>
// //         <ArrowBack />
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };
 
// // const generateOptions = (status) => {
// //   switch (status) {
// //     case "New Lead":
// //       return {
// //         options: [
// //           { label: 'Qualified', value: 'Qualified' },
// //           { label: 'Contacted', value: 'Contacted' },
// //         ]
// //       };
// //     case "Qualified":
// //       return {
// //         options: [
// //           { label: 'Closed-not converted', value: 'Closed-not converted' },
// //           { label: 'Converted', value: 'Converted' },
// //         ]
// //       };
// //     case "Contacted":
// //       return {
// //         options: [
// //           { label: 'Qualified', value: 'Qualified' },
// //         ]
// //       };
// //     case "Closed-not converted":
// //       return {
// //         options: [
// //           { label: 'Closed-not converted', value: 'Closed-not converted'},
// //         ]
// //       };
// //     case "Converted":
// //       return {
// //         options:[
// //           { label: 'Converted', value: 'Converted' },
// //         ]
// //       };
// //     default:
// //       return [];
// //   }
// // };
 
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#F2F6FF",
// //     paddingTop: 30,
// //     alignItems: "center",
// //     width: "100%", // Set the width to 100%
// //   },
// //   box: {
   
// //     backgroundColor: "#023B5E",
// //     paddingBottom:2,
// //     width: "100%",
// //     marginBottom:20,
// //   },
// //   backButton: {
// //     alignSelf: "flex-end",
// //   },
// // });
 
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import ArrowBack from "../../customComponents/arrowBack";
// import { router } from "expo-router";
// import React, { useState, useEffect } from 'react'
//  import SwitchSelector from "react-native-switch-selector";
// import StatusForm from "./statusForm";
// import { FetchLeads } from "../service/fetchLeads";
// import * as SecureStore from 'expo-secure-store';
// import useIdStore from "../leadStore";

// export default function ChangeStatus() {
//   const[leadData, setLeadData]=useState([])
  

// //   const status = Status;
//   const handleStatusChange = (value) => {
//     setSelectedStatus(value);
//   };
 
//   const goBackToLeadCard = () => (
//     router.navigate('/DrawerScreens/leadList')
//   );

//   useEffect(() => {
   
//     //   const FetchLeads = async () => {
//     //     const token = SecureStore.getItem('token');
//     //     const stoken = JSON.parse(token);
//     //     const apiToken = stoken.accessToken;
//     //     console.log(apiToken);  
//     //     const getLeadURL="https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_c" ;
//     //     try {
//     //         const response = await fetch(getLeadURL, {
//     //             method: 'GET',
//     //             headers: {
//     //               'Content-Type': 'application/json',
//     //               'Authorization' : 'Bearer ' + apiToken
                 
//     //             },
    
//     //           })
  
//     //           const data = await response.json();
//     //           console.log("leads data is",data.result);
//     //           setleadData(data.result);
    
             
//     //         //   router.replace('/DrawerScreens/leadList')
//     //     } catch (error) {
//     //         console.error('Error fetching leads:', error);
//     //         throw error; // You can handle the error further or throw it for the caller to handle
//     //     }
//     // };
   
//       const fetchData = async () => {
//           try {
//               const ldata = await FetchLeads(); // Call FetchLeads and wait for the result
//               setLeadData(ldata.result); // Set the state with the fetched data
//               //console.log("this is the lead data  from statys",ldata.result);
//               setLeadData(ldata.result);
//               console.log("statussss",leadData) // Log the fetched data
//           } catch (error) {
//               // Handle errors if any
//               console.error('Error in fetching leads:', error);
//           }
//       };
  
//       fetchData(); // Call the fetchData function defined above
//   }, []); // Empty dependency array means it will run only once on mount
//   const leadId = useIdStore((state) => state.number);
//   const [selectedStatus, setSelectedStatus] = useState(null);
//   const lead = leadData.find((lead) => lead.number === leadId);
//   const { first_name, LastName, Phone, Email, lead_status, Label, Id, Gender, LeadType} = lead || {};
//   console.log("lead statusssssssss", lead_status)
  
//   const generateOptions = (lead_status) => {
//   switch (lead_status) {
//     case "new":
//       return {
//         options: [
//           { label: 'Qualified', value: 'Qualified' },
//           { label: 'Contacted', value: 'Contacted' },
//         ]
//       };
//     case "qualified":
//       return {
//         options: [
//           { label: 'Closed-not converted', value: 'Closed-not converted' },
//           { label: 'Converted', value: 'Converted' },
//         ]
//       };
//     case "contacted":
//       return {
//         options: [
//           { label: 'Qualified', value: 'Qualified' },
//         ]
//       };
//     case "closed":
//       return {
//         options: [
//           { label: 'Closed-not converted', value: 'Closed-not converted'},
//         ]
//       };
//     case "converted":
//       return {
//         options:[
//           { label: 'Converted', value: 'Converted' },
//         ]
//       };
//     default:
//       return [];
//   }
// };
// return (
//       <View style={styles.container}>
//         <View style={styles.box}>
//         <View style={styles.header}>
//                   <LeadDet/>
//               </View>
//               </View>
//               <View style={styles.selector}>
//         <SwitchSelector
//           options={generateOptions(lead_status).options}
//           initial={0}
//           onPress={handleStatusChange}
//           selectedColor="white"
//           buttonColor="#023B5E"
//         />
//         </View>
//         {selectedStatus && <StatusForm selectedStatus={selectedStatus} />}
//         <TouchableOpacity style={styles.backButton} onPress={goBackToLeadCard}>
//           <ArrowBack />
//         </TouchableOpacity>
//       </View>
//     );
// }
//   const styles = StyleSheet.create({
//     header:{
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'flex-start',
//       marginLeft: 0,

//     },
//     container: {
//       flex: 1,
//       backgroundColor: "#F2F6FF",
//       paddingTop: 30,
//       alignItems: "center",
//       width: "100%", // Set the width to 100%
//     },
//     box: {
//       backgroundColor: "#023B5E",
//       paddingBottom: 2,
//       width: "100%",
//       marginBottom: 20,
//     },
//     backButton: {
//       alignSelf: "flex-end",
//     },
//     selector: {
//       width: "100%",
//       height: "30%", // Adjust height as needed
//     }
//     });


import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ArrowBack from "../../customComponents/arrowBack";
import RadioButton from "../../customComponents/customRadio";
import useIdStore from "../leadStore";
import StatusForm from "../formComponents/statusForm";
import LeadDet from "../../leadComponents/leadDetHeader";
import { FetchLeads } from "../service/fetchLeads";

 
const ChangeStatus = () => {
  const status = useIdStore((state) => state.status);
  const leadId = useIdStore((state) => state.leadId);
  const taskId = useIdStore((state)=>   state.activity_number);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [leadData, setLeadData] = useState([]);
  console.log("this is the statusss", status);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ldata = await FetchLeads();
        setLeadData(ldata.result);
        console.log(leadData);
      } catch (error) {
        console.error('Error in fetching leads:', error);
      }
    };
    fetchData();
  }, []);
 
  const lead = leadData.find((lead) => lead.number === leadId);
  const { first_name, last_name, mobile_phone, lead_status } = lead || {};
 
  const handleStatusChange = (value) => {
    setSelectedStatus(value);
  };
 
  const goBackToLeadCard = () => (
    router.navigate('/DrawerScreens/leadList')
  );
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ height: '30%' }}>
          <LeadDet/>
          {/* <Text>{leadId}{first_name}{last_name}</Text> */}
        </View>
      </View>
 
      {/* Replace SwitchSelector with RadioButton */}
      <View style={styles.radioButtonContainer}>
        {/* Move the "New" text to the left */}
        <Text style={styles.statusText}>{lead_status}</Text>
        {/* Reduce the font size of radio button labels */}
        <RadioButton
          title="Select Status"
          labelStyle={styles.radioButtonLabel} // Custom style for radio button labels
          data={{
            elements: [
              {
                type: 'RadioButton',
                rdata: generateOptions(status).options
              }
            ]
          }}
          onSelect={handleStatusChange}
        />
      </View>
      {selectedStatus && <StatusForm selectedStatus={selectedStatus} />}
 
      {/* <TouchableOpacity style={styles.backButton} onPress={goBackToLeadCard}>
        <ArrowBack />
      </TouchableOpacity> */}
    </View>
  );
};
 
const generateOptions = (status) => {
  switch (status) {
    case "new":
      return {
        options: [
           
          { label: 'Qualified', value: 'Qualified' },
          { label: 'Contacted', value: 'Contacted' },
          { label: 'Closed-not converted', value: 'Closed-not converted' },
          { label: 'Converted', value: 'Converted' },
        ]
      };
    case "qualified":
      return {
        options: [
          { label: 'Closed-not converted', value: 'Closed-not converted' },
          { label: 'Converted', value: 'Converted' },
        ]
      };
    case "contacted":
      return {
        options: [
          { label: 'Qualified', value: 'Qualified' },
        ]
      };
    case "Closed-not converted":
      return {
        options: [
          { label: 'Closed-not converted', value: 'Closed-not converted' },
        ]
      };
    case "Converted":
      return {
        options:[
          { label: 'Converted', value: 'Converted' },
        ]
      };
    default:
      return [];
  }
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F6FF",
    paddingTop: 5,
    alignItems: "center",
    width: "100%",
  },
  header: {
    backgroundColor: "#023B5E",
    paddingBottom:5,
    // paddingTop:20,
    width: "100%",
    marginBottom:5,
  },
  backButton: {
    alignSelf: "flex-end",
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 10,
    marginTop:10,
  },
  statusText: {
    // marginLeft: 120,
    fontSize: 16,
    color: "grey",
    marginBottom:18,
    marginRight:18,
  },
  radioButtonLabel: {
    fontSize: 3,
    color: "#000",
  },
});
 
export default ChangeStatus;

 