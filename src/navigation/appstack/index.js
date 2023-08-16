import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home, Setting, Report } from "../../screens/app/index"

//Screen names
const homeName = "Home";
const reportsName = "Report";
const settingsName = "Settings";

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
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: '#0a104c',
          borderTopColor: '#0a104c'
      },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn === reportsName) {
            iconName = focused ? 'list' : 'list-outline';

          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component !
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 12 },        
        style: { backgroundColor: 'red' }
      }}>
      <Tab.Screen name={homeName} component={Home}/>
      <Tab.Screen name={reportsName} component={Report} />
      <Tab.Screen name={settingsName} component={Setting} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}


export default AppStack;