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
        alignItems: 'center',
        backgroundColor: Colour.primary
    },
    innerContainer: {
        width:WIDTH * 1,
    },
    header: {
        fontSize: 40,
        textAlign: 'center',
        padding: HEIGHT/35,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: Colour.brand
    },    
    body: {
        fontSize: 19,
        textAlign: 'left',
        padding: HEIGHT/80,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: WIDTH/25,
    }, 
    body2: {
        fontSize: 18,
        textAlign: 'left',
        paddingLeft: WIDTH/8,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    box: {
        width:WIDTH * 0.80,
        backgroundColor: Colour.secondary
    },
    styleButton: {
        marginTop: HEIGHT/25,
        backgroundColor: Colour.tertiary,
        width:Dimensions.get("window").width * 0.65,
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

    }

});

export default styles;
