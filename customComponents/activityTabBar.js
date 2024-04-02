// TabBar.js
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ActivityTabBar = ({ tabs, currentTab, setCurrentTab }) => (
  <View style={styles.tabContainer}>
    {tabs.map(tab => (
      <TouchableOpacity key={tab} onPress={() => setCurrentTab(tab)}>
        <Text style={[styles.tab, currentTab === tab && styles.selectedTab]}>{tab}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default ActivityTabBar;
