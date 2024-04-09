import React, { useState,useEffect } from "react";
//import { leadData } from './leadData';
import { useCallback } from "react";
import LeadItem from "../../leadComponents/leadCard";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { FetchAccounts } from "../service/fetchAccounts";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";



// export const listOfAccounts = [
//   {
//     firstName: "Smith",
//     lastName: "Industries",
//     email: "info@smithindustries.com",
//     phone: "8884763231",
//     status: "open",
//     temperature: "hot",
//     id: "1",
//   },
//   {
//     firstName: "Johnson",
//     lastName: "Designs",
//     email: "contact@johnsondesigns.com",
//     phone: "8891234567",
//     status: "contacted",
//     temperature: "cold",
//     id: "2",
//   },
//   {
//     firstName: "Brown",
//     lastName: "Management",
//     email: "contact@brownmanagement.com",
//     phone: "8902345678",
//     status: "qualified",
//     temperature: "warm",
//     id: "3",
//   },
//   {
//     firstName: "Jones",
//     lastName: "Software",
//     email: "contact@jonessoftware.com",
//     phone: "8913456789",
//     status: "accepted",
//     temperature: "cold",
//     id: "4",
//   },
//   {
//     firstName: "Garcia",
//     lastName: "Analytics",
//     email: "contact@garciaanalytics.com",
//     phone: "8924567890",
//     status: "accepted",
//     temperature: "hot",
//     id: "5",
//   },
//   {
//     firstName: "Miller",
//     lastName: "Consulting",
//     email: "contact@millerconsulting.com",
//     phone: "8935678901",
//     status: "qualified",
//     temperature: "hot",
//     id: "6",
//   },
//   {
//     firstName: "Davis",
//     lastName: "Coordinators",
//     email: "contact@daviscoordinators.com",
//     phone: "8946789012",
//     status: "qualified",
//     temperature: "cold",
//     id: "7",
//   },
//   {
//     firstName: "Rodriguez",
//     lastName: "Admin Solutions",
//     email: "contact@rodriguezadminsolutions.com",
//     phone: "8957890123",
//     status: "qualified",
//     temperature: "warm",
//     id: "8",
//   },
//   {
//     firstName: "Martinez",
//     lastName: "Engineering",
//     email: "contact@martinezengineering.com",
//     phone: "8968901234",
//     status: "qualified",
//     temperature: "warm",
//     id: "9",
//   },
//   {
//     firstName: "Hernandez",
//     lastName: "Designs",
//     email: "contact@hernandezdesigns.com",
//     phone: "8979012345",
//     status: "qualified",
//     temperature: "cold",
//     id: "10",
//   },
// ];

const ListOfAccounts = () => {
  const [routes] = useState([
    { key: "allLeads", title: "All Leads" },
    { key: "starredLeads", title: "Starred Leads" },
  ]);
  const goToLeadCreate = () => {
    console.log("inside navigation");
    router.navigate("/DrawerScreens/createLead");
    console.log("after natigation");
  };
  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
  const[accountData, setAccountData]=useState([])

  const toggleStarredLead = (leadId) => {
    if (starredLeads.includes(leadId)) {
      setStarredLeads(starredLeads.filter((id) => id !== leadId));
    } else {
      setStarredLeads([...starredLeads, leadId]);
    }
  };

  useEffect(() => {
      const fetchData = async () => {
          try {
              const ldata = await FetchAccounts(); 
              console.log("this is the account data",ldata.result);
              setAccountData(ldata.result);
              console.log(accountData)
          
          } catch (error) {
              console.error('Error in fetching accounts:', error);
             
          }
      };
  
      fetchData(); 
  }, []);
  
  

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <LeadItem
        firstName={item.first_name}
        lastName={item.last_name}
        accountName={item.account_name}
        accountNumber={item.account_number}
        phone={item.phone}
        email={item.email}
       
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.myTasksText}>Accounts</Text>
      </View>

      <FlatList
        data={accountData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  filterIcon: {
    marginLeft: 350,
  },
  plusButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#023B5E",
    padding: 15,
    borderRadius: 30,
    elevation: 4,
  },
  header: {
    backgroundColor: "grey",
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 280,
  },
  myTasksText: {
    color: "white",
    fontSize: 20,
    marginLeft: 5,
    fontWeight:'800'
  },
});

export default ListOfAccounts;
