import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
const CallLogCard = ({PhoneNumber, Type, Outcome, Time, Date }) => {
    const handleCardPress = () => {
        // Implement your logic when the card is pressed
    };
 
    return (
        <TouchableOpacity onPress={handleCardPress}>
            <View style={styles.section}>
            <Ionicons name="call" size={24} color="#023B5E" style={styles.icon} />
                <View style={styles.detailBox}>
                    <Text style={[styles.detailText, styles.boldText]}>{Type}</Text>
                    <Text style={[styles.title, { color: "#023B5E" }]}>{PhoneNumber}</Text>
                    <Text style={[styles.detailText, { color: "grey" }]}>{Outcome}</Text>
                    <Text style={[styles.detailText, { color: "#023B5E" }]}>{Time}       {Date}</Text>
                    {/* <Text style={[styles.detailText, { color: "grey" }]}>{currency}</Text> */}
                </View>
            </View>
            <View style={styles.separator}></View>
        </TouchableOpacity>
    );
};
 
const styles = StyleSheet.create({
    section: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    detailBox: {
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC",
    },
    dropdown: {
        position: 'absolute',
        top: 40,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    dropdownItem: {
        padding: 10,
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 2,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 2,
    },
    boldText: {
        fontWeight: 'bold',
    },
 
    icon: {
        marginRight: 10,
    },
});
 
export default CallLogCard;