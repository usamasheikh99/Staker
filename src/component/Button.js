import React from 'react'
import { Colors } from '../theme'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const Button = (props) => {

    return (
        <View>
            <TouchableOpacity style={{ paddingHorizontal: 55 }} >
                <View style={styles.button}>
                    <Text style={[styles.Execute]}>{props.tittle}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        top: 20,
        backgroundColor: Colors.ButtonColor,
        paddingBottom: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 15,
        // width: 260
    },
    Execute: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: Colors.white,
    },
})