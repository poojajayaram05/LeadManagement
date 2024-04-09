 
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import LeadDet from '../../leadComponents/leadDetHeader';
// import useIdStore from '../leadStore';
// //import { leadData } from '../../customComponents/formData';
// import { FetchAccountDetails } from '../service/fetchLeadDetails';
// import { useEffect } from 'react';

// import DataRow from '../../customComponents/dataRow'; 
// const sectionDetails = [
//     {
//       title: 'General Information',
//       id: 'account_info',
//       fields: [
//         {label: 'Account Type:', value: 'account_type' },
//         {label: 'Account name:', value: 'account_name' },
//         { label: 'Title:', value: 'title' },
//         { label: 'First name:', value: 'first_name' },
//         { label: 'Middle name:', value: 'middle_name' },
//         { label: 'last name:', value: 'last_name' },
//         { label: 'Description:', value: 'description' },
//         { label: 'Account number:', value: 'account_number' },
//         { label: 'Account source:', value: 'account_source' },
//         { label: 'Account site:', value: 'account_site' },
//         { label: 'Website:', value: 'website' },
//         { label: 'Account owner:', value: 'account_owner' },
//         { label: 'Parent account:', value: 'parent_account' },
//         // { label: 'Gender:', value: 'gender' },
//         // { label: 'Scoring Profile:', value: 'scoring_profile' }
//       ]
//     },
//     {
//         title: 'Contact Details',
//         id: 'contactDetails',
//         fields: [
//           { label: 'Alternate Email 1:', value: 'alternate_email1' },
//           { label: 'Alternate Email 2:', value: 'alternate_email2' },
//           { label: 'Email OtpOut:', value: 'email_opt_out' },
//           { label: 'Business Phone:', value: 'business_phone' },
//           { label: 'Mobile Phone:', value: 'mobile_phone' },
//           { label: 'Home Phone:', value: 'home_phone' }
//         ]
//       },
//     // {
//     //   title: 'Company Details',
//     //   id: 'companyDetails',
//     //   fields: [
//     //     { label: 'Company:', value: 'company' },
//     //     { label: 'Company:', value: 'company' },
//     //     { label: 'No Of Employees:', value: 'no_of_employees' },
//     //     { label: 'Annual Revenue:', value: 'annual_revenue' },
//     //     { label: 'Job Title:', value: 'job_title' },
//     //     { label: 'Company DUNS Number:', value: 'company_duns_number' },
//     //     { label: 'Industry:', value: 'industry' }
//     //   ]
//     // },
   
//     // {
//     //     title: 'Address Details',
//     //     id: 'addressDetails',
//     //     fields: [
//     //       { label: 'Street:', value: 'street' },
//     //       { label: 'City:', value: 'city' },
//     //       { label: 'State:', value: 'state_province' },
//     //       { label: 'Zip:', value: 'zip_postalcode' },
//     //       { label: 'Country:', value: 'country' }
//     //     ]
//     //   },
//     //   {
//     //     title: 'Contact Methods',
//     //     id: 'contact Methods',
//     //     fields: [
//     //       { label: 'Preferred Method To Contact:', value: 'preffered_method' },
//     //       { label: 'Whatsapp Number:', value: 'Whatsapp' },
//     //       { label: 'Qualification:', value: 'qualification' },
//     //       { label: 'Status:', value: 'lead_status' }
//     //     ]
//     //   },
//     //   {
//     //     title: 'System Information',
//     //     id: 'systemDetails',
//     //     fields: [
//     //       { label: 'Created by:', value: 'sys_created_by' },
//     //       { label: 'Created On:', value: 'sys_created_on' },
//     //       { label: 'Updated By:', value: 'sys_updated_by' },
//     //       { label: 'Last Updated On:', value: 'sys_updated_on' }
//     //     ]
//     //  },
//   ];
 
 
// const Info = () => {
//   const [leadData, setLeadData] = useState([]);
//   const [openSections, setOpenSections] = useState(['leadInfo']);
//   const[accountData, setAccountData]=useState([]);

//   const accNumber = useIdStore((state)=>state.account_number);
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ldata = await FetchAccountDetails();
//         setAccountData(ldata.result);
//         console.log(accountData);
//       } catch (error) {
//         console.error('Error in fetching leads:', error);
//       }
//     };
//     fetchData();
//   }, []);
 
//   const toggleSection = (sectionId) => {
//     const isOpen = openSections.includes(sectionId);
//     if (isOpen) {
//       setOpenSections(openSections.filter((item) => item !== sectionId));
//     } else {
//       setOpenSections([...openSections, sectionId]);
//     }
//   };
 
//   const renderSectionContent = (sectionId, leadData, leadId) => {
//     const accounts = accountData.find((lead) => lead.account_number === accNumber);
//     const section = sectionDetails.find((section) => section.id === sectionId);
 
//     if (!section || !accounts) return null;
 
//     return section.fields.map((row, index) => (
//       <DataRow key={index} label={row.label} detail={accounts[row.value]} />
//     ));
//   };
 
//   return (
//     <View style={styles.body}>
//       <View style={{ height: '26%' }}>
//         <LeadDet />
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.container}>
//           {sectionDetails.map((section) => (
//             <Section
//               key={section.id}
//               title={section.title}
//               isOpen={openSections.includes(section.id)}
//               onPress={() => toggleSection(section.id)}>
//               {renderSectionContent(section.id, accountData, useIdStore((state) => state.account_number))}
//             </Section>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
 
// const Section = ({ title, isOpen, onPress, children }) => {
//   return (
//     <View style={styles.sectionContainer}>
//       <TouchableOpacity onPress={onPress}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionHeaderText}>{title}</Text>
//           <Text>{isOpen ? '-' : '+'}</Text>
//         </View>
//       </TouchableOpacity>
//       {isOpen && <View>{children}</View>}
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   scrollViewContent: {
//     flexGrow: 1,
//   },
//   body: {
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     marginTop: 10,
//     marginHorizontal: 30,
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   sectionContainer: {
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   sectionHeaderText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
 
// export default Info;