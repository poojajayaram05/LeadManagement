// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const App = () => {
//   const data = [
//     { 
//       "requirement": "requirement 1",
//       "description": "high demand",
//       "product": "topaz",
//       "expected_date": "15 days",
//       "value": 456000
//     },
//     {
//       "requirement": "requirement 2",
//       "description": "low demand",
//       "product": "diamond",
//       "expected_date": "6 months",
//       "value": 958000
//     }
//   ];

//   return (
//     <View style={styles.container}>
//       {data.map((item, index) => (
//         <View key={index} style={styles.card}>
//           <Text style={styles.label}>Requirement: {item.requirement}</Text>
//           <Text style={styles.label}>Product: {item.product}</Text>
//           <Text style={styles.label}>Expected Date: {item.expected_date}</Text>
//           <Text style={styles.label}>Value: {item.value}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: 8,
//     padding: 16,
//     marginVertical: 8,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     width: '80%',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
// });

// export default App;

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for icons
import LeadDet from '../../leadComponents/leadDetHeader';

export default function Requirements() {
  const data = [
    { 
      "requirement": "Requirement 1",
      "description": "high demand",
      "product": "topaz",
      "expected_date": "15 days",
      "value": 456000
    },
    {
      "requirement": "Requirement 2",
      "description": "low demand",
      "product": "diamond",
      "expected_date": "6 months",
      "value": 958000
    }
  ];

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          {/* Add icon corresponding to the "requirements" */}
          <FontAwesome name="list-alt" size={28} color="black" />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.boldText]}>{item.requirement}</Text>
            <Text style={styles.text}>Description: {item.description}</Text>
            <Text style={styles.text}>Product: {item.product}</Text>
            <Text style={styles.text}>Expected Date: {item.expected_date}</Text>
            <Text style={styles.text}>Value: {item.value}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </View>
  );

  return (
    <View style={styles.container}>
          <View style={{ height:'30%' }}>
           <LeadDet/>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boldText: {
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
});


