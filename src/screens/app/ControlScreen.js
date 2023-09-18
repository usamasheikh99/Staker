import React, { useState } from 'react'
import { Colors } from "../../theme"
import Header from '../../component/Header'
import Slider from '@react-native-community/slider'
import Button from '../../component/Button';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable
} from 'react-native'


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
      <View style={{ paddingBottom: 105 }}>
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
          <Text style={styles.ScalpingText}>initiate the sale process and pause all scalping positions for the for the
            rest ot that trading day
          </Text>
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
            <Text style={styles.ScalpingText}>initiate the sale process and pause all </Text>
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
            <Text style={styles.ScalpingText}>initiate the sale process and pause all </Text>
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
            <Text style={styles.ScalpingText}>Do not place new  short orders from signal</Text>
          </Pressable>
          <View style={styles.todaylist}>
            <Text style={styles.Scalping}>Long Signal pause</Text>
            <Text style={styles.ScalpingText}>Avoid placing new ong orders from signal</Text>
          </View>
          <View style={styles.todaylist}>
            <Text style={styles.Scalping}>Profitable Sale</Text>
            <Text style={styles.ScalpingText}>initiate the sale process and pause all </Text>
          </View>
          <View style={styles.todaylist}>
            <Text style={styles.Scalping}>Profitable Loss Sale</Text>
            <Text style={styles.ScalpingText}>initiate the sale process and pause all </Text>
          </View>
          <View style={styles.todaylists}>
            <Text style={styles.Scalping}>Trade Limits</Text>
            <View style={{ width: '80%', bottom: 10 }}>
              <Text style={{ color: 'white', fontSize: 11, left: 70 }}>{slider}</Text>
              <Slider
                value={slider}
                onValueChange={(newValue) => setSilder(newValue)}
                minimumValue={0}
                maximumValue={20}
                step={1}
                thumbTintColor="red"
                minimumTrackTintColor="red"
              // style={{ transform: [{ 0 }] }}
              />

            </View>
          </View>
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
    fontSize: 17,
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
    marginHorizontal: 19,
    marginVertical: 4,
    paddingTop: 15,
    paddingBottom: 15,
  },
  todaylists: {
    backgroundColor: Colors.lightDark,
    padding: 18,
    borderRadius: 10,
    marginHorizontal: 19,
    marginVertical: 4,
    paddingTop: 18,
    paddingBottom: 18,
    flexDirection: 'row',
    // alignItems: 'center'
  },
  Scalping: {
    fontSize: 15,
    color: Colors.white,
    paddingVertical: 2
  },
  ScalpingText: {
    color: Colors.Textgray
  },
  today: {
    color: Colors.white,
    fontSize: 15
  }
})