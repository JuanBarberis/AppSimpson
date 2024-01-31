import { View, Text } from 'react-native'
import React from 'react'
import IndexNav from './src/nav/IndexNav'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <NativeBaseProvider>
      <IndexNav />
    </NativeBaseProvider>

  )
}

export default App