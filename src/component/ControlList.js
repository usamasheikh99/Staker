import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from "../theme"

const TradingControlList = () => {
  return (
      <View style={styles.todaylist}>
        <Text style={styles.Scalping}>Scalping halt</Text>
        <Text style={styles.ScalpingText}>initiate the sale process and pause all </Text>
      </View>
  )
}

export default TradingControlList;

const styles = StyleSheet.create ({
      todaylist: {
        backgroundColor: Colors.lightDark,
        padding: 18,
        borderRadius: 10,
        marginHorizontal: 19,
        marginVertical: 4,
        paddingTop: 15,
        paddingBottom:15
      },
      Scalping:{
        fontSize:15,
        color:Colors.white,
        paddingVertical:2
      },
      ScalpingText:{
        // fontSize:15,
        color:Colors.Textgray
      },
})