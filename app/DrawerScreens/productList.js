// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
// } from 'react-native';
// import { productData } from '../../customComponents/formData';

// const Item = ({ productName, categoryCode, productDescription, supplierName, rate, currency }) => (
//   <View style={styles.item}>
//      <Text style={[styles.title, {color: '#023B5E'}]}>{productName}</Text>
//     <Text style={styles.boldText}>{`Category: ${categoryCode}`}</Text>
//     <Text>{productDescription}</Text>
//     <Text>{supplierName}</Text>
//     <Text>{rate}</Text>
//     <Text>{currency}</Text>
//   </View>
// );

// const ProductItem = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={productData}
//         renderItem={({ item }) => (
//           <Item
//             productName={item.productName}
//             categoryCode={item.categoryCode}
//             productDescription={item.productDescription}
//             supplierName={item.supplierName}
//             rate={item.rate}
//             currency={item.currency}
//           />
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#f2f2f2',
//     padding: 20,
//     marginVertical: 2,
//     marginHorizontal: 4,
//   },
//   title: {
//     fontSize: 32,
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
// });

// export default ProductItem;


// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
// } from 'react-native';
// import { productData } from '../../customComponents/formData';

// const Item = ({ productName, categoryCode, productDescription, supplierName, rate, currency }) => (
//   <View style={styles.item}>
//     <Text style={[styles.title, {color: '#023B5E'}]}>{productName}</Text>
//     <Text style={styles.boldText}>{`Category: ${categoryCode}`}</Text>
//     <Text>{productDescription}</Text>
//     <Text>{supplierName}</Text>
//     <Text>{rate}</Text>
//     <Text>{currency}</Text>
//   </View>
// );

// const Separator = () => (
//   <View style={styles.separator}></View>
// );

// const ProductItem = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={productData}
//         renderItem={({ item }) => (
//           <>
//             <Item
//               productName={item.productName}
//               categoryCode={item.categoryCode}
//               productDescription={item.productDescription}
//               supplierName={item.supplierName}
//               rate={item.rate}
//               currency={item.currency}
//             />
//             <Separator />
//           </>
//         )}
//         keyExtractor={(item) => item.id}
//         ListFooterComponent={<View style={styles.separator} />}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#f2f2f2',
//     padding: 20,
//     marginVertical: 2,
//     marginHorizontal: 4,
//   },
//   title: {
//     fontSize: 32,
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
//   separator: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
//   },
// });

// export default ProductItem;

// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
// import { productData } from '../../customComponents/formData';

// const Item = ({ productName, categoryCode, productDescription, supplierName, rate, currency }) => (
//   <View style={styles.item}>
//     <Text style={[styles.title, { color: '#023B5E' }]}>{productName}</Text>
//     <Text style={styles.boldText}>{`Category: ${categoryCode}`}</Text>
//     <Text>{productDescription}</Text>
//     <Text>{supplierName}</Text>
//     <Text>{rate}</Text>
//     <Text>{currency}</Text>
//   </View>
// );

// const Separator = () => (
//   <View style={styles.separator}></View>
// );

// const ProductItem = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={productData}
//         renderItem={({ item }) => (
//           <>
//             <Item
//               productName={item.productName}
//               categoryCode={item.categoryCode}
//               productDescription={item.productDescription}
//               supplierName={item.supplierName}
//               rate={item.rate}
//               currency={item.currency}
//             />
//             <Separator />
//           </>
//         )}
//         keyExtractor={(item) => item.id}
//         ListFooterComponent={<View style={styles.separator} />}
//       />
//       <TouchableOpacity style={styles.addButton} onPress={() => console.log('Button pressed')}>
//         <Text style={styles.plusSymbol}>+</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#f2f2f2',
//     padding: 20,
//     marginVertical: 2,
//     marginHorizontal: 4,
//   },
//   title: {
//     fontSize: 32,
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
//   separator: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'black',
//   },
//   addButton: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     backgroundColor: '#023B5E',
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//   },
//   plusSymbol: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default ProductItem;

import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Text,View } from 'react-native';
import ProductCard from '../../productComponents/productCard';
import { productData } from '../../customComponents/formData';
import { router } from 'expo-router';

const goToCreateProduct =() => {
  router.navigate('/DrawerScreens/createProduct')
}

const ProductItem = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productData}
        renderItem={({ item }) => (
          <ProductCard
            productName={item.productName}
            categoryCode={item.categoryCode}
            productDescription={item.productDescription}
            supplierName={item.supplierName}
            rate={item.rate}
            currency={item.currency}
            
          />
        )}
        keyExtractor={(item) => item.id}
      />

    
      <TouchableOpacity style={styles.addButton} onPress={goToCreateProduct}>
        <Text style={styles.plusSymbol}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#023B5E',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  plusSymbol: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProductItem;





 
 

