import React, { useState } from 'react'
import { Colors } from '../theme'
import { Icons } from '../constants'
import LogtypeModal from './LogtypeModal'
import { View, Text, ImageBackground, StyleSheet, Image, Pressable } from 'react-native'


const Header = ({ navigation, auditType = false, reportType = false, ScreenName = "", isAcount = false, goBack = 'Home' }) => {
  const [isTypePopup, setIsTypePopup] = useState(false)
  const [isReportPopup, setIsReportPopup] = useState(false)
  return (
    <View style={{ backgroundColor: Colors.background, color: "#fff" }}>

      <View style={styles.Header}>
        <ImageBackground source={Icons.Homebg} resizeMode="cover" style={{ paddingHorizontal: 20, paddingTop: 50, paddingBottom: 30 }}>

          <View style={styles.headertxt}>
            <Pressable activeOpacity={1} onPress={() => navigation.navigate(goBack)}>
              <Image source={Icons.left} resizeMode="cover" style={{ width: 30, height: 30, marginLeft: 8 }} />
            </Pressable >
            <View style={styles.Item}>
              <Text style={styles.reporttxt}>{ScreenName}</Text>
            </View>
            {auditType &&
              <Pressable style={styles.typebox} onPress={() => setIsTypePopup(!isTypePopup)} activeOpacity={1}>
                <Text style={styles.type}>Type</Text>
              </Pressable>
            }
            {reportType &&
              <Pressable style={styles.typebox} onPress={() => setIsReportPopup(!isReportPopup)} activeOpacity={1}>
                <Text style={styles.type}>Type Report</Text>
              </Pressable>
            }

            {isAcount &&
              <Pressable onPress={() => setIsAssign(!Assign)}>
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
      </View>
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
    justifyContent: 'space-between'
  },
  Item: {
    textAlign: 'center',
    flex: 1,
    marginLeft: 30
  },

  reporttxt: {
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
  },

  typebox: {
    backgroundColor: Colors.MediumDark,
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 12,
    backgroundColor: Colors.MediumDark,
    opacity: 0.6
  },
  type: {
    color: Colors.white,
    fontSize: 13
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
    fontSize: 12,
    marginHorizontal: 5
  }
})

//   <View style={[styles.alignItems, styles.advance]}>
//   <Pressable>
//       <Text style={{ letterSpacing: .0, fontSize: 16, textAlign: 'center', marginLeft: -15 }}>Type</Text></Pressable>
// </View>