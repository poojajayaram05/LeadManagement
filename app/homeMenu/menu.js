// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import DefaultHeader from '../../customComponents/header';
// import { MdOutlineDashboard } from "react-icons/md";



// const MainPage = () => {
//   return (
//     <View style={styles.container}>

//       {/* <DefaultHeader/> */}
//       <View style={styles.header}>
//         {/* <Image
//           source={require('./assets/images/profile')}
//           style={styles.personImage}
//         /> */}
//         <Image
//   source={{uri: '/assets/images/profile'}}
//   style={styles.personImage}
// />
//         <View style={styles.headerInfo}>
            
//           <Text style={styles.personName}>Bindu bn</Text>
//           <Text style={styles.status}>Active</Text>
//         </View>
//       </View>

//       {/* Tabs Section */}
//       <View style={styles.tabs}>
//         <TouchableOpacity style={styles.tab}>
//           <Text style={styles.tabText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.tab}>
//           <Text style={styles.tabText}>Team Chats</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Content Section */}
//           {/* Content Section */}
//           <View style={styles.content}>
//         {/* Content of the selected tab goes here */}
//         {/* For Home Tab */}
//         <View style={styles.homeContent}>
//         <View style={styles.menuItemContainer}>
//  {/* Icon component */} 
//   <Text style={styles.menuItemText}>
//     Dashboard
//   </Text>
// </View>
//           <Text style={styles.menuItem}>Feed</Text>
//           <Text style={styles.menuItem}>Reports</Text>
//           <Text style={styles.menuItem}>Calendar</Text>
//         </View>
//         {/* For Team Chats Tab */}
//         <View style={styles.teamChatsContent}>
//           {/* Add content for Team Chats Tab */}
//         </View>
//       </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   personImage: {
//     width: 80,
//     height: 60,
//     borderRadius: 30,
//   },
//   headerInfo: {
//     marginLeft: 15,
//   },
//   personName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   status: {
//     fontSize: 16,
//     color: 'green',
//   },
//   tabs: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     borderBottomWidth: 2,
//     borderBottomColor: '#ccc',
//   },
//   tab: {
//     marginRight: 20,
//     paddingBottom: 10,
//   },
//   tabText: {
//     fontSize: 18,
//     color: '#666',
//   },
//   content: {
//     flex: 1,
//   },
//   homeContent: {
//     flex: 1,
//   },
//   teamChatsContent: {
//     flex: 1,
//   },

//   menuItem: {
//     fontSize: 18,
//     color: '#333',
//     marginLeft: 10,
//   },

//   menuItemText: {
//     fontSize: 18,
//     color: '#333',
//     marginLeft: 10,
//   },
// });

// export default MainPage


import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import DefaultHeader from '../../customComponents/header';
import { MdOutlineDashboard } from "react-icons/md";
import { Dashboard } from '../../assets/images';
import {Profile} from '../../assets/images';
import { Calender} from '../../assets/images';
import { Lead } from '../../assets/images';
import { profile, Deals, Companies, Contacts,Tasks,Feeds,Reports } from '../../assets/images';


