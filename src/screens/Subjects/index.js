import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { Subjects } from '../../Common/Data'
import { Colors, App_Colors } from '../../Common/colors'
import Style from '../../Common/styles'
import { Title } from 'react-native-paper'


const RenderItem = ({ item }) => {
    return (
        <ListItem key={item.id} bottomDivider>
            <Avatar rounded title={`${item.Subject[0]}${item.Subject[1]}`} containerStyle={{ flex: .15, borderRadius: 100, backgroundColor: App_Colors.PrimaryColor }} />
            <ListItem.Content>
                <ListItem.Title>{item.Subject}</ListItem.Title>
                <ListItem.Subtitle>{item.Teacher}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron size={40} />
        </ListItem>
    )
}
const App = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                data={Subjects}
                renderItem={(item) => RenderItem(item)}
            />
        </View>
    )
}
export default App