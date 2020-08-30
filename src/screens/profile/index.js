import React, { useState, useEffect } from 'react'
import { View, Text, Button, Dimensions, FlatList } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Title, Caption } from 'react-native-paper'
import { App_Colors } from '../../Common/colors'
import { Days, Calender, Marked_Dates } from '../../Common/Data'
import { Colors } from 'react-native/Libraries/NewAppScreen'




const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

const Year = 2020
const Month = 8

const RenderHeader = (props) => (
    <View style={{ flex: .12, marginBottom: 20, alignItems: 'center', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
        <TouchableOpacity>
            <Icon name="caretleft" size={20} color={App_Colors.PrimaryColor} />
        </TouchableOpacity>

        <Title>August {Year}</Title>

        <TouchableOpacity>
            <Icon name="caretright" size={20} color={App_Colors.PrimaryColor} />
        </TouchableOpacity>

    </View>
)

const RenderOneDay = (props) => {
    const [Clicked, ChangeClicked] = useState(false)
    const [Marked, ChangeMarked] = useState(false)
    const d = new Date()
    let n = d.getDate()
    let shouldUpdate = true
    useEffect(() => {
        if (props.i === parseInt(n)) {
            ChangeClicked(true)
        }
        Marked_Dates.forEach(item => {
            if (item.year === Year && item.month === Month && item.day === parseInt(props.i)) {
                ChangeMarked(true)
            } else {
                ChangeMarked(false)
            }
        })
    }, [])
    let AlignMent = 'flex-start';
    if (Clicked) {
        AlignMent = 'center'
        if (Marked) {
            AlignMent = 'flex-start'
        }
    }
    const startOfMonth = moment().startOf('August').format('YYYY-MM-DD');
    const endOfMonth = moment().endOf(8).format('YYYY-MM-DD');
    return (
        <TouchableOpacity onPress={() => console.log("Works")} style={{ borderBottomWidth: 0.2, marginBottom: 5, backgroundColor: Clicked ? 'rgba(7,81,12,.6)' : 'white', width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-SemiBold', color: Clicked ? 'white' : 'black' }}>{props.i}</Text>
            {Marked && (<Text style={{ color: 'red' }}>●</Text>)}
        </TouchableOpacity>
    )
}

const RenderDays = (props) => (
    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around' }}>
        {Days.map((i, j) => (
            <View style={{ width: WIDTH / 8, backgroundColor: 'white', alignItems: 'center' }}>
                <Text style={{ marginBottom: 20 }} key={j.toString()} >{i.day}</Text>
                <FlatList
                    data={i.days}
                    renderItem={item => <RenderOneDay i={item.item} />}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        ))}
    </View>
)
const Calenders = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <RenderHeader />
            <RenderDays />
        </View>
    )
}
const App = (props) => {
    return (
        <View style={{ flex: 1, width: WIDTH }}>
            <View style={{ height: 400, backgroundColor: 'white', width: WIDTH }}>
                <Calenders />
            </View>
        </View>
    )
}
export default App