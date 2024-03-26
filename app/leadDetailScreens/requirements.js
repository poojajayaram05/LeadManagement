// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for icons
// import LeadDet from '../../leadComponents/leadDetHeader';
// import FloatingButton from '../../customComponents/floatingButton';
// import LeadDetailCard from '../../customComponents/leadDetailCard';
// import { router } from 'expo-router';
 
// export default function Requirements() {
//   const data = [
//     {
//       "requirement": "Requirement 1",
//       "description": "high demand",
//       "product": "topaz",
//       "expected_date": "15 days",
//       "value": 456000
//     },
//     {
//       "requirement": "Requirement 2",
//       "description": "low demand",
//       "product": "diamond",
//       "expected_date": "6 months",
//       "value": 958000
//     }
//   ];
 
 
//   const goToCreateRequirement = () => {
//     router.navigate('/formComponents/createRequirement')
//   }
 
//   const renderItem = ({ item }) => {
//     const { requirement, description, product } = item;
//     const reqData = {requirement, description, product};
    
    


//     return(
//     <View>
//       <View>
//         <Text>{item.requirement}</Text>
//       </View>
//         <LeadDetailCard obj={reqData} name="list-alt" />
      
//       <View style={styles.divider} />
//     </View>
//     )
//   }
 
//   return (
//     <View style={styles.container}>
//           <View style={{ height:'27%' }}>
//            <LeadDet/>
//       </View>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//       />
//       <FloatingButton onPress={goToCreateRequirement} />
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   iconContainer: {
//     marginRight: 10,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: 'black',
//     marginHorizontal: 20,
//   },
// });

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for icons
import LeadDet from '../../leadComponents/leadDetHeader';
import FloatingButton from '../../customComponents/floatingButton';
import LeadDetailCard from '../../customComponents/leadDetailCard';
import { router } from 'expo-router';
 
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
 
  const goToCreateRequirement = () => {
    router.navigate('/formComponents/createRequirement')
  }
 
  const renderItem = ({ item }) => {
    const { requirement, description, product } = item;
    const reqData = { description, product};
   
    return(
    <View>
      <View style={styles.title}>
        <Text style={styles.titletext}>{item.requirement}</Text>
      </View>
        <LeadDetailCard obj={reqData} name="list-alt" />
      {/* <View style={styles.divider} /> */}
    </View>
    )
  }
 
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
      <FloatingButton onPress={goToCreateRequirement} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  title:{
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    flexDirection:'row',
    maxWidth: '90%',
    padding: 5,
    borderRadius: 10,
     backgroundColor:'#023B5E',
  },
  titletext:{
    fontWeight:'bold',
    color:'white'
   },
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
    marginBottom:10,
  },
});