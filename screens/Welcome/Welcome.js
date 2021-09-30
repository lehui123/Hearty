import React from 'react';
import styles from './styles';
import {View,Image, Text} from 'react-native';
import AppButton from "../../components/AppButton";

function Welcome(props) {
    return (
    <View style={styles.background}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../assets/icon.png")} />
            <Text style={styles.tagline}>Monitor your Heart Rate!</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login" />
          <AppButton title="Register" />
        </View>
    </View>
    );
  }

  export default Welcome;