import React ,{useState, useEffect}from 'react';
//import { leadData } from './leadData';
import { useCallback } from 'react';
import LeadItem from '../../leadComponents/leadCard';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {FetchLeads} from '../service/fetchLeads'
import { ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import FilterModal from '../formComponents/filterModal';
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
// import {leadData} from '../../customComponents/formData';
import * as SecureStore from 'expo-secure-store';
import { TextInput } from 'react-native-gesture-handler';
import useIdStore from '../leadStore';
 

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

  // const [leadData, setLeadData] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
  const[leadData, setleadData]=useState([]);
  //const [isLoading, setIsLoading] = useState(true);
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

  const handleFilter = (newFilters, close = true) => {
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
  // const filteredLeads = leadData.filter((item) => {
  //   const fullName = `${item.firstname} ${item.lastname}`.toLowerCase();
  //   return fullName.includes(searchQuery.toLowerCase());
  // });
  const filteredLeads = leadData.filter((item) => {
    const fullName = `${item.firstname} ${item.lastname}`.toLowerCase();
    const statusMatch = !filters.leadStatus || item.lead_status === filters.leadStatus;
    const qualificationMatch = !filters.qualification || item.qualification === filters.qualification;
    const genderMatch = !filters.gender || item.gender === filters.gender;
    const textMatch = fullName.includes(searchQuery.toLowerCase());
    return statusMatch && qualificationMatch && genderMatch && textMatch;
  });

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error in fetching leads</Text>
      </View>
    );
  }

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
      sys_id={item.sys_id}
    />
  </TouchableOpacity>
  );
 
  return (
    <View style={styles.container}>
    <SafeAreaView style={{ marginHorizontal:20, flexDirection:'row'}}>
       <FontAwesome name='search' size={15} color='black' style={{marginTop:10, marginRight:10}}/>
        <TextInput 
        placeholder='Search'
        //clearButtonMode='always'
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={handleSearch}
        ></TextInput>
        <View>
        <TouchableOpacity onPress={toggleFilterModal}>
          <FontAwesome name='filter' size={30} color='black' style={{marginLeft:230}} />
        </TouchableOpacity>
      </View>
 
      <FilterModal
        isVisible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onFilter={handleFilter}
        filterOptions={[
          // {
          //   title: 'Lead Status:',
          //   key: 'leadStatus',
          //   dropdownData: ['new', 'converted'],
          // },
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
        ]}
      />
       </SafeAreaView>
       <FlatList
              data={filteredLeads}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
     <View>

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
            <Text style={styles.dropdownMenuItem}>Upload a CSV</Text>
        </TouchableOpacity>
  
    </View>
</ScrollView>
</View>

)}

     
 
</View>

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
    backgroundColor: '#fff', // Adjust background color as needed
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
  bottom: 80, // Adjust position as needed
  right: 20, // Adjust position as needed
  backgroundColor: 'white',
  borderRadius: 8,
  elevation: 4,
  maxHeight: 200, // Set maximum height for dropdown
  width: 200, // Set width for dropdown
},
dropdownScrollView: {
  maxHeight: 150, // Set maximum height for dropdown scroll view
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
 
});
 
export default LeadList;