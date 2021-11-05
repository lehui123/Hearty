import { StyleSheet } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";
import { Dimensions } from 'react-native';
const WIDTH = Math.round(Dimensions.get('window').width)
const HEIGHT = Math.round(Dimensions.get('window').height)

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: Colour.primary
    },
    header: {
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        color: Colour.brand
    },  
    boxheader: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colour.brand
    },     
    boxheader2: {
        fontSize: 35,
        textAlign: 'center',
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
        width:WIDTH * 0.55,
        height:HEIGHT * 0.20,
        marginBottom: 20,
        backgroundColor: Colour.secondary
    },
    
})

export default styles
