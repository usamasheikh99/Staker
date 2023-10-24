import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme';

const Breakup = () => {
  const [slider, setSlider] = useState(0);  
  return (
    <View style={Styles.container}>
      <View style={Styles.line}>
        <View style={{ width: '70%' }}>
          <Slider
            value={slider}
            onValueChange={(e) => setSlider(e)}
            thumbStyle={{ width: 30, height: 30 }}bo
            trackStyle={{ height: 2 }} 
            style={{ height: 40, width: '100%' }}
            minimumTrackTintColor={Colors.Card}
          />
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    // flex:1,
    marginVertical: 5,
    paddingBottom: 40,
    top: 90,
  },
  line: {
    backgroundColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#121319',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});

export default Breakup;
