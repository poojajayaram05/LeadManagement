// import { View, Button, StyleSheet, Dimensions, Alert,Text } from 'react-native';
// import React, { useState } from 'react';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';

// export default function CheckInLocation() {
//     const [location, setLocation] = useState({});
//     const [errorMsg, setErrorMsg] = useState();
//     const[lastCheckedTime, setLastCheckedTime]=useState();


//     const getCurrentLocation = async () => {
        
//         let { status } = await Location.requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//             Alert('Permission to access location was denied');
//             return;
//         }

//         let locationLead = await Location.getCurrentPositionAsync({});
//         setLocation(locationLead);
//         setLastCheckedTime(timestampToTime(locationLead.timestamp))
//         console.log("current location", locationLead);
//     };
    

//     function timestampToTime(timestamp) {
//         // Create a new Date object with the timestamp
//         const date = new Date(timestamp);
    
//         // Get the hours, minutes, and seconds
//         const hours = date.getHours();
//         const minutes = date.getMinutes();
//         const seconds = date.getSeconds();
    
//         // Format the time string
//         const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
//         return formattedTime;
//     }
    
//     const locationCheckOut=()=>{
//         console.log("location checked out!!")
//         setLocation('');
    
//         Alert.alert(`You are checked out at ${timestampToTime(new Date)}`)
//     }

//     const time = timestampToTime(location.timestamp);

//     return (
//         <View>
//             {location==''&&
            
//             <View style={styles.locationButton}>
              
               
//             <Button title='Check In' onPress={getCurrentLocation} color={"#023B5E"} />
//             </View>
//             }
//             {location.coords && (
//                 <MapView
//                     style={styles.map}
//                     initialRegion={{
//                         latitude: location.coords.latitude||'',
//                         longitude: location.coords.longitude||'',
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }}
//                 >
//                     <Marker
//                         coordinate={{
//                             latitude: location.coords.latitude,
//                             longitude: location.coords.longitude,
//                         }}
//                         title="Your Location"
//                         description={`Checked-In at ${time}`}
//                     />
//                 </MapView>
//             )}
           
//             <View style={styles.locationButton}>
//             <Button title='Check out' onPress={locationCheckOut} color={"#023B5E"}></Button>
//             </View>
                    
        
//         </View>
    
//     );
// }

// const styles = StyleSheet.create({
//     map: {
//         alignItems:'center',
//         width: Dimensions.get('window').width * 0.99,
//         height: Dimensions.get('window').height * 0.7,
      
//     },
//     locationButton:{
      
//         flexDirection: 'column', // Align items horizontally
//         alignItems: 'center', // Align items to the start (left)
//         justifyContent: 'center', // Align items to the start (left)
//         padding: 10,
//         marginTop:10
    
//     }
// });


import { CHECKIN_LOCATION } from '../../../config';
// import { CHECKIN_LOCATION } from '../../config';
import { View, Button, StyleSheet, Dimensions, Alert, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as SecureStore from 'expo-secure-store';
 
export default function CheckInLocation() {
    const [location, setLocation] = useState({});
    const [errorMsg, setErrorMsg] = useState();
    const [previousLocations, setPreviousLocations] = useState([]);
    const [apiToken, setApiToken] = useState('');
    const [lastCheckedTime, setLastCheckedTime] = useState('');
 
    useEffect(() => {
        const getToken = async () => {
            const token = await SecureStore.getItemAsync('token');
            const parsedToken = JSON.parse(token);
            setApiToken(parsedToken.accessToken);
        };
        getToken();
    }, []);
 
    useEffect(() => {
        if (apiToken) {
            getPreviousCheckins();
        }
    }, [apiToken]);
 
    const getPreviousCheckins = async () => {
        try {
            const response = await fetch(CHECKIN_LOCATION, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiToken}`
                },
            });
            const data = await response.json();
            setPreviousLocations(data.result);
        } catch (error) {
            console.error('Error fetching previous check-ins:', error);
        }
    };
 
    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission to access location was denied');
            return;
        }
 
        let locationLead = await Location.getCurrentPositionAsync({});
        setLocation(locationLead);
        setLastCheckedTime(timestampToTime(locationLead.timestamp));
        const locationData = {
            latitude: locationLead.coords.latitude,
            longitude: locationLead.coords.longitude,
            altitude: locationLead.coords.altitude,
            speed: locationLead.coords.speed,
            accuracy: locationLead.coords.accuracy,
            timestamp: locationLead.timestamp,
            heading: locationLead.coords.heading,
            altitude_accuracy: locationLead.coords.altitudeAccuracy,
        };
        saveToDatabase(locationData);
    };
 
    const saveToDatabase = async (locationData) => {
        try {
            const response = await fetch(CHECKIN_LOCATION, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiToken}`
                },
                body: JSON.stringify(locationData)
            });
            console.log("response", response);
        } catch (e) {
            console.log(locationData);
            console.log(e);
        }
    };
 
    function timestampToTime(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        return formattedTime;
    }
 
    const locationCheckOut = () => {
        console.log("location checked out!!");
        setLocation(location,timestamp);
        Alert.alert(`You are checked out at ${timestampToTime(new Date().getTime())}`);
    };
 
    const time = timestampToTime(location.timestamp);
 
    return (
        <View>
            {location.coords === undefined && (
                <View style={styles.locationButton}>
                    <Button title='Check In' onPress={getCurrentLocation} color={"#023B5E"} />
                </View>
            )}
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.coords ? location.coords.latitude : 12.9557409,
                    longitude: location.coords ? location.coords.longitude : 77.6420223,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {location.coords && (
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Your Location"
                        description={`Checked-In at ${timestampToTime(loc.timestamp)}`}
                    />
                )}
                {previousLocations.map((loc, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: parseFloat(loc.latitude),
                            longitude: parseFloat(loc.longitude),
                        }}
                        title={`Previous Location ${index + 1}`}
                        description={`Checked-In at ${timestampToTime(loc.timestamp)}`}
                    />
                ))}
            </MapView>
            <View style={styles.locationButton}>
                <Button title='Check out' onPress={locationCheckOut} color={"#023B5E"} />
            </View>
            <View>
                <Text>Previous Check-in Times:</Text>
                <ScrollView>
                    {previousLocations.map((loc, index) => (
                        <Text key={index}>{timestampToTime(loc.timestamp)}</Text>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    map: {
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.99,
        height: Dimensions.get('window').height * 0.7,
    },
    locationButton: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 10
    }
});
 
