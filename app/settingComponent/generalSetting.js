import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import GeneralSettingCard from './generalSettingCard';
import { generalSettingData } from '../../customComponents/formData';
import CustomHeader from '../../customComponents/customLeadHeader';
import { router } from 'expo-router';
 
const GeneralSetting = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(`Clicked on ${item.title}`)}>
      <GeneralSettingCard title={item.title} navigation={item.navigation} />
    </TouchableOpacity>
  );
 
  const goBack=()=>{
    router.navigate('headerScreens/DrawerScreens/settings');
  }
 
  return (
    <View style={styles.container}>
       <View style={styles.headerContainer}>
            <CustomHeader title={"General Settings"} onPress={goBack}/>
          </View>
      <FlatList
        data={generalSettingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
 
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    marginBottom: 20, // Add margin bottom to create gap
  },
});
 
export default GeneralSetting;