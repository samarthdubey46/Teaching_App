import React from 'react'
import { FlatList, View, Text, Button, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import { Card, Title, Caption } from 'react-native-paper'
import RenderTop from './Top'
import { Options_Data } from '../../Common/Data'
import RenderItem from '../../Components/OptionCard'


const WIDTH = Dimensions.get('screen').width
const Height = Dimensions.get('screen').height
const Margin = 10


const App = (props) => {
    return (
        <View style={{ flex: .6, margin: Margin, alignItems: 'center' }}>
            <FlatList
                data={Options_Data}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                renderItem={item => <RenderItem item={item} navigation={props.navigation} Home={true} />}
            />
        </View>
    )
}
export default App