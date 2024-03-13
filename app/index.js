import { Link } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Button, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import RegisterScreen from './authScreens/register';
import { router } from 'expo-router';
import { AuthProvider } from '@/context/authContext';



export default function Root() {
  const goToRegisterPage=()=>{
    router.replace('/authScreens/register');

  }
  const gotoLoginPage=()=>{
    router.replace('/authScreens/login')
  }
  return(
    <AuthProvider>
    
  
        
       

      <View style={styles.container}>
     {/* <LoginScreen/> */}
     <RegisterScreen/>
      
         
         {/* <Text>Welcome to Lead Management!</Text>
         <Button title="Register" onPress={goToRegisterPage}></Button>
         <Text>   </Text>
         <Button title='Login' onPress={gotoLoginPage}>Login</Button> */}
   
       </View>
       </AuthProvider>
    
   
    

  ) 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
     
    },
  });



