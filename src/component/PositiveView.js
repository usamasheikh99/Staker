import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
import AppModal from '../theme/AppModal'

const PositiveView = ({ isPostive, setIsPostive }) => {
    return (
        <AppModal visible={isPostive} onClose={() => setIsPostive(false)}>
            <View style={{marginLeft: 20}}>
                <View style={styles.firstline}>
                    <Text style={styles.datetime}>27 Sep, 8:09 PM</Text>
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
        </AppModal>
    )
}

export default PositiveView

const styles = StyleSheet.create({


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