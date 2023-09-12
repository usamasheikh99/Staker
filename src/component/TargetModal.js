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

const TargetModal = ({ IsTargetModel, targetModelHandle , props}) => {
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
                            <Image source={Icons.crosShow} style={{ height: 11, width: 11, top: 15, right: 20 }} />
                        </Pressable>
                        <Text style={{ fontSize: 20,color: Colors.white, left: 160, opacity: 0.8 }}>Target</Text>
                        <ProgressiveBar />
                        <View style={{ top: 40, left: 20 }}>
                            <View style={styles.targetText}>
                                <Text style={styles.person}>-4.69</Text>
                                <Text style={styles.person}>-4.69</Text>
                                <Text style={styles.person}>-4.69</Text>
                            </View>
                            <View style={styles.targetText}>
                                <Text style={styles.person}>-4.69</Text>
                                <Text style={styles.person}>-4.69</Text>
                                <Text style={styles.person}>-4.69</Text>
                            </View>
                        </View>
                        <View style={{ top: 35 }}>
                            <Button 
                            tittle='9.0 Target Update'/>
                            <Button 
                            tittle='Exit for Today'/>
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
        paddingVertical: 20,
        borderRadius: 25,
        width: 370,
        paddingBottom: 80,
        top: 20
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    person: {
        backgroundColor: Colors.background,
        borderRadius: 9,
        fontSize: 22,
        color: Colors.Textgray,
        marginRight: 18,
        marginBottom: 10,
        // paddingRight:50,
        paddingHorizontal: 24,
        paddingTop: 15,
        paddingBottom: 13,
    },
    targetText: {
        flexDirection: 'row'
    }
});
