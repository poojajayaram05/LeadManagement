// import React, { useState } from 'react';
// import { Tabs } from 'expo-router/tabs';
// import { Stack } from 'expo-router';
// import { View, Text, StyleSheet } from 'react-native';
// import LeadDetail from '../../leadComponents/leadDetailHeader';
// import TabComponent from '../../customComponents/tabComponent'
// import Meeting from './meeting';
// import Notes from './notes';
// import Task from './task';
 
// export default function AppLayout() {
//   const [selectedTab, setSelectedTab] = useState("Notes");
//   const tabNames = ['Meeting', 'Notes', 'Task'];
//   const tabContent = [
//     <Meeting/>,
//     <Notes/>,
//     <Task/>,
//   ];
 
//   return (
//     <View style={styles.container}>
//       <View style={{ height:'45%' }}>
//       <LeadDetail/>
//       <View>
//       </View>
//       <TabComponent tabNames={tabNames} tabContent={tabContent}/>
//       </View>
      
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     topContainer: {
//       flex: 2,
//       backgroundColor: '#023B5E',
//       maxHeight: 50,
//     },

//   });



import { Tabs } from 'expo-router/tabs';
import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
 
export default function AppLayout() {
  return (
    <Tabs>
      <Stack.Screen
        name="info"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="info-circle" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="meetings"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="notes"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="sticky-note" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="requirements"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list-alt" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="task"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tasks" size={size} color={color} />
          ),
        }}
      />
      {/* <Stack.Screen
        name="task"
        // component={Task} // Assuming you have a TaskScreen component
        options={{
          headerShown: true,
 
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tasks" size={size} color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}