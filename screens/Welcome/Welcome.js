import React from 'react';
import styles from './styles';
import {View,Image, Text} from 'react-native';
import AppButton from "../../components/AppButton";
import routes from "../../navigation/routes";
function Welcome({navigation}) {
    return (
    <View style={styles.background}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../assets/icon.png")} />
            <Text style={styles.tagline}>Monitor your Heart Rate!</Text>
            <Image style={styles.imageSize} source = {require('../../assets/hearty.png')}/>
            <Text style={styles.maintext}>HEARTY mobile application connects to HEARTY pulse sensor to detect and record your heart rate!</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login" onPress={()=> navigation.navigate(routes.LOGIN)} />
          <AppButton title="Signup" onPress={()=> navigation.navigate(routes.SIGNUP)}/>
        </View>
    </View>
    );
  }

  export default Welcome;