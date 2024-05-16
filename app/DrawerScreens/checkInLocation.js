import { View, Button, StyleSheet, Dimensions, Alert,Text } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function CheckInLocation() {
    const [location, setLocation] = useState({});
    const [errorMsg, setErrorMsg] = useState();
    const[lastCheckedTime, setLastCheckedTime]=useState();


    const getCurrentLocation = async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert('Permission to access location was denied');
            return;
        }

        let locationLead = await Location.getCurrentPositionAsync({});
        setLocation(locationLead);
        setLastCheckedTime(timestampToTime(locationLead.timestamp))
        console.log("current location", locationLead);
    };
    

    function timestampToTime(timestamp) {
        // Create a new Date object with the timestamp
        const date = new Date(timestamp);
    
        // Get the hours, minutes, and seconds
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
    
        // Format the time string
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
        return formattedTime;
    }
    
    const locationCheckOut=()=>{
        console.log("location checked out!!")
        setLocation('');
    
        Alert.alert(`You are checked out at ${timestampToTime(new Date)}`)
    }

    const time = timestampToTime(location.timestamp);

    return (
        <View>
            {location==''&&
            
            <View style={styles.locationButton}>
              
               
            <Button title='Check In' onPress={getCurrentLocation} color={"#023B5E"} />
            </View>
            }
            {location.coords && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude||'',
                        longitude: location.coords.longitude||'',
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Your Location"
                        description={`Checked-In at ${time}`}
                    />
                </MapView>
            )}
           
            <View style={styles.locationButton}>
            <Button title='Check out' onPress={locationCheckOut} color={"#023B5E"}></Button>
            </View>
                    
        
        </View>
    
    );
}

const styles = StyleSheet.create({
    map: {
        alignItems:'center',
        width: Dimensions.get('window').width * 0.99,
        height: Dimensions.get('window').height * 0.7,
      
    },
    locationButton:{
      
        flexDirection: 'column', // Align items horizontally
        alignItems: 'center', // Align items to the start (left)
        justifyContent: 'center', // Align items to the start (left)
        padding: 10,
        marginTop:10
    
    }
});
