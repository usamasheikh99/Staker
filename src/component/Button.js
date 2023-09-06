import React from 'react'
import { Colors } from '../theme'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

const Button = () => {
  return (
    <View>
       <TouchableOpacity style={{ paddingHorizontal: 45 }}>
                <View style={styles.button}>
                    <Text style={styles.Execute}>Execute Backtest</Text>
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
        borderRadius: 15,
        top: 20,marginBottom:15
    },
    Execute: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: Colors.white
    },
})