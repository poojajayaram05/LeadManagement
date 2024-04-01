import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
//import { formData } from "../jsonData";
// import ArrowBack from "../customComponents/arrowBack";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

export const accountData = {
    accounts: [
      {
        id: "1",
        accountName: "Markus",
        accountOwner: "John Doe",
        accountType: "Prospect",
        industry: "Technology",
        region: "North America",
        annualRevenue: "$1,000,000",
        website: "www.clientabc.com",
        phone: "+1 (123) 456-7890",
        // address: {
        //   street: "123 Main Street",
        //   city: "Anytown",
        //   state: "California",
        //   postalCode: "12345",
        //   country: "USA"
        // },
      },
      {
        id: "2",
        accountName: "Client XYZ",
        accountOwner: "Jane Smith",
        accountType: "Customer",
        industry: "Finance",
        region: "Europe",
        annualRevenue: "$5,000,000",
        website: "www.clientxyz.com",
        phone: "+44 1234 567890",
        tasks: [
          // Add tasks related to this account if needed
        ]
      },
      // Add other accounts with their details if needed
    ]
  };
  
 
  function TaskDetailsPage() {
    const task = accountData.accounts[0]; // Change 'elements' to 'accounts'
   
    const handleSubmit = () => {
      Alert.alert("Task Completed");
    };
   
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.detailBox}>
            <View style={styles.heading}>
              <Text style={styles.taskName}>{task.accountName}</Text>
            </View>
            <DetailView label="Owner Name" value={task.accountOwner} />
            <DetailView label="accountType" value={task.accountType} />
            {/* <DetailView label="Owner Name" value={task.accountOwner} /> */}
            <DetailView label="region" value={task.region} />
            <DetailView label="annualRevenue" value={task.annualRevenue} />
            <DetailView label="website" value={task.website} />
            <DetailView label="phone" value={task.phone} />
          </View>
        </View>
      </View>
    );
  };
  
 
const DetailView = ({ label, value }) => {
  return (
    <View style={styles.detailItem}>
      <View style={styles.labelBox}>
        <Text style={styles.key}>{label}:</Text>
      </View>
      <View style={styles.valueBox}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 20,
    width:'100%',
  },
  section: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "red",
    padding:20,
    backgroundColor:'#F6FBF8',
    // borderColor:'red',
    // borderWidth:1,
    padding:10
   
  },
  detailBox: {
    marginBottom: 10,
    // borderColor:'blue',
    // borderWidth:1,
    padding:10
  },
  taskName: {
    fontSize: 24,
    fontWeight: "bold",
    color:'white'
  },
  heading: {
    marginBottom: 15,
    backgroundColor: "#023B5E",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    width:'80%',
   
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    // borderColor:'orange',
    // borderWidth:1,
    // boxShadow:1
  },
  labelBox: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "#F6FBF8",
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
    fontSize:18,

  },
  valueBox: {
    flex: 1,

    padding: 5,
    borderRadius: 5,
   
  },
  key: {
    fontWeight: "bold",
    textAlign: "left",
    color: "#023B5E",
  },
  value: {
    color: "#023B5E",
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row', // Align items horizontally
    alignItems: 'flex-end', // Align items to the start (left)
    justifyContent: 'flex-end', // Align items to the start (left)
    padding: 10,
    },
});
 
export default TaskDetailsPage;