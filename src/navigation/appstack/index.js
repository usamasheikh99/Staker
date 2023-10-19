import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Setting, Report, Control, Audit } from "../../screens/app/index"
import { Icons } from '../../constants';
import { Image } from 'react-native'
import Position from '../../screens/app/Position';
import Order from '../../screens/app/Order';
import Calender from '../../component/Calender';
import WebSocketClient from '../../utils/WebSocketClient';
import { Toast } from 'react-native-toast-message/lib/src/Toast'

//Screen Names
const homeName = "Home";
const reportsName = "Report";
const settingsName = "BackTest";
const controlsName = "Control";
const auditsName = "Log";


const Tab = createBottomTabNavigator();
function AppStack() {

  const handleReceiveData = (payload) => {
    console.log(';payload',payload)
    switch (payload.Type) {
      case "TradingAlert":
        Toast.show({
          type: 'success', // error, info
          text1: payload.data?.Title,
          text2: payload.data?.Message,
          autoHide: true,
          visibilityTime: 5000,

        })
        // TradingAlert(payload.Data)
        break;
      case "CurrentPositions":
        // handleCurrentPositions(payload.Data);
        break;
      case "EvaluateMarket":
        // handleEvaluateMarket(payload.Data);

        break;
      case "TradeMetrics":
        // handleTradeMetrics(payload.Data);
        break;
      case "ConfirmOrder":

        // handleConfirmOrder(payload.Data);
        break;
      case "NewsSentimentAnalysis":
        // handleNewsSentiment(payload.Data);
        break;
      case "TradingSignal":
        // SignalsData();
        break;
      case "ConfigureService":
        // handleConfigureService(payload.Data);
        break;
      case "AccountSummery":
      // handleAccountSummery(payload.Data);
      case "ScreenerResult":
        // handleScreenerResult(payload.Data);
        break;
      case "MarketTrends":
        // handleMarketTrends(payload.Data);
        break;
      case "NewsAnalysis":
        // handleNewsAnalysis(payload.Data);
        break;
      case "NeedLogout":
        Logout(payload.Data);
        break;



      default:
        break;
    }
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 80,
            width: '100%',
            marginHorizontal: 0,
            position: 'absolute',
            bottom: Platform.OS == 'ios' ? 0 : 0,
            right: 0,
            left: 0,
            paddingBottom: 15,
            paddingTop: 6,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#121319',
            borderTopColor: '#121319',
            paddingHorizontal: 13
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            let rn = route.name;
            let iconsize = 22;
            let style = null

            if (rn === homeName) {
              iconName = focused ? Icons.HomeIcon : Icons.HomeIcon;
              iconsize = 50;
              style = { bottom: 15, height: 65, width: 58 }
            }
            if (rn === controlsName) {
              iconName = focused ? Icons.TargetDeactive : Icons.TargetDeactive;
            }
            else if (rn === reportsName) {
              iconName = focused ? Icons.ReportDeactive : Icons.ReportDeactive;

            } else if (rn === settingsName) {
              iconName = focused ? Icons.SettingDeactive : Icons.SettingDeactive;
            }
            else if (rn === auditsName) {
              iconName = focused ? Icons.LogsDeactive : Icons.LogsDeactive;
            }
            return <Image source={iconName} style={{ width: iconsize, height: iconsize, ...style }} color={color} />;
          },
        })}
      >
        <Tab.Screen name={controlsName} component={Control} />
        <Tab.Screen name={reportsName} component={Report} />
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={auditsName} component={Audit} />
        <Tab.Screen name={settingsName} component={Setting} />
        <Tab.Screen name={'Position'} component={Position} options={{ tabBarButton: () => null }} />
        <Tab.Screen name={'Order'} component={Order} options={{ tabBarButton: () => null }} />
        <Tab.Screen name={'Calender'} component={Calender} options={{ tabBarButton: () => null }} />
      </Tab.Navigator>

      <WebSocketClient url="wss://pusher.gentrickstaffing.com/staker/K0VpmxVYZS4m0TDJ4JmXA62q7OGfaDnimJSA6MY8" onReceiveData={handleReceiveData} />

    </>

  );
}


export default AppStack;