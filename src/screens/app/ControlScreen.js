import React, { useState } from 'react'
import { Colors } from "../../theme"
import Header from '../../component/Header'
import ControlList from '../../component/ControlList'
import Breakup from '../../component/Breakup'
import Slider from '@react-native-community/slider';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable
} from 'react-native'


export default function ControlScreen() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemPress = (itemText) => {
    setSelectedItem(itemText);
  };
  const [slider, setSilder] = useState(0)
  const HeaderProps = {
    ScreenName: 'Trading Control',
    Type:true
}
  return (
    <View style={styles.container}>
      <View>
        <Header {...HeaderProps}/>
      </View>
      <ScrollView style={styles.scroll}>
        <Text style={styles.carefullText}>Please select carefully</Text>
        <Pressable
          style={[
            styles.todaylist,
            selectedItem === '1' && { backgroundColor: Colors.Textgray, opacity: 0.5 },
          ]}
          onPress={() => handleItemPress('1')}
          underlayColor="transparent"
        >
          <Text style={styles.today}>today's Exit</Text>
          <Text>initiate the sale process and pause all scalping positions for the for the
            rest ot that trading day
          </Text>
        </Pressable>
        <View>
          <Pressable
            style={[
              styles.todaylist,
              selectedItem === '2' && { backgroundColor: Colors.Textgray, opacity: 0.5 },
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
              selectedItem === '3' && { backgroundColor: Colors.Textgray, opacity: 0.5 },
            ]}
            onPress={() => handleItemPress('3')}
            underlayColor="transparent"
          >
            <Text style={styles.Scalping}>Swing Signal halt</Text>
            <Text style={styles.ScalpingText}>initiate the sale process and pause all </Text>
          </Pressable>
          <View style={styles.todaylist}>
            <Text style={styles.Scalping}>Short Signal pause</Text>
            <Text style={styles.ScalpingText}>Do not place new  short orders from signal</Text>
          </View>
          <View style={styles.todaylist}>
            <Text style={styles.Scalping}>Long Signal pause</Text>
            <Text style={styles.ScalpingText}>Avoid placing new ong orders from signal</Text>
          </View>
          <View style={styles.todaylist}>
            <Text style={styles.Scalping}>Profitable Sale</Text>
            <Text style={styles.ScalpingText}>initiate the sale process and pause all </Text>
          </View>
          <View style={styles.todaylists}>
            <Text style={styles.Scalping}>Potenial Loss Sale</Text>
            <View style={{ width: '70%' }}>
              {/* <Text style={{ color: 'white', paddingHorizontal: 90, fontSize: 11 }}>Value: {slider}</Text>  */}
              <Slider
                value={slider}
                onValueChange={e => setSilder(e)}
                trackStyle={{ height: 0 }}
                thumbStyle={{ width: 9, height: 2, backgroundColor: 'red' }}
                minimumTrackTintColor={Colors.ButtonColor} />
            </View>
          </View>
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
    backgroundColor: Colors.lightDark,
    paddingBottom: 60
  },
  scroll: {
    backgroundColor: Colors.background,
    flex: 1,
    color: "#fff"
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
    paddingBottom: 22,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Scalping: {
    fontSize: 15,
    color: Colors.white,
    paddingVertical: 2
  },
  ScalpingText: {
    // fontSize:15,
    color: Colors.Textgray
  },
  today: {
    color: Colors.white,
    fontSize: 15
  }
})