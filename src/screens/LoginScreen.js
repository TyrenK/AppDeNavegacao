import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';
import { useState } from 'react';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {

    const rusername = 'Jonas';
    const rpassword = 'banana123';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function verificarLogin(){
        if (username === rusername && password === rpassword) {
            navigation.navigate('Home');
        }
        else{
            alert("Wrong username or password!");
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Login Screen</Text>
            <Text style={styles.title}>Welcome!</Text>
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
            <View style={styles.buttonContainer}>
               <Button
                title="Join"
                onPress={verificarLogin}/> 
            </View>
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
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
    input: {
        paddingLeft: 10,
        width: windowWidth * 0.5,
        borderWidth: 1, 
        borderColor: '#00000',
        borderRadius: 5,
        margin: 5,
    },
});