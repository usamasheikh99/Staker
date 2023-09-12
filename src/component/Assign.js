import { View, Text, Image, Pressable, StyleSheet, } from 'react-native'
import React from 'react'
import { Icons } from '../constants';
import { Colors } from '../theme';
import CustomModal from '../theme/Modal';
import AppModal from '../theme/Modal';


const Assign = ({ isAssign, setIsAssign }) => {
  return (

    <AppModal visible={isAssign} onClose={() => setIsAssign(false)}>
      <Text>THis is modal</Text>
    </AppModal>
  )
}

export default Assign


const styles = StyleSheet.create({



  firstline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  secondline: {
    marginTop: 12

  },

  datetime: {
    color: Colors.Textgray,
    fontSize: 15,
    opacity: 0.8
  },

  positivetxt: {
    fontSize: 16,
    color: Colors.green
  },

  heading: {
    color: Colors.white,
    fontSize: 17,
    marginTop: 5
  },

  paragraph: {
    color: Colors.Textgray,
    opacity: 0.9,
    fontSize: 15,
    marginTop: 10
  }








})