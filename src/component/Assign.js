import { View, Text, Image, Pressable, StyleSheet, } from 'react-native'
import React from 'react'
import { Icons } from '../constants';
import { Colors } from '../theme';
import CustomModal from '../theme/Modal';
import AppModal from '../theme/Modal';


const Assign = ({ Assign, setIsAssign }) => {
  return (

    <AppModal visible={Assign} onClose={() => setIsAssign(false)}>
      <Text>THis is modal</Text>
    </AppModal>
  )
}

export default Assign


const styles = StyleSheet.create({




})