import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import { useColorScheme } from '@/components/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Slot } from 'expo-router';
import { Feeds } from '@/assets/images';
//import Icon from 'react-native-ionicons'
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
// import CustomDrawerContent from '../../customComponents/CustomDrawerContent';
import CustomDrawerContent from '../../../customComponents/CustomDrawerContent';
// import { Button, StyleSheet } from 'react-native';
// import { Tabs } from 'expo-router/tabs';
// import ArrowBack from '../../customComponents/arrowBack';
import { router } from 'expo-router';
// import { TouchableOpacity } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import HeaderRight from '../../customComponents/searchIcon';
import HeaderRight from '../../../customComponents/searchIcon';
// import NetworkStatus from '../checkNetwork';




export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


export default function Layout() {
  const queryClient =  new QueryClient({});
  
  

  const goBack=()=>{
    router.back()
   
}


  return (
    // <Drawer/>
   <>
    <QueryClientProvider client={queryClient}>
    <GestureHandlerRootView style={{ flex: 1 }}>
   {/* <Drawer screenOptions={{ headerShown: true}} /> */}
   
{/* 
   <NetworkStatus> */}
   <Drawer drawerContent={CustomDrawerContent} screenOptions={{drawerActiveTintColor:'#fff', drawerActiveBackgroundColor:'#023B5E'}}>
    
 
   <Drawer.Screen
    name='dashboard'
    options={{
      drawerLabel:'Dashboard',
      headerTitle:'Dashboard',
      headerShown:true,
      drawerIcon:({}) =>(
        <Ionicons name='home' size={20} color='black' />
      ),
      headerRight: () => (
        <HeaderRight
          onSearchPress={() => { /* Handle filter press */ }}
          onNotificationPress={() => { /* Handle notification press */ }}
        />
      )
    }}
    ></Drawer.Screen>

<Drawer.Screen
    name='accounts'
    options={{
      drawerLabel:'Accounts',
      headerTitle:'Accounts',
      headerShown:true,
      drawerIcon:({}) =>(
        <MaterialIcons name='manage-accounts' size={20} color='black' />
      ),
      headerRight: () => (
        <HeaderRight
          onSearchPress={() => { /* Handle filter press */ }}
          onNotificationPress={() => { /* Handle notification press */ }}
        />
      )
    }}
    ></Drawer.Screen>
    <Drawer.Screen
    name='contacts'
    options={{
      drawerLabel:'Contacts',
      headerTitle:'Contacts',
      headerShown:true,
      drawerIcon:({}) =>(
        <FontAwesome6 name='contact-book' size={20} color='black' />
      ),
      headerRight: () => (
        <HeaderRight
          onSearchPress={() => { /* Handle filter press */ }}
          onNotificationPress={() => { /* Handle notification press */ }}
        />
      )
    }}
    ></Drawer.Screen>
       
   
   
    <Drawer.Screen
    name='leadList'
    options={{
      drawerLabel:'Leads',
      headerTitle:'Leads',
      headerShown:true,
      drawerIcon:({}) =>(
        <Ionicons name='apps-sharp' size={20} color='black' />
      ),
      headerRight: () => (
        <HeaderRight
          onFilterPress={() => { /* Handle filter press */ }}
          onNotificationPress={() => { /* Handle notification press */ }}
        />
      )
    }}
    ></Drawer.Screen>
           <Drawer.Screen
    name='deals'
    options={{
      drawerLabel:'Deals/Opportunities',
      headerTitle:'Deals',
      headerShown:true,
      drawerIcon:({}) =>(
        <FontAwesome name='thumbs-o-up' size={20} color='black' />
      ),
      headerRight: () => (
        <HeaderRight
          onSearchPress={() => { /* Handle filter press */ }}
          onNotificationPress={() => { /* Handle notification press */ }}
        />
      )
    }}
    ></Drawer.Screen>

 <Drawer.Screen
    name='activitypage'
    options={{
      drawerLabel:'Activities',
      headerTitle:'Activities',
      headerShown:true,
      drawerIcon:({}) =>(
        <FontAwesome name='tasks' size={20} color='black' />
      ),
      headerRight: () => (
        <HeaderRight
          
        />
      )
    }}
    ></Drawer.Screen> 
 
     <Drawer.Screen
    name='productList'
    options={{
      drawerLabel:'Products',
      headerTitle:'Products',
      headerShown:true,
      drawerIcon:({}) =>(
        <Ionicons name='list' size={20} color='black' />
      ),
      headerRight: () => (
        <HeaderRight
          onSearchPress={() => { /* Handle filter press */ }}
          onNotificationPress={() => { /* Handle notification press */ }}
        />
      )
    }}
    ></Drawer.Screen>
     <Drawer.Screen
    name='settings'
    options={{
      drawerLabel:'Settings',
      headerTitle:'Settings',
      headerShown:true,
      drawerIcon:({}) =>(
        <Ionicons name='settings-sharp' size={20} color='black' />
      ),
      headerRight: () => (
        <HeaderRight
        />
      )
    }}
    ></Drawer.Screen>
        <Drawer.Screen
    name='checkInLocation'
    options={{
      drawerLabel:'Check In',
      headerTitle:'ChecK In',
      headerShown:true,
      drawerIcon:({}) =>(
        <Ionicons name='location' size={20} color='black' />
      ),
      headerRight: () => (
        <HeaderRight
        />
      )
    }}
    ></Drawer.Screen>
 
   </Drawer>
   {/* </NetworkStatus> */}
</GestureHandlerRootView>
</QueryClientProvider>
</>
  //   >
  //     <MainPage/>
  //  </Drawer>
  //   </GestureHandlerRootView>
   
  );
}
