import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Setting, Report, Control, Audit } from "../../screens/app/index"
import { Icons } from '../../constants';
import { Image } from 'react-native'

//Screen names
const homeName = "Home";
const reportsName = "Report";
const settingsName = "Settings";
const controlsName = "Control";
const auditsName = "Audit";


const Tab = createBottomTabNavigator();
function AppStack() {
  return (
    // <NavigationContainer>
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
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          let iconsize = 22;
          let style=null

          if (rn === homeName) {
            iconName = focused ? Icons.HomeIcon : Icons.HomeIcon;
            iconsize = 50;
            style= {bottom:15, height:65 ,width:58}
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


          return <Image source={iconName} style={{ width: iconsize, height: iconsize, ...style}} color={color} />;
        },
      })}

    >

      <Tab.Screen name={controlsName} component={Control} />
      <Tab.Screen name={reportsName} component={Report} />
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={auditsName} component={Audit} />
      <Tab.Screen name={settingsName} component={Setting} />
    </Tab.Navigator>
  );
}


export default AppStack;