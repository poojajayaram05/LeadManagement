// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Notes() {
//   return (
//     <View>
//       <Text>Nnotes</Text>
//     </View>
//   )
// }

//..............................

// import { View, Text } from 'react-native'
// import React from 'react'
// import FloatingButton from '../../customComponents/floatingButton'
// import { router } from 'expo-router'

// export default function Notes() {
//     const goToLeadNote=()=>{
//         router.navigate(`/DrawerScreens/form/createLeadNote`);
//     }
//   return (
//     <View>
//       <Text>Notes</Text>
//       <FloatingButton onPress={goToLeadNote}/>
//     </View>
//   )
// }
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FloatingButton from '../../customComponents/floatingButton';
import { router } from 'expo-router'
import useIdStore from '../leadStore';

export default function Notes() {
  const goToLeadNote = () => {
    router.navigate(`/formComponents/createNotes`);
  };

  const leadId = useIdStore((state) => state.leadId); 
console.log('ID retrieved:', leadId);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text>Lead is searching for high value property</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Added by : Lee James on 13-03-2024</Text>
        </View>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text>Lead follow up needed</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Added by : Lee James on 13-03-2024</Text>
        </View>
      </View>
      <FloatingButton onPress={goToLeadNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxContainer: {
    marginBottom: 90, 
  },
  box: {
    backgroundColor: '#f0f1f2',
    borderRadius: 10,
    padding: 13,
    height:50, 
    alignItems:'center'
  },
  infoContainer: {
    marginTop: 0,
    alignItems: 'flex-end',
    height:70,
    // marginLeft:2,
  },
  infoText: {
    fontSize: 12,
  },
});
