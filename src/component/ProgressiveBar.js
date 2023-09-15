import { View, Text } from 'react-native'
import React from 'react'
import ProgressCircle from 'react-native-progress-circle'
import { Colors } from '../theme'
const ProgressiveBar = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', }}>
                <View style={{bottom:5,left: 65 }}>
                    <ProgressCircle
                        percent={100}
                        radius={120}
                        borderWidth={3}
                        color={Colors.Card2}
                        shadowColor={Colors.MediumDark}
                        bgColor={Colors.lightDark}
                    >
                    </ProgressCircle>
                </View>
                <View style={{ top: 5, right: 165 }}>
                    <ProgressCircle
                        percent={70}
                        radius={110}
                        borderWidth={2}
                        color={Colors.Card}
                        shadowColor={Colors.MediumDark}
                        bgColor={Colors.lightDark}
                    >
                        <Text style={{ fontSize: 17, color: Colors.Textgray, top: 9 }}>{"Today"}</Text>
                        <Text style={{ fontSize: 50, color: Colors.white, opacity: 0.7 }}>{'2.50'}</Text>
                        <Text style={{ fontSize: 26, color: Colors.green, bottom: 11, opacity: 0.8 ,right:3}}><Text style={{ fontSize: 13 }}>$</Text>{'1300.15'}</Text>
                    </ProgressCircle>
                </View>
            </View>
        </View>
    )
}

export default ProgressiveBar