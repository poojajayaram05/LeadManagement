import React, { useState } from 'react';
import { Tabs } from 'expo-router/tabs';
import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import LeadDetail from '../../leadComponents/leadDetailHeader';
import TabComponent from '../../customComponents/tabComponent'
import Meeting from './meeting';
import Notes from './notes';
import Task from './task';

import Requirement from './requirement';
 
export default function AppLayout() {
  const [selectedTab, setSelectedTab] = useState("Notes");
  const tabNames = ['Meeting', 'Notes', 'Task', 'Requirement'];
  const tabContent = [
    <Meeting/>,
    <Notes/>,
    <Task/>,
    <Requirement/>,
  ];
 
  return (
    <View style={styles.container}>
      <View style={{ height:'45%' }}>
      <LeadDetail/>
      <View>
      </View>
      <TabComponent tabNames={tabNames} tabContent={tabContent}/>
      </View>
      
    </View>
  );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topContainer: {
      flex: 2,
      backgroundColor: '#023B5E',
      maxHeight: 50,
    },

  });