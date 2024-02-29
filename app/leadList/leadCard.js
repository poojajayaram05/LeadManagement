
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { router } from 'expo-router';
import { Badge } from 'react-native-elements';
import { Image } from 'react-native-elements';
import {handleNewButtonClick} from 'react-native-elements';
import { starTwo,starrOne } from '../../assets/images';
import {images} from '../../assets/images';


const LeadItem = ({ firstName, lastName, email, phone, onViewPress, status, id }) => {
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
            return <Badge value={<Text>Open</Text>} status="success" badgeStyle={styles.badge} />;
        } else if (status === 'contacted') {
            return <Badge value={<Text>Contacted</Text>} status="error" badgeStyle={styles.badge} />;
        } else if (status === 'qualified') {
            return <Badge value={<Text>Qualified</Text>} status="primary" badgeStyle={styles.badge} />;
        } else if (status === 'accepted') {
            return <Badge value={<Text>Accepted</Text>} status="warning" badgeStyle={styles.badge} />;
        }

        return null;
    };

    const displayScreen = () => {
        router.replace(`user/${id}`); 
    };

    const toggleSecondImage = () => {
        setShowSecondImage(!showSecondImage);
      };
      const handleNewButtonClick = () => {
        // logic for the 'New' button
      };
    

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.item}>
                <View style={styles.avatarContainer}>
                    <Image
            source={images}
            style={{ width: 40, height: 40, borderRadius: 20, marginBottom:10 }}
          />

<TouchableOpacity onPress={handleNewButtonClick} style={styles.smallButton}>
            <Text>New</Text>
          </TouchableOpacity>
                </View>
                <View onPress={displayScreen} style={styles.textContainer}>
                    <Text onPress={displayScreen} style={styles.title}>{`${firstName} ${lastName}`}</Text>
                    <Text onPress={displayScreen} style={styles.subtitle}>{email}</Text>
                    <Text onPress={displayScreen} style={styles.subtitle}>{phone}</Text>
                </View>
                <View style={styles.badgeContainer}>
                <TouchableOpacity onPress={handleSelectStar}>
            <Image
              style={styles.image}
              source={selectedStar ? starTwo : starrOne}
              resizeMode="contain"
            />
          </TouchableOpacity>
                    {/* {renderBadge()}     */}
                </View>
            </View>
        </View>
    );
};

const styles = {
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f2',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
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
        flexDirection: 'row',
        alignItems: 'center', 
        marginTop: 5,
      },
      badge: {
        marginBottom: 1,
        marginRight:8,
      },
      smallButton: {
        padding: 5,
      },
      smallButton: {
        padding: 3,
        backgroundColor: 'lightgray',
        borderRadius: 2,
      },
    
};
export default LeadItem;  


