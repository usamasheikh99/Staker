import { View, Text } from 'react-native'
import React from 'react'
import ProgressCircle from 'react-native-progress-circle'
import { Colors } from '../theme'
const ProgressiveBar = () => {
    return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{bottom:35,left: 90 }}>
                    <ProgressCircle
                        percent={100}
                        radius={100}
                        borderWidth={2}
                        color={Colors.Card2}
                        shadowColor={Colors.MediumDark}
                        bgColor={Colors.lightDark}
                    >
                    </ProgressCircle>
                </View>
                <View style={{ bottom:24, right: 100 }}>
                    <ProgressCircle
                        percent={70}
                        radius={90}
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
     
    )
}

export default ProgressiveBar