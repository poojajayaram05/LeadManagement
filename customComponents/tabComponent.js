import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DimensionUtils from '../utils/DimensionUtils'
 
const TabComponent = ({ tabNames, tabContent }) => {
  const [selectedTab, setSelectedTab] = useState(0);
 
  const handleTabPress = (tabNumber) => {
    setSelectedTab(tabNumber);
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {tabNames?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[styles.tab, selectedTab === index && styles.selectedTab]}
              onPress={() => handleTabPress(index)}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === index && styles.selectedTabtext,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
 
      <View style={styles.contentContainer}>
        {tabContent?.map((content, index) => {
          return (
            <View key={index} style={[styles.content, index !== selectedTab && styles.hidden]}>
              {content}
            </View>
          );
        })}
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    marginHorizontal: DimensionUtils.pixelSizeHorizontal(10),
    marginTop: DimensionUtils.pixelSizeVertical(10),
    // backgroundColor: 'green',
    marginBottom: 0,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: DimensionUtils.pixelSizeVertical(20),
    justifyContent: 'space-between',
  },
  tab: {
    paddingHorizontal: DimensionUtils.pixelSizeHorizontal(20),
    paddingVertical: DimensionUtils.pixelSizeVertical(10),
    flex: 1,
    marginRight: DimensionUtils.pixelSizeHorizontal(1),
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    backgroundColor: '#F4F4F4',
 
  },
  selectedTab: {
    backgroundColor: '#023B5E',
  },
  tabText: {
    fontSize: DimensionUtils.fontPixel(16),
    color: 'black',
  },
  selectedTabtext: {
    color: 'white',
  },
  contentContainer: {
    position: 'absolute',
    top: DimensionUtils.pixelSizeVertical(50),
    left: 0,
    right: 0,
    bottom: 0,
  },
//   content: {
//     borderWidth: 1,
//     borderColor: 'green',
//     paddingHorizontal: DimensionUtils.pixelSizeHorizontal(20),
//     paddingVertical: DimensionUtils.pixelSizeVertical(20),
//     borderRadius: 5,
//   },
  hidden: {
    display: 'none',
  },
});
 
export default TabComponent;