import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import SettingCard from '../settingComponent/SettingCard';
import { settingData } from '../../../customComponents/formData'
import SettingCard from '../../../customComponents/formData';
// import SettingCard from '../../../customComponents/formData';
const Setting = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(`Clicked on ${item.title}`)}>
      <SettingCard title={item.title} options={item.options} navigation={item.navigation} />
    </TouchableOpacity>
  );
 
  return (
    <View style={styles.container}>
      <FlatList
        data={settingData}
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
    // marginBottom:20,
  },
});
 
export default Setting;