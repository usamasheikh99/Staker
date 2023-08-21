import React from 'react'
import { View, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import { Colors } from '../theme'

const Chat = () => {
    return (
        <View>
            <View style={{top:20,}}>
                <ProgressCircle
                    percent={70}
                    radius={70}
                    borderWidth={3}
                    color={Colors.ButtonColor}
                    shadowColor={Colors.MediumDark}
                    bgColor={Colors.lightDark}
                >
                    <Text style={{ fontSize: 13, color:Colors.Textgray }}>{"Today"}</Text>
                    <Text style={{ fontSize: 30 }}>{'2.50'}</Text>
                    <Text style={{ fontSize: 17, color:Colors.green }}><Text>$</Text>{'1300.15'}</Text>
                </ProgressCircle>
            </View>
        </View>
    )
}

export default Chat