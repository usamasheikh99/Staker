import React from 'react'
import { View, Text, Button } from 'react-native'

const Login = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'black', fontSize: 20 }}>Login</Text>
      <Button title='Go to Home Screens' onPress={() => props.navigation.navigate('Home')} />
    </View>
  )
}

export default Login