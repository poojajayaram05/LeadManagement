// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
// const ProductCard = ({ category, sub_category, description, product, price, quantity }) => {
//     const handleCardPress = () => {
//         // Implement your logic when the card is pressed
//     };
 
//     return (
//         <TouchableOpacity onPress={handleCardPress}>
//             <View style={styles.section}>
//                 <View style={styles.detailBox}>
//                     <Text style={[styles.title, { color: "#023B5E" }]}>Category: {category}</Text>
//                     <Text style={[styles.detailText, styles.boldText]}>Sub Category: {sub_category}</Text>
//                     <Text style={[styles.detailText, { color: "grey" }]}>Description: {description}</Text>
//                     <Text style={[styles.detailText, { color: "grey" }]}>Product Name:{product}</Text>
//                     <Text style={[styles.detailText, { color: "#023B5E", }]}>Price:{price}</Text>
//                     <Text style={[styles.detailText, { color: "#023B5E", }]}>Quantity:{quantity}</Text>
//                     {/* <Text style={[styles.detailText, { color: "grey" }]}>{currency}</Text> */}
//                 </View>
//             </View>
//             <View style={styles.separator}></View>
//         </TouchableOpacity>
//     );
// };
 
// const styles = StyleSheet.create({
//     section: {
//         flexDirection: "row",
//         alignItems: "center",
//         padding: 10,
//     },
//     detailBox: {
//         flex: 1,
//     },
//     separator: {
//         height: 1,
//         backgroundColor: "#CCCCCC",
//     },
//     dropdown: {
//         position: 'absolute',
//         top: 40,
//         right: 10,
//         backgroundColor: 'white',
//         borderRadius: 5,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },
//     dropdownItem: {
//         padding: 10,
//         fontSize: 16,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: "bold",
//         marginBottom: 2,
//     },
//     detailText: {
//         fontSize: 16,
//         marginBottom: 2,
//     },
//     boldText: {
//         fontWeight: 'bold',
//     },
// });
 
// export default ProductCard;


import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ category, sub_category, description, product, price, quantity }) => {
    const handleCardPress = () => {
        // Implement your logic when the card is pressed
    };

    return (
        <TouchableOpacity onPress={handleCardPress}>
            <View style={styles.section}>
                <View style={styles.labelBox}>
                    <Text style={styles.detailText}>Category:</Text>
                    <Text style={styles.detailText}>Sub Category:</Text>
                    <Text style={styles.detailText}>Description:</Text>
                    <Text style={[styles.detailText,styles.boldText]}>Product Name:</Text>
                    <Text style={styles.detailText}>Price:</Text>
                    <Text style={styles.detailText}>Quantity:</Text>
                </View>
                <View style={styles.detailBox}>
                    <Text style={[styles.detailText, { color: "#023B5E" }]}>{category}</Text>
                    <Text style={[styles.detailText]}>{sub_category}</Text>
                    <Text style={[styles.detailText, { color: "grey" }]}>{description}</Text>
                    <Text style={[styles.detailText, { color: "black" },styles.boldText]}>{product}</Text>
                    <Text style={[styles.detailText, { color: "#023B5E", }]}>{price}</Text>
                    <Text style={[styles.detailText, { color: "#023B5E", }]}>{quantity}</Text>
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
    labelBox: {
        flex: 1,
        paddingRight: 20,
    },
    detailBox: {
        flex: 2,
        left:90,
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 2,
    },
    detailText: {
        fontSize: 14,
        marginBottom: 2,
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default ProductCard;

 