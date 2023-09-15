import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import Header from '../../component/Header';
import { Icons } from '../../constants';
import { Colors, Text } from '../../theme';
import PositiveView from '../../component/PositiveView';
// import useSelector from 'react-redux'



const Position = ({ navigation }) => {
    const [selectPosition, setSelectPosition] = useState(null);
    const [typebyPopup, settypebyPopup] = useState(false);

    const handleButtonPress = (buttonName) => {
        setSelectPosition(buttonName);
    };

    const HeaderProps = {
        navigation, navigation,
        ScreenName: 'Postion',
        goBack: 'Home',
        isAcount: 'Kashan',
    }


    return (

        <View style={{ backgroundColor: Colors.background, flex: 1, paddingBottom: 100 }}>
            <View>
                <Header {...HeaderProps} />
            </View>
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.firstline}>

                        <Image source={Icons.AMC_show} style={{ height: 43, width: 43 }}></Image>
                        <Pressable onPress={() => navigation.navigate('Order')}>
                            <View style={styles.bathline}>
                                <Text style={styles.bedtxt}>Bed Bath & Beyound Inc.</Text>
                                <Text style={styles.BBBYtxt}>BBBY</Text>
                            </View>
                        </Pressable>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <Text style={styles.btntxt}>Sale</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.secondline}>

                        <TouchableOpacity>
                            <Image source={Icons.Shuttle} style={{ height: 22, width: 22, }} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.btn, selectPosition === 'Scalping' && { backgroundColor: Colors.lightDark }]}
                            onPress={() => handleButtonPress('Scalping')}
                        >
                            <Text style={styles.btntxt2}>Scalping</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.btn2, selectPosition === 'Swing' && { backgroundColor: Colors.lightDark }]}
                            onPress={() => handleButtonPress('Swing')}
                        >
                            <Text style={styles.btntxt2}>Swing</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.btn2, selectPosition === 'Holding' && { backgroundColor: Colors.lightDark }]}
                            onPress={() => handleButtonPress('Holding')}
                        >
                            <Text style={styles.btntxt2}>Holding</Text>
                        </TouchableOpacity>

                        <View style={styles.usd}>
                            <Text style={styles.usdtxt}>32.078 USD</Text>
                            <Text style={styles.perctxt}>+14.89%</Text>
                        </View>

                    </View>

                    <View style={styles.thirdline}>
                        <Text style={styles.metricstxt}>Metrics</Text>
                        <Text style={styles.numtxt}>2.5, 3.5, 4.1, 7.5, 11.8, 12.98</Text>
                    </View>

                    <View style={{ flexDirection: 'row', }}>
                        <View style={styles.Box}>
                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Price</Text>
                                <Text style={styles.metricvalue}>0.2319</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Current</Text>
                                <Text style={styles.metricvalue}>0.2301</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Change</Text>
                                <Text style={styles.metricvaluered}>-0.21%</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Position</Text>
                                <Text style={styles.metricvalue}>Long</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Equity</Text>
                                <Text style={styles.metricvalue}>6250.7</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Target</Text>
                                <Text style={styles.metricvalue}>Gainer</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Take Profit</Text>
                                <Text style={styles.metricvalue}>0.2319</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Stop Lose</Text>
                                <Text style={styles.metricvaluered}>-3.5</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Time</Text>
                                <Text style={styles.metricvalue}>2/4 9:10PM</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Duration</Text>
                                <Text style={styles.metricvalue}>1 H 20 M</Text>
                            </View>

                        </View>




                        <View style={styles.Box2}>
                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Candle</Text>
                                <Text style={styles.metricvaluebuy}>Bullish</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>RF</Text>
                                <Text style={styles.metricvaluebuy}>Buy</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>ATR</Text>
                                <Text style={styles.metricvaluebuy}>Buy</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Waddah</Text>
                                <Text style={styles.metricvaluesale}>Sale</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>TMA</Text>
                                <Text style={styles.metricvaluebuy}>Buy</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>DMI</Text>
                                <Text style={styles.metricvaluesale}>Sale</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>Volume</Text>
                                <Text style={styles.metricvaluebuy}>Buy</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>MAs</Text>
                                <Text style={styles.metricvaluebuy}>Buy</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>BBP</Text>
                                <Text style={styles.metricvaluesale}>Sale</Text>
                            </View>

                            <View style={styles.boxtxt}>
                                <Text style={styles.metricsheading}>STC</Text>
                                <Text style={styles.metricvaluebuy}>Buy</Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.fourthline}>
                        <Text style={styles.newstxt}>Latest news</Text>
                    </View>

                    <Pressable onPress={() => settypebyPopup(!typebyPopup)}>
                        <View style={styles.Positivebox}>
                            <View style={styles.positiveline}>
                                <Text style={styles.positivetxt}>Positive</Text>
                                <Text style={styles.datetime}>02/10/22 02:00PM</Text>
                            </View>

                            <View>
                                <Text style={styles.headingline}>Oncorus could file for bankruptcy as most employees laid off;down 43%</Text>
                            </View>
                        </View>
                    </Pressable>

                    <View style={styles.Positivebox}>
                        <View style={styles.positiveline}>
                            <Text style={styles.negativetxt}>Negative</Text>
                            <Text style={styles.datetime}>02/10/22 02:00PM</Text>
                        </View>

                        <View>
                            <Text style={styles.headingline}>Oncorus GAAP EPS of -$1.18 misses by $0.48</Text>
                        </View>
                    </View>

                    <View style={styles.Positivebox}>
                        <View style={styles.positiveline}>
                            <Text style={styles.nuetraltxt}>Neutral</Text>
                            <Text style={styles.datetime}>02/10/22 02:00PM</Text>
                        </View>

                        <View>
                            <Text style={styles.headingline}>Oncorus GAAP EPS of-$1.18</Text>
                        </View>
                    </View>

                </View>

                <PositiveView modalVisible={typebyPopup} setModalVisible={settypebyPopup} />
            </ScrollView>
        </View>

    )
}

