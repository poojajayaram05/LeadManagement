
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { router } from 'expo-router';
import { Badge } from 'react-native-elements';
import { Image } from 'react-native-elements';
//import {handleNewButtonClick} from 'react-native-elements';
import { starTwo,starrOne } from '../../assets/images';
import {profile} from '../../assets/images'
import BadgeLead from '../BadgeLead';
import { FontAwesome } from '@expo/vector-icons';




const LeadItem = ({ firstName, lastName, email, phone, onViewPress, status, temperature, id }) => {
    const [showSecondImage, setShowSecondImage] = useState(false);
    const[selectedStar, setSelectedStar]=useState(false);


    const handleSelectStar=()=>{
        setSelectedStar(!selectedStar)
        console.log("star selecteddddd",id)

}

// const Selected = require('../../assets/images/starrOne.jpg');
// const UnSelected = require('../../assets/images/starTwo.png');
    const renderBadge = () => {

        if (status === 'open') {
            //return <Badge value={<Text> Sale </Text>} status="success" badgeStyle={styles.badge} />;
           return <BadgeLead label={'Sale'} color={'#857471'} textColor="white"/>
        } else if (status === 'contacted') {
            // return <Badge value={<Text> Closed </Text>} status="error" badgeStyle={styles.badge} />;
            return <BadgeLead label={'Closed'} color={'#C02DD9'} textColor="white"/>
        } else if (status === 'qualified') {
            // return <Badge value={<Text> New Lead </Text>} status="primary" badgeStyle={styles.badge} />;
            return <BadgeLead label={'New Lead'} color={'maroon'} textColor="white"/>
        } else if (status === 'accepted') {
            // return <Badge value={<Text >Negotiating </Text>} status="warning" badgeStyle={styles.badge} />;
            return <BadgeLead label={'Negotiating'} color={'green'} textColor="white"/>
        }  
        return null;
    };

    const renderTemperatureBadge = () => {
        let temperatureBadgeColor;
        switch (temperature) {
          case 'hot':
            temperatureBadgeColor = 'red';
            txtColor="white";
            break;
          case 'warm':
            temperatureBadgeColor = 'orange';
            txtColor="white";
            break;
          case 'cold':
            temperatureBadgeColor = '#448DD0';
            txtColor="white";
            break;
          default:
            temperatureBadgeColor = 'grey';
            txtColor="white";
        }
    //return <Badge value={<Text>{temperature}</Text>} status={temperatureBadgeColor} badgeStyle={styles.badge} />;
    return <BadgeLead color={temperatureBadgeColor} label={temperature} textColor={txtColor} />
      };

    // const displayScreen = () => {
    //     router.replace(`user/${id}`); 
    // };

    const toggleSecondImage = () => {
        setShowSecondImage(!showSecondImage);
      };
      // const handleNewButtonClick = () => {
      //   // logic for the 'New' button
      // }; 

      const handleFilterClick = () => {
        console.log('Filter clicked!');
      };              


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.item}>
                <View style={styles.avatarContainer}>
                    <Image
            source={profile}
            style={{ width: 40, height: 40, borderRadius: 20, marginBottom:10 }}
          />
          
{/* <TouchableOpacity onPress={handleNewButtonClick} style={styles.smallButton}>
            <Text>New</Text>
          </TouchableOpacity> */}
                </View>
                <View  style={styles.textContainer}>
                    <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
                    <Text style={styles.subtitle}>{email}</Text>
                    <Text style={styles.subtitle}>{phone}</Text>
                    <View style={styles.badgeBox}>
                    <View>
                    {renderBadge()}
                    </View>
                    <View style={styles.badgeSecond}>
                    {renderTemperatureBadge()}
                    </View> 
                    </View>
                </View>
                <View style={styles.badgeContainer}>
                <TouchableOpacity onPress={handleSelectStar}>
            <Image
              style={styles.image}
              source={selectedStar ? starTwo : starrOne}
              resizeMode="contain"
            />
          </TouchableOpacity>
             
                </View>
                {/* <TouchableOpacity onPress={handleFilterClick} style={styles.filterIcon}>
          <FontAwesome name="filter" size={24} color="black" />
        </TouchableOpacity> */}
            </View>
        </View>
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
      
    //   filterIcon: {
    //     marginLeft: 10,
    //   },
   
};
export default LeadItem;  



