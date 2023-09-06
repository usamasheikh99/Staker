import React from 'react'
import { View, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import { Colors } from '../theme'

const Chat = () => {
    return (
        <View style={{backgroundColor:Colors.background,height:215}}>
            <View style={{flexDirection:'row',}}>
            <View style={{top:20,left:10}}>
                <ProgressCircle
                    percent={60}
                    radius={90}
                    borderWidth={2}
                    color={Colors.Card2}
                    shadowColor={Colors.MediumDark}
                    bgColor={Colors.lightDark}
                >
                </ProgressCircle>
            </View>
            <View style={{top:30,right:160}}>
                <ProgressCircle
                    percent={50}
                    radius={80}
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
            <View style={{top:20,right:130}}>
                <ProgressCircle
                    percent={60}
                    radius={90}
                    borderWidth={2}
                    color={Colors.ButtonColor}
                    shadowColor={Colors.MediumDark}
                    bgColor={Colors.lightDark}
                >
                </ProgressCircle>
            </View>
            <View style={{top:30,right:300}}>
                <ProgressCircle
                    percent={50}
                    radius={80}
                    borderWidth={2}
                    color={Colors.Card}
                    shadowColor={Colors.MediumDark}
                    bgColor={Colors.lightDark}
                >
                    <Text style={{ fontSize: 14, color:Colors.Textgray ,top:9}}>{"floating"}</Text>
                    <Text style={{ fontSize: 40 }}>{'30.50'}</Text>
                    <Text style={{ fontSize: 18, color:Colors.green,bottom:8 }}><Text style={{ fontSize: 10 }}>$</Text>{'30000.15'}</Text>
                </ProgressCircle>
            </View>
            </View>
        </View>
    )
}

export default Chat