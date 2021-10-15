import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { auth } from '../../config';
import AppButton from '../../components/AppButton';
export default function Home({navigation}) { 
    const Logout = () => {
        auth
        .signOut()
        .then(()=>{
        navigation.navigate('Login');
        })
        .catch((error) => alert(error.message));  
    }
    return (
        <View>
            <Text>Welcome {auth?.currentUser?.displayName}</Text>
            <AppButton onPress={Logout} title = "Log out"/>
        </View>
    );
}
