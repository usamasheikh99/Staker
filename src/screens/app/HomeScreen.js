import * as React from 'react';
import { Colors } from '../../theme';
import { Icons } from '../../constants';
import Chat from '../../component/Chat';
import TradeList from '../../component/TradeList';
import EarningList from '../../component/EarningList';
import WeeklyTargets from '../../component/WeeklyTargets';
import MaketSentiment from '../../component/MaketSentiment';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

//publish dev branchs
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <ImageBackground source={Icons.Homebg} resizeMode="cover" style={{ paddingHorizontal: 25, paddingTop: 25, paddingBottom: 21 }}>
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
                    <Text style={styles.rating}><Text style={{ fontSize: 17 }}>$</Text>32,149.80</Text>
                </ImageBackground>
            </View>
            <ScrollView style={styles.scroll}>
                <View>
                    <Chat />
                </View>
                <View>
                    <TradeList />
                </View>
                <View style={styles.EarningText}>
                    <Text style={styles.earning}>Earnings</Text>
                    <Text style={styles.more}>More</Text>
                </View>
                <ScrollView style={{ flex: 1, height: 200 }}
                    horizontal={true}>
                    <EarningList />
                </ScrollView>
                <View style={styles.WeeklyText}>
                    <Text style={styles.Weekly}>Weekly targets</Text>
                    <Text style={styles.more}>More</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'row' }}>
                        <WeeklyTargets />
                        <WeeklyTargets />
                    </View>
                </ScrollView>
                <View style={styles.MarketView}>
                    <Text style={styles.MarketText}>Market Sentiment</Text>
                </View>
                <MaketSentiment />
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
        left: 10,
        top: 22
    },
    Item: {
        flexDirection: 'row',
    },
    IconSize: {
        width: 19,
        height: 20,
        right: 7,
    },
    topHeaderLeft: {
        alignItems: 'flex-end',
    },
    total: {
        fontSize: 15,
        color: Colors.white,
        top: 22
    },
    rating: {
        fontSize: 37,
        color: Colors.white,
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
        fontSize: 16,
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
        top: 3
    },
    MarketText: {
        fontSize: 20,
        color: Colors.white,
        top: 10
    },
    scroll: {
        backgroundColor: Colors.background,
        flex: 1, color: "#fff"
    },
})