import React from 'react';
import styles from './styles';
import * as Yup from 'yup';
import {View,Image, Text} from 'react-native';

import { AppForm, AppFormField, SubmitButton } from "../../components/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function Login(props) {
    return (
        <View style={styles.StyledContainer}>
            <View style={styles.InnerContainer}> 
                <Image style={styles.PageLogo} source = {require('../../assets/icon.png')}/> 
                <Text style={styles.PageTitle}> Welcome to HEARTY </Text>
                <Text style={styles.SubTitle}> Account Login </Text>
                <AppForm 
                initialValues={{email: "", password: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
                >

                    <AppFormField
                    autoCapitalize = "none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name = 'email'
                    placeholder="Email"
                    textContextType="emailAddress"
                    />
                    
                    <AppFormField
                    autoCapitalize = "none"
                    autoCorrect={false}
                    icon="lock"
                    name = 'password'
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                    />
                
                    <SubmitButton title="Login"/>

                    <View style={styles.ExtraView}>
                        <Text style={styles.ExtraText}>Don't have an account?</Text>
                        <TouchableOpacity style={styles.TextLink}>
                            <Text style={styles.TextLinkContent}> Signup</Text>
                        </TouchableOpacity>
                    </View>
                </AppForm>
            </View>
        </View>
    )
}

export default Login;