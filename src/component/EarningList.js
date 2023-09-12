import React from 'react'
import { Colors } from '../theme'
import { Icons } from "../constants"
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native'

const EarningList = () => {
    return (
        <View style={styles.container}>
            {/* EARNING BOX NO 1  */}
            <View style={[styles.EarningList, { backgroundColor: Colors.lightDark }]}>
                <View style={styles.flexRow}>
                    <View style={styles.logoContainer}>
                        <Image source={Icons.AMC_show} style={{ width: 25, height: 28 }} />
                    </View>
                    <Text style={styles.stockSymbol}>AMC</Text>
                </View>
                <View>
                    <Image source={Icons.Greenline_show} style={styles.tradeline} />
                    <Text style={styles.price}><Text style={{ fontSize: 13 }}>$</Text>43,00</Text></View>

                <View style={styles.flexRow}>
                    <View style={[styles.flexRow, { flex: 1 }]}>
                        <Image source={Icons.UpTrend} style={styles.trend} />
                        <Text style={{ color: Colors.green, opacity: 0.8, top: 7 ,fontSize:13 }}>3.15%</Text>
                    </View>
                    <Image source={Icons.DotG} style={styles.trends} />
                </View>
            </View>
            {/* EARNING BOX NO 1 END */}

            {/* EARNING BOX NO 2  */}
            <View style={[styles.EarningList, { backgroundColor: Colors.lightDark }]}>
                <View style={styles.flexRow}>
                    <View style={styles.logoContainer}>
                        <Image source={Icons.AFRM_show} style={{ width: 25, height: 28 }} />
                    </View>
                    <Text style={styles.stockSymbol}>AFRM</Text>
                </View>
                <View>
                    <Image source={Icons.Redline_show} style={styles.tradeline} />
                    <Text style={styles.price}><Text style={{ fontSize: 13 }}>$</Text>19,45</Text></View>

                <View style={styles.flexRow}>
                    <View style={[styles.flexRow, { flex: 1 }]}>
                        <Image source={Icons.DownTrend} style={styles.trend} />
                        <Text style={{ color: Colors.red, opacity: 0.7, top: 7 ,fontSize:13 }}>3.15%</Text>
                    </View>
                    <Image source={Icons.DotR} style={styles.trends} />
                </View>
            </View>
            {/* EARNING BOX NO 2 END   */}

            {/* EARNING BOX NO  3  */}
            <View style={[styles.EarningList, { backgroundColor: Colors.lightDark }]}>
                <View style={styles.flexRow}>
                    <View style={styles.logoContainer}>
                        <Image source={Icons.MARA_show} style={{ width: 25, height: 28 }} />
                    </View>
                    <Text style={styles.stockSymbol}>MARA</Text>
                </View>
                <View>
                    <Image source={Icons.Greenline_show} style={styles.tradeline} />
                    <Text style={styles.price}><Text style={{ fontSize: 13 }}>$</Text>89,45</Text></View>

                <View style={styles.flexRow}>
                    <View style={[styles.flexRow, { flex: 1 }]}>
                        <Image source={Icons.UpTrend} style={styles.trend} />
                        <Text style={{ color: Colors.green, opacity: 0.8, top: 7 ,fontSize:13 }}>3.15%</Text>
                    </View>
                    <Image source={Icons.DotG} style={styles.trends} />
                </View>
            </View>
            {/* EARNING BOX NO 3 END  */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        left: 10,
        top: 30
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoContainer: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        overflow: 'hidden',
        marginRight: 7,
        top: 5,
        left: 3
    },
    EarningList: {
        width: 130,
        height: 150,
        padding: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    stockSymbol: {
        fontSize: 17,
        color: Colors.white,
        fontWeight: '400',
        left: 9,
        top: 5
    },
    trend: {
        width: 10,
        height: 5,
        marginRight: 5,
        opacity: 0.5,
        top: 7
    },
    trends: {
        width: 11,
        height: 11,
        marginRight: 5,
        opacity: 0.8,
        top: 7
    },
    tradeline: {
        width: 55,
        height: 24,
        marginVertical: 10,
        left: 5,
        top: 10,
        opacity: 0.5
    },
    price: {
        fontSize: 24,
        top: 7,
        color:Colors.white
    }
})
export default EarningList;
