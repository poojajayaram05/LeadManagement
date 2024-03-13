import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native"
import React, { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext";
import Spinner from "react-native-loading-spinner-overlay"
import { router } from "expo-router";

const LoginScreen = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const { isLoading, login } = useContext(AuthContext)

    // const val = useContext(AuthContext)


    return (
        <View style={styles.container}>
             <Spinner visible={isLoading} />
            
            <View style={styles.wrapper}>
                <Text style={styles.name}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <Text style={styles.name}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter password"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}

                />
                <Button color='grey' title="Login" onPress={() => login(email, password)} />

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => router.replace('authScreens/authRegister')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


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
        width: "80%"
    },
    input: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
        paddingVertical:10,
        marginTop:8,
        marginBottom:20
    },
    link: {
        color: 'blue'
    },
    name: {
        fontWeight: "bold",
        fontSize: 20

    },
    
})

export default LoginScreen;