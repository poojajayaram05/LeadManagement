import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ArrowBack from "../../customComponents/arrowBack";
import DetailCard from "../../customComponents/detailCard";
import { leadData } from "../../customComponents/formData";
import SwitchSelector from 'react-native-switch-selector';
import { router} from 'expo-router';
import useIdStore from "../leadStore";
import StatusForm from "../DrawerScreens/statusForm";
 
const ChangeStatus = () => {
  // const lead = leadData[0]; // Selecting the first lead from the leadData array
  const leadId = useIdStore((state) => state.leadId);
  const [selectedStatus, setSelectedStatus] = useState(null);
  // const status = "New Lead";
  const lead = leadData.find((lead) => lead.Id === leadId);
  const { FirstName, LastName, Phone, Email, Status, Label, Id, Gender, LeadType} = lead || {};
  const status = Status;
  
 
 
  const hi=  [
    { label: 'Qualified', value: 'Qualified' },
    { label: 'Contacted', value: 'Contacted' },
  ]
 
  // Function to create a new object with only the required fields
  const filteredLead = {
    LeadType: LeadType,
    Name: `${lead.FirstName} ${lead.LastName}`,
    Gender: Gender,
    Email: Email,
    Phone:Phone,
    // BusinessPhone: lead.BusinessPhone,
    Status: Status,
    // AnnualRevenue: lead.AnnualRevenue,
  };

  const handleStatusChange = (value) => {
    setSelectedStatus(value);
  };

  const goBackToLeadCard=() => (
       router.navigate('/DrawerScreens/leadList')
  )
 
  return (
   
      <View style={styles.container}>
        <View><DetailCard obj={filteredLead} title="Lead Details" Status={status}/></View>
       
        {/* <View style={styles.switchContainer}> */}
     
        {/* </View> */}
        
        <SwitchSelector
        options={generateOptions(status).options}
        initial={0}
        onPress={handleStatusChange} // Update selectedStatus on press
        selectedColor="white" // Change selected color
        buttonColor="#023B5E"
      /> 
      {/* Render the form component if a status is selected */}
      {selectedStatus && <StatusForm selectedStatus={selectedStatus} />}
        <TouchableOpacity style={styles.backButton} onPress={goBackToLeadCard}>
          <ArrowBack />
        </TouchableOpacity>
      </View>
 
  );
};
 
const generateOptions = (status) => {
  switch (status) {
    case "New Lead":
      return {
        options: [
          { label: 'Qualified', value: 'Qualified' },
          { label: 'Contacted', value: 'Contacted' },
        ]
      };
    case "Qualified":
      return {
        options: [
          { label: 'Closed-not converted', value: 'Closed-not converted' },
          { label: 'Converted', value: 'Converted' },
        ]
      };
    case "Contacted":
      return {
        options: [
          { label: 'Qualified', value: 'Qualified' },
        ]
      };
    case "Closed-not converted":
      return {
        options: [
          { label: 'Closed-not converted', value: 'Closed-not converted'},
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
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#F2F6FF",
    paddingTop: 30,
    alignItems: "center",
  },
  switchContainer: {
    marginTop: 20,
  },
  backButton: {
    alignSelf: "flex-end",
  },
});
 
export default ChangeStatus;