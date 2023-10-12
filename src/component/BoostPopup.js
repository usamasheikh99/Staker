import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import AppModal from '../theme/AppModal'
import { Colors } from '../theme'
import Button from './Button'

const { fontSize, width } = Metrics
const BoostPopup = ({ isBoost, setIsBoost }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemPress = (itemText) => {
    setSelectedItem(itemText);
  };
  return (
    <AppModal visible={isBoost} onClose={() => setIsBoost(false)}>
      <Text style={styles.BoostText}>Boost</Text>
      <View style={styles.CvnContainer}>
        <Text style={styles.CvnText}>CVNA</Text>
      </View>
      <View style={styles.CvnContainer}>
        <Text style={styles.CvnText}>4000.26</Text>
      </View>
      <View>
        <Text style={styles.BalanceText}>Current Balance 24003.03</Text>
        <Text style={styles.BalanceText2}>Limited Balance 2400</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable
          style={[
            styles.textbox,
            selectedItem === '1' && { backgroundColor: Colors.Textgray, opacity: 0.7 },
          ]}
          onPress={() => handleItemPress('1')}
          underlayColor="transparent"
        >
          <Text style={styles.crosstext}>1x</Text>
        </Pressable>
        <Pressable
          style={[
            styles.textbox,
            selectedItem === '2' && { backgroundColor: Colors.Textgray, opacity: 0.7 },
          ]}
          onPress={() => handleItemPress('2')}
          underlayColor="transparent"
        >
          <Text style={styles.crosstext}>2x</Text>
        </Pressable>
        <Pressable
          style={[
            styles.textbox,
            selectedItem === '3' && { backgroundColor: Colors.Textgray, opacity: 0.7 },
          ]}
          onPress={() => handleItemPress('3')}
          underlayColor="transparent"
        >
          <Text style={styles.crosstext}>3x</Text>
        </Pressable>
        <Pressable
          style={[
            styles.textbox,
            selectedItem === '4' && { backgroundColor: Colors.Textgray, opacity: 0.7 },
          ]}
          onPress={() => handleItemPress('4')}
          underlayColor="transparent"
        >
          <Text style={styles.crosstext}>4x</Text>
        </Pressable>
        <Pressable
          style={[
            styles.textbox,
            selectedItem === '5' && { backgroundColor: Colors.Textgray, opacity: 0.7 },
          ]}
          onPress={() => handleItemPress('5')}
          underlayColor="transparent"
        >
          <Text style={styles.crosstext}>5x</Text>
        </Pressable>
      </View>
      <View style={styles.loginrow}>
        <TouchableOpacity style={styles.btnLogin2}>
          <Text style={styles.text}>Short</Text>
        </TouchableOpacity>
      </View>
    </AppModal>
  )
}

export default BoostPopup

const styles = StyleSheet.create({

  BoostText: {
    color: Colors.white,
    fontSize: fontSize(15),
    textAlign: 'center',
    bottom: 10,
  },

  CvnText: {
    color: Colors.Textgray,
    fontSize: fontSize(15)
  },

  CvnContainer: {

    backgroundColor: Colors.background,
    paddingBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: width/1.35,
    left: 27,
    borderRadius: 8,
    margin: 5,
  },

  textbox: {

    backgroundColor: Colors.background,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 17,
    marginRight: 10,
    borderRadius: 4,
    left: 40,
    top: 10
  },

  BalanceText: {

    color: 'white',
    textAlign: 'center',
    left: 70,
    fontSize: fontSize(10),
    color: Colors.Textgray
  },

  BalanceText2: {

    color: 'white',
    textAlign: 'center',
    left: 81,
    fontSize: fontSize(10),
    color: Colors.Textgray
  },

  btnLogin2: {

    width: width/1.7,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: Colors.ButtonColor,
    marginLeft: 62,
    top: 30,
  },

  loginrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    paddingBottom: 25
  },

  text: {
    textAlign: 'center',
    fontSize: fontSize(13),
    color: Colors.white
  },

  crosstext: {
    color: Colors.white
  }
})