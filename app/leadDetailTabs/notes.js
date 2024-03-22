// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import FloatingButton from '../../customComponents/floatingButton';
// import { router } from 'expo-router'
// import useIdStore from '../leadStore';

// export default function Notes() {
//   const goToLeadNote = () => {
//     router.navigate(`/formComponents/createLeadNote`);
//   };

//   const leadId = useIdStore((state) => state.leadId); 
// console.log('ID retrieved:', leadId);
//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.title}>Notes</Text> */}
//       <View style={styles.boxContainer}>
//         <View style={styles.box}>
//           <Text>Lead is searching for high value property</Text>
//         </View>
//         <View style={styles.infoContainer}>
//           <Text style={styles.infoText}>Added by : Lee James on 13-03-2024</Text>
//         </View>
//       </View>
//       <View style={styles.boxContainer}>
//         <View style={styles.box}>
//           <Text>Lead follow up needed</Text>
//         </View>
//         <View style={styles.infoContainer}>
//           <Text style={styles.infoText}>Added by : Lee James on 13-03-2024</Text>
//         </View>
//       </View>
//       <FloatingButton onPress={goToLeadNote} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     // marginBottom: 20,
//   },
//   boxContainer: {
//     // marginBottom: 90, 
//   },
//   box: {
//     backgroundColor: '#f0f1f2',
//     borderRadius: 10,
//     padding: 13,
//     height:50, 
//     alignItems:'center'
//   },
//   infoContainer: {
//     marginTop: 0,
//     alignItems: 'flex-end',
//     height:50,
//     // marginLeft:2,
//   },
//   infoText: {
//     fontSize: 12,
//   },
// });

import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import FloatingButton from '../../customComponents/floatingButton';
import LeadDet from '../../leadComponents/leadDetHeader';

export default function Notes() {
  const data = [
    {
      "name": "Notes 1",
      "description": "Meeting with client to discuss project requirements",
      "created_at": "2024-03-22T10:30:00",
      "created_by": "John Doe"
    },
    {
      "name": "Notes 2",
      "description": "Prepare presentation slides for the sales pitch",
      "created_at": "2024-03-23T14:00:00",
      "created_by": "Jane Smith"
    },
    {
      "name": "Notes 3",
      "description": "Review and finalize the budget proposal",
      "created_at": "2024-03-24T09:00:00",
      "created_by": "Alex Johnson"
    }
  ];

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
        <FontAwesome name="sticky-note" size={24} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.boldText]}>{item.name}</Text>
          <Text style={styles.text}>Description: {item.description}</Text>
          <Text style={styles.text}>Created At: {item.created_at}</Text>
          <Text style={styles.text}>Created By: {item.created_by}</Text>
        </View>
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
      <FloatingButton />
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
    borderRadius: 20,
    // backgroundColor: 'lightgray',
    padding: 5,
  },
  textContainer: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

