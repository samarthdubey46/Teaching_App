import React from 'react'
import { Text, Dimensions,  } from 'react-native'
import { Card, } from 'react-native-paper'
import Icon from 'react-native-dynamic-vector-icons'
import Style from '../../Common/styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const WIDTH = Dimensions.get('screen').width
const Height = Dimensions.get('screen').height
const Margin = 10


const RenderItem = (props) => {
    const item = props.item.item
    const navigation = props.navigation
    const OnPress = () => {
        if (props.Home) {
            if (item.Text !== "Chat") {
                navigation.navigate(item.Text)
            }
        }
    }

return (
    <TouchableWithoutFeedback onPress={() => OnPress()}>
        <Card style={{ borderWidth: 0, marginBottom: 10, marginRight: 5, borderColor: 'rgba(0,0,0,.2)' }}>
            <Card.Content style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: (WIDTH - 35) / 2, margin: 5, height: Height / 8 }}>
                <Icon style={{ opacity: 1 }} name={item.icon} type={item.type} size={props.Home ? 30 : 45} color={item.color !== null ? item.color : 'black'} />
                <Text style={[props.Home ? Style.textSB14 : Style.textSB16, { marginTop: Margin }]}>{item.Text}</Text>
            </Card.Content>
        </Card>
    </TouchableWithoutFeedback>
)
}
export default RenderItem