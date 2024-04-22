// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import LeadDet from '../../leadComponents/leadDetHeader';
// import useIdStore from '../leadStore';
// import { FetchAccountDetails } from '../service/fetchAccountDetails';
// import { useEffect } from 'react';
 
// import DataRow from '../../customComponents/dataRow';
// import AccountHeader from '../../customComponents/accountDetailHeader';
// const sectionDetails = [
//     {
//       title: 'General Information',
//       id: 'generalInformation',
//       fields: [
//         {label: 'Account Type:', value: 'account_type' },
//         { label: 'Account name:', value: 'account_name' },
//         { label: 'Title', value: 'title' },
//         { label: 'Salutation:', value: 'salutation' },
//         { label: 'First name:', value: 'first_name' },
//         { label: 'last name:', value: 'last_name' },
//         { label: 'middle name:', value: 'middle_name' },
//         { label: 'Number:', value: 'number' },
//         { label: 'Birth date:', value: 'birth_date' },
//         { label: 'Account source:', value: 'account_source' },
//         { label: 'Account site:', value: 'account_site' },
//         { label: 'Website:', value: 'website' },
//         // { label: 'Account owner:', value: 'account_owner' },
//         { label: 'Description:', value: 'description' },
//         // { label: 'Parent account:', value: 'parent_account' },
//       ]
//     },
//     {
//       title: 'Contact Details',
//       id: 'contactDetails',
//       fields: [
//         { label: 'Email:', value: 'email' },
//         { label: 'Alternate Email 1:', value: 'alternate_email1' },
//         { label: 'Alternate Email 2:', value: 'alternate_email2' },
//         { label: 'Phone:', value: 'phone' },
//         { label: 'Mobile:', value: 'mobile' },
//         { label: 'Home phone:', value: 'home_phone' },
//         { label: 'Assistant:', value: 'assistant' },
//         { label: 'Assistant phone:', value: 'assistant_phone' },
//         { label: 'Business Phone:', value: 'business_phone' },
//         { label: 'Alternate phone1:', value: 'alternate_phone1' },
//         { label: 'Alternate phone2:', value: 'alternate_phone2' },
//         { label: 'Email OtpOut:', value: 'email_opt_out' },
//         { label: 'EKYC Otp:', value: 'ekyc_otp' },
//         { label: 'Contact verified:', value: 'contact_verified' },
//         { label: 'Email verification status:', value: 'email_verification_status'},
//         { label: 'Other phone:', value: 'other_phone' }
//       ]
//     },
//     {
//       title: 'Personal Details',
//       id: 'Personal Details',
//       fields: [
//         { label: 'Suffix:', value: 'suffix' },
//         { label: 'Place of birth:', value: 'place_of_birth' },
//         { label: 'Country of birth:', value: 'country_of_birth' },
//         { label: 'Age:', value: 'age' },
//         { label: 'Father first name:', value: 'father_first_name' }, 
//         { label: 'Father Middle name:', value: 'father_middle_name' },
//         { label: 'Father last name:', value: 'father_last_name' },
 
//         { label: 'Mother first name:', value: 'mother_first_name' },
//         { label: 'Mother Middle name:', value: 'mother_middle_name' },
//         { label: 'Mother last name:', value: 'mother_last_name' },
//         { label: 'Marital status:', value: 'marital status'},
//         { label: 'Religion:', value: 'religion'},
//         { label: 'Spouse first name:', value: 'spouse_first_name' },
//         { label: 'Spouse Middle name:', value: 'spouse_middle_name' },
//         { label: 'Spouse last name:', value: 'spouse_last_name' },
//         { label: 'Minority community:', value: 'minority_community' },
//       ]
//     },
//     {
//       title: 'Industry Details',
//       id: 'Industry Details',
//       fields: [
//         { label: 'Industry classification:', value: 'industry_classification' },
//         { label: 'Industry sub classification:', value: 'industry_sub_classification' },
//         { label: 'Number of Employees:', value: 'no_of_employees' },
//         { label: 'SIC code:', value: 'sic_code' },
//         { label: 'SIC description:', value: 'sic_description' },
//         { label: 'Industry:', value: 'industry' },
//         { label: 'Annual revenue:', value: 'annual_revenue' },
//         { label: 'Department:', value: 'department' },
//       ]
//     },
 
