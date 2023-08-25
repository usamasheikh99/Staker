import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Colors } from "../../theme"
import Header from '../../component/Header'
import ControlList from '../../component/ControlList'

export default function ControlScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <ScrollView style={styles.scroll}>
        <Text style={styles.carefullText}>Please select carefully</Text>
        <View style={styles.todaylist}>
          <Text>today's Exit</Text>
          <Text>initiate the sale process and pause all scalping positions for the for the
            rest ot that trading day
          </Text>
        </View>
        <View>
          <ControlList />
          <ControlList />
          <ControlList />
          <ControlList />
          <ControlList />
          <ControlList />
          <ControlList />
          <ControlList />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  carefullText: {
    fontSize: 17,
    paddingVertical: 15,
    color: Colors.white,
    left: 25
  },
  container: {
    flex: 1,
    backgroundColor: Colors.
      lightDark
  },
  todaylist: {
    backgroundColor: Colors.MediumDark,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 19,
    marginVertical: 6,
    paddingTop: 15,
  },
  scroll: {
    backgroundColor: Colors.background,
    flex: 1, color: "#fff"
  }
})