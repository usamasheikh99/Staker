import React from 'react';
import { Colors, Metrics } from '.';
import { Modal, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../constants'

const { fontsize, width ,height} = Metrics
const AppModal = ({ visible, onClose, children }) => {
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                activeOpacity={1}
                style={styles.modalContainer}
                onPress={(e) => {

                    if (e.target === e.currentTarget) {
                        onClose();
                    }
                }}
            >
                <View style={styles.modalContent}>

                    <TouchableOpacity onPress={onClose} style={styles.closeIconContainer}>
                        <Image source={Icons.crosShow} style={styles.crosicon} />
                    </TouchableOpacity>

                    {children}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: Colors.lightDark,
        borderRadius: 20,
        paddingVertical: 30,
        position: 'relative',
        width: width / 1.1,
    },
    closeIconContainer: {
        position: 'absolute',
        right: 0, 
        height:height /10.3,
        width: width / 4.0,
    },
    crosicon: {
        height: 14,
        width: 14,
        opacity: 0.8,
        top: 22,
        marginLeft: 50,
    }
});

export default AppModal;
