import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, LogBox } from "react-native";
import ArrowBack from "../../customComponents/arrowBack";
import RadioButton from "../../customComponents/customRadio";
import useIdStore from "../leadStore";
import StatusForm from "../formComponents/statusForm";
import LeadDet from "../../leadComponents/leadDetHeader";
import { FetchLeads } from "../service/fetchLeads";
 
const ChangeStatus = () => {
  const status = useIdStore((state) => state.status);
  const leadId = useIdStore((state) => state.leadId);
  const taskId = useIdStore((state)=>  state.activity_number);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [leadData, setLeadData] = useState([]);
  const sys_id = useIdStore((state) => state.sys_id);
  LogBox.ignoreAllLogs();
  const[formValues, setFormValues]=useState([]);
 
 
  console.reportErrorsAsExceptions = false;
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
    console.log(selectedStatus)
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      ['lead_status']: selectedStatus
    }));
 
    console.log(formValues);
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ height: '30%' }}>
          <LeadDet/>
        </View>
      </View>
 
    
      <View style={styles.radioButtonContainer}>
        <Text style={styles.statusText}>{lead_status}</Text>
        <RadioButton
          title="Select Status"
          labelStyle={styles.radioButtonLabel} 
          data={{
            elements: [
              {
                type: 'RadioButton',
                rdata: generateOptions(status).options
              }
            ]
          }}
          selected={selectedStatus}
          onSelect={handleStatusChange}
        />
      </View>
      {selectedStatus && <StatusForm selectedStatus={selectedStatus.value} />}
    </View>
  );
};
 
const generateOptions = (status) => {
  switch (status) {
    case "new":
      return {
        options: [
           
          { label: 'Qualified', value: 'qualified' },
          { label: 'Contacted', value: 'contacted' },
          { label: 'Closed-not converted', value: 'closed_not_converted' },
         
        ]
      };
    case "qualified":
      return {
        options: [
          { label: 'Closed-not converted', value: 'closed_not_converted' },
          { label: 'Converted', value: 'converted' },
        ]
      };
    case "contacted":
      return {
        options: [
          { label: 'Qualified', value: 'qualified' },
        ]
      };
    case "Closed-not converted":
      return {
        options: [
          { label: 'Closed-not converted', value: 'closed_not_converted' },
          { label: 'Converted', value: 'converted' },
        ]
      };
    case "Converted":
      return {
        options:[
          { label: 'Converted', value: 'converted' },
          { label: 'Closed-not converted', value: 'closed_not_converted' },
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
    marginTop:10,
  },
  statusText: {
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

// import { View, Text } from 'react-native'
// import React from 'react'

// export default function reassignLead() {
//   return (
//     <View>
//       <Text>reassignLead</Text>
//     </View>
//   )
// }

