import React, { useState } from 'react'
import  Slider from '@react-native-community/slider';
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../theme';

const Breakup = () => {
    const [slider, setSilder] = useState(0)
    return (
        <View style={Styles.container}>
                <View style={Styles.line}>
                    <Text style={{ color: 'pink' }}>Buy Break-up</Text>
                    <View style={{ width: '70%' }}> 
                         {/* <Text style={{ color: 'white', paddingHorizontal: 90, fontSize: 11 }}>Value: {slider}</Text>  */}
                         <Slider
                            value={slider}
                            onValueChange={e => setSilder(e)}
                            trackStyle={{height:0}}
                            thumbStyle={{ width: 9, height: 2, backgroundColor: 'red' }}
                            minimumTrackTintColor={Colors.ButtonColor} />
                    </View>
                </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex:1,
        marginVertical:5,
        paddingBottom: 40
    },
    line: {
        backgroundColor: 'gray',
        borderRadius: 10,
        backgroundColor: '#121319',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginHorizontal: 10,
        justifyContent: 'space-between',
        paddingVertical:10
    }
})
export default Breakup