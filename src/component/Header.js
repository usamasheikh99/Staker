import React, { useState } from 'react'
import { Colors } from '../theme'
import { Icons } from '../constants'
import LogtypeModal from './LogtypeModal'
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native'

const { fontSize, height, width } = Metrics
const Header = ({ navigation, auditType = false, OnOpenPopup, ScreenName = "", isAcount = false, goBack = 'Home', isReportPopup = false }) => {
  const [isTypePopup, setIsTypePopup] = useState(false)
  return (
    <View style={{ backgroundColor: Colors.background, color: "#fff" }}>
      <ImageBackground source={Icons.HomeNew} resizeMode="cover" style={{ paddingHorizontal: 15, paddingTop: Platform.OS == 'android' ? 20 : 45, paddingBottom: 20 }}>

        <View style={styles.headertxt}>
          <Pressable
            activeOpacity={1} onPress={() => navigation.navigate(goBack)}>
            <Image source={Icons.left} resizeMode="cover" style={{ width: 25, height: 25, opacity: 0.7 }} />
          </Pressable >

          <View style={styles.Item}>
            <Text style={[styles.reporttxt]}>{ScreenName}</Text>
          </View>

          {auditType &&
            <Pressable style={styles.typebox} onPress={() => setIsTypePopup(!isTypePopup)} activeOpacity={1}>
              <Text style={styles.type}>Type</Text>
            </Pressable>
          }

          {isReportPopup &&
            <Pressable style={styles.typebox} onPress={OnOpenPopup} activeOpacity={1}>
              <Text >Type</Text>
            </Pressable>
          }

          {isAcount &&
            <Pressable onPress={OnOpenPopup}>
              <View style={styles.assignbox}>
                <View style={styles.txtalign}>
                  <Text style={styles.assigntxt}>Kashan</Text>
                  <Image source={Icons.downarrow} style={{ height: 15, width: 15, }}></Image>
                </View>
              </View>
            </Pressable>
          }
        </View>
      </ImageBackground>

      {isTypePopup &&
        <LogtypeModal visible={isTypePopup} onClose={() => setIsTypePopup(false)} />
      }

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headertxt: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    justifyContent:'space-between'

  },
  Item: {
    flex: 1,
  },

  reporttxt: {
    fontSize: fontSize(16),
    color: Colors.white,
    textAlign: 'center',
  },

  typebox: {
    // backgroundColor: Colors.MediumDark,
    // borderRadius: 8,
    // paddingLeft: 15,
    // paddingRight: 15,
    // paddingBottom: 5,
    // paddingTop: 5,
    // borderRadius: 12,
    // opacity: 0.6
  },
  type: {
    color: Colors.white,
    fontSize: fontSize(10),
  },

  assignbox: {
    borderRadius: 8,
    borderColor: Colors.MediumDark,
    backgroundColor: Colors.MediumDark,
    flexDirection: "row",
    alignItems: "center",
    width: 90,
    height: 32
  },

  txtalign: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12
  },

  assigntxt: {
    color: Colors.white,
    fontSize: fontSize(10),
    marginHorizontal: 5
  }
})

//   <View style={[styles.alignItems, styles.advance]}>
//   <Pressable>
//       <Text style={{ letterSpacing: .0, fontSize: 16, textAlign: 'center', marginLeft: -15 }}>Type</Text></Pressable>
// </View>