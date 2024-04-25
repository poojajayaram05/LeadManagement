
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
  TextInput
} from "react-native";
import AccountCard from "../formComponents/accountCard";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native";
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

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const ldata = await FetchAccounts(); 
  //             console.log("this is the account data",ldata.result);
  //             setAccountData(ldata.result);
  //             console.log(accountData)
          
  //         } catch (error) {
  //             console.error('Error in fetching accounts:', error);
             
  //         }
  //     };
  
  //     fetchData(); 
  // }, []);
  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: FetchAccounts });
  const[searchQuery, setSearchQuery]=useState('')
  const filteredAccounts = accountData.filter((item) => {
    const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });


 const handleSearch = (text) => {
    setSearchQuery(text);
  
  };

 

  useEffect(() => {
    if (data) {
      setAccountData(data.result);
    }
  }, [data]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#023B5E" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error in fetching Accounts</Text>
      </View>
    );
  }
  
  

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <AccountCard
        firstName={item.first_name}
        lastName={item.last_name}
        accountName={item.account_name}
        accountNumber={item.account_number}
        phone={item.phone}
        email={item.email}
        sys_id={item.sys_id}
       
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          clearButtonMode="always"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
    

      <FlatList
        data={filteredAccounts}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  myTasksText: {
    color: "white",
    fontSize: 20,
    marginLeft: 5,
    fontWeight:'800'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust background color as needed
  },
});

export default ListOfAccounts;