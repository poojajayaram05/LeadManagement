

import React, { useContext, useState } from 'react';
import { formData } from '../../authFormdata';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/authContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { router } from 'expo-router';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameTyped, setNameTyped] = useState(false);
  const [emailTyped, setEmailTyped] = useState(false);
  const [passwordTyped, setPasswordTyped] = useState(false);

  const { isLoading,register } = useContext(AuthContext);

  const handleNameChange = (text) => {
    setUsername(text);
    if (text !== '') {
      setNameTyped(true);
    } else {
      setNameTyped(false);
    }
  }

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text !== '') {
      setEmailTyped(true);
    } else {
      setEmailTyped(false);
    }
  }

  const handlePasswordChange = (text) => {
    setPassword(text);
    //console.log(password);
    if (text !== '') {
      setPasswordTyped(true);
    } else {
      setPasswordTyped(false);
    }
  }
  

  return (
    <View style={styles.container}>
       <Spinner visible={isLoading} />
      
      <View style={styles.wrapper}>
        {formData.elements.map(element => (
          <View key={element.name} style={styles.inputWrapper}>
            <Text style={styles.name}>{element.title}</Text>
            <TextInput
              style={styles.input}
              placeholder={element.placeholder}
              value={element.name === 'username' ? (nameTyped ? username : '') : element.name === 'email' ? (emailTyped ? email : '') : (passwordTyped ? password : '')}
              onChangeText={element.name === 'username' ? handleNameChange : element.name === 'email' ? handleEmailChange : handlePasswordChange}
              maxLength={element.maxLength}
              keyboardType={element.type === 'Email' ? 'email-address' : 'default'}
              secureTextEntry={element.type === 'Password'}
            />
          </View>
        ))}
        <Button color='grey'
          title="Register"
          onPress={() => {
           console.log("53:", username, email, password)
            register(username, email, password)
          }}
        />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.replace('/authScreens/authLogin')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 6,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 22,
    },
   

  wrapper: {
    width: '80%',
  },
  inputWrapper: {
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    paddingVertical:10,
    marginTop:8
  },
  link: {
    color: 'blue',
  },
  name:{
    fontWeight:"bold",
    fontSize:20

  }
});

export default RegisterScreen;