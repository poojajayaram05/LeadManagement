 
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
//import { leadData } from '../../customComponents/formData';
import { FetchLeadDetails } from '../service/fetchLeadDetails';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import DataRow from '../../customComponents/dataRow'; 
import { Button } from 'react-native-web';
import { router } from 'expo-router';
const sectionDetails = [
    {
      title: 'General Information',
      id: 'leadInfo',
      fields: [
        {label: 'Lead Type:', value: 'lead_type' },
        // {label:'Gender', value:'gender'},
        { label: 'Title:', value: 'title' },
        { label: 'Description:', value: 'description' },
        { label: 'Number:', value: 'number' },
        { label: 'Gender:', value: 'gender' },
        { label: 'Email:', value: 'email' },
        { label: 'Lead Source:', value: 'lead_source' },
   
      ]
    },
    {
      title: 'Company Details',
      id: 'companyDetails',
      fields: [
        { label: 'Company:', value: 'company' },
        // { label: 'Company:', value: 'company' },
        { label: 'No Of Employees:', value: 'no_of_employees' },
        { label: 'Annual Revenue:', value: 'annual_revenue' },
        { label: 'Job Title:', value: 'job_title' },
        { label: 'Company DUNS Number:', value: 'company_duns_number' },
        { label: 'Industry:', value: 'industry' }
      ]
    },
    {
      title: 'Contact Details',
      id: 'contactDetails',
      fields: [
        { label: 'Alternate Email 1:', value: 'alternate_email1' },
        { label: 'Alternate Email 2:', value: 'alternate_email2' },
        { label: 'Email OtpOut:', value: 'email_opt_out' },
        { label: 'Business Phone:', value: 'business_phone' },
        { label: 'Mobile Phone:', value: 'mobile_phone' },
        { label: 'Home Phone:', value: 'home_phone' }
      ]
    },
    {
        title: 'Address Details',
        id: 'addressDetails',
        fields: [
          { label: 'Street:', value: 'street' },
          { label: 'City:', value: 'city' },
          { label: 'State:', value: 'state_province' },
          { label: 'Zip:', value: 'zip_postalcode' },
          { label: 'Country:', value: 'country' }
        ]
      },
      {
        title: 'Contact Methods',
        id: 'contactMethods',
        fields: [
          { label: 'Preferred Method To Contact:', value: 'preffered_method' },
          { label: 'Whatsapp:', value: 'whatsapp' },
          { label: 'Email:', value: 'u_email' },
          { label: 'Phone:', value: 'phone' }
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
  const [leadData, setLeadData] = useState([]);
  const [openSections, setOpenSections] = useState(['leadInfo']);

  const goToEdit=()=>{
    router.navigate('/formComponents/editLead')
  }
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ldata = await FetchLeadDetails();
        setLeadData(ldata.result);
        console.log(leadData);
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
 
  const renderSectionContent = (sectionId, leadData, leadId) => {
    const lead = leadData.find((lead) => lead.number === leadId);
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
              {renderSectionContent(section.id, leadData, useIdStore((state) => state.number))}
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