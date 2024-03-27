
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button,Image,ScrollView } from 'react-native';
import { router } from 'expo-router';

//import {handleNewButtonClick} from 'react-native-elements';
// import { starTwo,starrOne } from '../assets/images';
import {profile} from '../assets/images';
import BadgeLead from './badgeLead';
import { FontAwesome } from '@expo/vector-icons';
import useIdStore from '../app/leadStore';
import { set } from 'zod';
import { Ionicons } from '@expo/vector-icons';
import { avatarPic } from '../assets/images';

 
const LeadItem = ({ FirstName, LastName, Email, Phone, onViewPress, Status, label, Id, Gender }) => {
   
    const [showSecondImage, setShowSecondImage] = useState(false);
    const[selectedStar, setSelectedStar]=useState(false);
    const { leadId, setLeadId } = useIdStore();
    const [showDropdown, setShowDropdown] = useState(false);

    const goToEditLead = () => {
        setLeadId(Id);
        router.navigate('formComponents/editLead');

        closeDropdown();
    };
    // setLeadId(id);

    // useEffect(() => {
    //     setLeadId(id);
    // }, [id, setLeadId]);
    // console.log(leadId);
    // setLeadId(id);

 
 
    const handleSelectStar=()=>{
        setSelectedStar(!selectedStar)
       
        // setLeadId(id);
         //console.log("star selecteddddd",leadId)

 
}
 
// const Selected = require('../../assets/images/starrOne.jpg');
// const UnSelected = require('../../assets/images/starTwo.png');

const renderBadge = () => {
 
    if (Status === 'New Lead') {
        //return <Badge value={<Text> Sale </Text>} status="success" badgeStyle={styles.badge} />;
       return <BadgeLead label={'New Lead'} color={'#857471'} textColor="white"/>
    } else if (Status === 'Qualified') {
        // return <Badge value={<Text> Closed </Text>} status="error" badgeStyle={styles.badge} />;
        return <BadgeLead label={'Qualified'} color={'#C02DD9'} textColor="white"/>
    } else if (Status === 'Contacted') {
        // return <Badge value={<Text> New Lead </Text>} status="primary" badgeStyle={styles.badge} />;
        return <BadgeLead label={'Contacted'} color={'maroon'} textColor="white"/>
    } else if (Status === 'Closed') {
        // return <Badge value={<Text >Negotiating </Text>} status="warning" badgeStyle={styles.badge} />;
        return <BadgeLead label={'Closed'} color={'green'} textColor="white"/>
    }  
    return null;
};
const renderLabelBadge = () => {
    let labelBadgeColor;
    switch (label) {
      case 'hot':
        labelBadgeColor = 'red';
        txtColor="white";
        break;
      case 'warm':
        labelBadgeColor = 'orange';
        txtColor="white";
        break;
      case 'cold':
        labelBadgeColor = '#448DD0';
        txtColor="white";
        break;
      default:
        labelBadgeColor = 'grey';
        txtColor="white";
    }
      
    //return <Badge value={<Text>{temperature}</Text>} status={temperatureBadgeColor} badgeStyle={styles.badge} />;
    return <BadgeLead color={labelBadgeColor} label={label} textColor={txtColor} />
      };

    //   const displayScreen = () => {
    //     console.log(leadId);
    //     setLeadId(id);
       
    //     router.replace(`leadDetailScreens/notes`);
    //     // useIdStore((state) => state.setId(id));
    //     console.log('ID set:', leadId);
    // };

 
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
  };
  const closeDropdown = () => {
    setShowDropdown(false);
};

const handleNavigateToLeadDetails = () => {
    router.navigate(`/leadDetailScreens/info`);
    setLeadId(Id);
};
const handleChangeStatus = () => {
    setLeadId(Id);
    router.navigate('/formComponents/changeStatus');
  
    closeDropdown(); // Close the dropdown after action
};
 
const handleConvertLead = () => {
   
    closeDropdown(); // Close the dropdown after action
};
 
const handleReassign = () => {
    // Add your logic to reassign the lead
    closeDropdown(); // Close the dropdown after action
};
 


return (
  <TouchableOpacity onPress={handleNavigateToLeadDetails}>
      <View style={{ flex: 1 }}>
          <View style={styles.item}>
              <View style={styles.avatarContainer}>
                  <Image
                      source={avatarPic}
                      style={{ width: 40, height: 40, borderRadius: 20, marginBottom: 10 }}
                  />
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.title}>{`${FirstName} ${LastName}`}</Text>
                  <Text style={styles.subtitle}>{Email}</Text>
                  <Text style={styles.subtitle}>{Phone}</Text>
                  <View style={styles.badgeBox}>
                      <View>{renderBadge(Status)}</View>
                      <View style={styles.badgeSecond}>{renderLabelBadge()}</View>
                  </View>
              </View>
              <View style={styles.actionsContainer}>
                  <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownIcon}>
                      <Ionicons name="ellipsis-vertical" size={24} color="black" />
                  </TouchableOpacity>
              </View>
          </View>
          {showDropdown && (
    <View style={styles.dropdownContainer}>
    <ScrollView style={styles.dropdownScrollView}>
        <View style={styles.dropdownMenu}>
            {/* <TouchableOpacity onPress={() => {router.navigate('DrawerScreens/createLead'); closeDropdown();}}>
                <Text style={styles.dropdownMenuItem}>Edit lead</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={() => {displayScreen(); closeDropdown();}}>
                <Text style={styles.dropdownMenuItem}>View</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={handleChangeStatus}>
                <Text style={styles.dropdownMenuItem}>Change Status</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleConvertLead()}>
                <Text style={styles.dropdownMenuItem}>Convert Lead</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleReassign()}>
                <Text style={styles.dropdownMenuItem}>Reassign</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
</View>
 
          )}
          </View>
      </TouchableOpacity>
 
 
);
};
const styles = {
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000002',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    badgeBox:{
        flexDirection:'row',
        
        width:300
       
 
    },
    badgeSecond:{
       
        marginLeft:-70,
       
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
    },
    avatarContainer: {
        marginRight: 10,
    },
    image:
    {
        height:60,
        width:30,
    },
    avatar: {
        width:  40,
        height: 40,
        borderRadius: 20,
    },
    badgeContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5,
      },
      badge: {
        marginBottom: 1,
        marginRight:150,
        width:80,
        flexDirection:'row',
      },
      smallButton: {
        padding: 5,
      },
      smallButton: {
        padding: 3,
        backgroundColor: 'lightgray',
        borderRadius: 2,
      },
      actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dropdownIcon: {
        marginLeft: 10,
    },
    dropdownContainer: {
        position: 'absolute',
        top: -10, // Adjust this value to move the dropdown above the card
        right: 20,
        width: 'auto',
        zIndex: 999,
    },
    dropdownScrollView: {
        maxHeight: 200, // Set max height for scroll view
    },
    dropdownMenu: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 3,
        zIndex: 999,
    },
    dropdownMenuItem: {
        fontSize: 16,
        paddingVertical: 8,
    },
     
    //   filterIcon: {
    //     marginLeft: 10,
    //   },
   
};
export default LeadItem;  
 
 
 
 