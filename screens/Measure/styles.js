import { StyleSheet} from 'react-native'
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
        justifyContent:'center',
        backgroundColor: Colour.primary
    },
    innerContainer: {
        width:WIDTH * 1,
        alignItems: 'center',
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
    boxHeader:{
        fontSize: 45,
        textAlign: 'center',
        letterSpacing: 1,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: Colour.brand,
    },
    body: {
        fontSize: 40,
        textAlign: 'center',
        padding: HEIGHT/30,
        justifyContent: 'center',
        alignItems: 'center',
        color: Colour.tertiary
    },  
    styleButton:{
        marginTop: HEIGHT/25,
        backgroundColor: Colour.tertiary,
        width:WIDTH * 0.35,
        height: HEIGHT * 0.10,
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
    circle: {
        width:WIDTH * 0.60,
        height:WIDTH * 0.60,
        borderRadius:WIDTH * 0.30,
        justifyContent: 'center',
        backgroundColor: Colour.secondary,
    }  

});

export default styles;
