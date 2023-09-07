import React from 'react'
import { Colors } from '../theme'
import { Icons } from '../constants'
import { View, Text, ImageBackground, StyleSheet, Image, Pressable } from 'react-native'

const Header = ({ navigation, Type = false, ScreenName = "", isAcount = false }) => {
  return (
    <View style={{ backgroundColor: Colors.background, color: "#fff" }}>

      <View style={styles.Header}>
        <ImageBackground source={Icons.Homebg} resizeMode="cover" style={{ paddingHorizontal: 20, paddingTop: 50, paddingBottom: 30 }}>

          <View style={styles.headertxt}>

            <Pressable activeOpacity={1} onPress={() => navigation.navigate('Home')}>
              <Image source={Icons.left} resizeMode="cover" style={{ width: 30, height: 30, marginLeft: 8 }} />
            </Pressable >

            <View style={styles.Item}>
              <Text style={styles.reporttxt}>{ScreenName}</Text>
            </View>
            {Type &&
              <View style={styles.typebox}>
                <Text style={styles.type}>Type</Text>
              </View>
            }
            {isAcount &&
              <Text>Kashan</Text>
            }
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
  },

  typebox: {
    borderWidth: 1,
    backgroundColor: '#191a1f',
    borderRadius: 8,
    borderColor: '#191a1f',
  },

})

//   <View style={[styles.alignItems, styles.advance]}>
//   <Pressable>
//       <Text style={{ letterSpacing: .0, fontSize: 16, textAlign: 'center', marginLeft: -15 }}>Type</Text></Pressable>
// </View>