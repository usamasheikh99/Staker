import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors,Metrics,Text } from "../theme"

const { fontSize } = Metrics
const MaketSentiment = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.PositiveText}>{props.tittle}</Text>
                <Text style={styles.PositiveDate}>6 jun 2:50</Text>
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
        borderRadius: 20,
        marginHorizontal: 8,
        marginVertical: 5,
        paddingTop: 15,
        bottom:10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    PositiveText:{
        fontSize:fontSize(11),
        color:Colors.green,
    },
    PositiveDate:{
        fontSize:13,
        color:Colors.Textgray,
    },
    oncourse:{
        fontSize:15,
        color:Colors.white,
        top:5
    }
})

export default MaketSentiment
