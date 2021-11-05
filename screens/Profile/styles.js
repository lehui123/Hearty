import { StyleSheet } from 'react-native'
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
        width:WIDTH * 1,
        alignItems: 'flex-start',
    },
    buttonContainer: {
        marginTop:HEIGHT/40,
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
        textAlign: 'left',

        paddingTop: HEIGHT/15,
        padding: 20,
        fontWeight: 'bold',
        color: Colour.brand
    },    
    body: {
        padding: HEIGHT/30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },  
    box: {
        fontSize: 20,
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: WIDTH/30,
        padding: HEIGHT/90,
        width:WIDTH * 1,
    },
    styleButton:{
        marginTop: HEIGHT/20,

        backgroundColor: Colour.tertiary,
        width:WIDTH * 0.35,
        height:HEIGHT * 0.10,
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
