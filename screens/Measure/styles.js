import { StyleSheet, StatusBar, Platform } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";

const styles = StyleSheet.create({
    styleContainer: {
        flex: 1,
        letterSpacing: 1,
        // padding: 20,
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: Colour.primary
    },
    innerContainer: {
        //flex:1,
        width:'100%',
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        textAlign: 'center',
        //marginTop: 20,
        //marginBottom: 20,
        padding: 40,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: Colour.brand
    },    
    boxHeader:{
        fontSize: 40,
        // justifyContent: 'center',
        textAlign: 'center',
        letterSpacing: 1,
        fontWeight: 'bold',
        color: Colour.brand,
        marginTop: '30%',
    },
    body: {
        fontSize: 40,
        textAlign: 'center',
        //marginBottom: 20,
        //fontWeight: 'bold',
        padding: 30,
        justfyContent: 'center',
        alignItems: 'center',
        Color: Colour.tertiary
    },  
    disconnectButton:{
        marginTop: 20,
        backgroundColor: Colour.tertiary,
        height: 60,
        width: 150,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disconnectText:{
        color: Colour.primary,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",

    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        justfyContent: 'center',
        // alignItems: 'center',
        backgroundColor: Colour.secondary
    }  

});

export default styles;
