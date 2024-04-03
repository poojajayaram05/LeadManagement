import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';


const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const leadNumber = useIdStore((state) => state.number);

  const title=`${leadNumber} is here!!`

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
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#023B5E",
    paddingBottom:5,
    // paddingTop:20,
    width: "100%",
    marginBottom:5,
  },
});

export default MapScreen;
