import React from 'react'
import { Colors } from "../theme"
import { Icons } from '../constants'
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'
import Line from './Line'

const TradeList = () => {
    return (
        <View>
            {/* Trade List  */}
            <View style={styles.tradeList}>
                <View style={styles.logoContainer}>
                    <Image source={Icons.AMC_show} style={{ width: 30, height: 30, }} />
                </View>
                <View style={styles.tradeInfo}>
                    <View>
                        <View style={styles.flexRow}>
                            <Text style={styles.stockSymbol}>AMC</Text>
                            <Image source={Icons.warningShow} style={styles.thumupIcon} />
                            <Image source={Icons.Sale_show} style={styles.thumupIcon} />
                            <Image source={Icons.historyShow} style={styles.thumupIcon} />
                        </View>
                        <Text style={styles.task}>
                            <Text style={styles.Indicator}>Indicator</Text>︱Faizan</Text>
                    </View>
                    <Image source={Icons.Greenline_show} style={styles.tradeline} />
                    <View>
                        <Text style={styles.flucP}>3.90 %</Text>
                        <Text style={styles.Dollar}><Text style={{ fontSize: 13 }}>$</Text>1300.15</Text>
                    </View>
                </View>
            </View>
            {/* Trade List END */}
            <View>
                <Line />
            </View>
            {/*  Trade List */}
            <View style={styles.tradeList}>
                <View style={styles.logoContainer}>
                    <Image source={Icons.AFRM_show} style={{ width: 30, height: 30, }} />
                </View>
                <View style={styles.tradeInfo}>
                    <View>
                        <View style={styles.flexRow}>
                            <Text style={styles.stockSymbol}>AFRM</Text>
                            <Image source={Icons.Sale_show} style={styles.thumupIcon} />
                            <Image source={Icons.pauseShow} style={styles.thumupIcon} />
                        </View>
                        <Text style={styles.task}>
                            <Text style={styles.Indicator}>Indicator</Text>︱Rehman</Text>
                    </View>
                    <Image source={Icons.Redline_show} style={styles.tradeline} />
                    <View>
                        <Text style={styles.flucP}>3.90 %</Text>
                        <Text style={styles.Dollars}><Text style={{ fontSize: 13 }}>$</Text>1300.15</Text>
                    </View>
                </View>
            </View>
            {/* Trade List END */}
            <View>
                <Line />
            </View>
            {/*  Trade List */}
            <View style={styles.tradeList}>
                <View style={styles.logoContainer}>
                    <Image source={Icons.coin_show} style={{ width: 30, height: 30, }} />
                </View>
                <View style={styles.tradeInfo}>
                    <View>
                        <View style={styles.flexRow}>
                            <Text style={styles.stockSymbol}>COIN</Text>
                            <Image source={Icons.warningShow} style={styles.thumupIcon} />
                        </View>
                        <Text style={styles.Indicator}>Indicator</Text>
                    </View>
                    <Image source={Icons.Redline_show} style={styles.tradelines} />
                    <View>
                        <Text style={styles.flucP}>3.90 %</Text>
                        <Text style={styles.Dollars}><Text style={{ fontSize: 13 }}>$</Text>1300.15</Text>
                    </View>
                </View>
            </View>
            {/* Trade List END */}
            <View>
                <Line />
            </View>
            {/*  Trade List */}
            <View style={styles.tradeList}>
                <View style={styles.logoContainer}>
                    <Image source={Icons.MARA_show} style={{ width: 30, height: 30, }} />
                </View>
                <View style={styles.tradeInfo}>
                    <View>
                        <View style={styles.flexRow}>
                            <Text style={styles.stockSymbol}>MARA</Text>
                        </View>
                        <Text style={styles.Indicator}>Manual</Text>
                    </View>
                    <Image source={Icons.Redline_show} style={styles.tradelinee} />
                    <View>
                        <Text style={styles.flucP}>3.90 %</Text>
                        <Text style={styles.Dollars}><Text style={{ fontSize: 13 }}>$</Text>1300.15</Text>
                    </View>
                </View>
            </View>
            {/* Trade List END */}
            <View>
                <Line />
            </View>
        </View>


    )
}

export default TradeList

const styles = StyleSheet.create({
    logoContainer: {
        width: 39,
        height: 39,
        marginRight: 12,
        left: 6,
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
        opacity: 0.4
    },
    tradelines: {
        width: 60,
        height: 23,
        opacity: 0.4,
        left: 18
    },
    tradelinee: {
        width: 60,
        height: 23,
        opacity: 0.4,
        left: 22
    },
    flexRow: {
        flexDirection: 'row',
    },
    thumupIcon: {
        width: 15,
        height: 15,
        marginLeft: 10,
        left: 5
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
        marginHorizontal: 10,
        marginVertical: 5,
        paddingTop: 12,
        paddingBottom: 10,
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
        fontSize: 20,
    },
    Indicator: {
        color: Colors.textBlue,
        fontSize: 12
    },
    Dollars: {
        color: Colors.btnRed,
        textAlign: 'right',
        fontSize: 20,
    },
    task: {
        fontSize: 12
    }
})