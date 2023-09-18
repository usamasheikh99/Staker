import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import { Colors } from '../theme'
import TargetModal from './TargetModal'



const Chat = () => {

    const [IsTargetModel, setIsTargetModel] = useState(false);

    const targetModelHandle = () => {
        setIsTargetModel(!IsTargetModel);
    };
    return (
        <View style={{ backgroundColor: Colors.background, height: 195, left: 20 }}>
            <TargetModal IsTargetModel={IsTargetModel} targetModelHandle={targetModelHandle} />

            <View style={{ flexDirection: 'row' }}>
                <View style={{ top: 20, left: 10 }}>
                    <ProgressCircle
                        percent={60}
                        radius={80}
                        borderWidth={2}
                        color={Colors.Card2}
                        shadowColor={Colors.MediumDark}
                        bgColor={Colors.lightDark}
                    >
                    </ProgressCircle>
                </View>

                <View style={{ top: 30, right: 140 }}>
                    <Pressable onPress={targetModelHandle}>

                        <ProgressCircle
                            percent={50}
                            radius={70}
                            borderWidth={2}
                            color={Colors.Card}
                            shadowColor={Colors.MediumDark}
                            bgColor={Colors.lightDark}
                        >

                            <Text style={{ fontSize: 13, color: Colors.Textgray, top: 9 }}>{"Today"}</Text>
                            <Text style={{ fontSize: 35, color: Colors.white, }}>{'2.50'}</Text>
                            <Text style={{ fontSize: 18, color: Colors.green, bottom: 8, opacity: 0.8 }}><Text style={{ fontSize: 13 }}>$</Text>{'1300.15'}</Text>
                        </ProgressCircle>
                    </Pressable>

                </View>
                <View style={{ top: 20, right: 110 }}>
                    <ProgressCircle
                        percent={60}
                        radius={80}
                        borderWidth={2}
                        color={Colors.ButtonColor}
                        shadowColor={Colors.MediumDark}
                        bgColor={Colors.lightDark}
                    >
                    </ProgressCircle>
                </View>
                <View style={{ top: 30, right: 260 }}>
                    <Pressable onPress={targetModelHandle}>
                        <ProgressCircle
                            percent={50}
                            radius={70}
                            borderWidth={2}
                            color={Colors.Card}
                            shadowColor={Colors.MediumDark}
                            bgColor={Colors.lightDark}
                        >
                            <Text style={{ fontSize: 14, color: Colors.Textgray, top: 9 }}>{"floating"}</Text>
                            <Text style={{ fontSize: 35, color: Colors.white }}>{'30.50'}</Text>
                            <Text style={{ fontSize: 18, color: Colors.green, bottom: 8, opacity: 0.8, }}><Text style={{ fontSize: 10 }}>$</Text>{'30000.15'}</Text>
                        </ProgressCircle>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Chat