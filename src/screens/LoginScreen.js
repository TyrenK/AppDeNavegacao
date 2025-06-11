import React from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const statusLogin = async () => {
            try {
                const userLogged = await AsyncStorage.getItem('userLogged');
                if (userLogged) {
                    navigation.navigate('Home');
                }
            } catch (error) {
                console.error('Error verifying the login status:', error);
            }
        };

        statusLogin();
    }, []);

    async function verificarLogin(){
        try {
            const savedUsername = await AsyncStorage.getItem('savedUsername');
            const savedPassword = await AsyncStorage.getItem('savedPassword');
    
            if (username === savedUsername && password === savedPassword) {
                await AsyncStorage.setItem('userLogged', 'logged');
                navigation.navigate('Home');
            } else {
                alert('Wrong username or password!');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed. Try again.');
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titleMain}>Login Screen</Text>
            <Text style={styles.titleSub}>Welcome!</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                keyboardType="text"
                value={username}
                onChangeText={setUsername}
                />
                <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Password"
                keyboardType="text"
                value={password}
                onChangeText={setPassword}
                />  
            <TouchableOpacity style={styles.customButton} onPress={verificarLogin}>
                <Text style={styles.customButtonText}>Join</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.SignUpText}>Don't Have a Log-in? Sign-up Here!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
    },
    titleMain: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      titleSub: {
        fontSize: 20,
        marginBottom: 20,
        color: '#666',
    },
    customButton: {
        backgroundColor: '#dda0dd',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: windowWidth * 0.5,
        margin: 10,
      },
      customButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    input: {
        paddingLeft: 10,
        width: windowWidth * 0.5,
        borderWidth: 1, 
        borderColor: '#ccc',
        borderRadius: 5,
        margin: 5,
    },
    SignUpText: {
        color: 'gray',
        fontSize: 12,
        textDecorationLine: 'underline'
    },
});
