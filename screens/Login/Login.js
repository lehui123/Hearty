import React, { useEffect, useState } from 'react';
import styles from './styles';
import {View, Image, Text,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';
import routes from '../../navigation/routes';
import { auth } from '../../config';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colour from '../../components/Colour';
import AppButton from '../../components/AppButton';

function Login({navigation}) {
    useEffect(() => { 
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                navigation.replace(routes.HOME);  
            } 
        });

        return unsubscribe;
    }, []);

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signIn = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .then((res)=> {
            navigation.navigate(routes.HOME);
        })
        .catch((error) => alert(error.message));   
    };
    return  (
        <KeyboardAvoidingView behavior='padding' style={styles.StyledContainer}>
            <View style={styles.InnerContainer}> 
                <Image style={styles.PageLogo} source = {require('../../assets/icon.png')}/> 
                <Text style={styles.PageTitle}> Welcome to HEARTY </Text>
                <Text style={styles.SubTitle}> Account Login </Text>   

                <View style={styles.Container}>
                    
                    <MaterialCommunityIcons
                        name= "email"
                        size = {20}
                        color = {Colour.brand} 
                        style = {styles.Icon}
                    />
                    <TextInput
                        autoCapitalize = "none"
                        autoCorrect={false}
                        placeholderTextColor={Colour.tertiary}
                        style={styles.InputText}
                        keyboardType="email-address"
                        placeholder="Email"
                        textContextType="emailAddress"
                        onChangeText = {(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.Container}>
                    
                    <MaterialCommunityIcons
                        name= "lock"
                        size = {20}
                        color = {Colour.brand} 
                        style = {styles.Icon}
                    />
                    <TextInput
                        autoCapitalize = "none"
                        autoCorrect={false}
                        placeholderTextColor={Colour.tertiary}
                        style={styles.InputText}
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        onChangeText = {(text) => setPassword(text)}
                    />
                </View>
                <AppButton onPress={signIn} title = "Login"/>

                <View style={styles.ExtraView}>
                    <Text style={styles.ExtraText}>Don't have an account?</Text>
                    <TouchableOpacity style={styles.TextLink} onPress = {() =>navigation.navigate(routes.SIGNUP)}>
                        <Text style={styles.TextLinkContent}> Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
};
export default Login;