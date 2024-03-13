import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { useRouter } from 'expo-router'
import { HomeProfile } from '../assets/images'

export default function CustomDrawerContent(props: any) {
  const router = useRouter();

  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#d1e0ed'}}>
   
    
     
        
      <View style={{padding:20}} >
    <Image
      source={HomeProfile}
      style={{
        width: 60,
        height: 60,
        alignSelf:'center',

       
      }}
    />
    
    <View style={styles.headerInfo}>
            <Text style={styles.personName}>Bindu B N</Text>
            <Text style={styles.status}>Active</Text>
          </View>
          </View>

 

  <View style={{backgroundColor:'#fff'}}>
     
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label={'Logout'}
        onPress={() => router.replace('/')}
      /> */}
      </View>
    </DrawerContentScrollView>
    </View>
  
    
    
  );
}

const styles = StyleSheet.create({
   headerInfo: {
  // paddingLeft:95,
  // paddingBottom:20
  alignItems:'center'
  
  
},
personName: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#333',
  alignContent:'center'
},
status: {
  fontSize: 16,
  color: 'green',
},})
