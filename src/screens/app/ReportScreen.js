import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Pressable, Image, Animated, ScrollView } from 'react-native';
import { Icons } from '../../constants';
import { Colors } from '../../theme';
import Header from '../../component/Header';



export default function ReportScreen({ navigation }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const animatedHeight = new Animated.Value(isCollapsed ? 0 : 130); // Adjust initial height as needed
    function toggleCollapse() {
        const targetHeight = isCollapsed ? 130 : 0; // Adjust target height for collapse/expand
        setIsCollapsed(!isCollapsed);

        Animated.timing(animatedHeight, {
            toValue: targetHeight,
            duration: 300, // Adjust animation duration as needed
            useNativeDriver: false, // Make sure to set this to false for height animations
        }).start();
    }

    const HeaderProps = {
        ScreenName: 'Report',
        Type:true
    }

    return (
        <View style={{ backgroundColor: Colors.background, flex: 1, }}>

            <View>
                <Header {...HeaderProps} />
            </View>
            <ScrollView>
                <View style={styles.mainbox}>

                    <View style={styles.firstline}>
                        <Text style={styles.todaytxt}>Today</Text>
                        <TouchableOpacity onPress={toggleCollapse}>
                            <Image source={Icons.downarrow} style={{ height: 18, width: 18, transform: [{ rotate: isCollapsed ? '265deg' : '0deg' }] }}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.secline}>
                        <Text style={styles.usdtxt}>39,222 USD</Text>
                        <Text style={styles.perctxt}>(70.5%)</Text>
                        <Text style={styles.txt}>Trades 80 Winrate 56%</Text>
                    </View>

                    <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>

                        <View style={styles.thirdline}>
                            <Pressable onPress={() => navigation.navigate('Position')}>
                                <Image source={Icons.AMC_show} style={{ height: 36, width: 36 }}></Image>
                            </Pressable>
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

                    </Animated.View>

                </View>

                <View style={styles.mainbox}>

                    <View style={styles.firstline}>
                        <Text style={styles.todaytxt}>Today</Text>
                        <TouchableOpacity onPress={toggleCollapse}>
                            <Image source={Icons.downarrow} style={{ height: 18, width: 18, transform: [{ rotate: isCollapsed ? '265deg' : '0deg' }] }}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.secline}>
                        <Text style={styles.usdtxt}>39,222 USD</Text>
                        <Text style={styles.perctxt}>(70.5%)</Text>
                        <Text style={styles.txt}>Trades 80 Winrate 56%</Text>
                    </View>

                    <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>

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

                    </Animated.View>

                </View>

                <View style={styles.mainbox}>

                    <View style={styles.firstline}>
                        <Text style={styles.todaytxt}>Today</Text>
                        <TouchableOpacity onPress={toggleCollapse}>
                            <Image source={Icons.downarrow} style={{ height: 18, width: 18, transform: [{ rotate: isCollapsed ? '265deg' : '0deg' }] }}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.secline}>
                        <Text style={styles.usdtxt}>39,222 USD</Text>
                        <Text style={styles.perctxt}>(70.5%)</Text>
                        <Text style={styles.txt}>Trades 80 Winrate 56%</Text>
                    </View>

                    <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>

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

                    </Animated.View>

                </View>

                <View style={styles.mainbox}>

                    <View style={styles.firstline}>
                        <Text style={styles.todaytxt}>Today</Text>
                        <TouchableOpacity onPress={toggleCollapse}>
                            <Image source={Icons.downarrow} style={{ height: 18, width: 18, transform: [{ rotate: isCollapsed ? '265deg' : '0deg' }] }}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.secline}>
                        <Text style={styles.usdtxt}>39,222 USD</Text>
                        <Text style={styles.perctxt}>(70.5%)</Text>
                        <Text style={styles.txt}>Trades 80 Winrate 56%</Text>
                    </View>

                    <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>

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

                    </Animated.View>

                </View>

                <View style={styles.mainbox}>

                    <View style={styles.firstline}>
                        <Text style={styles.todaytxt}>Today</Text>
                        <TouchableOpacity onPress={toggleCollapse}>
                            <Image source={Icons.downarrow} style={{ height: 18, width: 18, transform: [{ rotate: isCollapsed ? '265deg' : '0deg' }] }}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.secline}>
                        <Text style={styles.usdtxt}>39,222 USD</Text>
                        <Text style={styles.perctxt}>(70.5%)</Text>
                        <Text style={styles.txt}>Trades 80 Winrate 56%</Text>
                    </View>

                    <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>

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

                    </Animated.View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    mainbox: {
        borderWidth: 1,
        borderColor: Colors.lightDark,
        backgroundColor: Colors.lightDark,
        marginHorizontal: 8,
        borderRadius: 12,
        marginTop: 18,
        paddingVertical: 14
    },

    firstline: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 18,
    },

    todaytxt: {
        color: Colors.Textgray,
        fontSize: 16,
    },

    secline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 10
    },

    usdtxt: {
        fontSize: 21,
        color: Colors.Textgray
    },

    perctxt: {
        color: Colors.btnGreen,
        marginRight: 45
    },

    txt: {
        color: Colors.Textgray,
        fontSize: 13
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
        fontSize: 16,
        color: Colors.white,
    },

    longtxt: {
        fontSize: 16,
        color: Colors.Textgray
    },

    USD2txt: {
        fontSize: 20,
        color: Colors.white
    },

    perctxt2: {
        fontSize: 16,
        color: Colors.btnGreen,
        marginLeft: 58
    },

    borderbottom: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.MediumDark,
        width: 275,
        marginLeft: 65,
        marginTop: 12,
        opacity: 0.2
    }



})