import * as React from 'react';
import Header from '../../component/Header';
import { Colors, Metrics } from "../../theme"
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import Breakup from '../../component/Breakup';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const { fontSize } = Metrics
export default function SettingsScreen({ navigation }) {
    const handleItemPress = (itemText) => {
        setSelectedItem(itemText);
    };
    const HeaderProps = {
        navigation: navigation,
        ScreenName: 'Backtest',
        Type: false,

    }
    const ShowToast = () => {
        Toast.show({
            type: 'success', // error, info
            text1: 'Toast Notification',
            text2: 'This is the secondary text',
            autoHide: true,
            visibilityTime: 5000,

        })
    }
    return (
        <View style={styles.container}>
            <View>
                <Header {...HeaderProps} />
            </View>
            <TouchableOpacity style={{ paddingHorizontal: 45 }} onPress={ShowToast}>
                <View style={styles.button}>
                    <Text style={styles.Execute}>Execute Backtest</Text>
                    <Toast />
                </View>
            </TouchableOpacity>
            <Text style={{ top: 45, fontSize: fontSize(15), color: Colors.white, marginLeft: 25 }}>Results</Text>
            <View style={styles.todaylist}>
                <Text style={styles.Bnchmark}>Benchmark Profile</Text>
                <Text style={styles.parcentage}>4.5%</Text>
            </View>

            <View style={styles.todaylist}>
                <Text style={styles.Bnchmark}>Overall lose</Text>
                <Text style={styles.parcentage}>1.5%</Text>
            </View>
            <View style={styles.todaylist}>
                <Text style={styles.Bnchmark}>No.Of Trades</Text>
                <Text style={styles.parcentage}>20</Text>
            </View>
            <View style={styles.todaylist}>
                <Text style={styles.Bnchmark}>Winrate</Text>
                <Text style={styles.parcentage}>87%</Text>
            </View>
            {/* <View>
                    <Breakup/>
                </View> */}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    button: {
        backgroundColor: Colors.ButtonColor,
        paddingBottom: 15,
        paddingVertical: 15,
        borderRadius: 15,
        top: 20,
        opacity: 0.8
    },
    Execute: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: fontSize(15),
        color: Colors.white
    },
    todaylist: {
        backgroundColor: Colors.lightDark,
        padding: 18,
        borderRadius: 10,
        marginHorizontal: 19,
        marginVertical: 5,
        top: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Bnchmark: {
        fontSize: fontSize(12),
        color: Colors.white,
    },
    parcentage: {
        color: Colors.white,
        fontSize: fontSize(13),
    },
})