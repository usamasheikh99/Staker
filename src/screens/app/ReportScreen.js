import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Animated, ScrollView, Platform } from 'react-native';
import { Icons } from '../../constants';
import { Colors } from '../../theme';
import Header from '../../component/Header';
import ReportType from '../../component/ReportType';
import Calender from '../../component/Calender';

const { fontSize } = Metrics


export default function ReportScreen({ navigation }) {
    
    const [isReportPopup, setIsReportPopup] = useState(false);
    const [collapsedIds, setCollapsedIds] = useState([]);
    const [isCalendar, setIsCalendar] = useState(false);
    const toggleCollapse = (id) => {
        if (collapsedIds.includes(id)) {
            setCollapsedIds(collapsedIds.filter((collapsedId) => collapsedId !== id));
        } else {
            setCollapsedIds([...collapsedIds, id]);
        }
    };

    const HeaderProps = {
        navigation: navigation,
        ScreenName: 'Report',
        OnOpenPopup: () => setIsReportPopup(true),
        isReportPopup: true
    }
    const ReportTypeProps = {
        visible: isReportPopup,
        onClose: () => setIsReportPopup(false)
    }
    return (
        <View style={{ backgroundColor: Colors.background, flex: 1, }}>
            <ScrollView>
                <View>
                    <Header {...HeaderProps} />
                </View>

                <View style={{ paddingBottom: 100 }}>
                    <View style={styles.calenderbox}>
                        <Pressable onPress={() => setIsCalendar(true)}>
                            <Text style={styles.calendertxt}>Wen 1 Jan - Sat 18 Jan (18 days)</Text>
                        </Pressable>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => toggleCollapse('Pnl')} style={styles.iconContainer}>
                        <View style={styles.profitbox}>
                            <View style={styles.profittxt}>
                                <Text style={styles.PLtxt}>P&L</Text>
                                <Text style={styles.totaltxt}>-1481.32 USD</Text>
                                <Text style={styles.percentagetxt}>-6.18%</Text>

                                <Image source={Icons.downarrow} style={{ height: 18, width: 18, left:Platform.OS == 'ios' ? 41 : 83, transform: [{ rotate: collapsedIds.includes('Pnl') ? '0deg' : '268deg' }] }}></Image>

                            </View>
                        </View>
                    </TouchableOpacity>

                    {collapsedIds.includes('Pnl') && (
                        <View style={{ backgroundColor: Colors.background, margin: 10, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ backgroundColor: Colors.lightDark, width: '48%', margin: 3, borderRadius: 16, paddingHorizontal: 18, paddingVertical: 15 }}>
                                    <Text style={styles.Portfoliotxt}>Portfolio States</Text>

                                    <Text style={styles.heading}>Capital</Text>
                                    <Text style={styles.text}>25000 <Text style={{ fontSize: 10, color: Colors.Textgray }}>USD</Text></Text>

                                    <Text style={styles.heading}>Balance</Text>
                                    <Text style={styles.text}>24100.17 <Text style={{ fontSize: 10, color: Colors.Textgray }}>USD</Text></Text>

                                    <Text style={styles.heading}>Start From  </Text>
                                    <Text style={styles.text}>23970.43 <Text style={{ fontSize: 10, color: Colors.Textgray }}>USD</Text></Text>


                                    <Text style={styles.heading}>PnL</Text>
                                    <Text style={styles.text}>-1481.32 <Text style={{ fontSize: 10, color: Colors.Textgray }}>USD</Text> -6.18<Text style={{ fontSize: 13, color: Colors.Textgray, }}>%</Text></Text>

                                    <Text style={styles.heading}>Realized PnL</Text>
                                    <Text style={styles.text}>-1545.32 <Text style={{ fontSize: 10, color: Colors.Textgray }}>USD</Text> -6.45<Text style={{ fontSize: 13, color: Colors.Textgray, }}>%</Text></Text>

                                    <Text style={styles.heading}>WinRate</Text>
                                    <Text style={styles.text}>34<Text style={{ fontSize: 13, color: Colors.Textgray, }}>%</Text> 33<Text style={{ fontSize: 13, color: Colors.Textgray, }}>%</Text></Text>

                                    <Text style={styles.heading}>Trades</Text>
                                    <Text style={styles.text}>58</Text>

                                </View>
                                <View style={{ backgroundColor: Colors.lightDark, width: '48%', margin: 3, borderRadius: 16, paddingHorizontal: 18, paddingVertical: 15 }}>
                                    <Text style={styles.Portfoliotxt}>Long States</Text>

                                    <Text style={styles.heading}>Signals</Text>
                                    <Text style={styles.text}>36</Text>

                                    <Text style={styles.heading}>Trades</Text>
                                    <Text style={styles.text}>58</Text>

                                    <Text style={styles.heading}>PnL</Text>
                                    <Text style={styles.text}>-1481.32 <Text style={{ fontSize: 10, color: Colors.Textgray }}>USD</Text> -6.18<Text style={{ fontSize: 13, color: Colors.Textgray, }}>%</Text></Text>

                                    <Text style={styles.Shorttxt}>Short States</Text>

                                    <Text style={styles.heading}>Signals</Text>
                                    <Text style={styles.text}>36</Text>

                                    <Text style={styles.heading}>Trades</Text>
                                    <Text style={styles.text}>58</Text>

                                    <Text style={styles.heading}>PnL</Text>
                                    <Text style={styles.text}>-1481.32 <Text style={{ fontSize: 10, color: Colors.Textgray }}>USD</Text> -6.18<Text style={{ fontSize: 13, color: Colors.Textgray, }}>%</Text></Text>

                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                                <View style={{ backgroundColor: Colors.lightDark, width: '48%', margin: 3, borderRadius: 16, paddingHorizontal: 18, paddingVertical: 15 }}>
                                    <Text style={styles.Portfoliotxt}>Cost % Charges</Text>

                                    <Text style={styles.heading}>CloudServiceCost</Text>
                                    <Text style={styles.text}>27</Text>

                                    <Text style={styles.heading}>MarketDataCost</Text>
                                    <Text style={styles.text}>37</Text>

                                    <Text style={styles.heading}>TradeCost</Text>
                                    <Text style={styles.text}>348</Text>

                                    <Text style={styles.heading}>TotalCost</Text>
                                    <Text style={styles.text}>412</Text>
                                </View>

                                <View style={{ backgroundColor: Colors.lightDark, width: '48%', margin: 3, borderRadius: 16, paddingHorizontal: 18, paddingVertical: 15 }}>
                                    <Text style={styles.Portfoliotxt}>Performance</Text>

                                    <Text style={styles.heading}>CPUUtilization</Text>
                                    <Text style={styles.text}>12.41</Text>

                                    <Text style={styles.heading}>ErrorCount</Text>
                                    <Text style={styles.text}>49</Text>
                                </View>
                            </View>
                        </View>
                    )}

                    <View style={styles.mainbox}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => toggleCollapse('Today')}>
                            <View style={styles.firstline}>
                                <Text style={styles.todaytxt}>Today</Text>

                                <Image source={Icons.downarrow} style={{ height: 18, width: 18, transform: [{ rotate: collapsedIds.includes('Today') ? '0deg' : '268deg' }] }}></Image>

                            </View>

                            <View style={styles.secline}>
                                <Text style={styles.usdtxt}>39,222 USD</Text>
                                <Text style={styles.perctxt}>(70.5%)</Text>
                                <Text style={styles.txt}>Trades 80 Winrate 56%</Text>
                            </View>
                        </TouchableOpacity>
                        {collapsedIds.includes('Today') && (
                            <View>
                                <Pressable onPress={() => navigation.navigate('Order')}>
                                    <View style={styles.thirdline}>

                                        <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>

                                        <View style={styles.amctext}>
                                            <Text style={styles.amctxt}>AMC</Text>
                                            <Text style={styles.longtxt}>Long  <Image source={Icons.recordbutton} style={{ height: 7, width: 7 }}></Image>  Faizan</Text>
                                        </View>


                                        <View>
                                            <Text style={styles.USD2txt}>32,078 USD</Text>
                                            <Text style={styles.perctxt2}>14.89%</Text>
                                        </View>
                                    </View>
                                </Pressable>

                                <View style={styles.borderbottom}></View>
                                <Pressable onPress={() => navigation.navigate('Order')}>
                                    <View style={styles.thirdline}>
                                        <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>
                                        <View style={styles.amctext}>
                                            <Text style={styles.amctxt}>AMC</Text>
                                            <Text style={styles.longtxt}>Short  <Image source={Icons.recordbutton} style={{ height: 7, width: 7 }}></Image>  Faizan</Text>
                                        </View>


                                        <View>
                                            <Text style={styles.USD2txt}>32,078 USD</Text>
                                            <Text style={styles.perctxt2}>14.89%</Text>
                                        </View>
                                    </View>
                                </Pressable>
                            </View>

                        )}

                    </View>

                    <View style={styles.mainbox}>

                        <View style={styles.firstline}>
                            <Text style={styles.todaytxt}>Today</Text>
                            <TouchableOpacity onPress={() => toggleCollapse('Today')}>
                                <Image source={Icons.downarrow} style={{ height: 18, width: 18, transform: [{ rotate: collapsedIds.includes('Today') ? '0deg' : '268deg' }] }}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secline}>
                            <Text style={styles.usdtxt}>39,222 USD</Text>
                            <Text style={styles.perctxt}>(70.5%)</Text>
                            <Text style={styles.txt}>Trades 80 Winrate 56%</Text>
                        </View>

                        {collapsedIds.includes('Today') && (
                            <View>
                                <View style={styles.thirdline}>
                                    <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>
                                    <View style={styles.amctext}>
                                        <Text style={styles.amctxt}>AMC</Text>
                                        <Text style={styles.longtxt}>Long  <Image source={Icons.recordbutton} style={{ height: 7, width: 7 }}></Image>  Faizan</Text>
                                    </View>


                                    <View>
                                        <Text style={styles.USD2txt}>32,078 USD</Text>
                                        <Text style={styles.perctxt2}>14.89%</Text>
                                    </View>
                                </View>

                                <View style={styles.borderbottom}></View>

                                <View style={styles.thirdline}>
                                    <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>
                                    <View style={styles.amctext}>
                                        <Text style={styles.amctxt}>AMC</Text>
                                        <Text style={styles.longtxt}>Short  <Image source={Icons.recordbutton} style={{ height: 7, width: 7 }}></Image>  Faizan</Text>
                                    </View>


                                    <View>
                                        <Text style={styles.USD2txt}>32,078 USD</Text>
                                        <Text style={styles.perctxt2}>14.89%</Text>
                                    </View>
                                </View>
                            </View>

                        )}

                    </View>

                    <View style={styles.mainbox}>

                        <View style={styles.firstline}>
                            <Text style={styles.todaytxt}>Today</Text>
                            <TouchableOpacity onPress={() => toggleCollapse('Today')}>
                                <Image source={Icons.downarrow} style={{ height: 18, width: 18, transform: [{ rotate: collapsedIds.includes('Today') ? '0deg' : '268deg' }] }}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secline}>
                            <Text style={styles.usdtxt}>39,222 USD</Text>
                            <Text style={styles.perctxt}>(70.5%)</Text>
                            <Text style={styles.txt}>Trades 80 Winrate 56%</Text>
                        </View>

                        {collapsedIds.includes('Today') && (

                            <View>
                                <View style={styles.thirdline}>
                                    <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>
                                    <View style={styles.amctext}>
                                        <Text style={styles.amctxt}>AMC</Text>
                                        <Text style={styles.longtxt}>Long  <Image source={Icons.recordbutton} style={{ height: 7, width: 7 }}></Image>  Faizan</Text>
                                    </View>


                                    <View>
                                        <Text style={styles.USD2txt}>32,078 USD</Text>
                                        <Text style={styles.perctxt2}>14.89%</Text>
                                    </View>
                                </View>

                                <View style={styles.thirdline}>
                                    <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>
                                    <View style={styles.amctext}>
                                        <Text style={styles.amctxt}>AMC</Text>
                                        <Text style={styles.longtxt}>Short  <Image source={Icons.recordbutton} style={{ height: 7, width: 7 }}></Image>  Faizan</Text>
                                    </View>


                                    <View>
                                        <Text style={styles.USD2txt}>32,078 USD</Text>
                                        <Text style={styles.perctxt2}>14.89%</Text>
                                    </View>
                                </View>
                            </View>

                        )}

                    </View>

                    <View style={styles.mainbox}>

                        <View style={styles.firstline}>
                            <Text style={styles.todaytxt}>Today</Text>
                            <TouchableOpacity onPress={() => toggleCollapse('Today')}>
                                <Image source={Icons.downarrow} style={{ height: 18, width: 18, transform: [{ rotate: collapsedIds.includes('Today') ? '0deg' : '268deg' }] }}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secline}>
                            <Text style={styles.usdtxt}>39,222 USD</Text>
                            <Text style={styles.perctxt}>(70.5%)</Text>
                            <Text style={styles.txt}>Trades 80 Winrate 56%</Text>
                        </View>

                        {collapsedIds.includes('Today') && (

                            <View>
                                <View style={styles.thirdline}>
                                    <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>
                                    <View style={styles.amctext}>
                                        <Text style={styles.amctxt}>AMC</Text>
                                        <Text style={styles.longtxt}>Long  <Image source={Icons.recordbutton} style={{ height: 7, width: 7 }}></Image>  Faizan</Text>
                                    </View>


                                    <View>
                                        <Text style={styles.USD2txt}>32,078 USD</Text>
                                        <Text style={styles.perctxt2}>14.89%</Text>
                                    </View>
                                </View>

                                <View style={styles.thirdline}>
                                    <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>
                                    <View style={styles.amctext}>
                                        <Text style={styles.amctxt}>AMC</Text>
                                        <Text style={styles.longtxt}>Short  <Image source={Icons.recordbutton} style={{ height: 7, width: 7 }}></Image>  Faizan</Text>
                                    </View>


                                    <View>
                                        <Text style={styles.USD2txt}>32,078 USD</Text>
                                        <Text style={styles.perctxt2}>14.89%</Text>
                                    </View>
                                </View>
                            </View>

                        )}

                    </View>

                    <View style={styles.mainbox}>

                        <View style={styles.firstline}>
                            <Text style={styles.todaytxt}>Today</Text>
                            <TouchableOpacity onPress={() => toggleCollapse('Today')}>
                                <Image source={Icons.downarrow} style={{ height: 18, width: 18, transform: [{ rotate: collapsedIds.includes('Today') ? '0deg' : '268deg' }] }}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secline}>
                            <Text style={styles.usdtxt}>39,222 USD</Text>
                            <Text style={styles.perctxt}>(70.5%)</Text>
                            <Text style={styles.txt}>Trades 80 Winrate 56%</Text>
                        </View>

                        {collapsedIds.includes('Today') && (

                            <View >
                                <View style={styles.thirdline}>
                                    <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>
                                    <View style={styles.amctext}>
                                        <Text style={styles.amctxt}>AMC</Text>
                                        <Text style={styles.longtxt}>Long  <Image source={Icons.recordbutton} style={{ height: 7, width: 7 }}></Image>  Faizan</Text>
                                    </View>


                                    <View>
                                        <Text style={styles.USD2txt}>32,078 USD</Text>
                                        <Text style={styles.perctxt2}>14.89%</Text>
                                    </View>
                                </View>

                                <View style={styles.thirdline}>
                                    <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>
                                    <View style={styles.amctext}>
                                        <Text style={styles.amctxt}>AMC</Text>
                                        <Text style={styles.longtxt}>Short  <Image source={Icons.recordbutton} style={{ height: 7, width: 7 }}></Image>  Faizan</Text>
                                    </View>


                                    <View>
                                        <Text style={styles.USD2txt}>32,078 USD</Text>
                                        <Text style={styles.perctxt2}>14.89%</Text>
                                    </View>
                                </View>
                            </View>

                        )}

                    </View>
                    <ReportType {...ReportTypeProps} />


                    <Calender isCalendar={isCalendar} setIsCalendar={setIsCalendar} />
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({

    calenderbox: {
        borderRadius: 5,
        borderColor: Colors.lightDark,
        backgroundColor: Colors.lightDark,
        marginHorizontal: 8,
        marginTop: 10,
        paddingVertical: 8
    },

    calendertxt: {
        color: Colors.white,
        fontSize: fontSize(13),
        marginHorizontal: 18,
    },

    profitbox: {
        borderRadius: 10,
        borderColor: Colors.lightDark,
        backgroundColor: Colors.lightDark,
        marginHorizontal: 8,
        marginTop: 10,
        paddingVertical: 8
    },

    profittxt: {
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center',
    },

    PLtxt: {
        color: Colors.indicatorColor,
        fontSize: fontSize(18),
        fontStyle: 'italic'
    },

    totaltxt: {
        color: Colors.white,
        fontSize: fontSize(18),
        fontWeight: '500',
        marginLeft: 10
    },

    percentagetxt: {
        color: Colors.red,
        fontSize: fontSize(18),
        fontWeight: '500',
        marginLeft: 10
    },

    iconContainer: {
        // position: 'absolute',
        right: 1,
    },

    mainbox: {
        borderWidth: 1,
        borderColor: Colors.lightDark,
        backgroundColor: Colors.lightDark,
        marginHorizontal: 8,
        borderRadius: 12,
        marginTop: 18,
        paddingVertical: 12
    },

    firstline: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 18,
    },

    todaytxt: {
        color: Colors.Textgray,
        fontSize: fontSize(14),
        opacity: 0.8
    },

    secline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 2
    },

    usdtxt: {
        fontSize: fontSize(19),
        color: Colors.white,
        fontWeight: '500'
    },

    perctxt: {
        color: Colors.btnGreen,
        marginRight: Platform.OS == 'android' ? 38 : 11,
    },

    txt: {
        color: Colors.Textgray,
        fontSize: fontSize(11),
    },

    thirdline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 17,
        marginTop: 10
    },

    amctext: {
        marginRight: 70,
    },

    amctxt: {
        fontSize: fontSize(14),
        color: Colors.white,
    },

    longtxt: {
        fontSize: fontSize(13),
        color: Colors.Textgray
    },

    USD2txt: {
        fontSize: fontSize(17),
        color: Colors.white,
        fontWeight: '500'
    },

    perctxt2: {
        fontSize: fontSize(14),
        color: Colors.btnGreen,
        textAlign: 'right'
    },

    borderbottom: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.MediumDark,
        width: 275,
        marginLeft: 65,
        marginTop: 12,
        opacity: 0.2
    },

    Portfoliotxt: {
        color: Colors.Textgray,
        fontSize: fontSize(13),
    },

    heading: {
        color: Colors.Textgray,
        marginTop: 12
    },

    text: {
        color: Colors.white
    },

    Shorttxt: {
        marginTop: 25,
        color: Colors.Textgray,
        fontSize: fontSize(13),
    }



})