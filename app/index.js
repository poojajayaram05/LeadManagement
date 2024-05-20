import { Link } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Button, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
// import RegisterScreen from './authScreens/register';
import { router } from 'expo-router';
import { AuthProvider } from '@/context/authContext';
// import Dashboard from './DrawerScreens/dashboard';

import LoginScreen from './authScreens/login';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// import NetworkStatus from './checkNetwork';
// import CheckNetwork from './checkNetwork';





export default function Root() {
  const queryClient =  new QueryClient({});
  const goToRegisterPage=()=>{
    router.replace('/authScreens/register');

  }
  const gotoLoginPage=()=>{
    router.replace('/authScreens/login')
  }
  return(
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    
  
        
       

<View style={styles.container}>

<LoginScreen/>
   {/* <Dashboard/> */}
   {/* <LeadList/> */}
      
         
         {/* <Text>Welcome to Lead Management!</Text>t
         <Button title="Register" onPress={goToRegisterPage}></Button>
         <Text>   </Text>
         <Button title='Login' onPress={gotoLoginPage}>Login</Button> */}
   
       </View>
{/* <CheckNetwork/> */}
    </AuthProvider>
    </QueryClientProvider>
   
    

  ) 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
     
    },
  });



