import React from 'react'
import { View, Text, Button, TextInput, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { Colors } from '../../theme';

const Login = ({navigation,props}) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={Icons.Splash} style={styles.container}>

        <Image source={Icons.Logo} style={styles.Logo}></Image>

        <View style={styles.Input}>
          <TextInput style={styles.TextInput} placeholder='Username'placeholderTextColor={Colors.Textgray}></TextInput>
          <TextInput style={styles.TextInput} placeholder='*******' placeholderTextColor={Colors.Textgray}></TextInput>
        </View>

        <View style={styles.loginrow}>
          <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('GetStarted')}>
            <Text style={styles.text}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Icons.face_lock} style={styles.facelocklogo}></Image>
          </TouchableOpacity>
        </View>

      </ImageBackground>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Logo: {
    height: 50,
    width: 170,
  },

  signintext: {
    color: Colors.white,
    marginTop: 5,
    fontSize: 19,
    marginVertical: 14

  },

  Input: {
    alignItems: 'center',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingTop: 40
  },

  TextInput: {
    borderColor: Colors.MediumDark,
    backgroundColor: Colors.MediumDark,
    width: 350,
    height: 55,
    borderRadius: 16,
    fontSize: 16,
    marginVertical: 8,
    paddingHorizontal: 30,
    alignItems : 'center',
    color: Colors.white
  },

  facelocklogo: {
    height: 35,
    width: 35,
    marginTop: 15,
    marginLeft: 13
  },

 

  btnLogin: {
    width: 280,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    marginTop: 13,
    backgroundColor: Colors.ButtonColor,
  },

  text: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.white
  },

  loginrow: {
    flexDirection :'row',
    alignItems : 'center',
    marginRight: 10
  }

})