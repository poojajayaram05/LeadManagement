import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../../customComponents/customLeadHeader';
 import { router } from 'expo-router';
const MyAccount = () => {
  // Sample data for demonstration
  const userData = {
    firstName: 'Somnath',
    lastName: '',
    phoneNumber: '9987654356',
    email: 'somnath.bhattacharya@gmail.com',
  };
 
  const goBack = () => {
    router.back();
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader title={"My Account"} onPress={goBack}/>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.value}>{userData.firstName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.value}>{userData.lastName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.value}>{userData.phoneNumber}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userData.email}</Text>
        </View>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginLeft: 10,
  },
});
 
export default MyAccount;