import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ArrowBack from "../../customComponents/arrowBack";
import DetailCard from "../../customComponents/detailCard";
import { leadData } from "../../customComponents/formData";
import SwitchSelector from 'react-native-switch-selector';
import { router } from 'expo-router';
import useIdStore from "../leadStore";
import StatusForm from '../formComponents/statusForm';
import LeadDet from "../../leadComponents/leadDetHeader";
 
 
const ChangeStatus = () => {
  


  
  useEffect(() => {
   
  
      const fetchData = async () => {
          try {
              const ldata = await FetchLeads(); // Call FetchLeads and wait for the result
              setLeadData(ldata.result); // Set the state with the fetched data
              console.log("this is the lead data",ldata.result);
              setLeadData(ldata.result);
              console.log(leadData) // Log the fetched data
          } catch (error) {
              // Handle errors if any
              console.error('Error in fetching leads:', error);
          }
      };
  
      fetchData(); // Call the fetchData function defined above
  }, []); // Empty dependency array means it will run only once on mount

  const [selectedStatus, setSelectedStatus] = useState(null);
  const[leadData,setLeadData]=useState([])
  const leadId = useIdStore((state) => state.number);
  const lead = leadData.find((lead) => lead.number === leadId);
  const { first_name, last_name, email, qualification, status, number, gender} = lead || {};
  

  // const statuss = Status;
 
  const filteredLead = {
    LeadType: lead_type,
    Name: `${lead.first_name} ${lead.last_name}`,  
    Gender: gender,
    Email: email,
    Phone:home_phone,
    Status: status,
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const ldata = await FetchLeads(); // Call FetchLeads and wait for the result
        setLeadData(ldata.result); // Set the state with the fetched data
        console.log("this is the lead data", ldata); // Log the fetched data
      } catch (error) {
        // Handle errors if any
        console.error('Error in fetching leads:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  
 
  const handleStatusChange = (value) => {
    setSelectedStatus(value);
  };
 
  const goBackToLeadCard = () => (
    router.navigate('/DrawerScreens/leadList')
  );
 
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <View style={{ height: '30%' }}>
                <LeadDet firstName={first_name} lastName={last_name} email={email} qualification={qualification}/>
            </View>
            </View>
      <SwitchSelector
        options={generateOptions(status).options}
        initial={0}
        onPress={handleStatusChange}
        selectedColor="white"
        buttonColor="#023B5E"
      />
      {selectedStatus && <StatusForm selectedStatus={selectedStatus} />}
      <TouchableOpacity style={styles.backButton} onPress={goBackToLeadCard}>
        <ArrowBack />
      </TouchableOpacity>
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
    case "closed-not-converted":
      return {
        options: [
          { label: 'Closed-not converted', value: 'Closed-not converted'},
        ]
      };
    // case "Converted":
    //   return {
    //     options:[
    //       { label: 'Converted', value: 'Converted' },
    //     ]
    //   };
    default:
      return [];
  }
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F6FF",
    paddingTop: 30,
    alignItems: "center",
    width: "100%", // Set the width to 100%
  },
  box: {
   
    backgroundColor: "#023B5E",
    paddingBottom:2,
    width: "100%",
    marginBottom:20,
  },
  backButton: {
    alignSelf: "flex-end",
  },
});
 
export default ChangeStatus;