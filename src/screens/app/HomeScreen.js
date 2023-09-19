
import * as React from 'react';
import Chart from '../../component/Chart';
import { Icons } from '../../constants';
import { Colors, Text } from '../../theme';
import TradeList from '../../component/TradeList';
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
                        <Text fontWeight={'normal'} style={styles.rating}><Text style={{ fontSize: 16 }}>$</Text>32,149.80</Text>
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
                    <Text style={styles.more}>More</Text>
                </View>
                <ScrollView style={{ flex: 1, height: 210 }}
                    horizontal={true}>
                    <EarningList />
                </ScrollView>

                {/* WeeklyTargets */}
                <View style={styles.WeeklyText}>
                    <Text style={styles.Weekly}>Weekly targets</Text>
                    <Text style={styles.more}>More</Text></View>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'row' }}>
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
        paddingBottom: 80,
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
        fontSize: 15,
        color: Colors.white,
        top: 35,
        fontFamily: 'MyriadPro-Light'
    },
    rating: {
        fontSize: 34,
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
        fontSize: 20,
        color: Colors.white,

    },
    more: {
        fontSize: 15,
        paddingHorizontal: 10,
        color: Colors.Textgray
    },
    WeeklyText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
    },
    Weekly: {
        fontSize: 20,
        color: Colors.white,
    },
    MarketView: {
        justifyContent: 'space-between',
        paddingHorizontal: 19,
        paddingVertical: 15
    },
    MarketText: {
        fontSize: 20,
        color: Colors.white,
    },
    scroll: {
        backgroundColor: Colors.background,
        flex: 1,
        color: "#fff"
    },
})