import React from 'react'
import { Colors, Metrics } from '../theme'
import { Icons } from "../constants"
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'

const { fontSize, width, height } = Metrics
const EarningList = () => {
    return (
        <View style={styles.Container}>

            {/* EARNING BOX NO 1  */}
            <View style={styles.EarningList}>
                <View style={styles.Header}>
                    <View style={styles.logoContainer}>
                        <Image source={Icons.AMC_show} style={{ width: 25, height: 28 }} />
                    </View>
                    <Text style={styles.stockname}>AMC</Text>
                </View>

                <Image source={Icons.Greenline_show} style={{ height: 20, width: 50, top: '10%' }} />
                <Text style={styles.price}><Text style={{ fontSize: fontSize(11), }}>$</Text>43,00</Text>

                <View style={styles.signal}>
                    <Image source={Icons.UpTrend} style={styles.trend} />
                    <Text style={{ color: Colors.green, opacity: 0.8, fontSize: fontSize(10), }}>3.15%</Text>
                    <Image source={Icons.DotG} style={styles.trends} />
                </View>
            </View>
            {/* EARNING BOX NO AND 1  */}

            {/* EARNING BOX NO 2  */}
            <View style={styles.EarningList}>
                <View style={styles.Header}>
                    <View style={styles.logoContainer}>
                        <Image source={Icons.AMC_show} style={{ width: 25, height: 28 }} />
                    </View>
                    <Text style={styles.stockname}>AMC</Text>
                </View>

                <Image source={Icons.Greenline_show} style={{ height: 20, width: 50, top: '10%' }} />
                <Text style={styles.price}><Text style={{ fontSize: fontSize(11), }}>$</Text>43,00</Text>

                <View style={styles.signal}>
                    <Image source={Icons.UpTrend} style={styles.trend} />
                    <Text style={{ color: Colors.green, opacity: 0.8, fontSize: fontSize(10), }}>3.15%</Text>
                    <Image source={Icons.DotG} style={styles.trends} />
                </View>
            </View>
            {/* EARNING BOX NO 2 END  */}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        left: '2%',
    },
    EarningList: {
        width: width / 3.4,
        padding: 10,
        marginRight: 10,
        borderRadius: 8,
        backgroundColor: Colors.lightDark,
    },
    Header: {
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
    },
    stockname: {
        color: 'white',
        marginLeft: 12
    },
    signal: {
        flexDirection: 'row',
        top: '22%',
        alignItems: 'center'
    },
    stockSymbol: {
        fontSize: fontSize(13),
        color: Colors.white,
        fontWeight: '400',
        left: 9,
        top: 5
    },
    price: {
        fontSize: fontSize(18),
        color: Colors.white,
        top: '15%'
    },
    trend: {
        width: 10,
        height: 5,
        marginRight: 5,
        opacity: 0.5
    },
    trends: {
        height: 10,
        width: 10,
        marginRight: 5,
        opacity: 0.8,
        left: 30
    },

    // tradeline: {
    //     width: 55,
    //     height: 24,
    //     marginVertical: 10,
    //     left: 5,
    //     top: 10,
    //     opacity: 0.4
    // },
})
export default EarningList;



{/* <View style={[styles.EarningList, { backgroundColor: Colors.lightDark }]}>
                    <View style={styles.flexRow}>
                        <View style={styles.logoContainer}>
                            <Image source={Icons.AMC_show} style={{ width: 25, height: 28 }} />
                        </View>
                        <Text style={styles.stockSymbol}>AMC</Text>
                    </View>
                    <View>
                        <Image source={Icons.Greenline_show} style={styles.tradeline} />
                        <Text style={styles.price}><Text style={{ fontSize: fontSize(11), }}>$</Text>43,00</Text></View>

                    <View style={styles.flexRow}>
                        <View style={[styles.flexRow, { flex: 1 }]}>
                            <Image source={Icons.UpTrend} style={styles.trend} />
                            <Text style={{ color: Colors.green, opacity: 0.8, top: 5, fontSize: fontSize(10), }}>3.15%</Text>
                        </View>
                        <Image source={Icons.DotG} style={styles.trends} />
                    </View>
                </View> */}
{/* EARNING BOX NO 1 END */ }

{/* EARNING BOX NO 2  */ }
{/* <View style={[styles.EarningList, { backgroundColor: Colors.lightDark }]}>
                    <View style={styles.flexRow}>
                        <View style={styles.logoContainer}>
                            <Image source={Icons.AFRM_show} style={{ width: 25, height: 28 }} />
                        </View>
                        <Text style={styles.stockSymbol}>AFRM</Text>
                    </View>
                    <View>
                        <Image source={Icons.Redline_show} style={styles.tradeline} />
                        <Text style={styles.price}><Text style={{ fontSize: fontSize(11), }}>$</Text>19,45</Text></View>

                    <View style={styles.flexRow}>
                        <View style={[styles.flexRow, { flex: 1 }]}>
                            <Image source={Icons.DownTrend} style={styles.trend} />
                            <Text style={{ color: Colors.red, opacity: 0.8, top: 5, fontSize: fontSize(10), }}>3.15%</Text>
                        </View>
                        <Image source={Icons.DotR} style={styles.trends} />
                    </View>
                </View> */}
{/* EARNING BOX NO 2 END   */ }

{/* EARNING BOX NO  3  */ }
{/* <View style={[styles.EarningList, { backgroundColor: Colors.lightDark }]}>
                    <View style={styles.flexRow}>
                        <View style={styles.logoContainer}>
                            <Image source={Icons.MARA_show} style={{ width: 25, height: 28 }} />
                        </View>
                        <Text style={styles.stockSymbol}>MARA</Text>
                    </View>
                    <View>
                        <Image source={Icons.Greenline_show} style={styles.tradeline} />
                        <Text style={styles.price}><Text style={{ fontSize: fontSize(11), }}>$</Text>89,45</Text></View>

                    <View style={styles.flexRow}>
                        <View style={[styles.flexRow, { flex: 1 }]}>
                            <Image source={Icons.UpTrend} style={styles.trend} />
                            <Text style={{ color: Colors.green, opacity: 0.8, top: 5, fontSize: fontSize(10), }}>3.15%</Text>
                        </View>
                        <Image source={Icons.DotG} style={styles.trends} />
                    </View>
                </View> */}