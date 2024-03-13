import { View, Text } from 'react-native'
import React from 'react'
import RegisterScreen from './register'
import { AuthProvider } from '../../context/authContext'

export default function AuthLogin() {
  return (
    <AuthProvider>
        <RegisterScreen/>
    </AuthProvider>
  )
}