
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../config";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store';

import { Alert } from "react-native";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = (name, email, password) => {
        // setIsLoading(true)
        // console.log(`${BASE_URL}/signup`)
        axios.post(`${BASE_URL}/signup`,{
            name,
            email,
            password
        })
            .then(res => {
                let userInfo = res.data
                setUserInfo(userInfo)
                SecureStore.setItem('userInfo', JSON.stringify(userInfo))
                setIsLoading(false)
                console.log(userInfo)
            })
            .catch(e => {
                console.log(`register error ${e}`);
                setIsLoading(false)
            })
    }

    const login = (email, password) => {
        setIsLoading(true)
        console.log(`${BASE_URL}/signin`)
        axios.post(`${BASE_URL}/signin`, {
            email, password
        }).then(res => {
            let userInfo = res.data
            console.log(userInfo)
            setUserInfo(userInfo)
            SecureStore.setItem('userInfo', JSON.stringify(userInfo))
            setIsLoading(false)
        }).catch(e => {
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
            console.log(userInfo)
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
