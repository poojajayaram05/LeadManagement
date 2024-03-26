// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import React from 'react';
// import { FontAwesome, Ionicons } from '@expo/vector-icons';

// export default function LeadDetailCard({ obj, name }) {
//   const keys = Object.keys(obj);

//   return (
//     <View style={styles.card}>
//       <View style={styles.iconContainer}>
//         <FontAwesome name={name} size={28} color="black" />
//       </View>
//       <TouchableOpacity onPress={() => {}}>
//         <View style={styles.textContainer}>
//           {keys.map((key) => (
//             <View key={key} style={styles.detailContainer}>
//               <Text style={styles.boldText}>{key} : </Text>
//               <Text style={styles.text}>{obj[key]}</Text>
//             </View>
//           ))}
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 20,
//     // borderWidth: 1,
//     // borderColor: 'gray',
//     borderRadius: 5,
//     marginBottom: 10, // Add margin bottom to separate cards
//     backgroundColor: '#ffffff', // Set background color
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
//   text: {
//     fontSize: 14,
//     marginBottom: 5,
//     color: '#333333', // Set text color
//   },
//   iconContainer: {
//     marginRight: 10,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   detailContainer: {
//     marginBottom: 5,
//     flexDirection:'row',
//   },
// });

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
 
export default function LeadDetailCard({ obj, name }) {
  const keys = Object.keys(obj);
 
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <FontAwesome name={name} size={28} color="black" />
      </View>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.textContainer}>
          {keys.map((key) => (
            <View key={key} style={styles.detailContainer}>
              <Text style={styles.boldText}>{key} : </Text>
              <Text style={styles.text}>{obj[key]}</Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    // borderWidth: 1,
    // borderColor: 'gray',
    borderRadius: 5,
    // marginBottom: 10, // Add margin bottom to separate cards
    // backgroundColor: 'red',
  },
  boldText: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#333333', // Set text color
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  detailContainer: {
    flexDirection:'row',
    // backgroundColor:'yellow',
    maxWidth: '84%', // Set maximum width for detailContainer
    borderRadius: 5, // Optional: Add borderRadius to match the red box
    padding: 5, // Optional: Add padding for better visualization
  },
});
