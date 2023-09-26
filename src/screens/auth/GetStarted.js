import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../theme';
import { Icons } from '../../constants';


const GetStarted = ({navigation}) => {
    return (
        <View style={{ backgroundColor: '#0a0b0fe6', flex: 1 }}>
            <ImageBackground source={Icons.Splash} style={styles.container}>

                <Image source={Icons.GetStarted} style={styles.getstartedlogo}></Image>
                <View style={styles.container2}>
                    <View style={styles.Logo}>
                        <Image source={Icons.Logo} style={styles.logoimg}></Image>
                    </View>

                    <View style={styles.Textview}>
                        <Text style={styles.txt}>Efficiently manage trades without any hassle</Text>
                    </View>

                    <View style={styles.Textview2}>
                        <Text style={styles.txt2}>Engage in trading with the Staker across various top-tier global stocks</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.btntxt}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>

        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    container2: {
        marginHorizontal: 40
    },

    getstartedlogo: {
        height: 280,
        width: 400,
        marginVertical: 40

    },

    Logo: {
        // marginTop: 100,
    },

    logoimg: {
        height: 40,
        width: 125,
    },

    Textview: {
        marginTop: 10
    },

    txt: {
        fontSize: 38,
        color: Colors.white,
    },

    Textview2: {
        
        marginTop: 14
    },

    txt2: {
        fontSize: 15,
        color: Colors.Textgray,
    },

    btnLogin: {
        width: 330,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 13,
        backgroundColor: Colors.ButtonColor,
        marginTop: 75
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: Colors.white
    }

})