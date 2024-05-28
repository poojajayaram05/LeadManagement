import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import { FetchOpportunities } from '../../service/fetchOpportunities';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import OpportunityItem from '../../../customComponents/opportuntityCard';
import { useQuery } from '@tanstack/react-query';
import FilterModal from '../../formComponents/filterModal';

const Opportunity = () => {
  const goToCreateOpportunity = () => {
    router.navigate('/formComponents/createOpportunity');
  };

  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
  const [OpportunityData, setOpportunityData] = useState([]);
  const [filters, setFilters] = useState({});
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading, error } = useQuery({ queryKey: ['opportunities'], queryFn: FetchOpportunities });

  useEffect(() => {
    if (data) {
      setOpportunityData(data.result);
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
    const filterData = filteredData || OpportunityData;
    return filterData.filter((item) => {
      const opportunityName = item.opportunity_name.toLowerCase();
      return opportunityName.includes(searchQuery.toLowerCase());
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
        <Text>Error in fetching opportunities</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <OpportunityItem
        AccountName={item.description}
        OpportunityName={item.opportunity_name}
        OpportunityValue={item.opportunity_value}
        ProbabilityValue={item.probability_of_winning}
        ForecastCloseDate={item.forecast_close_date}
        number={item.number}
        sys_id={item.sys_id}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
        <FontAwesome name='search' size={15} color='black' style={{ marginRight: 10 }} />
        <TextInput
          placeholder='Search'
          style={styles.searchBox}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={toggleFilterModal}>
          <View style={styles.filter}>
            <FontAwesome name='filter' size={20} color='black' />
          </View>
        </TouchableOpacity>
      </SafeAreaView>

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
        ]}
        dataList={OpportunityData}
        flag="opplist"
      />

      <FlatList
        data={getFilteredAndSearchedData()}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.plusButton} onPress={goToCreateOpportunity}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  filterIcon: {
    marginLeft: 350,
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
    flex: 1,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  filter: {
    marginLeft: 10,
  },
});

export default Opportunity;

