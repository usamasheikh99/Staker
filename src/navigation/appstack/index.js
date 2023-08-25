import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
          paddingHorizontal:10
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? Icons.HomeIcon : Icons.HomeIcon;
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
            iconName = focused ?  Icons.LogsDeactive : Icons.LogsDeactive;
          }

          // You can return any component !
          return <Image source={iconName} style={{ width:22, height:22 }} color={color} />;
        },
      })}
      // tabBarOptions={{
      //   activeTintColor: 'white',
      //   inactiveTintColor: 'gray',
      //   labelStyle: { fontSize: 12 },        
      //   style: { backgroundColor: 'red' }
      // }}
      >
      {/* <Tab.Screen name={homeName} component={Home}/> */}
      <Tab.Screen name={controlsName} component={Control} />
      <Tab.Screen name={reportsName} component={Report} />
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={auditsName} component={Audit} />
      <Tab.Screen name={settingsName} component={Setting} />
    </Tab.Navigator>
  );
}


export default AppStack;