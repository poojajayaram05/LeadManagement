import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LeadDetail from '../../leadComponents/leadDetailHeader';
import LeadDet from '../../leadComponents/leadDetHeader';
 
const Info = () => {
    return (
        <View style={styles.body}>
          <View style={{ height:'27%' }}>
           <LeadDet/>
      </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
               
                {/* <Text style={styles.title}>Lead details</Text>
                <Text style={styles.data}>Lead Name: </Text>
                <Text style={styles.detail}>---</Text>
 
                <View style={styles.divider} /> */}
 
                <Text style={styles.title}>Communication</Text>
                <Text style={styles.data}>Emails: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>Phone Number: </Text>
                <Text style={styles.detail}>---</Text>
 
                <View style={styles.divider} />
 
                <Text style={styles.title}>Location</Text>
                <Text style={styles.data}>Address: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>City: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>State: </Text>
                <Text style={styles.detail}>----</Text>
                <Text style={styles.data}>Country:</Text>
                <Text style={styles.detail}>----</Text>
                <Text style={styles.data}>Zipcode: </Text>
                <Text style={styles.detail}>---</Text>
 
                <View style={styles.divider} />
 
                <Text style={styles.title}>Professional</Text>
                <Text style={styles.data}>Company Name: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>Designation: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>Company City: </Text>
                <Text style={styles.detail}>---</Text>
                <Text style={styles.data}>Company Country: </Text>
                <Text style={styles.detail}>---</Text>
               
            </View>
        </ScrollView>
        </View>
    );
};
 
const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    body:{
        backgroundColor: 'white',
        flex: 1,
    },
    container: {
        flex: 1,
       
        marginHorizontal: 30,
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        // textAlign: 'center',
    },
    detail: {
        fontSize: 14,
        marginBottom: 15,
    },
    data: {
        color: '#023B5E',
        fontSize: 14,
        fontWeight: 'bold',
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
});
 
export default Info;