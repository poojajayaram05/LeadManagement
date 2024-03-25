// import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native"
// import React, { useContext, useState } from "react"
// import { AuthContext } from "../../context/authContext";
// import Spinner from "react-native-loading-spinner-overlay"
// import { router } from "expo-router";

// const LoginScreen = () => {
//     const [email, setEmail] = useState(null)
//     const [password, setPassword] = useState(null)
//     const { isLoading, login } = useContext(AuthContext)

//     // const val = useContext(AuthContext)


//     return (
//         <View style={styles.container}>
//              <Spinner visible={isLoading} />
            
//             <View style={styles.wrapper}>
//                 <Text style={styles.name}>Email</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="enter email"
//                     value={email}
//                     onChangeText={text => setEmail(text)}
//                 />

//                 <Text style={styles.name}>Password</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="enter password"
//                     secureTextEntry
//                     value={password}
//                     onChangeText={text => setPassword(text)}

//                 />
//                 <Button color='grey' title="Login" onPress={() => login(email, password)} />

//                 <View style={{ flexDirection: 'row', marginTop: 20 }}>
//                     <Text>Don't have an account?</Text>
//                     <TouchableOpacity onPress={() => router.replace('authScreens/authRegister')}>
//                         <Text style={styles.link}>Register</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderWidth: 6,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 22,
//     },
//     wrapper: {
//         width: "80%"
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#bbb',
//         borderRadius: 5,
//         paddingHorizontal: 14,
//         paddingVertical:10,
//         marginTop:8,
//         marginBottom:20
//     },
//     link: {
//         color: 'blue'
//     },
//     name: {
//         fontWeight: "bold",
//         fontSize: 20

//     },
    
// })

// export default LoginScreen;

import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image
} from "react-native";
import { AuthContext } from "../../context/authContext";
import { Alert } from "react-native";
import { router } from "expo-router";
import * as SecureStore from 'expo-secure-store';
// import Spinner from "react-native-loading-spinner-overlay";
 
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 // const { isLoading, login } = useContext(AuthContext);
  const[token, setToken]=useState('');



  const getToken= async(username,password)=>{
    let options = {
      "client_id" : "71d7bed90b0d0a50cd2f237b791c9ac0",
      "client_secret" : "yb2:p1#4.N",
      "grant_type" : "password",
      "username" : username,
      "password" : password
    };
    console.log(username," username", password, "  password");
    AUTH_URL="https://ven06798.service-now.com/oauth_token.do"
    const data=JSON.stringify(options);
    const authData = new URLSearchParams();
authData.append('client_secret', 'yb2:p1#4.N');
authData.append('client_id', '71d7bed90b0d0a50cd2f237b791c9ac0');
authData.append('grant_type', 'password');
authData.append('username', username);
authData.append('password', password);
// const formData = new FormData();
//   formData.append('client_id', '71d7bed90b0d0a50cd2f237b791c9ac0');
//   formData.append('client_secret', 'yb2:p1#4.N');
//   formData.append('grant_type', 'password');
//   formData.append('username', username);
//   formData.append('password', password);
    try{
      const res = await fetch(AUTH_URL, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
            // 'Content-Type': 'application/json',
           
          },
       body:authData.toString()
                })
        //const data = await res.json()
        
        const data = await res.json()
        const accessToken = data.access_token
        console.log("ACCESS TOKEN",accessToken);

        //console.log("type of",json.stringify(accessToken));
    

        

        const stoken = JSON.stringify({accessToken:accessToken});
        
         await SecureStore.setItemAsync("token", stoken)
         
         const tokenFromStore=  await SecureStore.getItemAsync('token');
         

        console.log("token from secure storage",tokenFromStore) ;
        if(accessToken){
          router.replace('/DrawerScreens/dashboard')

        }
        else{
          router.replace('/DrawerScreens/dashboard')
          Alert.alert("Incorrect credentials")

        }
      
        
        setToken(token);
        
       
      

  }
  catch(e){
     
      console.log(e);
      // router.replace('/DrawerScreens/dashboard')
      Alert.alert("failed to login")
      

  }

  }
 
  return (
    <>
      <ImageBackground
        source={{
          uri: "https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2021/07/small-business-loan-770x515.png",
        }}
        style={styles.background}
      >
        <View style={styles.container}>
          {/* <Spinner visible={isLoading} /> */}
          <View style={styles.wrapper}>
            <Text style={styles.title}>
              Please enter your email ID & password
            </Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter username"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
 
            <View style={styles.btnBg}>
              <Button
                color="#023B5E"
                title="Sign In"
                onPress={() => getToken(username, password)}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
 
      <Image
        source={{ uri: "https://i.postimg.cc/FskjFB0Y/rpt.jpg" }} // Replace with your bottom image URL
        style={styles.bottomImage}
       
      />
    </>
  );
};
 
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contian",
    width: "100%",
    height: "50%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "98%",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust the opacity as needed
    padding: 20,
    borderRadius: 10,
    marginTop:100
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "600",
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#bbb",
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
 
  btnBg: {
    backgroundColor: "#023B5E",
    borderRadius: 20,
  },
   bottomImage: {
    width: "50%",
    height:30, // Adjust the height as needed
    resizeMode: "contain", // Adjust the resizeMode as needed
    position: "absolute",
    right:100,
    bottom: 0,
    zIndex: 1,

    bottom:30,
   
  },
});
 
export default LoginScreen;
