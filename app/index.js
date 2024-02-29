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

    "job-title": "Engineer",

    "phone": "8884763231",
    "status":"open",
    "id":"1",

  },

  {

    "firstname": "Jane",

    "lastname": "Johnson",

    "email": "janejohnson2@yahoo.com",

    "job-title": "Designer",

    "phone": "8891234567",
    "status":"contacted",
    "id":"2",

  },

  {

    "firstname": "Michael",

    "lastname": "Brown",

    "email": "michaelbrown3@hotmail.com",

    "job-title": "Manager",

    "phone": "8902345678",
    "status":"qualified",
    "id":"3",

  },

  {

    "firstname": "Emily",

    "lastname": "Jones",

    "email": "emilyjones4@outlook.com",

    "job-title": "Developer",

    "phone": "8913456789",
    "status":"accepted",
    "id":"4",

  },

  {

    "firstname": "William",

    "lastname": "Garcia",

    "email": "williamgarcia5@gmail.com",

    "job-title": "Analyst",

    "phone": "8924567890",  
    "status":"accepted",
    "id":"5",

  },

  {

    "firstname": "Olivia",

    "lastname": "Miller",

    "email": "oliviamiller6@yahoo.com",

    "job-title": "Consultant",

    "phone": "8935678901",
    "status":"qualified",
    "id":"6",

  },

  {

    "firstname": "James",

    "lastname": "Davis",

    "email": "jamesdavis7@hotmail.com",

    "job-title": "Coordinator",

    "phone": "8946789012",
    "status":"qualified",
    "id":"7",

  },

  {

    "firstname": "Sophia",

    "lastname": "Rodriguez",

    "email": "sophiarodriguez8@outlook.com",

    "job-title": "Administrator",

    "phone": "8957890123",
    "status":"qualified",
    "id":"8",

  },

  {

    "firstname": "Benjamin",

    "lastname": "Martinez",

    "email": "benjaminmartinez9@gmail.com",

    "job-title": "Engineer",

    "phone": "8968901234",
    "status":"qualified",
    "id":"9",

  },

  {

    "firstname": "Emma",

    "lastname": "Hernandez",

    "email": "emmahernandez10@yahoo.com",

    "job-title": "Designer",

    "phone": "8979012345",
    "status":"qualified",
    "id":"10",

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
  

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'allLeads':
        return (
          <View>
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
      onStarPress={toggleStarredLead}
      isStarred={starredLeads.includes(item.id)}
    />
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'LEADS', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: '#3498db' }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Page;
