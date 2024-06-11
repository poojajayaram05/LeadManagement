import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Dropdown from '../../customComponents/customDropdown';
import { Lead } from '../../assets/images';
import { LeadLocation } from '../../assets/images';

const MapScreen = () => {
  const options = [
    { value: 1, label: 'Less than 5 kms' },
    { value: 2, label: 'Less than 10 kms' },
    { value: 3, label: 'More than 10 Kms' },
  ];

  const addresses = [
    {
      name: 'John',
      address: 'Kempegowda International Airport, Bangalore, Karnataka, India',
      latitude: 13.1986,
      longitude: 77.7066,
    },
    {
      name: 'Jane',
      address: 'Vidhana Soudha, Bengaluru, Karnataka, India',
      latitude: 12.9794,
      longitude: 77.5913,
    },
    {
      name: 'Michael',
      address: 'Bannerghatta National Park, Bengaluru, Karnataka, India',
      latitude: 12.8008,
      longitude: 77.5770,
    },
  ];
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("current location", location)
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Select the radius</Text>
        <Dropdown label="Select Option" data={options} onSelect={(item) => console.log(item)} />
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude: location ? location.coords.latitude : 37.78825,
            longitude: location ? location.coords.longitude : -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {addresses.map((address, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: address.latitude, longitude: address.longitude }}
              title={address.name}
              
            />
          ))}
        </MapView>
      </View>
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    // paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  formContainer: {
    paddingHorizontal: 20,
    // marginBottom: 20,
  },
});

export default MapScreen;
