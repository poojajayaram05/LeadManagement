import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Text,View } from 'react-native';
import ProductCard from '../../productComponents/productCard';
import { productData } from '../../customComponents/formData';
import { router } from 'expo-router';
import LeadDet from '../../leadComponents/leadDetHeader';
import { FetchProducts } from '../service/fetchProducts';
import useIdStore from '../leadStore';
 
const goToCreateProduct =() => {
  router.navigate('/formComponents/addProduct')
}
 
const ProductItem = () => {
    const leadId = useIdStore((state) => state.number);
    const[productData, setProductData]=useState([])
    const[productItems,setProductItems]=useState([])
 
    useEffect(() => {
      const fetchData = async () => {
        try {
          
          const ldata = await FetchProducts();
          if (ldata && ldata.result) {
            setProductItems(ldata.result.filter((lead) => lead.associated_lead === leadId));
          } else {
            setProductItems([]);
          }
         // setProductData(ldata.result);
          console.log("products", productData);
        } catch (error) {
          console.error('Error in fetching leads:', error);
        }
      };
   
      fetchData();
    }, []);
   
    useEffect(() => {
      const products = productData.filter((lead) => lead.associated_lead === leadId);
      setProductItems(products);
    }, [productData, leadId]);
   
  return (
    <View style={styles.container}>
      {/* <View style={{ height: '26%' }}>
        <LeadDet />
      </View> */}
      <SafeAreaView style={styles.container}>
        {productItems.length > 0 ? (
          <FlatList
            data={productItems}
            renderItem={({ item }) => (
              <ProductCard
                category={item.categories}
                sub_category={item.sub_categories}
                description={item.description}
                product={item.products}
                price={item.price}
                quantity={item.quantity}
              />
            )}
            keyExtractor={(item, index) => item.price + index}
          />
        ) : (
          <Text>No products available</Text>
        )}

        <TouchableOpacity style={styles.addButton} onPress={goToCreateProduct}>
          <Text style={styles.plusSymbol}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
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