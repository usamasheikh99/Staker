import { View, Text, Image, Pressable, Modal, StyleSheet, } from 'react-native'
import React from 'react'
import { Icons } from '../constants';
import { Colors } from '../theme';

const PositiveView = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            }}>
            <View style={styles.modal}>

                <View style={styles.firstline}>
                    <Text style={styles.datetime}>02/10/22 02:00PM</Text>
                    <Pressable onPress={() => { setModalVisible(false) }}>
                        <Image source={Icons.Cross_show} style={{ height: 24, width: 24, opacity: 0.8 }} />
                    </Pressable>
                </View>

                <View style={styles.secondline}>
                    <Text style={styles.positivetxt}>Postive</Text>
                    <Text style={styles.heading}>BioCryst upgraded to buy at jefferies on undervaluation</Text>
                </View>

                <View>
                    <Text style={styles.paragraph}>
                        jefferies upgraded BioCryst Pharmaceuticals to buy from hold saying that the stock is undervalued given the company's commercial performance. Analyst Maury Raycroft sees peak sales of the drug of Orladeyo (berotralstat) by 2027. Jefferies lifted its price target to $11 from $9.50 (~55% upside based on Thursday's close)
                    </Text>
                </View>



            </View>
        </Modal>
    )
}

export default PositiveView


const styles = StyleSheet.create({

    modal: {
        backgroundColor: Colors.lightDark,
        height: 320,
        top: 250,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 28
    },

    firstline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    secondline: {
        marginTop: 12

    },

    datetime: {
        color: Colors.Textgray,
        fontSize: 15,
        opacity: 0.8
    },

    positivetxt: {
        fontSize: 16,
        color: Colors.green
    },

    heading: {
        color: Colors.white,
        fontSize: 17,
        marginTop: 5
    },

    paragraph: {
        color: Colors.Textgray,
        opacity: 0.9,
        fontSize: 15,
        marginTop: 10
    }








})