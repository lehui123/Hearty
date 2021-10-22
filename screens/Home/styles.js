
//import { CurrentRenderContext } from '@react-navigation/core'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Colour.primary
    },
    header: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1,
        fontWeight: 'bold',
        color: Colour.brand
    },  
    boxheader: {
        fontSize: 40,
        textAlign: 'center',
        letterSpacing: 1,
        fontWeight: 'bold',
        color: Colour.brand
    },        
    box: {
        fontSize: 25,
        marginBottom: 20,
        letterSpacing: 1,
        textAlign: 'center',
        color: Colour.tertiary
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:Dimensions.get("window").width * 0.35,
        height:Dimensions.get("window").height * 0.20,
        marginBottom: 20,
        backgroundColor: Colour.secondary
    },
    
})

export default styles
