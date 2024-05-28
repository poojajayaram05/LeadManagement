import React, { useState, useEffect } from "react";
import { router } from "expo-router";
import { TouchableOpacity, View, FlatList, StyleSheet, Text, TextInput, ActivityIndicator } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { FetchAccounts } from "../../service/fetchAccounts";
import AccountCard from "../../formComponents/accountCard";
import { useQuery } from "@tanstack/react-query";
import FilterModal from "../../formComponents/filterModal";

const ListOfAccounts = () => {
  const [routes] = useState([
    { key: "allLeads", title: "All Leads" },
    { key: "starredLeads", title: "Starred Leads" },
  ]);

  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
  const [accountData, setAccountData] = useState([]);
  const [filters, setFilters] = useState({});
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleStarredLead = (leadId) => {
    if (starredLeads.includes(leadId)) {
      setStarredLeads(starredLeads.filter((id) => id !== leadId));
    } else {
      setStarredLeads([...starredLeads, leadId]);
    }
  };

  const goToAccountCreate = () => {
    router.navigate('/formComponents/createAccount');
  }

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const getFilteredAndSearchedData = () => {
    const currentData = filteredData || accountData;
    return currentData.filter((item) => {
      const accountName = item.account_name.toLowerCase();
      return accountName.includes(searchQuery.toLowerCase());
    });
  };

  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: FetchAccounts });

  useEffect(() => {
    if (data) {
      setAccountData(data.result);
      setFilteredData(data.result);  
    }
  }, [data]);

  const onFilter = (newFilters, updatedData, close = true) => {
    setFilteredData(updatedData);
    setFilters(newFilters);
    if (close) {
      setFilterModalVisible(false);
    }
  };

  const toggleFilterModal = () => {
    setFilterModalVisible(!filterModalVisible);
  };

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
        accountType={item.account_type}
        gender={item.gender}
        title={item.title}
        number={item.number}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name='search' size={15} color='black' style={{ marginRight: 10 }} />
          <TextInput
            placeholder='Search'
            style={styles.searchBox}
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity onPress={toggleFilterModal}>
            <FontAwesome name='filter' size={20} color='black' />
        </TouchableOpacity>
      </View>

      <FilterModal
        isVisible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onFilter={onFilter}
        filterOptions={[
          {
            title: 'Created Date:',
            key: 'createdDate',
            dropdownData: ['Today', 'Yesterday', 'This Week', 'This Month'],
          },
          {
            title: 'Account Type:',
            key: 'account_type',
            dropdownData: ['person', 'corporate'],
          },
        ]}
        dataList={accountData}
        flag="accountlist"
      />

      <FlatList
        data={getFilteredAndSearchedData()}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.plusButton} onPress={goToAccountCreate}>
        <Ionicons name="add" size={24} color="white" onPress={goToAccountCreate} />
      </TouchableOpacity>
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
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchBox: {
    // flex: 1,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    // backgroundColor:'red',
  },
});

export default ListOfAccounts;
