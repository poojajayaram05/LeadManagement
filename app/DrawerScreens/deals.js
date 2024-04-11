import React ,{useState, useEffect}from 'react';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import { FetchOpportunities } from '../service/fetchOpportunities';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
 
import * as SecureStore from 'expo-secure-store';
import OpportunityItem from '../../customComponents/opportuntityCard';
 
 
const Opportunity = () => {
  const goToCreateOpportunity=()=>{
    console.log("inside navigation")
    router.navigate('/formComponents/createOpportunity');
    console.log("after navigation")
  }
  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);
  const[OpportunityData, setOpportunityData]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
 
  useEffect(() => {
    const fetchData = async () => {
        try {
            const odata = await FetchOpportunities(); // Call FetchLeads and wait for the result
            setOpportunityData(odata.result); // Set the state with the fetched data
            console.log("this is the oppurtunity data",odata.result);
            setOpportunityData(odata.result);
            console.log(OpportunityData)
            setIsLoading(false); // Log the fetched data
        } catch (error) {
            // Handle errors if any
            console.error('Error in fetching leads:', error);
            setIsLoading(false);
        }
    };
 
    fetchData(); // Call the fetchData function defined above
}, []); // Empty dependency array means it will run only once on mount
 
 
if (isLoading) {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#023B5E" />
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
    />
  </TouchableOpacity>
  );
 
  return (
    <View style={styles.container}>
       <FlatList
              data={OpportunityData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
     <View>
  <TouchableOpacity style={styles.plusButton} onPress={goToCreateOpportunity}>
    <Ionicons name="add" size={24} color="white" onPress={goToCreateOpportunity}/>
  </TouchableOpacity>
</View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    backgroundColor:'#f2f2f2'
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
 
});
 
export default Opportunity;