import React, { useState,useEffect } from "react";
import { useCallback } from "react";
import LeadItem from "../../leadComponents/leadCard";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { FetchContacts } from "../service/fetchContacts";
import ContactItem from "../../leadComponents/contactCard";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";


const ContactList = () => {
  const [routes] = useState([
    { key: "allLeads", title: "All Leads" },
    { key: "starredLeads", title: "Starred Leads" },
  ]);
  
  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
  const[contactData, setcontactData]=useState([])

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
              const ldata = await FetchContacts(); 
              console.log("this is the account data",ldata.result);
              setcontactData(ldata.result);
              console.log(contactData)
          
          } catch (error) {
              console.error('Error in fetching accounts:', error);
          }
      }; 
      fetchData(); 
  }, []);
  
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <ContactItem
        Name={item.name}
        firstName={item.first_name}
        lastName={item.last_name}
        number={item.number}
        // accountNumber={item.account_number}
        phone={item.phone}
        email={item.email}
       
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.myTasksText}>Contacts</Text>
      </View>

      <FlatList
        data={contactData}
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

export default ContactList;
