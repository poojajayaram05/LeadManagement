// import React, { useState } from 'react';
// import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';

// const YourComponent = () => {
//   const [isAnotherPageVisible, setAnotherPageVisible] = useState(false);

//   const handlePlusButtonPress = () => {
//     // Toggle the state to show/hide another page
//     setAnotherPageVisible(!isAnotherPageVisible);
//   };

//   return (
//     <View style={styles.container}>
//       {isAnotherPageVisible ? (
//         // Render another page component when the state is true
//         <View style={styles.anotherPage}>
//           <Text>This is another page!</Text>
//           {/* Add your content for the another page */}
//         </View>
//       ) : (
//         // Render your main component when the state is false
//         <TouchableOpacity style={styles.plusButton} onPress={handlePlusButtonPress}>
//           <FontAwesome name="plus" size={24} color="white" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   plusButton: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     backgroundColor: '#4789e6',
//     padding: 15,
//     borderRadius: 30,
//     elevation: 4,
//   },
//   anotherPage: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightgrey',
//   },
// });

// export default YourComponent;

import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {task} from '../app/Task/task';

const goToTask = () => {
  const [isAnotherPageVisible, setAnotherPageVisible] = useState(false);

  const handlePlusButtonPress = () => {
    // Toggle the state to show/hide another page
    setAnotherPageVisible(!isAnotherPageVisible);
  };

  return (
    <View style={styles.container}>
      {isAnotherPageVisible ? (
        // Render another page component when the state is true
        <AnotherPage />
      ) : (
        // Render your main component when the state is false
        <TouchableOpacity style={styles.plusButton} onPress={handlePlusButtonPress}>
          <FontAwesome name="plus" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const AnotherPage = () => {
  return (
    <View style={styles.anotherPage}>
      <Text>This is another page!</Text>
      {/* Add your content for the another page */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4789e6',
    padding: 15,
    borderRadius: 30,
    elevation: 4,
  },
  anotherPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
});

export default goToTask;