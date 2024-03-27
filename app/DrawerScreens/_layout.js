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
import ArrowBack from '../../customComponents/arrowBack';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';



export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


export default function Layout() {

  const goBack=()=>{
    router.back()
   
}

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
      headerTitle:'Dashboard',
      headerShown:true,
      drawerIcon:({}) =>(
        <Ionicons name='home' size={20} color='black' />
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
      )
    }}
    ></Drawer.Screen>
   
 
 
     <Drawer.Screen
    name='createLead'
    options={{
      drawerLabel:'Add a Lead',
      headerTitle:'Add a Lead',
      headerShown:true,
      headerRight: () => (
        <TouchableOpacity onPress={goBack} style={{ marginRight: 10 }}>
         <ArrowBack/>
      </TouchableOpacity>
      ),
      drawerIcon:({}) =>(
        <Ionicons name='add-circle' size={20} color='black' />
      )
    }}
    ></Drawer.Screen>
 
 
     <Drawer.Screen
    name='taskList'
    options={{
      drawerLabel:'Tasks',
      headerTitle:'Tasks',
      headerShown:true,
      drawerIcon:({}) =>(
        <FontAwesome name='tasks' size={20} color='black'  />
      )
    }}
    ></Drawer.Screen>
 
 
 
     <Drawer.Screen
    name='createTask'
    options={{
      drawerLabel:'Add a Task',
      headerTitle:'Add a Task',
      headerShown:true,
      headerRight: () => (
        <TouchableOpacity onPress={goBack} style={{ marginRight: 10 }}>
         <ArrowBack/>
      </TouchableOpacity>
      ),
      drawerIcon:({}) =>(
        <Ionicons name='add-circle' size={20} color='black' />
      )
    }}
    ></Drawer.Screen>
 
 
<Drawer.Screen
    name='meeting'
    options={{
      drawerLabel:'Meetings',
      headerTitle:'Meetings',
      headerShown:true,
      drawerIcon:({}) =>(
        <Ionicons name='calendar' size={20} color='black' />
      )
    }}
    ></Drawer.Screen>
 
 
         <Drawer.Screen
    name='createMeeting'
    options={{
      drawerLabel:'Add a Meeting',
      headerTitle:'Add a Meeting',
      headerShown:true,
      headerRight: () => (
        <TouchableOpacity onPress={goBack} style={{ marginRight: 10 }}>
         <ArrowBack/>
      </TouchableOpacity>
      ),
      drawerIcon:({}) =>(
        <Ionicons name='add-circle' size={20} color='black' />
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
      )
    }}
    ></Drawer.Screen>
 
 
 
     <Drawer.Screen
    name='addProduct'
    options={{
      drawerLabel:'Add a product',
      headerTitle:'Add a product',
      headerShown:true,
      headerRight: () => (
        <TouchableOpacity onPress={goBack} style={{ marginRight: 10 }}>
         <ArrowBack/>
      </TouchableOpacity>
      ),
      drawerIcon:({}) =>(
        <Ionicons name='add-circle' size={20} color='black' />
      )
    }}
    ></Drawer.Screen>
 
 
     <Drawer.Screen
    name='createNotes'
    options={{
      drawerLabel:'Add Notes',
      headerTitle:'Add Notes',
      headerShown:true,
      headerRight: () => (
        <TouchableOpacity onPress={goBack} style={{ marginRight: 10 }}>
         <ArrowBack/>
      </TouchableOpacity>
      ),
      drawerIcon:({}) =>(
        <FontAwesome name='sticky-note' size={20} color='black' />
      )
    }}
    ></Drawer.Screen>



<Drawer.Screen
    name='callLogForm'
    options={{
      drawerLabel:'Call-log form',
      headerTitle:'Call-log form',
      headerShown:true,
      headerRight: () => (
        <TouchableOpacity onPress={goBack} style={{ marginRight: 10 }}>
         <ArrowBack/>
      </TouchableOpacity>
      ),
      drawerIcon:({}) =>(
        <Ionicons name='call' size={20} color='black' />
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
