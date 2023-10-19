import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Metrics } from '../theme'
import ProgressCircle from 'react-native-progress-circle'

const { fontSize, height, width } = Metrics
const WeeklyTargets = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.EarningList, { backgroundColor: Colors.lightDark }]}>

                <View style={{ flexDirection: 'row', alignItems: 'center', width: width / 1.4,padding:10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.Dates}>
                            21 jun - 28 jun
                        </Text>
                        <Text style={styles.price}><Text style={{ fontSize: fontSize(10) }}>$</Text>130,232</Text>
                        <Text style={styles.winrate}>Trader 80 Winrate 56%</Text>

                    </View>
                    <View style={{}}>
                        <ProgressCircle
                            percent={45}
                            radius={30}
                            borderWidth={4}
                            color="gray"
                            shadowColor="#D60354"
                            bgColor='#26262B' >
                            <Text style={{ fontSize: fontSize(12), fontWeight: '500', color: Colors.white }}>{'75%'}</Text>
                        </ProgressCircle></View>
                </View>
            </View>
        </View>
    )
}

export default WeeklyTargets

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    Dates: {
        color: Colors.Textgray,
    },
    EarningList: {
        borderRadius: 10,
    },
    stockSymbol: {
        fontSize: fontSize(14),
        color: Colors.white
    },
    price: {
        fontSize: fontSize(19),
        color: Colors.white,
        marginVertical:5
    },
    winrate: {
        color: Colors.Textgray,
        fontSize: fontSize(10),

    }
})