//     {
//         title: 'Address Details',
//         id: 'addressDetails',
//         fields: [
//           { label: 'Shipping address:', value: 'shipping_address' },
//           { label: 'State code:', value: 'state_code' },
//           { label: 'Other address:', value: 'other_address' },
//           { label: 'Mailing address:', value: 'mailing_address' },
//           { label: 'Billing address:', value: 'billing_address' }
//         ]
//       },
     
//     {
//       title: 'Other Information',
//       id: 'other information',
//       fields: [
//         { label: 'BSR code:', value: 'bsr_code' },
//         { label: 'Stamp duty:', value: 'stamp_duty' },
//         { label: 'Foreign Tin:', value: 'foreign_tin' },
//         { label: 'Tin Issuing Country:', value: 'tin_issuing_country' },
//         { label: 'Country of incorporation:', value: 'country_incorporation' },
//         { label: 'Country of tax residence:', value: 'country_of_tax_residence' }
//       ]
//     },
//   ];
 
 
// const Info = () => {
//   const [leadData, setLeadData] = useState([]);
//   const [openSections, setOpenSections] = useState(['accountInfo']);
//   const[accountData, setAccountData]=useState([]);
 
//   const accNumber = useIdStore((state)=>state.account_number);
//   console.log("account number",accNumber);
 
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
 
//   const renderSectionContent = (sectionId, accountData, accNumber) => {
//     const accounts = accountData.find((lead) => lead.account_number === accNumber);
//     const section = sectionDetails.find((section) => section.id === sectionId);
//     console.log("this is accountsss", accounts)
 
//     if (!section || !accounts) return null;
//     return section.fields.map((row, index) => (
//       <DataRow key={index} label={row.label} detail={accounts[row.value]} />
//     ));
//   };
 
//   return (
//     <View style={styles.body}>
//       <View style={{ height: '26%' }}>
//         <AccountHeader/>
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

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import { FetchAccountDetails } from '../service/fetchAccountDetails';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
 
