import React from 'react';
import { TouchableOpacity, View, TextInput, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function SingUpScreen({ navigation }) {
    
    const [spassword, setSPassword] = useState('');
    const [susername, setSUsername] = useState('');
    const [cpassword, setCPassword] = useState('');

    
    async function SignUp() {
        if (susername && spassword) {
            if (spassword === cpassword) {
                try {
                    await AsyncStorage.setItem('savedUsername', susername);
                    await AsyncStorage.setItem('savedPassword', spassword);
                    navigation.navigate('Login');
                } catch (error) {
                    alert('Error saving credentials. Try again.');
                    console.error(error);
                }
            } else {
                alert("The password in the two fields have to be the same.");
            }
        } else {
            alert("Please, fill all the fields.");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleMain}>Sign-Up Screen</Text>
            <Text style={styles.titleSub}>Welcome!</Text>
             <TextInput
                style={styles.input}
                placeholder="Username"
                keyboardType="text"
                value={susername}
                onChangeText={setSUsername}
                />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Password"
                keyboardType="text"
                value={spassword}
                onChangeText={setSPassword}
            /> 
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Confirm Password"
                keyboardType="text"
                value={cpassword}
                onChangeText={setCPassword}
            /> 
            <TouchableOpacity style={styles.customButton} onPress={SignUp}>
                <Text style={styles.customButtonText}>Sign-Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.goBackContainer} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.GoBackText}>Already have a log-in? Go back here!</Text>
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
    input: {
        paddingLeft: 10,
        width: windowWidth * 0.5,
        borderWidth: 1, 
        borderColor: '#ccc',
        borderRadius: 5,
        margin: 5,
    },
    goBackContainer: {
        width: '80%', 
        alignItems: 'center',
        marginBottom: 10,
      },
    GoBackText: {
        color: 'gray',
        fontSize: 12,
        textDecorationLine: 'underline',
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
});