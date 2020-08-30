import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tab from './TabNavigator'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'
import Exams from '../screens/Exams'
import Notifications from '../screens/notifications'
import StudyMaterial from './Study_Material'

const stack = createStackNavigator()

const App = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="SignIn" component={SignIn} />
            <stack.Screen name="SignUp" component={SignUp} />
            <stack.Screen name="Tab" component={Tab} />
            <stack.Screen name="Exams" component={Exams}/>
            <stack.Screen name="Notifications" component={Notifications}/>
            <stack.Screen name="Study Material" component={StudyMaterial}/>

        </stack.Navigator>
    )
}
export default App
