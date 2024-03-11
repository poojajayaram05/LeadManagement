import { View, Text } from "react-native"
import React, { useCallback, useContext } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { AuthContext } from "../context/AuthContext";
import SpalashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {userInfo, splashLoading} = useContext(AuthContext)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {splashLoading ? (
                    <Stack.Screen name="Splash Screen" component={SpalashScreen} options={{ headerShown: false }} />
                ) : userInfo.token ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                    </>
                )}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation