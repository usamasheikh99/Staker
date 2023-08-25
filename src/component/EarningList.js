import React from 'react'
import { Colors } from '../theme'
import { Icons } from "../constants"
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

const EarningList = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.EarningList, { backgroundColor: Colors.lightDark, top: 30 }]}>
                <View style={[styles.flexRow, styles.alignItems]}>
                    <View style={styles.logoContainer}>
                        <Image source={Icons.AMC_show} style={{ width: 30, height: 30, borderRadius: 5 }} />
                    </View>
                    <Text style={styles.stockSymbol}>AMC</Text>
                </View>
                <View>
                    <Image source={Icons.Greenline_show} style={styles.tradeline} />
                    <Text style={styles.price}><Text style={{fontSize:15}}>$</Text>43,00</Text></View>

                <View style={[styles.flexRow, styles.alignItems,]}>
                    <View style={[styles.flexRow, styles.alignItems, { flex: 1 }]}>
                        <Image source={Icons.UpTrend} style={styles.trend} />
                        <Text style={{ color: Colors.green, top: 10 }}>3.15%</Text>
                    </View>
                    <Image source={Icons.DotG} style={styles.trends} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        left: 3,
        paddingVertical: 40,
        paddingHorizontal: 5,
    },
    flexRow: {
        flexDirection: 'row',
        paddingHorizontal: 1,
        marginBottom:6
    },
    alignItems: {
        alignItems: 'center',
    },
    logoContainer: {
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        marginRight: 20,
        left: 6,
        top: 10
    },
    EarningList: {
        height: 150,
        borderRadius: 10,
    },
    stockSymbol: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: '400',
        top: 10,
        marginRight:32,
    },
    price: {
        fontSize: 20,
        color: Colors.white,
        left: 15,
        top: 8
    },
    trend: {
        width: 10,
        height: 5,
        marginRight: 5,
        top: 10
    },
    trends: {
        width: 11,
        height: 11,
        marginRight: 5,
        top: 10
    },
    tradeline: {
        width: 60,
        height: 25,
        marginVertical: 10,
        left: 20,
        top: 10
    },
    EarningText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 20
    }
})
export default EarningList;
