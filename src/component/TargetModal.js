import React from 'react';
import ProgressiveBar from './ProgressiveBar';
import { Colors, Metrics, Text } from '../theme';
import AppModal from '../theme/AppModal';
import Button from './Button';
// import { Icons } from '../constants';
import {
    View,
    StyleSheet,
} from 'react-native';

const {fontSize,width} = Metrics
const TargetModal = ({ IsTargetModel, targetModelHandle, props }) => {
    return (

        <AppModal visible={IsTargetModel} onClose={targetModelHandle}>
            <View style={styles.header}>
                <Text style={styles.targetText}>Target</Text>
                <ProgressiveBar />
                <View style={styles.targetMaine}>
                    <View style={styles.targetNumber}>
                        <Text style={styles.person}>-4.69</Text>
                        <Text style={styles.person}>-4.69</Text>
                        <Text style={styles.person}>-4.69</Text>
                    </View>
                    <View style={styles.targetNumber}>
                        <Text style={styles.person}>-4.69</Text>
                        <Text style={styles.person}>-4.69</Text>
                        <Text style={styles.person}>-4.69</Text>
                    </View>
                </View>
                <View style={{ bottom: 15 }}>
                    <Button
                        tittle='9.0 Target Update' />
                    <Button
                        tittle='Exit for Today' />
                </View>
            </View>
        </AppModal>
    );
};

export default TargetModal;

const styles = StyleSheet.create({

    person: {
        backgroundColor: Colors.background,
        borderRadius: 9,
        fontSize:fontSize(17),
        color: Colors.Textgray,
        marginRight: 15,
        marginBottom: 10,
        paddingHorizontal: 23,
        paddingTop: 13,
        paddingBottom: 13,
    },
    targetNumber: {
        flexDirection: 'row'
    },
    targetMaine: {
        alignItems: 'center',
        marginLeft: 9,
        bottom:10,
    },
    header: {
    },
    targetText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize:fontSize(16),
        opacity: 0.8,
        bottom: 35,
        paddingVertical:20
    }
});
