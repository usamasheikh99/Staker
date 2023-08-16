import * as React from 'react';
import { View, Text } from 'react-native';

export default function ReportScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'darkgray' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' , color:'black'}}>Details Screen</Text>
        </View>
    );
}