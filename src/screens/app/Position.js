import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity, ScrollView, Pressable,  } from 'react-native'
import Header from '../../component/Header';
import { Icons } from '../../constants';
import { Colors, Text } from '../../theme';
import PositiveView from '../../component/PositiveView';
import AssignPopup from '../../component/AssignPopup';
import SaleConfirmationPopup from '../../component/SaleConfirmationPopup';
import BoostPopup from '../../component/BoostPopup';

// import useSelector from 'react-redux'

const { fontSize ,width} = Metrics

const Position = ({ navigation }) => {
    const [selectPosition, setSelectPosition] = useState(null);
    const [typebyPopup, settypebyPopup] = useState(false);
    const [Assign, setIsAssign] = useState(false);
    const [isSale, setIsSale] = useState(false);
    const [isBoost, setIsBoost] = useState(false);
    const [isPostive, setIsPostive] = useState(false)
    const handleButtonPress = (buttonName) => {
        setSelectPosition(buttonName);
    };

    const HeaderProps = {
        navigation, navigation,
        ScreenName: 'Postion',
        goBack: 'Home',
        isAcount: 'Kashan',
        OnOpenPopup: () => setIsAssign(true)
    }



    return (

        <View style={{ backgroundColor: Colors.background, flex: 1, paddingBottom: 80 }}>

            <ScrollView>
                <View>
                    <Header {...HeaderProps} />
                </View>

                <View style={styles.container}>

                    <View style={styles.firstline}>

                        <Image source={Icons.AMC_show} style={{ height: 43, width: 43 }}></Image>
                        <Pressable>
                            <View style={styles.bathline}>
                                <Text style={styles.bedtxt}>Bed Bath & Beyound Inc.</Text>
                                <Text style={styles.BBBYtxt}>BBBY</Text>
                            </View>
                        </Pressable>
                        <View style={styles.button}>
                            <Pressable onPress={() => setIsSale(true)}>
                                <Text style={styles.btntxt}>Sale</Text>
                            </Pressable>
                        </View>

                    </View>

                    <View style={styles.secondline}>

                        <Pressable onPress={() => setIsBoost(true)}>
                            <Image source={Icons.Shuttle} style={{ height: 23, width: 23, marginTop: 3, opacity: 0.8 }} />
                        </Pressable>

                        <TouchableOpacity activeOpacity={0.5}
                            style={[styles.btn, selectPosition === 'Scalping' && { backgroundColor: Colors.lightDark }]}
                            onPress={() => handleButtonPress('Scalping')}
                        >
                            <Text style={styles.btntxt2}>Scalping</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5}
                            style={[styles.btn2, selectPosition === 'Swing' && { backgroundColor: Colors.lightDark }]}
                            onPress={() => handleButtonPress('Swing')}
                        >
                            <Text style={styles.btntxt2}>Swing</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5}
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

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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

                    <Pressable onPress={() => setIsPostive(true)}>
                        <View style={styles.Positivebox}>
                            <View style={styles.positiveline}>
                                <Text style={styles.positivetxt}>Positive</Text>
                                <Text style={styles.datetime}>27 Sep, 8:09 PM</Text>
                            </View>

                            <View>
                                <Text style={styles.headingline}>Oncorus could file for bankruptcy as most employees laid off;down 43%</Text>
                            </View>
                        </View>
                    </Pressable>

                    <View style={styles.Positivebox}>
                        <View style={styles.positiveline}>
                            <Text style={styles.negativetxt}>Negative</Text>
                            <Text style={styles.datetime}>27 Sep, 8:09 PM</Text>
                        </View>

                        <View>
                            <Text style={styles.headingline}>Oncorus GAAP EPS of -$1.18 misses by $0.48</Text>
                        </View>
                    </View>

                    <View style={styles.Positivebox}>
                        <View style={styles.positiveline}>
                            <Text style={styles.nuetraltxt}>Neutral</Text>
                            <Text style={styles.datetime}>27 Sep, 8:09 PM</Text>
                        </View>

                        <View>
                            <Text style={styles.headingline}>Oncorus GAAP EPS of-$1.18</Text>
                        </View>
                    </View>

                </View>

                <AssignPopup Assign={Assign} setIsAssign={setIsAssign} />

                <SaleConfirmationPopup isSale={isSale} setIsSale={setIsSale} />

                <BoostPopup isBoost={isBoost} setIsBoost={setIsBoost} />

                <PositiveView isPostive={isPostive} setIsPostive={setIsPostive} />

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
        fontSize: fontSize(15),
    },

    BBBYtxt: {
        color: Colors.Textgray,
        fontSize: fontSize(13),
        opacity: 0.6
    },

    button: {
        borderRadius: 6,
        borderColor: Colors.red,
        backgroundColor: Colors.btnRed,
        width: width/5.4,
    },

    btntxt: {
        fontSize: fontSize(13),
        color: Colors.white,
        textAlign: 'center',
        paddingVertical: 5
    },

    btn: {
        borderRadius: 5,
        borderColor: Colors.MediumDark,
        backgroundColor: Colors.MediumDark,
        width:width/6.0,
        alignItems: 'center',
        marginTop: 6,
        marginLeft: 10
    },

    btn2: {
        borderRadius: 5,
        borderColor: Colors.MediumDark,
        backgroundColor: Colors.MediumDark,
        width:width/6.0,
        // width: 65,
        alignItems: 'center',
        marginTop: 6,
        marginLeft: 5
    },

    btntxt2: {
        paddingVertical: 10,
        // paddingHorizontal: 10,
        fontSize: fontSize(10),
        color: Colors.white,
    },

    usd: {
        marginLeft: 18
    },

    usdtxt: {
        color: Colors.white,
        fontSize: fontSize(17),
    },

    perctxt: {
        color: Colors.green,
        marginLeft: 22,
        fontSize: fontSize(17),
    },

    metricstxt: {
        color: Colors.white,
        fontSize: fontSize(15),
    },

    numtxt: {
        color: Colors.Textgray,
        opacity: 0.8,
        fontSize: fontSize(11),
    },

    Box: {
        borderRadius: 14,
        borderColor: Colors.MediumDark,
        backgroundColor: Colors.MediumDark,
        width:width /2.27,
        padding: 1,
        marginTop: 8,
        paddingVertical: 7,
    },

    Box2: {
        borderRadius: 14,
        borderColor: Colors.MediumDark,
        backgroundColor: Colors.MediumDark,
        width:width /2.27,
        padding: 1,
        marginTop: 8,
        paddingVertical: 7,
        // marginLeft: 6
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
        fontSize: fontSize(13)
    },

    metricvalue: {
        color: Colors.white,
        fontSize: fontSize(13)
    },

    metricvaluered: {
        color: Colors.red,
        fontSize: fontSize(13)
    },

    metricvaluebuy: {
        color: Colors.green,
        fontSize: fontSize(13)
    },

    metricvaluesale: {
        color: Colors.red,
        fontSize: fontSize(13)
    },

    newstxt: {
        fontSize: fontSize(15),
        color: Colors.white
    },

    Positivebox: {
        borderRadius: 14,
        borderColor: Colors.MediumDark,
        backgroundColor: Colors.MediumDark,
        padding: 8,
        marginVertical: 7
    },

    positiveline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
        paddingHorizontal: 8
    },

    positivetxt: {
        fontSize: fontSize(13),
        color: Colors.green
    },

    datetime: {
        fontSize: fontSize(12),
        color: Colors.Textgray,
        opacity: 0.6
    },

    headingline: {
        color: Colors.white,
        fontSize: fontSize(13),
        marginVertical: 4,
        paddingHorizontal: 8
    },

    negativetxt: {
        fontSize: fontSize(13),
        color: Colors.red
    },

    nuetraltxt: {
        fontSize: fontSize(13),
        color: Colors.indicatorColor
    }


})