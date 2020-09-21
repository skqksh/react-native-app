import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/Login'
import SignUpScreen from '../screens/SignUp'

const Stack = createStackNavigator()

const MainNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator
