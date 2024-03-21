// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// const ImageUpload = ({ }) => {
//   const [selectedImage] = useState(null);

//   const handleImageSelect = () => {
//     // Implement logic for selecting an image
//   };

//   return (
//     <View style={styles.container}>
//       {selectedImage ? (
//         <Image source={{ uri: selectedImage }} style={styles.image} />
//       ) : (
//         <TouchableOpacity onPress={handleImageSelect}>
//           <Text>Select Image</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'cover',
//   },
// });

// export default ImageUpload;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage(pickerResult.uri);
  };

  return (
    <View style={styles.container}>
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      ) : (
        <TouchableOpacity onPress={handleImageSelect}>
          <Text>Select Image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default ImageUpload;

