import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../../component/Header';
import { Icons } from '../../constants';
import { Colors } from '../../theme';

const { fontSize } = Metrics
const Order = ({ navigation }) => {
    const HeaderProps = {
        ScreenName: 'Order',
        navigation, navigation
    }
    return (
        <View style={{ backgroundColor: Colors.background, flex: 1, }}>
            <View>
                <Header {...HeaderProps} />
            </View>

            <View style={styles.container}>
                <View style={styles.firstline}>

                    <Image source={Icons.AMC_show} style={{ height: 43, width: 43 }}></Image>

                    <View style={styles.bathline}>
                        <Text style={styles.bedtxt}>Bed Bath & Beyound Inc.</Text>
                        <Text style={styles.BBBYtxt}>BBBY</Text>
                    </View>

                </View>


                <View style={styles.secondline}>

                    <View>
                        <View style={styles.usdline}>
                            <Text style={styles.usdtxt}>USD 300.07</Text>
                            <Text style={styles.feetxt}>(Fee 6.7)</Text>
                        </View>
                        <View>
                            <Text style={styles.pertxt}>14.89%</Text>
                        </View>
                    </View>

                    <View style={styles.righttxt}>
                        <Text style={styles.hrstxt}>1 Hrs 50 Min</Text>
                        <Text style={styles.shorttxt}>Short Scalping</Text>
                        <Text style={styles.assignedtxt}>Assigned by Faizan</Text>
                    </View>

                </View>

                <View style={styles.Box}>
                    <View style={styles.row}>
                        <Text style={styles.saletxt}>Sale</Text>
                        <Text style={styles.saletxt}>20/06 7:15 pm</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.saletxt}>Target</Text>
                        <Text style={styles.saletxt}>Gainer</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.saletxt}>Price</Text>
                        <Text style={styles.saletxt}>5.5 USD</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.saletxt}>Total Price</Text>
                        <Text style={styles.saletxt}>201.40 USD</Text>
                    </View>
                </View>

                <View style={styles.Box}>
                    <View style={styles.row}>
                        <Text style={styles.saletxt}>Sale</Text>
                        <Text style={styles.saletxt2}>21/06 11:45 pm</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.saletxt}>Target</Text>
                        <Text style={styles.saletxt2}>Closing</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.saletxt}>Price</Text>
                        <Text style={styles.saletxt2}>5.45 USD</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.saletxt}>Total Price</Text>
                        <Text style={styles.saletxt2}>223.45 USD</Text>
                    </View>
                </View>

                <View style={styles.smallbox}>
                    <Text style={styles.text}>Your QABI sale is confirmed, netting a 1.0 gain or loss, or 21.02 USD from closing target </Text>
                </View>

            </View>
        </View>

    )
}

export default Order

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
    },

    firstline: {
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center',
        marginHorizontal: 9
    },

    secondline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 8
    },

    bathline: {
        marginLeft: 11
    },

    bedtxt: {
        color: Colors.white,
        fontSize: fontSize(15),
    },

    BBBYtxt: {
        color: Colors.Textgray,
        fontSize: fontSize(13),
        opacity: 0.8
    },

    usdline: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },

    usdtxt: {
        color: Colors.white,
        fontSize: fontSize(18),
        fontWeight: '500'
    },

    feetxt: {
        color: Colors.Textgray,
        fontSize: fontSize(11),
        marginLeft: 5,
        opacity: 0.8
    },

    pertxt: {
        color: Colors.btnGreen,
        fontSize: fontSize(15),
    },

    righttxt: {
        textAlign: 'right'
    },

    hrstxt: {
        color: Colors.Textgray,
        fontSize: fontSize(11),
        opacity: 0.8,
        textAlign: 'right'
    },

    shorttxt: {
        color: Colors.white,
        fontSize: fontSize(15),
        textAlign: 'right',
        marginVertical: 2
    },

    assignedtxt: {
        color: Colors.Textgray,
        fontSize: fontSize(11),
        opacity: 0.8,
        textAlign: 'right'
    },

    Box: {
        borderRadius: 14,
        borderColor: Colors.lightDark,
        backgroundColor: Colors.lightDark,
        marginTop: 16,
        paddingVertical: 8,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        paddingVertical: 5,
    },

    saletxt: {
        fontSize: fontSize(13),
        color: Colors.white,
        paddingHorizontal: 18,
        opacity: 0.9
    },

    saletxt2: {
        fontSize: fontSize(13),
        color: Colors.white,
        paddingHorizontal: 18,
        opacity: 0.9
    },

    smallbox: {
        borderRadius: 14,
        borderColor: Colors.lightDark,
        backgroundColor: Colors.lightDark,
        marginTop: 15,
    },

    text: {
        color: Colors.white,
        opacity: 0.9,
        paddingHorizontal: 18,
        paddingVertical: 15,
        fontSize: fontSize(12),
    }

})

