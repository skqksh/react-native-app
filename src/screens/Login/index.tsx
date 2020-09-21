import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import AuthStore from '@store/AuthStore'

const Login = (): JSX.Element => {
  return (
    <View>
      <Text>it is Login</Text>
      <TouchableOpacity
        onPress={(): void => {
          AuthStore.isSignedIn = true
        }}
        style={{
          borderWidth: 1,
          padding: 10,
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
