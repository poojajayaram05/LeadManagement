import React ,{useState, useEffect}from 'react';
import LeadItem from '../../../leadComponents/leadCard';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {FetchLeads} from '../../service/fetchLeads';
import { ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import FilterModal from '../../formComponents/filterModal';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  ScrollView
} from 'react-native';

import * as SecureStore from 'expo-secure-store';
import { TextInput } from 'react-native-gesture-handler';
import useIdStore from '../../leadStore';
 
const LeadList = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const{flagCreate, setFlagCreate}=useIdStore();

  const onClickPlus=()=>{
    setShowDropdown(true)
  }

  const goToLeadCreate=()=>{
    router.navigate('/formComponents/createLead');
    setFlagCreate("lead");

  }
  const closeDropdown=()=>{
    setShowDropdown(false);
  }
  const goToLeadWithFile=()=>{
    router.navigate("/formComponents/addLeadsByDoc");
  }

  const [filters, setFilters] = useState({});
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const[filteredData,setFilteredData]=useState('');
  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
  const[leadData, setleadData]=useState([]);
  const[searchQuery, setSearchQuery]=useState('')

  const handleSearch=(item)=>{
    setSearchQuery(item);
  }

const { data, isLoading, error } = useQuery({ queryKey: ['todos'], queryFn: FetchLeads});

  useEffect(() => {
    if (data) {
      setleadData(data.result);
    }
  }, [data]);

  console.log(leadData);

  const onFilter = (newFilters,updatedData, close=true) => {
    setFilteredData(updatedData);
    console.log('...................................Filtered Data:', updatedData);
    console.log("....................................setFilteredData")
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
        <Text>Error in fetching leads</Text>
      </View>
    );
  }
    const searchFiltered = leadData.filter((item) => {
      const fullName = `${item.firstname} ${item.lastname}`.toLowerCase();
      const textMatch = fullName.includes(searchQuery.toLowerCase());
      console.log(textMatch, "leaddddddfcgvhbnjm mnhgfcgvhbnjm nbv");
      console.log(searchFiltered, "leaddddddddcghjkl");
      return textMatch; 
    });

  const renderItem = ({ item }) => (
    <TouchableOpacity>
   <LeadItem
      FirstName={item.firstname}
      LastName={item.lastname}
      Email={item.email}
      Phone={item.mobilephone}
      lead_status={item.leadstatus}
      number={item.number}
      qualification={item.qualification}
      gender={item.gender}
      created_on={item.sys_created_on}
      sys_id={item.sys_id}
    />
  </TouchableOpacity>
  );
 
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
       <FontAwesome name='search' size={15} color='black' style={{ marginRight:10}}/>
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
            title: 'Qualification:',
            key: 'qualification',
            dropdownData: ['cold', 'warm', 'hot'],
          },
          {
            title: 'Gender:',
            key: 'gender',
            dropdownData: ['male', 'female'],
          },
          {
            title: 'Lead Status:',
            key: 'leadstatus',
            dropdownData: ['converted', 'new','contacted','qualified','closed-not-converted'],
          },
          
        ]}
        
        dataList={leadData}
        flag="leadlist"
      />
      
        <FlatList
        data={filteredData||(leadData&&searchFiltered)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
 

  <TouchableOpacity style={styles.plusButton} onPress={onClickPlus} > 
   <Ionicons name="add" size={24} color="white" />
 </TouchableOpacity>
   {showDropdown && (

    <View style={styles.dropdownContainer}>
    <ScrollView style={styles.dropdownScrollView}>
    <View style={styles.dropdownMenu}>
      <TouchableOpacity onPress={closeDropdown} >
        <Ionicons name='close-circle' size={30} />
      </TouchableOpacity>
        <TouchableOpacity onPress={goToLeadCreate}>
            <Text style={styles.dropdownMenuItem}>Add a lead</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToLeadWithFile}>
            <Text style={styles.dropdownMenuItem}>Add a CSV</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
)}

</View>
    
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2'
  },
  dropdownMenu: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 3,
    zIndex: 999,
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
  marginRight:280,
},
myTasksText: {
  color: 'white',
  fontSize: 16,
  marginLeft: 5,
},
dropdownContainer: {
  flex:1,
  position: 'absolute',
  bottom: 80, 
  right: 20, 
  backgroundColor: 'white',
  borderRadius: 8,
  elevation: 4,
  maxHeight: 200, 
  width: 200, 
},
dropdownScrollView: {
  maxHeight: 150, 
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
dropdownMenuItem: {
  fontSize: 16,
  paddingVertical: 8,
  color:'#023B5E',
  fontWeight:'bold'
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
 
export default LeadList;