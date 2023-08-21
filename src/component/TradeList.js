import React from 'react'
import { Colors } from "../theme"
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'

const TradeList = () => {
    return (
        // Trade List 
        <View>
            <View style={styles.tradeList}>
                <View style={styles.logoContainer}>
                    <Image source={Icons.AMC_show} style={{ width: 30, height: 30, }} />
                </View>
                <View style={styles.tradeInfo}>
                    <View>
                        <View style={styles.flexRow}>
                            <Text style={styles.stockSymbol}>AMC</Text>
                            <Image source={Icons.Sale_show} style={styles.thumupIcon} />
                        </View>
                        <Text style={{ fontSize: 10 }}>
                            <Text style={styles.Indicator}>Indicator</Text>︱Faizan</Text>
                    </View>
                    <Image source={Icons.Greenline_show} style={styles.tradeline} />
                    <View>
                        <Text style={styles.flucP}>3.90%</Text>
                        <Text style={styles.Dollar}><Text style={{ fontSize: 13 }}>$</Text>1300.15</Text>
                    </View>
                </View>
            </View>
            {/* Trade List END */}

            {/*  Trade List */}
            <View style={styles.tradeList}>
                <View style={styles.logoContainer}>
                    <Image source={Icons.AFRM_show} style={{ width: 30, height: 30, }} />
                </View>
                <View style={styles.tradeInfo}>
                    <View>
                        <View style={styles.flexRow}>
                            <Text style={styles.stockSymbol}>AMC</Text>
                            <Image source={Icons.Sale_show} style={styles.thumupIcon} />
                        </View>
                        <Text style={{ fontSize: 10 }}>
                            <Text style={styles.Indicator}>Indicator</Text>︱Faizan</Text>
                    </View>
                    <Image source={Icons.Redline_show} style={styles.tradeline} />
                    <View>
                        <Text style={styles.flucP}>3.90%</Text>
                        <Text style={styles.Dollars}><Text style={{ fontSize: 13 }}>$</Text>1300.15</Text>
                    </View>
                </View>
            </View>
            {/* Trade List END */}
        </View>


    )
}

export default TradeList

const styles = StyleSheet.create({
    logoContainer: {
        width: 39,
        height: 39,
        marginRight: 15,
        left: 8,
        marginTop: 10
    },
    tradeInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginRight: 15
    },
    flucP: {
        fontSize: 18,
        color: Colors.white,
        textAlign: 'right',
    },
    tradeline: {
        width: 60,
        height: 23,
    },
    flexRow: {
        flexDirection: 'row',
    },
    thumupIcon: {
        width: 17,
        height: 17,
        marginLeft: 21
    },
    Number: {
        color: Colors.red,
        textAlign: 'right',
        fontSize: 10,
        right: 5
    },
    tradeList: {
        backgroundColor: Colors.lightDark,
        flexDirection: 'row',
        padding: 9,
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 5,
        paddingTop: 12,
        paddingBottom: 10
    },
    stockSymbol: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '400'
    },
    Dollar:
    {
        color: Colors.green,
        textAlign: 'right',
        fontSize: 18
    },
    Indicator: {
        color: Colors.textBlue,
        fontSize: 14
    },
    Dollars: {

        color: Colors.btnRed,
        textAlign: 'right',
        fontSize: 18
    }
})