import React from 'react'
import ProgressiveBar from './ProgressiveBar'
import { Icons } from '../constants'
import { Colors } from '../theme'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import Button from './Button'

const TargetModal = () => {
    return (
        <View style={styles.Maincontiner}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{fontSize:22,bottom:10}}>Target</Text>
                    <Image source={Icons.crosShow} style={{ height: 12, width: 12 ,left:120,bottom:10}} />
                </View>
                <ProgressiveBar />
                <View style={{top:60,left:30}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.person}>-4.69</Text>
                    <Text style={styles.person}>-4.69</Text>
                    <Text style={styles.person}>-4.69</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.person}>-4.69</Text>
                    <Text style={styles.person}>-4.69</Text>
                    <Text style={styles.person}>-4.69</Text>
                </View>
                </View>
                <View style={{top:60}}>
                <Button/>
                <Button/>
                </View>
            </View>
        </View>
    )
}
export default TargetModal

const styles = StyleSheet.create({
    Maincontiner: {
    },
    header: {
        backgroundColor: Colors.lightDark,
        paddingVertical: 30,
        marginVertical: 85,
        borderRadius:20,
        width: 370,
        left: 20,
        paddingBottom:120
    },
    person:{
        backgroundColor:Colors.background,
        width:90,
        height:60,
        paddingTop:15,
        borderRadius:8,
        paddingHorizontal:18,
        fontSize:22,
        color:Colors.Textgray,
        marginRight:20,
        marginBottom:10,
    }
})



