 
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
// import { FetchContacts } from '../service/fetchAccountDetails';
import { useEffect } from 'react';
import { FetchContacts } from '../service/fetchContacts';

import DataRow from '../../customComponents/dataRow'; 
const sectionDetails = [
    {
      title: 'General Information',
      id: 'generalInformation',
      fields: [
        {label: 'Number:', value: 'number' },
        { label: 'Name:', value: 'name' },
        { label: 'Title', value: 'title' },
        { label: 'Account name:', value: 'account_name' },
        { label: 'Description:', value: 'description' },
        { label: 'Owner:', value: 'owner' },
        { label: 'Last stay in touch request date:', value: 'last_stay_in_touch_request_date' },
        { label: 'Description:', value: 'department' },
        { label: 'Funding value base load application id:', value: 'funding_value_base_load_application_id' },
        { label: 'category:', value: 'category' },
        { label: 'CKYC Number:', value: 'ckyc_number' },
        { label: 'Minority community:', value: 'minority_community' },
        { label: 'Last stay in touch stay date:', value: 'last_stay_in_touch_stay_date' },
      ]
    },
    {
      title: 'Contact Details',
      id: 'contactDetails',
      fields: [
        { label: 'Email:', value: 'email' },
        { label: 'Alternate Email 1:', value: 'alternate_email1' },
        { label: 'Alternate Email 2:', value: 'alternate_email2' },
        { label: 'Email opt out:', value: 'email_opt_out' },
        { label: 'Assistant:', value: 'assistant' },
        { label: 'Assistant phone:', value: 'assistant_phone' },
        { label: 'Fax:', value: 'fax' },
        { label: 'Fax opt out:', value: 'fax_opt_out' },
        { label: 'EBC eligibility date:', value: 'ebc_eligibility_date' },
        { label: 'Mobile:', value: 'mobile'},
        { label: 'Phone:', value: 'phone' },
        { label: 'Mobile:', value: 'mobile'},
        { label: 'Home phone:', value: 'home_phone'},
        { label: 'Business phone:', value: 'business_phone'},
        { label: 'Other phone:', value: 'other_phone' },
        { label: 'Alternate phone1:', value: 'alternate_phone1' },
        { label: 'Alternate phone2:', value: 'alternate_phone2' },
        { label: 'Donot call:', value: 'donot_call' },
        { label: 'Contact verified:', value: 'contact_verified' },
      ]
    },
    {
      title: 'Personal Details',
      id: 'Personal Details',
      fields: [
        { label: 'First name:', value: 'first_name' },
        { label: 'Middle name:', value: 'middle_name' },
        { label: 'last name:', value: 'last_name' },
        { label: 'Salutation:', value: 'salutation' },
        { label: 'Gender:', value: 'gender' },
        { label: 'Marital status:', value: 'marital status'},
        { label: 'Birth date:', value: 'birth_date'},
        { label: 'Religion:', value: 'religion'},
        { label: 'Father first name:', value: 'father_first_name' },
        { label: 'Father Middle name:', value: 'father_middle_name' },
        { label: 'Father last name:', value: 'father_last_name' },

        { label: 'Mother first name:', value: 'mother_first_name' },
        { label: 'Mother Middle name:', value: 'mother_middle_name' },
        { label: 'Mother last name:', value: 'mother_last_name' },
        { label: 'Religion:', value: 'religion'},
        { label: 'Spouse first name:', value: 'spouse_first_name' },
        { label: 'Spouse Middle name:', value: 'spouse_middle_name' },
        { label: 'Spouse last name:', value: 'spouse_last_name' },
      ]
    },
    {
        title: 'Address Details',
        id: 'addressDetails',
        fields: [
            { label: 'Mailing address:', value: 'mailing_address' },
          { label: 'Other address:', value: 'other_address' },
          
        ]
      },
  ];
 
 
const Info = () => {
  const [leadData, setLeadData] = useState([]);
  const [openSections, setOpenSections] = useState([]);
  const[accountData, setAccountData]=useState([]);

  const accNumber = useIdStore((state)=>state.account_number);
  console.log("account number",accNumber);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const conData = await FetchContacts();
        setAccountData(conData.result);
        console.log("-------------------------------------",conData.result);
      } catch (error) {
        console.error('Error in fetching leads:', error);
      }
    };
    fetchData();
  }, []);
 
  const toggleSection = (sectionId) => {
    const isOpen = openSections.includes(sectionId);
    if (isOpen) {
      setOpenSections(openSections.filter((item) => item !== sectionId));
    } else {
      setOpenSections([...openSections, sectionId]);
    }
  };
 
  const renderSectionContent = (sectionId, accountData, accNumber) => {
    const accounts = accountData.find((lead) => lead.account_number === accNumber);
    const section = sectionDetails.find((section) => section.id === sectionId);
    console.log("this is accountsss", accounts)
 
    if (!section || !accounts) return null;
    return section.fields.map((row, index) => (
      <DataRow key={index} label={row.label} detail={accounts[row.value]} />
    ));
  };
 
  return (
    <View style={styles.body}>
      <View style={{ height: '26%' }}>
        <LeadDet />
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
 
const Section = ({ title, isOpen, onPress, children }) => {
  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>{title}</Text>
          <Text>{isOpen ? '-' : '+'}</Text>
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