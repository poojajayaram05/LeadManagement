import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserDetails = ({ name, email, phoneNumber, jobRole, Location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/menicon.png')} 
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>

        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.value}>{phoneNumber}</Text>

        <Text style={styles.label}>Job Role:</Text>
        <Text style={styles.value}>{jobRole}</Text>

        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{Location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#b3d9ff', 
    width: 400,
    height: 300, 
    borderBottomLeftRadius: 200, 
    borderBottomRightRadius: 200, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 100, 
  },
  content: {
    width: '90%',
    padding:10,
    backgroundColor: '#e6f3ff', 
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#004080', 
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: '#3366cc', 
  },
});

export default UserDetails;
