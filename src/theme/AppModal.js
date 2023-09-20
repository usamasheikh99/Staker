import React from 'react';
import { Colors } from '.';
import { Modal, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../constants'

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
        width: 370,
    },
    closeIconContainer: {
        position: 'absolute',
        top: 10, // Adjust the top position as needed
        right: 0, // Adjust the right position as needed
        height: 50,
        width: 70,
    },
    crosicon: {
        height: 13,
        width: 13,
        opacity: 0.8,
        top: 17,
        left: 35
    }
});

export default AppModal;
