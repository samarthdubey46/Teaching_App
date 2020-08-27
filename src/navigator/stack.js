import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tab from './TabNavigator'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'

const stack = createStackNavigator()

const App = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="SignIn" component={SignIn} />
            <stack.Screen name="SignUp" component={SignUp} />
            <stack.Screen name="Tab" component={Tab} />

        </stack.Navigator>
    )
}
export default App
