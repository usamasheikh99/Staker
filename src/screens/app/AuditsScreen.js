import React from 'react'
import Header from '../../component/Header'
import { Colors } from "../../theme"
import { View, Text, StyleSheet } from 'react-native'


export default function AuditsScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.innerbox}>
        <View style={styles.Information}>
          <Text style={styles.textcolor}>information</Text>
          <Text style={styles.textcolors}>Indicator</Text></View>
        <View>
          <Text style={{ color: '#f7f7f7', fontSize: 16 }}>It is a long established fact that a reader.</Text>
          <Text style={styles.textcolor}>Lorem ipsum dolor sit amet consectetur adipisicing
            Sint totam vero culpa odio impedit, unde doloremque magnam.
            Delectus sed rem vel quibusdam facilis  sunt ullam
            beatae alias obcaecati! Ratione.</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightDark,
    paddingHorizontal: 5
  },
  Information: {
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 5
  },
  innerbox: {
    backgroundColor: Colors.MediumDark,
    borderRadius: 19,
    paddingHorizontal: 12,
    margin: 5,
    paddingVertical: 19,
    top: 15
  },
  textcolors: {
    fontSize: 15,
    color: Colors.indicatorColor
  }
})