import React from 'react';
import ProgressiveBar from './ProgressiveBar';
import { Icons } from '../constants';
import { Colors } from '../theme';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Modal, // Import Modal from react-native
    Pressable,
    TouchableWithoutFeedback
} from 'react-native';
import Button from './Button';

const TargetModal = ({ IsTargetModel, targetModelHandle }) => {
    return (
        <Modal
            animationType="none" // You can change the animation type as needed
            transparent={true}
            visible={IsTargetModel}
            onRequestClose={targetModelHandle}
        >
            <TouchableWithoutFeedback onPress={targetModelHandle}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Pressable onPress={targetModelHandle} style={styles.closeButton}>
                            <Image source={Icons.crosShow} style={{ height: 12, width: 12 }} />
                        </Pressable>
                        <Text style={{ fontSize: 22, bottom: 10 }}>Target</Text>
                        <ProgressiveBar />
                        <View style={{ top: 60, left: 30 }}>
                        <View style={{top:60,left:30}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.person}>-4.69</Text>
                    <Text style={styles.person}>-4.69</Text>
                    <Text style={styles.person}>-4.69</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.person}>-4.69</Text>
                    <Text style={styles.person}>-4.69</Text>
                    <Text style={styles.person}>-4.69</Text>
                </View>
                </View>
                        </View>
                        <View style={{ top: 60 }}>
                            <Button />
                            <Button />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default TargetModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: Colors.lightDark,
        paddingVertical: 30,
        marginVertical: 85,
        borderRadius: 20,
        width: 370,
        left: 20,
        paddingBottom: 120,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    person: {
        backgroundColor: Colors.background,
        width: 90,
        height: 60,
        paddingTop: 15,
        borderRadius: 8,
        paddingHorizontal: 18,
        fontSize: 22,
        color: Colors.Textgray,
        marginRight: 20,
        marginBottom: 10,
    },
});