import DataRow from '../../customComponents/dataRow';
import AccountHeader from '../../customComponents/accountDetailHeader';
const sectionDetails = [
    {
      title: 'General Information',
      id: 'generalInformation',
      fields: [
        {label: 'Account Type:', value: 'account_type' },
        { label: 'Account name:', value: 'account_name' },
        { label: 'Title', value: 'title' },
        { label: 'Number:', value: 'number' },
        { label: 'Birth date:', value: 'birth_date' },
        { label: 'Website:', value: 'website' },
        { label: 'Description:', value: 'description' },
      ]
    },
    {
      title: 'Contact Details',
      id: 'contactDetails',
      fields: [
        // { label: 'Email:', value: 'email' },
        { label: 'Alternate Email 1:', value: 'alternate_email1' },
        { label: 'Alternate Email 2:', value: 'alternate_email2' },
        { label: 'Email verification status:', value: 'email_verification_status'},
        // { label: 'Phone:', value: 'phone' },
        // { label: 'Mobile:', value: 'mobile' },
        { label: 'Home phone:', value: 'home_phone' },
        { label: 'Business Phone:', value: 'business_phone' },
        { label: 'Alternate phone1:', value: 'alternate_phone1' },
        { label: 'Alternate phone2:', value: 'alternate_phone2' },
        // { label: 'Email OtpOut:', value: 'email_opt_out' },
        // { label: 'EKYC Otp:', value: 'ekyc_otp' },
        { label: 'Contact verified:', value: 'contact_verified' },
        { label: 'Other phone:', value: 'other_phone' },
        { label: 'Assistant:', value: 'assistant' },
        { label: 'Assistant phone:', value: 'assistant_phone' },
      ]
    },
    {
      title: 'Personal Details',
      id: 'Personal Details',
      fields: [
        // { label: 'Suffix:', value: 'suffix' },
        { label: 'Place of birth:', value: 'place_of_birth' },
        { label: 'Country of birth:', value: 'country_of_birth' },
        { label: 'Age:', value: 'age' },
        { label: 'Father first name:', value: 'father_first_name' },
        { label: 'Father Middle name:', value: 'father_middle_name' },
        { label: 'Father last name:', value: 'father_last_name' },
        { label: 'Mother first name:', value: 'mother_first_name' },
        { label: 'Mother Middle name:', value: 'mother_middle_name' },
        { label: 'Mother last name:', value: 'mother_last_name' },
        { label: 'Marital status:', value: 'marital status'},
        { label: 'Religion:', value: 'religion'},
        { label: 'Spouse first name:', value: 'spouse_first_name' },
        { label: 'Spouse Middle name:', value: 'spouse_middle_name' },
        { label: 'Spouse last name:', value: 'spouse_last_name' },
        { label: 'Minority community:', value: 'tfValue' },
      ]
    },
    {
      title: 'Industry Details',
      id: 'Industry Details',
      fields: [
        { label: 'Industry classification:', value: 'industry_classification' },
        { label: 'Industry sub classification:', value: 'industry_sub_classification' },
        { label: 'Number of Employees:', value: 'no_of_employees' },
        // { label: 'SIC code:', value: 'sic_code' },
        // { label: 'SIC description:', value: 'sic_description' },
        { label: 'Industry:', value: 'industry' },
        { label: 'Annual revenue:', value: 'annual_revenue' },
        { label: 'Department:', value: 'department' },
      ]
    },
 
    {
        title: 'Address Details',
        id: 'addressDetails',
        fields: [
          { label: 'Shipping address:', value: 'shipping_address' },
          { label: 'State:', value: 'state_code' },
          { label: 'City:', value: 'city' },
          { label: 'Other address:', value: 'other_address' },
          { label: 'Mailing address:', value: 'mailing_address' },
          { label: 'Billing address:', value: 'billing_address' }
        ]
      },
 
      {
        title: 'System Information',
        id: 'systemDetails',
        fields: [
          { label: 'Created by:', value: 'sys_created_by' },
          { label: 'Created On:', value: 'sys_created_on' },
          { label: 'Updated By:', value: 'sys_updated_by' },
          { label: 'Last Updated On:', value: 'sys_updated_on' }
        ]
      },
     
    // {
    //   title: 'Other Information',
    //   id: 'other information',
    //   fields: [
    //     { label: 'BSR code:', value: 'bsr_code' },
    //     { label: 'Stamp duty:', value: 'stamp_duty' },
    //     { label: 'Foreign Tin:', value: 'foreign_tin' },
    //     { label: 'Tin Issuing Country:', value: 'tin_issuing_country' },
    //     { label: 'Country of incorporation:', value: 'country_incorporation' },
    //     { label: 'Country of tax residence:', value: 'country_of_tax_residence' }
    //   ]
    // },
  ];
  const Info = () => {
    const [leadData, setLeadData] = useState([]);
    const [openSections, setOpenSections] = useState(['generalInformation']);
    const [accountData, setAccountData] = useState([]);
    const [tfValue, setTfValue] = useState('');
 
    const accNumber = useIdStore((state) => state.account_number);
    const sys_id = useIdStore((state=>state.sys_id))
    console.log("account number", accNumber);
 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const ldata = await FetchAccountDetails();
          setAccountData(ldata.result);
          console.log(accountData);
        } catch (error) {
          console.error('Error in fetching leads:', error);
        }
      };
      fetchData();
    }, []);
 
    const ConvertToTF = (value) => {
      return value ? 'Yes' : 'No';
    };
 
    const toggleSection = (sectionId) => {
      const isOpen = openSections.includes(sectionId);
      if (isOpen) {
        setOpenSections(openSections.filter((item) => item !== sectionId));
      } else {
        setOpenSections([...openSections, sectionId]);
      }
    };
 
    const renderSectionContent = (sectionId, accountData, accNumber) => {
      const accounts = accountData.find((lead) => lead.sys_id === sys_id);
      const section = sectionDetails.find((section) => section.id === sectionId);
      console.log("this is accountsss", accounts);
 
      if (!section || !accounts || !accounts.contact_verified) return null;
 
      return section.fields.map((row, index) => {
        if (row.value === 'contact_verified') {
          return <DataRow key={index} label={row.label} detail={ConvertToTF(accounts[row.value])} />;
        } else {
          return <DataRow key={index} label={row.label} detail={accounts[row.value]} />;
        }
      });
    };
 
    return (
      <View style={styles.body}>
        <View style={{ height: '26%' }}>
          <AccountHeader />
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.container}>
            {sectionDetails.map((section) => (
              <Section
                key={section.id}
                title={section.title}
                isOpen={openSections.includes(section.id)}
                onPress={() => toggleSection(section.id)}>
                {renderSectionContent(section.id, accountData, useIdStore((state) => state.account_number))}
              </Section>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };
 
 
// const Info = () => {
//   const [leadData, setLeadData] = useState([]);
//   const [openSections, setOpenSections] = useState(['generalInformation']);
//   const[accountData, setAccountData]=useState([]);
//   const[tfValue, setTfvalue]=useState('');
 
//   const accNumber = useIdStore((state)=>state.account_number);
//   console.log("account number",accNumber);
 
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
//   const renderSectionContent = (sectionId, accountData, accNumber) => {
//     const accounts = accountData.find((lead) => lead.account_number === accNumber);
//     const section = sectionDetails.find((section) => section.id === sectionId);
 
//     if (!section || !accounts || !accounts.contact_verified) return null;
 
//     const contactVerifiedValue = ConvertToTF(accounts.contact_verified);
 
//     const ConvertToTF = (value) => {
//       return value === 'false' ? 'No' : 'Yes';
//     };
 
//     return section.fields.map((row, index) => (
//       <DataRow key={index} label={row.label} detail={accounts[row.value]} />
//     ));
//   };
 
// //   const renderSectionContent = (sectionId, accountData, accNumber) => {
// //     const accounts = accountData.find((lead) => lead.account_number === accNumber);
// //     const section = sectionDetails.find((section) => section.id === sectionId);
// //     console.log("this is accountsss", accounts)
// //   if(accounts.contact_verified){
// //     let mincom = ConvertToTF(accounts.contact_verified);
// //     setTfvalue(mincom)
// //   }
// //     const ConvertToTF=(value)=>{
// //         if(value=='false'){
// //             return 'No';
// //         }
// //         else{
// //             return 'Yes';
// //         }
 
// //     }
 
// //     if (!section || !accounts) return null;
// //     return section.fields.map((row, index) => (
// //       <DataRow key={index} label={row.label} detail={accounts[row.value]} />
// //     ));
// //   };
 
//   return (
//     <View style={styles.body}>
//       <View style={{ height: '26%' }}>
//         <AccountHeader/>
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
 
const Section = ({ title, isOpen, onPress, children }) => {
  return (
    <View style={styles.sectionContainer}>
      {/* <TouchableOpacity onPress={onPress}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{title}</Text>
          <Text>{isOpen ? '-' : '+'}</Text>
        </View>
      </TouchableOpacity> */}
       <TouchableOpacity onPress={onPress}>
        <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
          <Ionicons name={isOpen ? 'caret-up' : 'caret-down'} size={18} color="black" style={{ marginLeft: 5, marginTop: 10 }} />
        </View>
      </TouchableOpacity>
      {isOpen && <View>{children}</View>}
    </View>
  );
};
 
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 30,
    backgroundColor: 'white',
    flex: 1,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
 
export default Info;