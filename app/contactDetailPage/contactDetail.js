import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import { useContactStore } from '../leadStore';
//import { leadData } from '../../customComponents/formData';
import { FetchContacts } from '../service/fetchContacts';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
 
import DataRow from '../../customComponents/dataRow';
const sectionDetails = [
    {
      title: 'General Information',
      id: 'leadInfo',
      fields: [
        {label: 'Title', value: 'title' },
        { label: 'Description:', value: 'description' },
        { label: 'Account:', value: 'account' },
        { label: 'Birthdate:', value: 'birthdate' },
        { label: 'Category:', value: 'category' },
        { label: 'CKYC Number:', value: 'ckyc_number' },
        { label: 'Department:', value: 'mobile' },
        { label: 'EBC Eligibility Date:', value: 'ebc_eligibility_date' },
        { label: 'First Name:', value: 'mobile' },
        { label: 'Funding Value Base Loan:', value: 'mobile' },
        { label: 'Gender:', value: 'mobile' },
        { label: 'Last Name:', value: 'mobile' },
        { label: 'Middle Name:', value: 'mobi' },
        { label: 'Name:', value: 'name' },
        { label: 'Owner:', value: 'owner' },
      ]
    },
    {
      title: 'Contact',
      id: 'companyDetails',
      fields: [
        {label: 'Alternate Email 1:', value: 'title' },
        { label: 'Alternate Email 2:', value: 'description' },
        { label: 'Alternate Phone 1:', value: 'description' },
        { label: 'Alternate Phone 2:', value: 'mobile' },
        { label: 'Assistant Phone:', value: 'mobile' },
        // { label: 'Category:', value: 'mobile' },
        // { label: 'CKYC Number:', value: 'mobile' },
        // { label: 'Department:', value: 'mobile' },
        // { label: 'EBC Eligibility Date:', value: 'mobile' },
        // { label: 'First Name:', value: 'mobile' },
        // { label: 'Funding Value Base Loan:', value: 'mobile' },
        // { label: 'Gender:', value: 'mobile' },
        // { label: 'Last Name:', value: 'mobile' },
        // { label: 'Middle Name:', value: 'mobile' },
        // { label: 'Name:', value: 'mobile' },
        // { label: 'Owner:', value: 'mobile' },
      ]
    },

    {
        title: 'Address',
        id: 'address',
        fields: [
          {label: 'Mailing Address:', value: 'title' },
          { label: 'Other Address:', value: 'title' },
          // { label: 'Category:', value: 'mobile' },
          // { label: 'CKYC Number:', value: 'mobile' },
          // { label: 'Department:', value: 'mobile' },
          // { label: 'EBC Eligibility Date:', value: 'mobile' },
          // { label: 'First Name:', value: 'mobile' },
          // { label: 'Funding Value Base Loan:', value: 'mobile' },
          // { label: 'Gender:', value: 'mobile' },
          // { label: 'Last Name:', value: 'mobile' },
          // { label: 'Middle Name:', value: 'mobile' },
          // { label: 'Name:', value: 'mobile' },
          // { label: 'Owner:', value: 'mobile' },
        ]
      },
    {
        title: 'Personal',
        id: 'personal',
        fields: [
          {label: 'Assistant:', value: 'title' },
          { label: 'Father First Name:', value: 'title' },
          { label: 'Father Last Name:', value: 'title' },
          { label: 'Father Middle Name:', value: 'title' },
          { label: 'Marital Status:', value: 'title' },
          // { label: 'Category:', value: 'mobile' },
          // { label: 'CKYC Number:', value: 'mobile' },
          // { label: 'Department:', value: 'mobile' },
          // { label: 'EBC Eligibility Date:', value: 'mobile' },
          // { label: 'First Name:', value: 'mobile' },
          // { label: 'Funding Value Base Loan:', value: 'mobile' },
          // { label: 'Gender:', value: 'mobile' },
          // { label: 'Last Name:', value: 'mobile' },
          // { label: 'Middle Name:', value: 'mobile' },
          // { label: 'Name:', value: 'mobile' },
          // { label: 'Owner:', value: 'mobile' },
        ]
      },
  ];
 
 
const Info = () => {
  const [contactData, setContactData] = useState([]);
  const [openSections, setOpenSections] = useState(['leadInfo']);
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const odata = await FetchContacts();
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
 
  const renderSectionContent = (sectionId, contactData, contactId) => {
    const lead = contactData.find((contact) => contact.number === contactId);
    const section = sectionDetails.find((section) => section.id === sectionId);
 
    if (!section || !lead) return null;
 
    return section.fields.map((row, index) => (
      <DataRow key={index} label={row.label} detail={lead[row.value]} />
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