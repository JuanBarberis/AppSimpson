import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StackNav } from './stackNav/StackNav'
import BottomTabBar from './bottonTab/BottomTabNav'

const IndexNav = () => {
  return (
    <NavigationContainer>
       <BottomTabBar/>
    </NavigationContainer>
  )
}

export default IndexNav