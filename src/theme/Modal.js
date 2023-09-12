import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors, Metrics } from '../theme';

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
                        <Image source={Icons.Cross_show} style={{ height: 24, width: 24, opacity: 0.8 }} />
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
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 28,
        position: 'relative',

    },
    closeIconContainer: {
        position: 'absolute',
        top: 10, // Adjust the top position as needed
        right: 10, // Adjust the right position as needed
    },
});

export default AppModal;
