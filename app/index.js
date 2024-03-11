import { Link } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Button, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';




export default function Root() {
  return(
    
    <GestureHandlerRootView style={{ flex: 1 }}>
        
        <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>After Login</Text>
       
       </View>
    
    </GestureHandlerRootView>
    

  ) 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
