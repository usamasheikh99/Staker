import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import ProgressCircle from 'react-native-progress-circle'

const WeeklyTargets = () => {
  return (
    <View style={styles.container}>
    <View style={[styles.EarningList, { backgroundColor: Colors.lightDark }]}>
        <Text style={styles.Dates}>
            21 jun - 28 jun
        </Text>
            <View style={{ flexDirection: 'row' ,alignItems: 'center' ,bottom:10,}}>
                <Text style={styles.price}>$130,232</Text>
                <View style={{paddingHorizontal:40,left:30}}>
                <ProgressCircle
                    percent={30}
                    radius={32}
                    borderWidth={5}
                    color="gray"
                    shadowColor="#D60354"
                    bgColor='#26262B' >
                    <Text style={{ fontSize: 15 , fontWeight:'500'}}>{'75%'}</Text>
                </ProgressCircle></View>
            </View>
            <Text style={{ color: Colors.Textgray, fontSize: 13 ,bottom:30,left:11}}>trader 80 Winrate 56%</Text>
    </View>
</View>
  )
}

export default WeeklyTargets

const styles = StyleSheet.create({
    container: {  
        marginLeft:10,
        marginTop:28,
        paddingVertical:10
      },
    Dates: {
        color: Colors.Textgray,
        fontSize: 13,
        left:11
    },
    EarningList: {
        padding: 10,
        borderRadius: 10,
        height:90,
    },
    stockSymbol: {
        fontSize: 18,
        color: Colors.white
    },
    price: {
        fontSize: 21,
        color: Colors.white,
        paddingHorizontal:10,
        bottom:5
    },
})