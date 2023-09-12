import React, { useState } from 'react'
import { Colors } from '../theme'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Modal,
    Pressable,
    TouchableOpacity
} from 'react-native'

const LogType = ({ modalVisible, setModalVisible }) => {
    const [selectedRadio, setSelectedRadio] = useState(0)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            }}>
            <View style={styles.main}>
                <View style={styles.radioheader}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                        <Pressable onPress={() => { setModalVisible(false) }}>
                            <Image source={Icons.Cross_show} style={styles.eyeIcon} />
                        </Pressable>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, textAlign: 'center', marginLeft: -15 }}>Type</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                        <View style={styles.radiowrapper}>
                            <View style={styles.radio}>
                                {selectedRadio === 1 ? <View style={styles.radioBg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>Infromation</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                        <View style={styles.radiowrapper}>
                            <View style={styles.radio}>
                                {selectedRadio === 2 ? <View style={styles.radioBg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>Weekly</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio(3)}>
                        <View style={styles.radiowrapper}>
                            <View style={styles.radio}>
                                {selectedRadio === 3 ? <View style={styles.radioBg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>Monthly</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedRadio(4)}>
                        <View style={styles.radiowrapper}>
                            <View style={styles.radio}>
                                {selectedRadio === 4 ? <View style={styles.radioBg}></View> : null}
                            </View>
                            <Text style={styles.radioText}>Yearly</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    radioheader: {
        backgroundColor: Colors.lightDark,
        borderRadius: 20,
        top: 250
    },
    radioText: {
        fontSize: 20,
        color: Colors.white
    },
    radio: {
        height: 23,
        width: 23,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10
    },
    radioBg: {
        backgroundColor: Colors.BlueBg,
        paddingHorizontal: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 10,
        borderRadius: 15,
        margin: 2
    },
    radiowrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    eyeIcon: {
        width: 20,
        height: 20,
    },
})
export default LogType