import React from 'react'
import { View, Text, SectionList, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Exams_Data } from '../../Common/Data'
import Style from '../../Common/styles'
import Color, { App_Colors } from '../../Common/colors'
import { Title, Card } from 'react-native-paper'
import Icon from 'react-native-dynamic-vector-icons'
import { Avatar, Button } from 'react-native-elements'


const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

const App = (props) => {
    const Item = (item) => {
        const Data = item.title.item
        const Index = item.title.index
        const Title = item.title.section.title
        return (
            <Card style={{  height:Data.complete ? 230 : 200,backgroundColor: 'white', elevation: 10 }}>
                <Card.Content style={{ marginTop: -0, flex: 1 }}>
                    <View style={{ flex: .8, borderBottomWidth: 0, borderBottomColor: 'rgba(0,0,0,.2)', backgroundColor: 'white', flexDirection: 'row', paddingBottom: 20 }}>
                        <View style={{ flex: .55, alignItems: 'flex-start', borderRightWidth: 0, marginRight: 0, justifyContent: 'center' }}>
                            <Image resizeMode='contain' style={{ width: WIDTH / 3.7, height: 150 }} source={{ uri: 'https://i.pinimg.com/236x/cd/e2/d2/cde2d275858266e30ca9b8fb17093854.jpg' }} />
                        </View>
                        <View style={{ flex: 1, marginTop: 10, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                                <Text style={Style.textSB20}>{Data.Subject}</Text>
                                {Data.complete && (<Icon size={25} style={{ marginLeft: 10, color: 'green' }} type="MaterialIcons" name="verified-user" />)}
                            </View>
                            <Text style={{ opacity: .5, fontSize: 16, marginLeft: -3.5, marginBottom: 2 }}> Writer :  {Data.Teacher} </Text>
                            <Text style={{ opacity: .5, fontSize: 16, marginLeft: -3, marginBottom: 2 }}> Date :    {!Data.complete === true ? Data.date : "Completed"} </Text>
                            <Text style={{ opacity: .5, fontSize: 16, marginLeft: -3.5, marginBottom: 2 }}> Start :    {Data.Start} </Text>
                            <Text style={{ opacity: .5, fontSize: 16, marginLeft: -3.5, marginBottom: 2 }}> End :      {Data.End} </Text>
                            { Data.complete &&  <Text style={{ opacity: .9,fontFamily:'Quicksand-Bold',fontSize: 16, marginLeft: -3.5, marginBottom: 0 }}> Marks :      25 </Text>}

                        </View>
                    </View>
                    <View style={{ flex: .19, flexDirection: 'row', marginBottom: -10 }}>
                        <TouchableOpacity onPress={() => console.log(' ')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 }}>{!Data.complete ? 'Start Test' : "Start Practice"}</Text>
                            <Icon name="right" type="AntDesign" style={{ marginLeft: 10 }} />
                        </TouchableOpacity>

                    </View>
                </Card.Content>
            </Card>
        )
    }

    return (
        <View style={{ flex: 1, paddingTop: 0 }}>
            <SectionList
                sections={Exams_Data}
                keyExtractor={(item, index) => item + index}
                renderItem={(item) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={[Style.textSB18, { margin: 10 }]}>{title}</Text>
                )}
            />
        </View>
    )
}
export default App