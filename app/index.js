// import { View } from 'react-native';
// import { Link } from 'expo-router';

// export default function Page() {
//     const id=878;
//   return (
//     <View>
//       <Link href="/about">About</Link>
//       {/* ...other links */}
//       <Link href="/user/6789">View user</Link>
//     </View>
//   );
// }

import React ,{useState}from 'react';
//import { leadData } from './leadData';
import { useCallback } from 'react';
import LeadItem from './leadList/leadCard';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { FontAwesome } from '@expo/vector-icons';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { Header } from 'react-native-elements';

 const leadData = 
[

  {

    "firstname": "John",

    "lastname": "Smith",

    "email": "johnsmith1@gmail.com",

    "jobTitle": "Engineer",

    "phone": "8884763231",
    "status":"open",
    "temperature":"hot",
    "id":"a123",

  },

  {

    "firstname": "Jane",

    "lastname": "Johnson",

    "email": "janejohnson2@yahoo.com",

    "jobTitle": "Designer",

    "phone": "8891234567",
    "status":"contacted",
    "temperature":"cold",
    "id":"b876",

  },

  {

    "firstname": "Michael",

    "lastname": "Brown",

    "email": "michaelbrown3@hotmail.com",

    "jobTitle": "Manager",

    "phone": "8902345678",
    "status":"qualified",
    "temperature":"warm",
    "id":"c934",

  },

  {

    "firstname": "Emily",

    "lastname": "Jones",

    "email": "emilyjones4@outlook.com",

    "jobTitle": "Developer",

    "phone": "8913456789",
    "status":"accepted",
    "temperature":"cold",
    "id":"d285",

  },

  {

    "firstname": "William",

    "lastname": "Garcia",

    "email": "williamgarcia5@gmail.com",

    "jobTitle": "Analyst",

    "phone": "8924567890",  
    "status":"accepted",
    "temperature":"hot",
    "id":"e925",

  },

  {

    "firstname": "Olivia",

    "lastname": "Miller",

    "email": "oliviamiller6@yahoo.com",

    "jobTitle": "Consultant",

    "phone": "8935678901",
    "status":"qualified",
    "temperature":"hot",
    "id":"f229",

  },

  {

    "firstname": "James",

    "lastname": "Davis",

    "email": "jamesdavis7@hotmail.com",

    "jobTitle": "Coordinator",

    "phone": "8946789012",
    "status":"qualified",
    "temperature":"cold",
    "id":"g934",

  },

  {

    "firstname": "Sophia",

    "lastname": "Rodriguez",

    "email": "sophiarodriguez8@outlook.com",

    "jobTitle": "Administrator",

    "phone": "8957890123",
    "status":"qualified",
    "temperature":"warm",
    "id":"h268",

  },

  {

    "firstname": "Benjamin",

    "lastname": "Martinez",

    "email": "benjaminmartinez9@gmail.com",

    "jobTitle": "Engineer",

    "phone": "8968901234",
    "status":"qualified",
    "temperature":"warm",
    "id":"i472",

  },

  {

    "firstname": "Emma",

    "lastname": "Hernandez",

    "email": "emmahernandez10@yahoo.com",

    "jobTitle": "Designer",

    "phone": "8979012345",
    "status":"qualified",
    "temperature":"cold",
    "id":"j295",

  }
]
const Page = () => {
  const [routes] = useState([
    { key: 'allLeads', title: 'All Leads' },
    { key: 'starredLeads', title: 'Starred Leads' },
    
  ]);
  const [index, setIndex] = useState(0);
  const [starredLeads, setStarredLeads] = useState([]);

  const toggleStarredLead = (leadId) => {
    if (starredLeads.includes(leadId)) {
      setStarredLeads(starredLeads.filter((id) => id !== leadId));
    } else {
      setStarredLeads([...starredLeads, leadId]);
    }
  };

  const goToTask=()=>{
    router.replace('/Task/task'); 
  }
  const handleFilterClick = () => {
    console.log('Filter clicked!');
  };
  

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'allLeads':
        return (
          <View sty>
            <FlatList
              data={leadData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        );
     
      default:
        return null;
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity>
    <LeadItem
      firstName={item.firstname}
      lastName={item.lastname}
      email={item.email}
      phone={item.phone}
      status={item.status}
      id={item.id}
      temperature={item.temperature}
      onStarPress={toggleStarredLead}
      isStarred={starredLeads.includes(item.id)}
    />
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
     {/* <Button title='task' onPress={goToTask}></Button> */}
     <Button  title='task' onPress={goToTask}></Button>
     <FlatList
              data={leadData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
      {/* <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'LEADS', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}
{/*     
    <TouchableOpacity onPress={handleFilterClick} style={styles.filterIcon}>
          <FontAwesome name="filter" size={24} color="black" />
        </TouchableOpacity> */}
      {/* <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: '#4789e6' }}
          />
        )}  
      /> */}
       <TouchableOpacity style={styles.plusButton}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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

});

export default Page;
