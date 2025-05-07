import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {

    let login;

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Login Screen</Text>
            <Text style={styles.title}>Welcome!</Text>
            <TextInput
                style={styles.input}
                placeholder="Login"
                keyboardType="text"
                value={login}
                />
            <View style={styles.buttonContainer}>
                <Button
                title="Log-in"
                onPress={() => navigation.navigate('Home')}
                />
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
});