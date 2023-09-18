import React from 'react';
import { Colors} from '.';
import { Modal, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

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
                        <Image source={Icons.Cross_show} style={{ height: 22, width: 22, opacity: 0.8 ,top:8 }} />
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
        paddingVertical: 50,
        position: 'relative',
        width:370,
        paddingBottom:50
    },
    closeIconContainer: {
        position: 'absolute',
        top: 10, // Adjust the top position as needed
        right: 30, // Adjust the right position as needed
        height:30,
        width:30
    },
});

export default AppModal;
