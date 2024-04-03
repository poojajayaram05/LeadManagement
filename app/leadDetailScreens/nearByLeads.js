import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import LeadDet from '../../leadComponents/leadDetHeader';
import useIdStore from '../leadStore';
import Dropdown from '../../customComponents/customDropdown';

const MapScreen = () => {

     const locationFormData={
        "elements":[  
      
        {
          "name": "requirement",
          "type": "multiLineText",
          "title": "Requirement",
          "inputType": "text",
          "placeholder": "Notes",
          "dropdownData": [
            { "value": 1, "label": "Less than 5 kms" },
            { "value": 2, "label": "Less than 10 kms" },
            { "value": 3, "label": "More than 10 Kms" },
           
          ]
          
        }, ]}

        const options=  [
            { "value": 1, "label": "Less than 5 kms" },
            { "value": 2, "label": "Less than 10 kms" },
            { "value": 3, "label": "More than 10 Kms" },
           
          ]



  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const leadNumber = useIdStore((state) => state.number);

  const title = `${leadNumber} is here!!`;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
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
          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title={title}
            />
          )}
        </MapView>
      </View>
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start', // Align items to the left
        justifyContent: 'center',
        paddingHorizontal: 20, // Add horizontal padding for spacing
      },
      label: {
        fontWeight: 'bold', // Make the text bold
        marginBottom: 5, // Add bottom margin for spacing
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
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#023B5E",
    paddingBottom: 5,
    width: "100%",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default MapScreen;
