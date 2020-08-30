import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Top from '../screens/StudyMaterial'

const Stack = createStackNavigator()
const App = (props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Top" component={Top}/>
        </Stack.Navigator>
    )
}
export default App