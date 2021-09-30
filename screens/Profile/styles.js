import { StyleSheet } from 'react-native'
import Colour from '../../components/Colour'
import Constants from "expo-constants";
const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        padding: 20,
        backgroundColor: Colour.primary,
    },
    textColor: {
        color: Colour.tertiary
    }

});

export default styles;
