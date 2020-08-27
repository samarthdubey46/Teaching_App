import React from 'react'
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {NavigationContainer} from '@react-navigation/native'
import Navigator from './src/navigator/stack'


const App = (props) => {
  return(
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  )
}

export default App