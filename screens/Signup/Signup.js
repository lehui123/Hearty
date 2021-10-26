import React, {useState} from 'react';
import styles from './styles';
import {View,TouchableOpacity, Text,KeyboardAvoidingView, TextInput} from 'react-native';
import routes from '../../navigation/routes';
import { auth, db } from '../../config';
import Colour from '../../components/Colour';
import AppButton from '../../components/AppButton';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginNavigator from '../../navigation/LoginNavigator';

function Signup({navigation}) {
    const [name,setName] = useState("");
    const [gender,setGender]= useState("");
    const [age, setAge] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const register = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((res) => {
        if (res.user) {
            res.user.updateProfile({
                displayName: name
            })
        }
        db
        .ref('users/'+ auth.currentUser.uid)
        .set({
            
                name: name,
                gender: gender,
                age: age,
                email: email,
                uuid: auth.currentUser.uid,
        
            });
        db
        .ref('/instruct')
        .set({
            toggle: 'off',
            uid: auth.currentUser.uid,
            })
    
        navigation.navigate('HomeNavi');
        })
        .catch((error) => alert(error.message));   
    };
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.StyledContainer}>
            <View style={styles.InnerContainer}> 
                <Text style={styles.PageTitle}> Welcome! </Text>
                <Text style={styles.SubTitle}> Account Signup </Text>
                <View style={styles.Container}>
                    
                    <MaterialCommunityIcons
                        name= "account"
                        size = {20}
                        color = {Colour.brand} 
                        style = {styles.Icon}
                    />
                    <TextInput
                        autoCapitalize = "none"
                        autoCorrect={false}
                        placeholderTextColor={Colour.tertiary}
                        style={styles.InputText}
                        placeholder="Full Name"
                        onChangeText = {(text) => setName(text)}

                    />
                </View>
                <View style={styles.Container}>
                    
                    <MaterialCommunityIcons
                        name= "gender-male-female"
                        size = {20}
                        color = {Colour.brand} 
                        style = {styles.Icon}
                    />
                    <TextInput
                        autoCapitalize = "none"
                        autoCorrect={false}
                        placeholderTextColor={Colour.tertiary}
                        style={styles.InputText}
                        placeholder="Male/Female"
                        onChangeText = {(text) => setGender(text)}

                    />
                </View>
                <View style={styles.Container}>
                    
                    <MaterialCommunityIcons
                        name= "calendar-month-outline"
                        size = {20}
                        color = {Colour.brand} 
                        style = {styles.Icon}
                    />
                    <TextInput
                        autoCapitalize = "none"
                        autoCorrect={false}
                        placeholderTextColor={Colour.tertiary}
                        style={styles.InputText}
                        placeholder="Age"
                        onChangeText = {(text) => setAge(text)}

                    />
                </View>
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
                <AppButton title="Register" onPress ={register}/>

                <View style={styles.ExtraView}>
                    <Text style={styles.ExtraText}>Already registered an account?</Text>
                    <TouchableOpacity style={styles.TextLink} onPress = {() =>navigation.navigate(routes.LOGIN)}>
                        <Text style={styles.TextLinkContent}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Signup;