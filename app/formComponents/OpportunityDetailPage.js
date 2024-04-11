import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import { useOpportunityStore } from '../leadStore';
//import { leadData } from '../../customComponents/formData';
import { FetchOpportunities } from '../service/fetchOpportunities';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
 
import DataRow from '../../customComponents/dataRow';
const sectionDetails = [
    {
      title: 'General Details',
      id: 'leadInfo',
      fields: [
        {label: 'Opportunity name:', value: 'opportunity_name' },
        // { label: 'Account Name:', value: 'account' },
        // { label: 'Primary Contact:', value: 'contact' },
        { label: 'Owner:', value: 'owner' },
       
 
      ]
    },
    {
      title: 'Forecast Details',
      id: 'companyDetails',
      fields: [
        { label: 'Probability of winning:', value: 'probability_of_winning' },
        { label: 'Forecast Close Date:', value: 'forecast_close_date' },
        { label: 'Opportunity Value:', value: 'opportunity_value' },
        // { label: 'Company:', value: 'company' },
      ]
    },
  ];
 
 
const Info = () => {
  const [opportunityData, setOpportunityData] = useState([]);
  const [openSections, setOpenSections] = useState(['leadInfo']);
 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const odata = await FetchOpportunities();
        setOpportunityData(odata.result);
        console.log("oppp data",opportunityData);
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
 
  const renderSectionContent = (sectionId, opportunityData, opportunityId) => {
    const lead = opportunityData.find((opportunity) => opportunity.number === opportunityId);
    const section = sectionDetails.find((section) => section.id === sectionId);
 
    if (!section || !lead) return null;
 
    return section.fields.map((row, index) => (
      <DataRow key={index} label={row.label} detail={lead[row.value]} />
    ));
  };
 
  return (
    <View style={styles.body}>
      <View style={{ height: '26%' }}>
        {/* <LeadDet /> */}
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          {sectionDetails.map((section) => (
            <Section
              key={section.id}
              title={section.title}
              isOpen={openSections.includes(section.id)}
              onPress={() => toggleSection(section.id)}>
              {renderSectionContent(section.id, opportunityData, useOpportunityStore((state) => state.number))}
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