import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Slot } from 'expo-router';
import { Feeds } from '@/assets/images';
//import Icon from 'react-native-ionicons'
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '../../customComponents/CustomDrawerContent';
import { Button, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router/tabs';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


export default function Layout() {
  return (
    // <Drawer/>
   <>
    <GestureHandlerRootView style={{ flex: 1 }}>
   {/* <Drawer screenOptions={{ headerShown: true}} /> */}
   
   <Drawer drawerContent={CustomDrawerContent} screenOptions={{drawerActiveTintColor:'#fff', drawerActiveBackgroundColor:'#023B5E'}}>
    
 
    <Drawer.Screen
    name='dashboard'
    options={{
      drawerLabel:'Dashboard',
      
     
      drawerIcon:({}) =>(
        <Ionicons name='home' size={32} color='black' /> 
      )

    }}
    
    ></Drawer.Screen>
       
    
    <Drawer.Screen
    name='menu'
    options={{
      drawerLabel:'Menu',
     
      drawerIcon:({}) =>(
        <Ionicons name='menu' size={32} color='black' /> 
        

      )
    }}

    
    ></Drawer.Screen>
    <Drawer.Screen
    name='leadList'
    options={{
      drawerLabel:'Leads',
      headerTitle:'Leads',
      headerShown:false,
      drawerIcon:({}) =>(
        <Ionicons name='apps-sharp' size={32} color='black' /> 
        

      )
    }}

    
    ></Drawer.Screen>
     <Drawer.Screen
    name='taskList'
    options={{
      drawerLabel:'Tasks',
      headerTitle:'Tasks',
      headerShown:false,

      drawerIcon:({}) =>(
        <FontAwesome name='tasks' size={32} color='black' /> 
        

      )
    }}

    
    ></Drawer.Screen>
    
   </Drawer>
</GestureHandlerRootView>
</>
  //   >
  //     <MainPage/>
  //  </Drawer>
  //   </GestureHandlerRootView>
   
  );
}
