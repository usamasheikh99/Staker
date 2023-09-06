import { View, Text } from 'react-native'
import React from 'react'
import ProgressCircle from 'react-native-progress-circle'
import { Colors } from '../theme'
const ProgressiveBar = () => {
  return (
    <View>
            <View style={{flexDirection:'row',}}>
            <View style={{top:20,left:70}}>
                <ProgressCircle
                    percent={90}
                    radius={120}
                    borderWidth={2}
                    color={Colors.Card2}
                    shadowColor={Colors.MediumDark}
                    bgColor={Colors.lightDark}
                >
                </ProgressCircle>
            </View>
            <View style={{top:30,right:160}}>
                <ProgressCircle
                    percent={80}
                    radius={110}
                    borderWidth={2}
                    color={Colors.Card}
                    shadowColor={Colors.MediumDark}
                    bgColor={Colors.lightDark}
                >
                    <Text style={{ fontSize: 13, color:Colors.Textgray ,top:9}}>{"Today"}</Text>
                    <Text style={{ fontSize: 40 }}>{'2.50'}</Text>
                    <Text style={{ fontSize: 18, color:Colors.green,bottom:8 }}><Text style={{ fontSize: 13 }}>$</Text>{'1300.15'}</Text>
                </ProgressCircle>
            </View>
            </View>
        </View>
  )
}

export default ProgressiveBar