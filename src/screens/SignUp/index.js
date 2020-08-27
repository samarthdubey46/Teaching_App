import React from 'react'
import { TouchableOpacity, ScrollView, View, Text } from 'react-native'
import Button from '../../Components/Button'
import TextInput from '../../Components/TextInput'
import { Colors, App_Colors } from '../../Common/colors'
import Style from '../../Common/styles'

const App = (props) => {
    return (
        <ScrollView behavior='position' style={Style.container}>
            <ScrollView style={{ marginLeft: 10 }}>
                <Text style={[Style.textBold24]}>Welcome to </Text>
                <Text style={[Style.textBold24]}>Dps Jagdalpur</Text>
                <Text style={[Style.textMedium16, { color: Colors.gray, marginVertical: 10 }]}>SignUp to continue </Text>


                <TextInput autoCapitalize="none" holder="First_Name" />
                <TextInput autoCapitalize="none" holder="Last_Name" />
                <TextInput autoCapitalize="none" holder="Email" />
                <TextInput autoCapitalize="none" keyboardType="phone-pad" secureTextEntry holder="Age" />
                <TextInput autoCapitalize="none" keyboardType="phone-pad" holder="Mobile No." />
                <TextInput autoCapitalize="none" secureTextEntry secureEntry={true} holder="Password" />
                <TextInput autoCapitalize="none" secureTextEntry holder="Confirm_Password" />

                <Text style={{ alignSelf: 'center', color: 'red' }}> </Text>
                <Text style={{ alignSelf: 'center', color: 'green' }}> </Text>
                <Button Text="SignUp" viewStyle={{ marginTop: 30 }} />
                <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'center' }}>
                    <Text style={{ color: Colors.gray, }}>Alredy Have a Account </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
                        <Text style={[Style.textB16, { color: App_Colors.PrimaryColor }]}>SignIn</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </ScrollView>
    )
}
export default App