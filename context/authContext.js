
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config"
// import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';

import { Alert } from "react-native";
import { router } from "expo-router";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = async (username, email, password) => {
        // setIsLoading(true)
        // console.log(`${BASE_URL}/signup`)
        const body={
         
            "email":email,
            "password":password,
            "username":username
        }
      
        console.log("body", body);
       
            try {

                console.log("before post api")
                const response = await axios.post('http://192.168.100.174:4000/auth/signup', 
                   body
                , {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log("inside then")
                let userInfo = response.data
                setUserInfo(userInfo)
                SecureStore.setItem('userInfo', JSON.stringify(userInfo))
                setIsLoading(false)
                //console.log("this is the userinfo",userInfo);
            }
            catch(e) {
                console.log(`register error ${e}`);
                setIsLoading(false)
      
            }

            console.log("after catch")
    }

    const login = (email, password) => {
        setIsLoading(true)
        console.log(`${BASE_URL}/signin`)
        axios.post(`${BASE_URL}/signin`,{
            email, password
        }).then(res => {
            let userInfo = res.data
            //console.log(userInfo)
            router.replace('/DrawerScreens/dashboard')
            setUserInfo(userInfo)
            SecureStore.setItem('userInfo', JSON.stringify(userInfo))
            setIsLoading(false)
        }).catch(e => {
            console.log(e);
            // router.replace('/DrawerScreens/dashboard')
            Alert.alert("failed to login")
            setIsLoading(false)
        })
    }

    const logout = async () => {
        await SecureStore.deleteItemAsync('userInfo')
        setUserInfo({})
    }

    const isLoggedIn = async () => {
        try {
            // setSplashLoading(true)
            let userInfo = SecureStore.getItem('userInfo')
            //console.log(userInfo)
            userInfo = JSON.parse(userInfo)

            if (userInfo) {
                setUserInfo(userInfo)
            }
            setSplashLoading(false)
        } catch (e) {
            setSplashLoading(false)
            console.log(`is logged in error ${e}`)

        }
    }


    useEffect(() => {
        isLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{
            isLoading,
            userInfo,
            splashLoading,
            register,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}