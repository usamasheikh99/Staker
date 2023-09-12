import React from 'react'
import { Colors } from '../theme'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

const Button = (props) => {
  return (
    <View>
       <TouchableOpacity style={{ paddingHorizontal: 55 }}>
                <View style={styles.button}>
                    <Text style={styles.Execute}>{props.tittle}</Text>
                </View>
            </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.ButtonColor,
        paddingBottom: 15,
        paddingVertical: 15,
        borderRadius: 10,
        top: 20,
        marginBottom:15,
        paddingRight:50,
        paddingLeft:50
    },
    Execute: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: Colors.white
    },
})