import { StyleSheet, StatusBar, Platform } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";
const styles = StyleSheet.create({
    styleContainer: {
        flex: 1,
        letterSpacing: 1,
        padding: 20,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Colour.primary,

    },
    innerContainer: {
        marginTop:60,
        width:'100%',
        alignItems: 'left',
    },
    buttonContainer: {
        marginTop:60,
        width:'100%',
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        textAlign: 'left',
        //marginTop: 20,
        //marginBottom: 20,
        padding: 20,
        fontWeight: 'bold',
        // justifyContent: 'center',
        // alignItems: 'center',
        color: Colour.brand
    },    
    body: {
        //marginBottom: 20,
        //fontWeight: 'bold',
        padding: 25,
        justfyContent: 'left',
        alignItems: 'left',
        //Color: Colour.tertiary
    },  
    box: {
        fontSize: 25,
        textAlign: 'left',
        justfyContent: 'left',
        alignItems: 'left',
        marginLeft: 40,
        padding: 10,
    },
    styleButton:{
        marginTop: 40,
        backgroundColor: Colour.tertiary,
        height: 60,
        width: 150,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleButtonText:{
        color: Colour.primary,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",

    },

});

export default styles;
