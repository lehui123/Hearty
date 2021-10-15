//import { CurrentRenderContext } from '@react-navigation/core'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import Colour from '../../components/Colour'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: Colour.primary
    },
    header: {
        fontSize: 40,
        marginBottom: 20,
        letterSpacing: 1,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: Colour.brand
    },        
    box: {
        fontSize: 25,
        marginBottom: 20,
        letterSpacing: 1,
        //justfyContent: 'center',
        //alignItems: 'center',
        //textAlign: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justfyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        //padding: 15,
        height: 100,
        width: 200,
        marginBottom: 20,
        backgroundColor: Colour.secondary
    },
    
})

export default styles