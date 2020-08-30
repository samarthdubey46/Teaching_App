import React from 'react'
import Home from '../screens/Home'
import Profile from '../screens/profile'
import Subjects from '../screens/Subjects'
import Colors, { App_Colors } from '../Common/colors'
import Chat from '../screens/chat'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-dynamic-vector-icons'

const Navigator = createMaterialBottomTabNavigator()
const App = (props) => {
    return (
        <Navigator.Navigator backBehavior="initialRoute" shifting={true} activeColor={App_Colors.tabBarActive} inactiveColor={App_Colors.tabBarInActive} barStyle={{ backgroundColor: 'white', }}>
            <Navigator.Screen component={Home} name="Home" options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="home" type="FontAwesome" color={color} size={25} />
                )
            }} />
            <Navigator.Screen component={Profile} name="Calender" options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="calendar" type="FontAwesome" color={color} size={25} />
                )
            }} />
            <Navigator.Screen component={Subjects} name="Subjects" options={{
                tabBarIcon: ({ focused, color }) => (
                    <Icon name="book" type="Ionicons" color={color} size={25} />
                )
            }} />
        </Navigator.Navigator>

    )
}
export default App