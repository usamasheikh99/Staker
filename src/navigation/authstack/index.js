import * as React from 'react';
import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';

//Screens const
import { Screens } from '../../constants'

//Screens
import {Login, GetStarted,} from '../../screens/auth'

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={Screens.Auth.GetStarted} component={GetStarted} />
            <Stack.Screen name={Screens.Auth.Login} component={Login} />
        </Stack.Navigator>
    );
}