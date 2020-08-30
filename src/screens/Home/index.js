import React from 'react'
import { FlatList, View, Text, Button, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import { Card, Title, Caption } from 'react-native-paper'
import RenderTop from './Top'
import { Options_Data } from '../../Common/Data'
import Icon from 'react-native-dynamic-vector-icons'
import Style from '../../Common/styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import RenderBottom from './Bottom'



const App = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <RenderTop />
            <RenderBottom navigation={props.navigation}/>            
        </View>
    )
}
export default App