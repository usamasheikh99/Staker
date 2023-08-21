import * as React from 'react';
import { Colors } from "../../theme"
import { Icons } from "../../constants"
import Chat from '../../component/Chat';
import TradeList from '../../component/TradeList';
import EarningList from '../../component/EarningList';
import WeeklyTargets from '../../component/WeeklyTargets';
import MaketSentiment from '../../component/MaketSentiment';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';




//publish dev branchs
export default function HomeScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: Colors.background, flex: 1, color: "#fff" }}>
            <View style={styles.Header}>
                <ImageBackground source={Icons.Homebg} resizeMode="cover" style={{ paddingHorizontal: 25, paddingTop: 20, paddingBottom: 20 }}>
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
                    <Text style={styles.rating}><Text style={{ fontSize: 18 }}>$</Text>32,149,80</Text>
                </ImageBackground>
            </View>
            <ScrollView style={{ backgroundColor: Colors.background, flex: 1, color: "#fff" }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                    <Chat />
                    <Chat />
                </View>
                <View style={{flex: 1, paddingBottom: 5, top: 40 }}>
                    <TradeList />
                    <TradeList />
                </View>
                <View style={styles.EarningText}>
                    <Text style={styles.earning}>Earnings</Text>
                    <Text style={styles.more}>More</Text>
                </View>
                <ScrollView style={{ flex: 1, height: 220 }}
                    horizontal={true}>
                    <EarningList />
                    <EarningList />
                    <EarningList />
                    <EarningList />
                </ScrollView>
                <View style={styles.WeeklyText}>
                    <Text style={styles.Weekly}>Weekly targets</Text>
                    <Text style={styles.more}>More</Text>
                </View>
                <ScrollView horizontal={true}>
                <View style={{flexDirection:'row'}}>
                    <WeeklyTargets/>
                    <WeeklyTargets/>
                </View>
                </ScrollView>
                <View style={styles.MarketView}>
                    <Text style={styles.MarketText}>Market Sentiment</Text>
                </View>
                <View>
                    <MaketSentiment/>
                    <MaketSentiment/>
                </View>
            </ScrollView>
        </View>

    );
}


const styles = StyleSheet.create({
    eyeIcon: {
        width: 19,
        height: 19,
        left: 8,
        top: 10
    },
    Item: {
        flexDirection: 'row',
    },
    IconSize: {
        width: 20,
        height: 20,
        bottom: 10,
        right: 10,
    },
    topHeaderLeft: {
        alignItems: 'flex-end',
    },
    total: {
        fontSize: 14,
        color: Colors.white,
        top: 10
    },
    rating: {
        fontSize: 35,
        color: Colors.white,
        bottom: 10

    },
    EarningText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        top: 60,
    },
    earning: {
        fontSize: 20,
        color: Colors.white
    },
    more: {
        fontSize: 17,
    },
    WeeklyText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        top: 20,
    },
    Weekly: {
        fontSize: 20,
        color: Colors.white,
    },
    MarketView:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:19,
        paddingVertical:10,
        top:10
    },
    MarketText:{
        fontSize:20,
        color:Colors.white
    },
})