import * as React from 'react';
import { View, Text, RootView, StyleSheet} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <RootView style={{ backgroundColor: '#0A0B0F', flex: 1, color: "#fff" }}>
            <View style={[styles.container, { height: Platform.OS == 'ios' ? '90%' : '88%' }]}>
            </View>
            </RootView>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
})