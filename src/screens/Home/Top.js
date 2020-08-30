import React from 'react'
import { View, Text, Button, ImageBackground, Dimensions } from 'react-native'
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import { Book_Data } from '../../Common/Data'
import Icon from 'react-native-dynamic-vector-icons'
import Style from '../../Common/styles'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {App_Colors} from '../../Common/colors'

const Snap_Crousal = (props) => {
    return (
        <Carousel
            data={props.data}
            renderItem={props.renderItem}
            pagination={PaginationLight}
        />
    )
}
const RenderItem = (data) => {
    return (
        <TouchableWithoutFeedback key={data.id} style={{ elevation: 10, margin: 10, width: Width - 15, alignItems: 'center', justifyContent: 'center', height: HEIGHT / 3.2, backgroundColor: App_Colors.PrimaryColor }}>
            <Icon name="book-outline" type="Ionicons" color="white" size={110} />
            <Text style={[Style.textBold28, { fontSize:40,color: 'white', marginBottom: 24 }]}>{data.Subject}</Text>
        </TouchableWithoutFeedback>
    )
}


const Width = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const RenderTop = (props) => {
    return (
        <View style={{ flex: .45,paddingBottom:5, backgroundColor: 'white' }}>
            <Snap_Crousal data={Book_Data} renderItem={RenderItem} />
        </View>
    )
}
export default RenderTop