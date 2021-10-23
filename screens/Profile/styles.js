import { StyleSheet, StatusBar, Platform } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";
import { Dimensions } from 'react-native';

const WIDTH = Math.round(Dimensions.get('window').width)
const HEIGHT = Math.round(Dimensions.get('window').height)

const styles = StyleSheet.create({
    styleContainer: {
        flex: 1,
        letterSpacing: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Colour.primary,

    },
    innerContainer: {
        width:Dimensions.get("window").width * 1,
        alignItems: 'flex-start',
    },
    buttonContainer: {
        marginTop:HEIGHT/40,
        //width:Dimensions.get("window").width * 1,
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        textAlign: 'left',
        padding: HEIGHT/40,
        fontWeight: 'bold',
        color: Colour.brand
    },    
    body: {
        padding: HEIGHT/30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },  
    box: {
        fontSize: 25,
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: WIDTH/30,
        padding: HEIGHT/90,
    },
    styleButton:{
        marginTop: HEIGHT/30,
        backgroundColor: Colour.tertiary,
        width:Dimensions.get("window").width * 0.25,
        height:Dimensions.get("window").height * 0.10,
        borderRadius: 40,
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
