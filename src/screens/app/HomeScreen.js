
import * as React from 'react';
import Chart from '../../component/Chart';
import { Icons } from '../../constants';
import TradeList from '../../component/TradeList';
import { Colors, Metrics, Text } from '../../theme';
import EarningList from '../../component/EarningList';
import WeeklyTargets from '../../component/WeeklyTargets';
import MaketSentiment from '../../component/MaketSentiment';
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

//publish dev branchs
const { fontSize } = Metrics
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

                <ImageBackground source={Icons.Homebg} resizeMode="cover" style={{ paddingHorizontal: 25, paddingTop: 5, paddingBottom: 30 }}>
                    <View style={styles.Item}>
                        <Text style={styles.total}>Total Capital</Text>
                        <TouchableOpacity activeOpacity={1} >
                            <Image source={Icons.eyes_show} style={styles.eyeIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.topHeaderLeft}>
                        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Login')}>
                            <Image source={Icons.logout} style={styles.IconSize} />
                        </TouchableOpacity>
                    </View>
                    <Text fontWeight={'normal'} style={styles.rating}><Text style={{ fontSize: fontSize(13), }}>$</Text>32,149.80</Text>
                </ImageBackground>

                {/* CHAT */}
                <View>
                    <Chart />
                </View>

                {/* Trad List  */}
                <View>
                    <TradeList navigation={navigation} />
                </View>

                {/* EarningList */}
                <View style={styles.EarningText}>
                    <Text style={styles.earning}>Earnings</Text>
                    <TouchableOpacity style={styles.moreClick}
                        onPress={() => navigation.navigate('Report')}>
                        <Text style={styles.more}>More</Text></TouchableOpacity>
                </View>
                <ScrollView style={{ height: 210 }}
                    horizontal={true}>
                    <EarningList />
                    <EarningList />
                </ScrollView>

                {/* WeeklyTargets */}
                <View style={styles.WeeklyText}>
                    <Text style={styles.Weekly}>Weekly targets</Text>
                    <TouchableOpacity style={styles.moreClick}
                        onPress={() => navigation.navigate('Report')}>
                        <Text style={styles.more}>More</Text></TouchableOpacity></View>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'row' }}>
                        <WeeklyTargets />
                        <WeeklyTargets />
                        <WeeklyTargets />
                    </View>
                </ScrollView>

                {/* MaketSentiment */}
                <View style={styles.MarketView}>
                    <Text style={styles.MarketText}>Market Sentiment</Text>
                </View>
                <MaketSentiment
                    tittle='Positive' />
                <MaketSentiment
                    tittle='Negitive' />
            </ScrollView>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingBottom: 78,
        paddingHorizontal: 2
    },
    eyeIcon: {
        width: 19,
        height: 19,
        left: 8,
        top: 35
    },
    Item: {
        flexDirection: 'row',
    },
    IconSize: {
        width: 17,
        height: 18,
        right: 7,
        top: 20
    },
    topHeaderLeft: {
        alignItems: 'flex-end',
    },
    total: {
        fontSize: fontSize(12),
        color: Colors.white,
        top: 35,
        fontFamily: 'MyriadPro-Light'
    },
    rating: {
        fontSize: fontSize(25),
        color: Colors.white,
        top: 12
    },
    EarningText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        top: 20,
    },
    earning: {
        fontSize: fontSize(16),
        color: Colors.white,
    },
    more: {
        fontSize: fontSize(12),
        paddingHorizontal: 10,
        color: Colors.Textgray,
        paddingBottom: 0,
        // backgroundColor:'red'
    },
    WeeklyText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
    },
    Weekly: {
        fontSize: fontSize(16),
        color: Colors.white,
    },
    MarketView: {
        justifyContent: 'space-between',
        paddingHorizontal: 19,
        paddingVertical: 15
    },
    MarketText: {
        fontSize: fontSize(16),
        color: Colors.white,
    },
    scroll: {
        backgroundColor: Colors.background,
        flex: 1,
        color: "#fff"
    },
    moreClick: {
        paddingLeft: 40,
        paddingRight: 10,
        paddingTop: 5,
        bottom: 5,
        left: 5,
        // backgroundColor:"red",
        borderRadius: 15
    }
})