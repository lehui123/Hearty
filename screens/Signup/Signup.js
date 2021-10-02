import React from 'react';
import styles from './styles';
import * as Yup from 'yup';
import {View,TouchableOpacity, Text} from 'react-native';
import routes from '../../navigation/routes';
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function Signup({navigation}) {
    const register = () => {};
    return (
        <View style={styles.StyledContainer}>
            <View style={styles.InnerContainer}> 
                <Text style={styles.PageTitle}> Welcome! </Text>
                <Text style={styles.SubTitle}> Account Signup </Text>
                <AppForm 
                initialValues={{name: "", email: "", password: ""}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
                >
                <AppFormField
                autoCorrect={false}
                icon="account"
                name="name"
                placeholder="Name"
                />
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
            
                <SubmitButton title="Register" onPress ={register}/>

                <View style={styles.ExtraView}>
                    <Text style={styles.ExtraText}>Already registered an account?</Text>
                    <TouchableOpacity style={styles.TextLink} onPress = {() =>navigation.navigate(routes.LOGIN)}>
                        <Text style={styles.TextLinkContent}> Login</Text>
                    </TouchableOpacity>
                </View>
                </AppForm>
            </View>
        </View>
    )
}

export default Signup;