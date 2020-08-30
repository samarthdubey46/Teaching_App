import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Notification } from '../../Common/Data'
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import Style from '../../Common/styles'

const RenderItem = (props) => {
    const Item = props.item
    return (
        <ListItem style={{ marginBottom: 10 }} bottomDivider>
            <Icon name="notification" color="red" size={25} style={{ marginRight: 5, }} />
            <ListItem.Content>
                <ListItem.Title> {Item.text}</ListItem.Title>
                <Text style={{fontSize:15,marginTop:5,opacity:.6}}> Post By : {Item.Teacher}</Text>
            </ListItem.Content>
        </ListItem>
    )
}
const App = (props) => {
    return (
        <View style={{flex:1}}>
            <FlatList
                data={Notification}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({ item }) => <RenderItem item={item} />}
            />
        </View>
    )
}
export default App