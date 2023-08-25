import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, } from 'react-native';
import { Icons } from '../../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ReportScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: Colors.background, flex: 1,}}>
            <View>
                <ImageBackground source={Icons.Homebg} resizeMode="cover" style={{ paddingHorizontal: 25, paddingTop: 68, paddingBottom: 30 }}>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Image source={Icons.left} style={styles.IconSize}></Image>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.reporttxt}>Report</Text>
                        </View>

                    </View>

                </ImageBackground>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    IconSize: {
        height: 32,
        width: 32
    },

    header: {
        flexDirection: 'row',
        
    },

    reporttxt: {
        fontSize: 22,
        color:Colors.white
    }

})