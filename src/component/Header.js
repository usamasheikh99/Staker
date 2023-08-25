import React from 'react'
import { Colors } from '../theme'
import { Icons } from '../constants' 
import { View, Text, ImageBackground, StyleSheet,Image,TouchableOpacity} from 'react-native'

const Header = ({navigation}) => {
  return (
    <View style={{ backgroundColor: Colors.background,color: "#fff" }}>
    <View style={styles.Header}>
      <ImageBackground source={Icons.Homebg} resizeMode="cover" style={{ paddingHorizontal: 25, paddingTop: 50, paddingBottom: 15 }}>
    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('')}>
      <Image source={Icons.left} resizeMode="cover" style={{width:30,height:30 }}/>
      </TouchableOpacity >
        <View style={styles.Item}>
          <Text style={styles.total}>Trading control</Text>
        </View>
      </ImageBackground>
    </View>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    total: {
      fontSize: 16,
      color: Colors.white,
      justifyContent:'center',
      textAlign:'center',
      bottom:25
  },
  })