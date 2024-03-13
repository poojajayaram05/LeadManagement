import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './login'
import { AuthProvider } from '../../context/authContext'

export default function AuthLogin() {
  return (
    <AuthProvider>
        <LoginScreen/>
    </AuthProvider>
  )
}