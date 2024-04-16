
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
import AccountCard from "../formComponents/accountCard";
const ListOfAccounts = () => {
  const [routes] = useState([
    { key: "allLeads", title: "All Leads" },
    { key: "starredLeads", title: "Starred Leads" },
  ]);
  // const goToLeadCreate = () => {
  //   console.log("inside navigation");
  //   router.navigate("/DrawerScreens/createLead");
  //   console.log("after natigation");
  // };
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

  const goToAccountCreate=()=>{
    router.navigate('/formComponents/createAccount')
  }

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
      <AccountCard
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
    

      <FlatList
        data={accountData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
           <View>
  <TouchableOpacity style={styles.plusButton} onPress={goToAccountCreate}>
   
    <Ionicons name="add" size={24} color="white" onPress={goToAccountCreate}/>
   
  </TouchableOpacity>
</View>
    
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