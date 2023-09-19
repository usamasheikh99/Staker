import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppModal from '../theme/AppModal'
import { Colors } from '../theme'

const SaleConfirmationPopup = ({ isSale, setIsSale }) => {
    return (
        <AppModal visible={isSale} onClose={() => setIsSale(false)}>

            <View style={styles.container}>
                <Text style={styles.confirmtxt}>Confirm</Text>
                <Text style={styles.para}>Please confirm before proceeding </Text>
                <Text style={styles.para2}>Are you sure?</Text>

                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 7 }}>
                    <View style={styles.loginrow}>
                        <TouchableOpacity style={styles.btnLogin}>
                            <Text style={styles.text}>No</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.loginrow}>
                        <TouchableOpacity style={styles.btnLogin2}>
                            <Text style={styles.text}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </AppModal>
    )
}

export default SaleConfirmationPopup


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 3
    },

    confirmtxt: {
        color: Colors.white,
        fontSize: 19,
    },

    para: {
        color: Colors.Textgray,
        fontSize: 18,
        marginTop: 8,
        paddingHorizontal: 30
    },

    para2: {
        color: Colors.Textgray,
        fontSize: 18,
        paddingHorizontal: 39
    },

    btnLogin: {
        width: 127,
        height: 41,
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: Colors.Textgray,
    },

    btnLogin2: {
        width: 127,
        height: 41,
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: Colors.ButtonColor,
        marginLeft: 8
    },

    loginrow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },

    text: {
        textAlign: 'center',
        fontSize: 15,
        color: Colors.white
    },

})