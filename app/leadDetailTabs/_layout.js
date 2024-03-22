// import { Tabs } from 'expo-router/tabs';
// import { Stack } from 'expo-router';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// export default function AppLayout() {
//   return (
//     <Tabs>
//       <Stack.Screen
//         name="info"
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="meetings"
//         options={{
//           headerShown: false,
//         }}
//         // options={{
//         //     drawerLabel:'Tasks',
//         //     headerTitle:'Tasks',
//         //     headerShown:false,
//         //     tabIcon:({}) =>(
//         //       <FontAwesome name='tasks' size={32} color='black' /> 
//         //     )
//         //   }}
//       />
//       <Stack.Screen
//         name="notes"
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="requirements"
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Stack.Screen
//         name="task"
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Tabs>
//   );
// }


// import React from 'react';
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
