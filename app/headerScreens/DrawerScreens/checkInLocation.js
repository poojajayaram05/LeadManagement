import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Dimensions, Alert, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { CHECKIN_LOCATION } from '../../../config';
import * as SecureStore from 'expo-secure-store';

//const CHECKIN_LOCATION = 'https://example.com/checkin_location'; // Replace with your API endpoint

export default function CheckInLocation() {
    const [location, setLocation] = useState(null);
    const [lastCheckedTime, setLastCheckedTime] = useState('');
    const [apiToken, setApiToken] = useState('');

    useEffect(() => {
        const getToken = async () => {
            const token = await SecureStore.getItemAsync('token');
            const parsedToken = JSON.parse(token);
            setApiToken(parsedToken.accessToken);
        };
        getToken();
    }, []);

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

    const timestampToTime = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        return formattedTime;
    };

    const locationCheckOut = () => {
        setLocation(null);
        Alert.alert(`You are checked out at ${timestampToTime(new Date().getTime())}`);
    };

    return (
        <View style={styles.container}>
            {!location ? (
                <View style={styles.locationButton}>
                    <Button title='Check In' onPress={getCurrentLocation} color={"#023B5E"} />
                </View>
            ) : (
                <>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: location.coords.latitude || 0,
                            longitude: location.coords.longitude || 0,
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
                            description={`Checked-In at ${lastCheckedTime}`}
                        />
                    </MapView>
                    <View style={styles.locationButton}>
                        <Button title='Check out' onPress={locationCheckOut} color={"#023B5E"} />
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get('window').width * 0.99,
        height: Dimensions.get('window').height * 0.7,
    },
    locationButton: {
        padding: 10,
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
