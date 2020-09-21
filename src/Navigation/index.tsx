import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react'

import AuthStore from '@store/AuthStore'

import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'

const Navigation = observer(
  (): JSX.Element => {
    return (
      <NavigationContainer>
        {AuthStore.isSignedIn ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    )
  }
)

export default Navigation
