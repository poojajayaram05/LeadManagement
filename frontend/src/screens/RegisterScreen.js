

import React, { useContext, useState } from 'react';
import { formData } from '../formJsonData';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameTyped, setNameTyped] = useState(false);
  const [emailTyped, setEmailTyped] = useState(false);
  const [passwordTyped, setPasswordTyped] = useState(false);

  const { isLoading, register } = useContext(AuthContext);

  const handleNameChange = (text) => {
    setName(text);
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
              value={element.name === 'username' ? (nameTyped ? name : '') : element.name === 'email' ? (emailTyped ? email : '') : (passwordTyped ? password : '')}
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
            // console.log("53:", name, email, password)
            register(name, email, password)
          }}
        />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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

export default RegisterScreen;