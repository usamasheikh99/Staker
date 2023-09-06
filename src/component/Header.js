import React from 'react'
import { Colors } from '../theme'
import { Icons } from '../constants'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Header = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: Colors.background, color: "#fff" }}>

      <View style={styles.Header}>

        <ImageBackground source={Icons.Homebg} resizeMode="cover" style={{ paddingHorizontal: 20, paddingTop: 50, paddingBottom: 30 }}>
         
          <View style={styles.headertxt}>

            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('')}>
              <Image source={Icons.left} resizeMode="cover" style={{ width: 30, height: 30, marginLeft: 8 }} />
            </TouchableOpacity >

            <View style={styles.Item}>
              <Text style={styles.reporttxt}>Position</Text>
            </View>

            <View style={styles.typebox}>
              <Text style={styles.type}>Type</Text>
            </View>

          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

  headertxt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },


  reporttxt: {
    fontSize: 20,
    color: Colors.white,
    marginLeft: 19
  },

  typebox: {
    borderWidth: 1,
    backgroundColor: '#191a1f',
    borderRadius: 8,
    borderColor: '#191a1f',
  },

  type: {
    fontSize: 17,
    paddingHorizontal: 8,
    paddingVertical: 1,
    color:Colors.white
  }











})