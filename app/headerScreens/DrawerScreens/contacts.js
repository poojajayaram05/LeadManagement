import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, ActivityIndicator, View, TextInput } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import { FetchContacts } from '../../service/fetchContacts';
import FilterModal from '../../formComponents/filterModal';
import ContactItem from '../../../customComponents/contactCard';
import { router } from 'expo-router';

const ContactList = () => {
  const goToCreateContact = () => {
    router.navigate('/formComponents/createContact');
  }

  const [contactData, setContactData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: FetchContacts });

  useEffect(() => {
    if (data) {
      setContactData(data.result);
      setFilteredData(data.result);  
    }
  }, [data]);

  const onFilter = (newFilters, updatedData, close = true) => {
    setFilters(newFilters);
    setFilteredData(updatedData);
    if (close) {
      setFilterModalVisible(false);
    }
  };

  const toggleFilterModal = () => {
    setFilterModalVisible(!filterModalVisible);
  };

  const getFilteredAndSearchedData = () => {
    const currentData = filteredData || contactData;
    return currentData.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase());
    });
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
        <Text>Error in fetching Contacts</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <ContactItem
        first_name={item.first_name}
        last_name={item.last_name}
        mobile={item.mobile}
        title={item.title}
        description={item.description}
        number={item.number}
        sys_id={item.sys_id}
        email={item.email}
        created_on={item.sys_created_on}
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
            onChangeText={setSearchQuery}
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
            title: 'Gender:',
            key: 'gender',
            dropdownData: ['male', 'female'],
          },
          {
            title: 'Created Date:',
            key: 'createdDate',
            dropdownData: ['Today', 'Yesterday', 'This Week', 'This Month'],
          }
        ]}
        dataList={contactData} 
        flag="contactlist" 
      />

      <FlatList
        data={getFilteredAndSearchedData()}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.plusButton} onPress={goToCreateContact}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  header: {
    backgroundColor: '#023B5E',
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  plusButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#023B5E',
    padding: 15,
    borderRadius: 30,
    elevation: 4,
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
  },
});

export default ContactList;
