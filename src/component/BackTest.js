import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from './Header'
import { Colors } from '../theme'

const BackTest = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <TouchableOpacity style={{ paddingHorizontal: 45 }}>
        <View style={styles.button}>
          <Text style={styles.Execute}>Execute Backtest</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ top: 55, fontSize: 18, color: Colors.white,marginLeft:25 }}>Results</Text>
      <View style={styles.todaylist}>
        <Text style={styles.Bnchmark}>Benchmark Profile</Text>
        <Text style={styles.parcentage}>4.5%</Text>
      </View>
      <View style={styles.todaylist}>
        <Text style={styles.Bnchmark}>Overall lose</Text>
        <Text style={styles.parcentage}>1.5%</Text>
      </View>
      <View style={styles.todaylist}>
        <Text style={styles.Bnchmark}>No.Of Trades</Text>
        <Text style={styles.parcentage}>20</Text>
      </View>
      <View style={styles.todaylist}>
        <Text style={styles.Bnchmark}>Winrate</Text>
        <Text style={styles.parcentage}>87%</Text>
      </View>
    </View>
  )
}

export default BackTest

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightDark
  },
  button: {
    backgroundColor: Colors.ButtonColor,
    paddingBottom: 15,
    paddingVertical: 15,
    borderRadius: 15,
    top:20,
  },
  Execute: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: Colors.white
  },
  todaylist: {
    backgroundColor: Colors.MediumDark,
    padding: 18,
    borderRadius: 10,
    marginHorizontal: 19,
    marginVertical: 5,
    top: 60,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Bnchmark: {
    fontSize: 15,
    color: Colors.white,
  },
  parcentage: {
    color: Colors.white,
    fontSize:16
  },
})