const MainPage = () => {
  const [selectedTab, setSelectedTab] = useState('Home');
  const [selectedItem, setSelectedItem] = useState(null);
  const[homeClick, setHomeClick]= useState(false);
  const[tabClick, setTabClick]=useState(false);
  

  const homeClicked=()=>{
    setHomeClick(true);
  }

  const tabClicked=()=>{
    setTabClick(true);
  }
  

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
    setSelectedItem(null); // Reset selected item when tab changes
  };

  const handleMenuItemPress = (itemName) => {
    setSelectedItem(itemName);
  };
  const renderMenuItems = () => {
    if (selectedTab === 'Home') {
      return (
        <View>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => handleMenuItemPress('Dashboard')}
          >
            <View style={styles.menuItemIconContainer}>
              <Image
                style={styles.menuItemIcon}
                source={Dashboard}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.menuItemText}>Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => handleMenuItemPress('Feed')}
          >
            <View style={styles.menuItemIconContainer}>
              <Image
                style={styles.menuItemIcon}
                source={Feeds}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.menuItemText}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => handleMenuItemPress('Feed')}
          >
            <View style={styles.menuItemIconContainer}>
              <Image
                style={styles.menuItemIcon}
                source={Reports}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.menuItemText}>Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => handleMenuItemPress('Feed')}
          >
            <View style={styles.menuItemIconContainer}>
              <Image
                style={styles.menuItemIcon}
                source={Calender}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.menuItemText}>Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => handleMenuItemPress('Feed')}
          >
            <View style={styles.menuItemIconContainer}>
              <Image
                style={styles.menuItemIcon}
                source={Lead}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.menuItemText}>Leads</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => handleMenuItemPress('Feed')}
          >
            <View style={styles.menuItemIconContainer}>
              <Image
                style={styles.menuItemIcon}
                source={Contacts}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.menuItemText}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => handleMenuItemPress('Feed')}
          >
            <View style={styles.menuItemIconContainer}>
              <Image
                style={styles.menuItemIcon}
                source={Companies}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.menuItemText}>Companies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => handleMenuItemPress('Feed')}
          >
            <View style={styles.menuItemIconContainer}>
              <Image
                style={styles.menuItemIcon}
                source={Deals}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.menuItemText}>Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItemContainer}
            onPress={() => handleMenuItemPress('Feed')}
          >
            <View style={styles.menuItemIconContainer}>
              <Image
                style={styles.menuItemIcon}
                source={Tasks}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.menuItemText}>Tasks</Text>
          </TouchableOpacity>

          {/* Add more menu items as needed */}
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.showHomeTabButton}
          onPress={() => handleTabPress('Home')}
        >
          <Text>Show Teams Tab</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={profile}
            style={styles.personImage}
          />
          <View style={styles.headerInfo}>
            <Text style={styles.personName}>Bindu bn</Text>
            <Text style={styles.status}>Active</Text>
          </View>
        </View>

        {/* Tabs Section */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Home' && styles.selectedTab]}
            onPress={() => handleTabPress('Home')}
          >
            <Text style={[styles.tabText, selectedTab === 'Home' && styles.selectedTabText]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Team Chats' && styles.selectedTab]}
            onPress={() => handleTabPress('Team Chats')}
          >
            <Text style={[styles.tabText, selectedTab === 'Team Chats' && styles.selectedTabText]}>Team Chats</Text>
          </TouchableOpacity>
          
          
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          {/* Render menu items based on the selected tab */}
          {renderMenuItems()}
        </View>
      </View>
    </ScrollView>
  );
};
//   return (
    // <ScrollView>
    // <View style={styles.container}>

    //   {/* <DefaultHeader/> */}
    //   <View style={styles.header}>
    //     {/* <Image
    //       source={require('./assets/images/profile')}
    //       style={styles.personImage}
    //     /> */}
    //     <Image
    //       source={profile}
    //       style={styles.personImage}
    //     />
    //     <View style={styles.headerInfo}>
    //       <Text style={styles.personName}>Bindu bn</Text>
    //       <Text style={styles.status}>Active</Text>
    //     </View>
    //   </View>

    //   {/* Tabs Section */}
    //   <View style={styles.tabs}>
    //     <TouchableOpacity style={styles.tab} onPress={homeClicked}>
    //       <Text style={styles.tabText}>Home</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.tab}>
    //       <Text style={styles.tabText}>Team Chats</Text>
    //     </TouchableOpacity>
    //   </View>

    //   {/* Content Section */}
    //   <View style={styles.content}>
    //     {/* Content of the selected tab goes here */}
    //     {/* For Home Tab */}
    //     <View style={styles.homeContent}>
       
    //     <TouchableOpacity
    //         style={styles.menuItemContainer}
    //         onPress={() => console.log('Dashboard clicked')}
    //       >
    //         <View style={styles.menuItemIconContainer}>
    //         <Image
    //         style={styles.menuItemIcon}
    //         source={Dashboard}
    //         resizeMode="contain"
    //       />
    //         </View>
            
    //         <Text style={styles.menuItemText}>Dashboard</Text>
    //       </TouchableOpacity>

    //       <TouchableWithoutFeedback onPress={() => handleMenuItemPress('Feed')}>
    //         <View style={[styles.menuItemContainer, selectedItem === 'Feed' && styles.selectedMenuItem]}>
    //         <View style={styles.menuItemIconContainer}>
    //         <Image
    //         style={styles.menuItemIcon}
    //         source={Feeds}
    //         resizeMode="contain"
    //       />
    //         </View>
                
    //           <Text style={styles.menuItemText}>Feed</Text>
              
    //         </View>
    //       </TouchableWithoutFeedback>
    //       <TouchableWithoutFeedback onPress={() => handleMenuItemPress('Reports')}>
    //         <View style={[styles.menuItemContainer, selectedItem === 'Reports' && styles.selectedMenuItem]}>
    //         <View style={styles.menuItemIconContainer}>
    //         <Image
    //         style={styles.menuItemIcon}
    //         source={Reports}
    //         resizeMode="contain"
    //       />
    //         </View>
    //           <Text style={styles.menuItemText}>Reports</Text>
    //         </View>
    //       </TouchableWithoutFeedback>
    //       <TouchableWithoutFeedback onPress={() => handleMenuItemPress('Calendar')}>
    //         <View style={[styles.menuItemContainer, selectedItem === 'Calendar' && styles.selectedMenuItem]}>
    //         <View style={styles.menuItemIconContainer}>
    //         <Image
    //         style={styles.menuItemIcon}
    //         source={Calender}
    //         resizeMode="contain"
    //       />
    //         </View>
            
    //           <Text style={styles.menuItemText}>Calendar</Text>
          
    //         </View>
    //       </TouchableWithoutFeedback>
    //       <TouchableWithoutFeedback onPress={() => handleMenuItemPress('Leads')}>
    //         <View style={[styles.menuItemContainer, selectedItem === 'Leads' && styles.selectedMenuItem]}>
    //         <View style={styles.menuItemIconContainer}>
    //         <Image
    //         style={styles.menuItemIcon}
    //         source={Lead}
    //         resizeMode="contain"
    //       />
    //         </View>
            
    //           <Text style={styles.menuItemText}>Leads</Text>
    //         </View>

    //       </TouchableWithoutFeedback>
    //       <TouchableWithoutFeedback onPress={() => handleMenuItemPress('Contacts')}>
    //         <View style={[styles.menuItemContainer, selectedItem === 'Contacts' && styles.selectedMenuItem]}>
    //         <View style={styles.menuItemIconContainer}>
    //              <Image
    //         style={styles.menuItemIcon}
    //         source={Contacts}
    //         resizeMode="contain"
    //       />
    //       </View>
    //           <Text style={styles.menuItemText}>Contacts</Text>
    //         </View>
    //       </TouchableWithoutFeedback>
    //       <TouchableWithoutFeedback onPress={() => handleMenuItemPress('Companies')}>
    //         <View style={[styles.menuItemContainer, selectedItem === 'Companies' && styles.selectedMenuItem]}>
    //         <View style={styles.menuItemIconContainer}>
    //         <Image
    //         style={styles.menuItemIcon}
    //         source={Companies}
    //         resizeMode="contain"
    //       />
    //       </View>
    //           <Text style={styles.menuItemText}>Companies</Text>
    //         </View>
    //       </TouchableWithoutFeedback>
    //       <TouchableWithoutFeedback onPress={() => handleMenuItemPress('Deals')}>
         
    //         <View style={[styles.menuItemContainer, selectedItem === 'Deals' && styles.selectedMenuItem]}>
    //         <View style={styles.menuItemIconContainer}>
    //         <Image
    //         style={styles.menuItemIcon}
    //         source={Deals}
    //         resizeMode="contain"
    //       />
    //       </View>
    //           <Text style={styles.menuItemText}>Deals</Text>
    //         </View>
            
    //       </TouchableWithoutFeedback>
    //       <TouchableWithoutFeedback onPress={() => handleMenuItemPress('Tasks')}>
    //         <View style={[styles.menuItemContainer, selectedItem === 'Tasks' && styles.selectedMenuItem]}>
    //         <View style={styles.menuItemIconContainer}>
    //         <Image
    //         style={styles.menuItemIcon}
    //         source={Tasks}
    //         resizeMode="contain"
    //       />
    //       </View>
    //           <Text style={styles.menuItemText}>Tasks</Text>
    //         </View>
    //       </TouchableWithoutFeedback>



    //     </View>
    //     {/* For Team Chats Tab */}
    //     <View style={styles.teamChatsContent}>
    //       {/* Add content for Team Chats Tab */}
    //     </View>
    //   </View>
      

    // </View>
    // </ScrollView>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuItemIconContainer: {
    marginRight: 10,
    flexDirection:'row' // Add space between the icon and text
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  personImage: {
    width: 80,
    height: 60,
    borderRadius: 30,
    marginTop:20
  },
  headerInfo: {
    marginLeft: 15,
  },
  personName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 16,
    color: 'green',
  },
  menuItemIcon: {
    width: 30, // Adjust the width and height as per your image size
    height: 30,
    marginRight: 10,
    // Add some spacing between the icon and text
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
  tab: {
    marginRight: 20,
    paddingBottom: 10,
  },
  tabText: {
    fontSize: 18,
    color: '#666',
  },
  content: {
    flex: 1,
  },
  homeContent: {
    flex: 1,
  },
  teamChatsContent: {
    flex: 1,
  },
  menuItemContainer: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
  selectedMenuItem: {
    backgroundColor: 'lightblue', // Change the color as per your preference
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  menuItemIconContainer: {
    marginRight: 10,
  },
  menuItemIcon: {
    width: 30,
    height: 30,
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default MainPage;
