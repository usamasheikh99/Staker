import { View, Text } from 'react-native'
import React from 'react'
import AppModal from '../theme/AppModal'
import { Colors } from '../theme'


const BoostPopup = ({ isBoost, setIsBoost }) => {
  return (
    <AppModal visible={isBoost} onClose={() => setIsBoost(false)}>
      <Text>BoostPopup</Text>
    </AppModal>
  )
}

export default BoostPopup