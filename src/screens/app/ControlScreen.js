import React, { useState } from 'react'
import { Colors, Metrics } from "../../theme"
import Header from '../../component/Header'
import Slider from '@react-native-community/slider'
import Button from '../../component/Button';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform
} from 'react-native'



const { fontSize } = Metrics
export default function ControlScreen({ navigation }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemPress = (itemText) => {
    setSelectedItem(itemText);
  };
  const [slider, setSilder] = useState(0)
  const HeaderProps = {
    navigation: navigation,
    ScreenName: 'Trading Control',
    Type: false
  }
  return (
    <ScrollView style={styles.scroll}>
      <View style={{ paddingBottom: 110 }}>
        <View>
          <Header {...HeaderProps} />
        </View>
        <Text style={styles.carefullText}>Please select carefully</Text>
        <Pressable
          style={[
            styles.todaylist,
            selectedItem === '1' && { backgroundColor: '#414247', opacity: 0.7 },
          ]}
          onPress={() => handleItemPress('1')}
          underlayColor="transparent"
        >
          <Text style={styles.today}>today's Exit</Text>
          <Text style={styles.ScalpingText}>Initiate the sale process and pause all scalping 
          positions for the rest of the  trading day</Text>
        </Pressable>
        <View>
          <Pressable
            style={[
              styles.todaylist,
              selectedItem === '2' && { backgroundColor: '#414247', opacity: 0.7 },
            ]}
            onPress={() => handleItemPress('2')}
            underlayColor="transparent"
          >
            <Text style={styles.Scalping}>Scalping halt</Text>
            <Text style={styles.ScalpingText}>Refresh from puchashing new order based on signal</Text>
          </Pressable>
          <Pressable
            style={[
              styles.todaylist,
              selectedItem === '3' && { backgroundColor: '#414247', opacity: 0.7 },
            ]}
            onPress={() => handleItemPress('3')}
            underlayColor="transparent"
          >
            <Text style={styles.Scalping}>Swing Signal halt</Text>
            <Text style={styles.ScalpingText}>Refresh from puchashing new swing order based on signal</Text>
          </Pressable>
          <Pressable
            style={[
              styles.todaylist,
              selectedItem === '4' && { backgroundColor: '#414247', opacity: 0.7 },
            ]}
            onPress={() => handleItemPress('4')}
            underlayColor="transparent"
          >
            <Text style={styles.Scalping}>Short Signal pause</Text>
            <Text style={styles.ScalpingText}>Do not place new  short orders from signals</Text>
          </Pressable>
          <Pressable
            style={[
              styles.todaylist,
              selectedItem === '5' && { backgroundColor: '#414247', opacity: 0.7 },
            ]}
            onPress={() => handleItemPress('5')}
            underlayColor="transparent"
          >
            <Text style={styles.Scalping}>Long Signal pause</Text>
            <Text style={styles.ScalpingText}>Avoid placing new long orders from signal</Text>
          </Pressable>
          <Pressable
            style={[
              styles.todaylist,
              selectedItem === '6' && { backgroundColor: '#414247', opacity: 0.7 },
            ]}
            onPress={() => handleItemPress('6')}
            underlayColor="transparent"
          >
            <Text style={styles.Scalping}>Profitable Sale</Text>
            <Text style={styles.ScalpingText}>proceed with the sale procees for all Profitable order</Text>
          </Pressable>
          <Pressable
            style={[
              styles.todaylist,
              selectedItem === '7' && { backgroundColor: '#414247', opacity: 0.7 },
            ]}
            onPress={() => handleItemPress('7')}
            underlayColor="transparent"
          >
            <Text style={styles.Scalping}>Profitable Loss Sale</Text>
            <Text style={styles.ScalpingText}>proceed with the sale procees for all loss order</Text>
          </Pressable>
          <Pressable
            style={[
              styles.todaylists,
              selectedItem === '8' && { opacity: 0.7 },
            ]}
            onPress={() => handleItemPress('8')}
            underlayColor="transparent"
          >
            <Text style={styles.Scalping}>Trade Limits</Text>
            <View style={{ width: '80%', bottom: 5,}}>
              <Text style={{ color: 'white', fontSize: fontSize(12), textAlign:'left',marginLeft:15 }}>{slider}</Text>
              <Slider
                value={slider}
                onValueChange={(newValue) => setSilder(newValue)}
                minimumValue={0}
                maximumValue={20}
                step={1}
                thumbTintColor="red"
                minimumTrackTintColor="red"
              />
            </View>
          </Pressable>
          <View>
            <Button
              tittle='Procced' />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  carefullText: {
    fontSize: fontSize(14),
    paddingVertical: 15,
    color: Colors.white,
    left: 25
  },
  Scroll: {
    flex: 1,
    backgroundColor: Colors.lightDark,
    paddingBottom: 90
  },
  scroll: {
    backgroundColor: Colors.background,
    flex: 1,
    color: "#fff",
  },
  todaylist: {
    backgroundColor: Colors.lightDark,
    padding: 18,
    borderRadius: 10,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingTop: 12,
    paddingBottom: 12,
  },
  todaylists: {
    backgroundColor: Colors.lightDark,
    padding: 18,
    borderRadius: 10,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingTop: Platform.OS == 'android' ? 15:5,
    paddingBottom: Platform.OS == 'android' ? 15:5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Scalping: {
    fontSize: fontSize(12),
    color: Colors.white,
    paddingVertical: 2
  },
  ScalpingText: {
    color: Colors.Textgray,
    fontSize: fontSize(10.1)
  },
  today: {
    color: Colors.white,
    fontSize: fontSize(12)
  }
})