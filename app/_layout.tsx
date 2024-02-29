import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import '@tamagui/core/reset.css'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


export default function Layout() {
  return (
   
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <Drawer screenOptions={{ headerShown: true}} /> */}
      <Drawer
      screenOptions={{ headerShown: false, swipeEdgeWidth : 6 }}
    >
   </Drawer>
    </GestureHandlerRootView>
   
  );
}
