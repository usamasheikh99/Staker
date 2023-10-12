import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import { Colors, Metrics } from '../theme'
import TargetModal from './TargetModal'


const { fontSize, width, height } = Metrics
const Chart = () => {

    const [IsTargetModel, setIsTargetModel] = useState(false);

    const targetModelHandle = () => {
        setIsTargetModel(!IsTargetModel);
    };
    return (
        <View style={styles.maincontainer}>
            <TargetModal IsTargetModel={IsTargetModel} targetModelHandle={targetModelHandle} />
            <View style={{ flexDirection: 'row' }}>
                <View style={{}}>
                    <ProgressCircle
                        percent={60}
                        radius={75}
                        borderWidth={2}
                        color={Colors.Card2}
                        shadowColor={Colors.MediumDark}
                        bgColor={Colors.lightDark}
                    >
                        <Text style={{ fontSize: fontSize(11), color: Colors.Textgray, top: 6 }}>{"Today"}</Text>
                        <Text style={{ fontSize: fontSize(29), color: Colors.white, }}>{'2.50'}</Text>
                        <Text style={{ fontSize: fontSize(14), color: Colors.green, bottom: 8, opacity: 0.8 }}><Text style={{ fontSize: fontSize(10) }}>$</Text>{'1300.15'}</Text>
                    </ProgressCircle>
                </View>

                {/* <View style={{ top: 30, right: 140 }}>
                    <Pressable onPress={targetModelHandle}>

                        <ProgressCircle
                            percent={50}
                            radius={70}
                            borderWidth={2}
                            color={Colors.Card}
                            shadowColor={Colors.MediumDark}
                            bgColor={Colors.lightDark}
                        >
                        </ProgressCircle>
                    </Pressable>

                </View> */}
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{}}>
                    <ProgressCircle
                        percent={60}
                        radius={75}
                        borderWidth={2}
                        color={Colors.Card2}
                        shadowColor={Colors.MediumDark}
                        bgColor={Colors.lightDark}
                    >
                        <Text style={{ fontSize: fontSize(11), color: Colors.Textgray, top: 6 }}>{"Today"}</Text>
                        <Text style={{ fontSize: fontSize(29), color: Colors.white, }}>{'2.50'}</Text>
                        <Text style={{ fontSize: fontSize(14), color: Colors.green, bottom: 8, opacity: 0.8 }}><Text style={{ fontSize: fontSize(10) }}>$</Text>{'1300.15'}</Text>
                    </ProgressCircle>
                </View>

                {/* <View style={{ top: 30, right: 140 }}>
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

                </View> */}
            </View>
        </View>

    )
}

export default Chart

const styles = StyleSheet.create({

    maincontainer: {
        flexDirection: 'row',
        width: width / 1.0,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingVertical: 20
    }
})