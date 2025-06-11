import React from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
    
    const LogOut = async () => {
            try {
                await AsyncStorage.removeItem('userLogged');
                navigation.navigate('Login');
            } catch (error) {
                console.error('Error during logout:', error);
                alert('Error during logout. Try again.');
            }
        };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go Back"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={LogOut}>
                <Text style={styles.logoutButtonText}>LOG-OUT</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0e6',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#ffebcd',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
    logoutButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: windowWidth * 0.5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    },

    logoutButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    },
});
