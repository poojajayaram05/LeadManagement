import React, { useState } from 'react';
import { Tabs } from 'expo-router/tabs';
import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import LeadDetail from '../../leadComponents/leadDetailHeader';
import TabComponent from '../../customComponents/tabComponent'
import Meeting from './meeting';
import Notes from './notes';
import Task from './task';
 
export default function AppLayout() {
  const [selectedTab, setSelectedTab] = useState("Notes");
  const tabNames = ['Meeting', 'Notes', 'Task'];
  const tabContent = [
    <Meeting/>,
    <Notes/>,
    <Task/>,
  ];
 
  return (
    <View style={styles.container}>
      <View style={{ height:'45%' }}>
      <LeadDetail/>
      <View>
      </View>
      <TabComponent tabNames={tabNames} tabContent={tabContent}/>
      </View>
      <View style={styles.bottomContainer}>
        {/* <Tabs onTabPress={tab => setSelectedTab(tab)}>
          <Stack.Screen
            name="info"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="notes"
            options={{
              headerShown: false,
            }}
          />
     
          <Stack.Screen
            name="task"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="meeting"
            options={{
              headerShown: false,
            }}
          />
        </Tabs> */}
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
      backgroundColor: 'green',
      maxHeight: 50,
    },
    bottomContainer: {
      flex: 2,
    },
  });