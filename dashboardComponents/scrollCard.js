import React from "react";
import { StyleSheet, Text, View } from "react-native";
 
const Scrollcard = ({ label, total }) => {
    return (
        <View style={styles.cardscroll}>
            <Text style={styles.cardText}>{label}</Text>
            <Text style={styles.cardTexttotal}>{total}</Text>
        </View>
    );
};
 
const styles = StyleSheet.create({
    cardscroll: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 12, // Increased padding to make the card bigger
        marginHorizontal: 10,
        height: 73, // Increased height to make the card bigger
        width: 120, // Increased width to make the card bigger
    },
    cardText: {
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
    },
    cardTexttotal: {
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
});
 
export default Scrollcard;