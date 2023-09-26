// import React from 'react';
// import { StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { Navigator } from '../utils';

// //Stacks
// // import AuthStack from './authStack'
// import AppStack from './appstack/MainContainer'
// import { Colors } from '../theme';

// export default Routes = () => {
//     return (
//         <NavigationContainer
//             // theme={themeMode}
//             ref={(navigationRef) => Navigator.setTopLevelNavigator(navigationRef)}>
//             <StatusBar
//                 barStyle={'light-content'}
//                 translucent backgroundColor='transparent' />
//             <AppStack />
//             {/* <AuthStack /> */}
//         </NavigationContainer>
//     )
// }
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AppStack from "./appstack";
// import HomeScreen from "../screens/app/HomeScreen";
// import { Login } from "../screens/auth";
// import GetStarted from "../screens/app/GetStarted";
import AuthStack from "./authstack";

const Stack = createNativeStackNavigator();
const index = () => {
    return (
        <NavigationContainer>
            <AppStack/>
            {/* <AuthStack/> */}
        </NavigationContainer>
        )
}
export default index



















  {/* <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator> */}