export default Position


const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
    },

    firstline: {
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    secondline: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14,
    },

    thirdline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
    },

    fourthline: {
        marginTop: 20,
    },

    bathline: {
        marginRight: 28
    },

    bedtxt: {
        color: Colors.white,
        fontSize: 18
    },

    BBBYtxt: {
        color: Colors.Textgray,
        fontSize: 16,
        opacity: 0.6
    },

    button: {
        borderRadius: 6,
        borderColor: Colors.red,
        backgroundColor: Colors.btnRed,
        width: 75,
        height: 30,
    },

    btntxt: {
        fontSize: 15,
        color: Colors.white,
        paddingHorizontal: 23,
        paddingVertical: 3
    },

    btn: {
        borderRadius: 5,
        borderColor: Colors.MediumDark,
        backgroundColor: Colors.MediumDark,
        height: 37,
        width: 65,
        alignItems: 'center',
        marginTop: 6,
        marginLeft: 10
    },

    btn2: {
        borderRadius: 5,
        borderColor: Colors.MediumDark,
        backgroundColor: Colors.MediumDark,
        height: 37,
        width: 65,
        alignItems: 'center',
        marginTop: 6,
        marginLeft: 5
    },

    btntxt2: {
        paddingVertical: 10,
        fontSize: 12,
        color: Colors.white,
    },

    usd: {
        marginLeft: 30
    },

    usdtxt: {
        color: Colors.white,
        fontSize: 19
    },

    perctxt: {
        color: Colors.green,
        marginLeft: 35,
        fontSize: 17
    },

    metricstxt: {
        color: Colors.white,
        fontSize: 18
    },

    numtxt: {
        color: Colors.Textgray,
        opacity: 0.8,
        fontSize: 13
    },

    Box: {
        borderRadius: 14,
        borderColor: Colors.MediumDark,
        backgroundColor: Colors.MediumDark,
        width: 182,
        padding: 1,
        marginTop: 8,
        paddingVertical: 7,
    },

    Box2: {
        borderRadius: 14,
        borderColor: Colors.MediumDark,
        backgroundColor: Colors.MediumDark,
        width: 182,
        padding: 1,
        marginTop: 8,
        paddingVertical: 7,
        marginLeft: 6
    },

    boxtxt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        padding: 6
    },

    metricsheading: {
        color: Colors.Textgray,
        opacity: 1,
        fontSize: 15
    },

    metricvalue: {
        color: Colors.white,
        fontSize: 16
    },

    metricvaluered: {
        color: Colors.red,
        fontSize: 16
    },

    metricvaluebuy: {
        color: Colors.green,
        fontSize: 16
    },

    metricvaluesale: {
        color: Colors.red,
        fontSize: 16
    },

    newstxt: {
        fontSize: 18,
        color: Colors.white
    },

    Positivebox: {
        borderRadius: 14,
        borderColor: Colors.MediumDark,
        backgroundColor: Colors.MediumDark,
        padding: 8,
        marginVertical: 12
    },

    positiveline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
        paddingHorizontal: 8
    },

    positivetxt: {
        fontSize: 15,
        color: Colors.green
    },

    datetime: {
        fontSize: 14,
        color: Colors.Textgray,
        opacity: 0.6
    },

    headingline: {
        color: Colors.white,
        fontSize: 16,
        marginVertical: 4,
        paddingHorizontal: 8
    },

    negativetxt: {
        fontSize: 15,
        color: Colors.red
    },

    nuetraltxt: {
        fontSize: 15,
        color: Colors.indicatorColor
    }


})