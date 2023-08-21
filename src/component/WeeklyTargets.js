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
            <View style={{ flexDirection: 'row' ,alignItems: 'center' ,bottom:10}}>
                <Text style={styles.price}>$130,232.03</Text>
                <View style={{bottom:5}}>
                <ProgressCircle
                    percent={40}
                    radius={35}
                    borderWidth={4}
                    color="gray"
                    shadowColor="#D60354"
                    bgColor='#26262B' >
                    <Text style={{ fontSize: 15 , fontWeight:'500'}}>{'75%'}</Text>
                </ProgressCircle></View>
            </View>
            <Text style={{ color: Colors.Textgray, fontSize: 12 ,bottom:30,left:11}}>14.89% traders</Text>
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
        fontSize: 12,
        left:11
    },
    EarningList: {
        // width: width / 1.5,
        padding: 10,
        marginRight: 10,
        borderRadius: 10,
        height:100,
    },
    stockSymbol: {
        fontSize: 18,
        color: Colors.white
    },
    price: {
        fontSize: 20,
        color: Colors.white,
        paddingHorizontal:20,
        right:12,
        alignItems:'center',
        bottom:5
    },
    trend: {
        width: 10,
        height: 10,
        marginRight: 5
    }
})