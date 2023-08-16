import * as React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'dimgray'}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' ,color:'black'}}>Settings Screen</Text>
        </View>
    );
}