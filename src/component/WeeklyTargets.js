import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../theme'
import ProgressCircle from 'react-native-progress-circle'

const {fontSize} = Metrics
const WeeklyTargets = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.EarningList, { backgroundColor: Colors.lightDark }]}>
                <Text style={styles.Dates}>
                    21 jun - 28 jun
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.price}><Text style={{ fontSize:fontSize(10) }}>$</Text>130,232</Text>
                    <View style={{ paddingHorizontal: 50, left: 30,bottom:8}}>
                        <ProgressCircle
                            percent={45}
                            radius={35}
                            borderWidth={4}
                            color="gray"
                            shadowColor="#D60354"
                            bgColor='#26262B' >
                            <Text style={{ fontSize:fontSize(12), fontWeight: '500' ,color:Colors.white}}>{'75%'}</Text>
                        </ProgressCircle></View>
                </View>
                <Text style={styles.winrate}>Trader 80 Winrate 56%</Text>
            </View>
        </View>
    )
}

export default WeeklyTargets

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        paddingVertical: 10
    },
    Dates: {
        color: Colors.Textgray,
        left: 12,
        top:9
    },
    EarningList: {
        padding: 5,
        borderRadius: 10,
        height:102,
    },
    stockSymbol: {
        fontSize:fontSize(14),
        color: Colors.white
    },
    price: {
        fontSize:fontSize(19),
        color: Colors.white,
        paddingHorizontal: 10,
        bottom:5
    },
    winrate: {
        color: Colors.Textgray,
        fontSize:fontSize(10),
        left: 10,
        bottom:20
    }
})