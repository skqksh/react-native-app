import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/Home'
import MyPageScreen from '../screens/MyPage'
import SearchScreen from '../screens/Search'

const HomeStack = createStackNavigator()

const HomeStackScreen = (): JSX.Element => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
    </HomeStack.Navigator>
  )
}

const MyPageStack = createStackNavigator()

const MyPageStackScreen = (): JSX.Element => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="MyPage" component={MyPageScreen} />
      <MyPageStack.Screen name="Search" component={SearchScreen} />
    </MyPageStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const MainNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="MyPage" component={MyPageStackScreen} />
    </Tab.Navigator>
  )
}

export default MainNavigator
