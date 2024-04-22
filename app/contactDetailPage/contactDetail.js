import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import { useContactStore } from '../leadStore';
//import { leadData } from '../../customComponents/formData';
import { FetchContactDetail } from '../service/fetchContactDetail';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ContactHeader from '../../customComponents/contactDetailHeader';

 
import DataRow from '../../customComponents/dataRow';
import { router } from 'expo-router';
const sectionDetails = [
    {
      title: 'General Information',
      id: 'leadInfo',
      fields: [
        {label: 'Title', value: 'title' },
        { label: 'Account Name:', value: 'account_name.display_value' },
        { label: 'Description:', value: 'description' },
        // { label: 'Account:', value: 'account' },
        { label: 'Birthdate:', value: 'birthdate' },
        { label: 'Category:', value: 'category' },
        // { label: 'CKYC Number:', value: 'ckyc_number' },
        { label: 'Department:', value: 'department' },
        // { label: 'EBC Eligibility Date:', value: 'ebc_eligibility_date' },
        // { label: 'First Name:', value: 'first_name' },
        // { label: 'Last Name:', value: 'last_name' },
        // { label: 'Middle Name:', value: 'middle_name' },
        // { label: 'Funding Value Base Loan:', value: 'funding_value_base_loan' },
        { label: 'Gender:', value: 'gender' },
        { label: 'Name:', value: 'name' },
        { label: 'Owner:', value: 'owner' },
        { label: 'Marital Status:', value: 'marital_status' },
        
      ]
    },
    {
      title: 'Contact',
      id: 'companyDetails',
      fields: [
        // {label: 'Alternate Email 1:', value: 'alternate_email1' },
        {label: 'Alternate Email 1:', value: 'alternate_email1' },
        { label: 'Alternate Email 2:', value: 'alternate_email2' },
        { label: 'Alternate Phone 1:', value: 'alternate_phone1' },
        { label: 'Alternate Phone 2:', value: 'alternate_phone2' },
        { label: 'Assistant Phone:', value: 'assistant_phone' },
      ]
    },

    {
        title: 'Address',
        id: 'address',
        fields: [
          {label: 'Mailing Address:', value: 'mailing_address' },
          { label: 'Other Address:', value: 'other_address' },
        ]
      },
    {
        title: 'Personal',
        id: 'personal',
        fields: [
          {label: 'Assistant:', value: 'assistant' },
          { label: 'Father First Name:', value: 'father_first_name' },
          { label: 'Father Last Name:', value: 'father_last_name' },
          { label: 'Father Middle Name:', value: 'father_mddle_name' },
    
 { label: 'Mother First Name:', value: 'mother_first_name' },
          { label: 'Mother Last Name:', value: 'mother_last_name' },
          { label: 'Mother Middle Name:', value: 'mother_mddle_name' },
          { label: 'Religion:', value: 'religion' },
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
  ];
 
 
const Info = () => {
  const [contactData, setContactData] = useState([]);
  const [openSections, setOpenSections] = useState(['leadInfo']);
  const{sys_iid, setSysId}=useIdStore();
  const sys_id = useIdStore((state=>state.sys_id))

  const extractSysId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const odata = await FetchContactDetail();
        setContactData(odata.result);
        console.log("contact data",contactData);
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

  const goToEditDetails=()=>{
    router.navigate('formComponents/editContact');
  }
 
  const renderSectionContent = (sectionId, contactData, contactId) => {
    const contacts = contactData.find((contact) => contact.sys_id === sys_id);
    const section = sectionDetails.find((section) => section.id === sectionId);
    console.log("contacts", contacts)
 
    if (!section || !contacts) return null;
 
    return section.fields.map((row, index) => {
      if (row.value === 'account_name.display_value') {
        // return <DataRow key={index} label={row.label} detail={contacts.account_name.display_value} />;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              const sysId = extractSysId(contacts.account_name.link);
              setSysId(sysId);
             
              console.log("sys_id",contacts.account_name.link);
              
              router.navigate('/formComponents/accountDetailPage');
       
            }}>
            <DataRow color={'blue'} label={row.label} detail={contacts.account_name.display_value} />
          </TouchableOpacity>
        
        // <DataRow label={row.label} detail={contacts.account_name.display_value} />
    
        );
      }
      else {
        return <DataRow key={index} label={row.label} detail={contacts[row.value]} />;
      }
    });
  };
 
  return (
    <View style={styles.body}>
      <View style={{ height: '26%' }}>
       <ContactHeader/>
       <View onPress={goToEditDetails}>
        <Text onPress={goToEditDetails}>edit details</Text>
      </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {sectionDetails.map((section) => (
            <Section
              key={section.id}
              title={section.title}
              isOpen={openSections.includes(section.id)}
              onPress={() => toggleSection(section.id)}>
              {renderSectionContent(section.id, contactData, useContactStore((state) => state.number))}
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