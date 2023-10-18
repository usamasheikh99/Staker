import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import { Colors, Metrics } from '../theme'
import TargetModal from './TargetModal'


const { fontSize, width ,height} = Metrics
const Chart = () => {

    const [IsTargetModel, setIsTargetModel] = useState(false);

    const targetModelHandle = () => {
        setIsTargetModel(!IsTargetModel);
    };
    return (
        <View style={{ backgroundColor: Colors.background, flexDirection: 'row', height: 195 }}>
            <TargetModal IsTargetModel={IsTargetModel} targetModelHandle={targetModelHandle} />
            <View style={{ width: '50%', }}>
                <View style={{ top: '10%', left: width / 34 }}>
                    <ProgressCircle
                        percent={50}
                        radius={80}
                        borderWidth={2}
                        color={Colors.Card2}
                        shadowColor={Colors.MediumDark}
                        bgColor={Colors.lightDark}
                    >
                    </ProgressCircle>
                </View>

                <View style={{ bottom: '67%', left: width / 18 }}>
                    <Pressable onPress={targetModelHandle}>

                        <ProgressCircle
                            percent={40}
                            radius={70}
                            borderWidth={2}
                            color={Colors.Card}
                            shadowColor={Colors.MediumDark}
                            bgColor={Colors.lightDark}
                        >
                            <Text style={{ fontSize: fontSize(11), color: Colors.Textgray, top: 6 }}>{"Today"}</Text>
                            <Text style={{ fontSize: fontSize(29), color: Colors.white, }}>{'2.50'}</Text>
                            <Text style={{ fontSize: fontSize(14), color: Colors.green, bottom: 8, opacity: 0.8 }}><Text style={{ fontSize: fontSize(10) }}>$</Text>{'1300.15'}</Text>
                        </ProgressCircle>
                    </Pressable>
                </View>
            </View>
            <View style={{ width: '50%', }}>
                <View style={{ top: '10%', left: width / 34 }}>
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

                <View style={{ bottom: '67%', left: width / 18 }}>
                    <Pressable onPress={targetModelHandle}>

                        <ProgressCircle
                            percent={50}
                            radius={70}
                            borderWidth={2}
                            color={Colors.Card}
                            shadowColor={Colors.MediumDark}
                            bgColor={Colors.lightDark}
                        >
                            <Text style={{ fontSize: fontSize(11), color: Colors.Textgray, top: 6 }}>{"Today"}</Text>
                            <Text style={{ fontSize: fontSize(29), color: Colors.white, }}>{'2.50'}</Text>
                            <Text style={{ fontSize: fontSize(14), color: Colors.green, bottom: 8, opacity: 0.8 }}><Text style={{ fontSize: fontSize(10) }}>$</Text>{'1300.15'}</Text>
                        </ProgressCircle>
                    </Pressable>
                </View>
            </View>
        </View>

    )
}

export default Chart