import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Style from '../../Common/styles'
import Button from '../../Components/Button'
import TextInput from '../../Components/TextInput'
import { Colors, App_Colors } from '../../Common/colors'

const App = (props) => {
    const [email, changeEmail] = useState('')
    const [password, changePassword] = useState('')
    const {navigation} = props
    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingLeft: 1, flex: 1, backgroundColor: 'white' }}>
                <View style={[Style.container, { marginLeft: 10 }]}>
                    <Text style={[Style.textBold24]}>Welcome to </Text>
                    <Text style={[Style.textBold24, { color: 'black', marginTop: 1 }]}>Dps Jagdalpur</Text>
                    <Text style={{ color: Colors.gray, marginTop: 10, marginBottom: 30, fontFamily: 'Quicksand-Medium', fontSize: 16 }}>SignIn to continue </Text>

                    <TextInput placeholder="Email" value={email} change={changeEmail} />
                    <TextInput placeholder="Password" value={password} change={changePassword} />
                    <Text style={{ alignSelf: 'center', color: 'red' }}> </Text>
                    <TouchableOpacity >
                        <Text style={[Style.textB16, { color: App_Colors.PrimaryColor, textAlign: 'right', marginVertical: 30 }]}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <Button Text="SignIn" onPress={() => props.navigation.navigate('Tab')}/>
                    <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'center' }}>
                        <Text style={{ color: Colors.gray, fontFamily: 'Quicksand-Medium', fontSize: 16 }}>Alredy Have a account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                            <Text style={[Style.textB16, { color: App_Colors.PrimaryColor }]}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* <Text style={[Style.titleText,{color:Colors.red}]}>Asd   </Text> */}
        </View>
    )
}
export default App