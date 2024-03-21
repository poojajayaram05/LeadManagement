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