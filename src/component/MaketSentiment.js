import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from "../theme"
const MaketSentiment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.PositiveText}>Positive</Text>
                <Text style={styles.PositiveDate}>02/01/22 02:00PM</Text>
            </View>
            <View>
                <Text style={styles.oncourse}>Oncourse could file for bankruptcy as most.
                emloyees laid off;down 43%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightDark,
        padding: 20,
        borderRadius: 15,
        marginHorizontal: 8,
        marginVertical: 19,
        paddingTop: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    PositiveText:{
        fontSize:15,
        color:Colors.green,
    },
    PositiveDate:{
        fontSize:15,
        color:Colors.Textgray,
    },
    oncourse:{
        fontSize:17,
        color:Colors.white,
        top:5
    }
})

export default MaketSentiment
