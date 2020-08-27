import React, { Component } from 'react'
import { TextInput, View,Text } from 'react-native'
import style from './style';
export default class componentName extends Component {
  render() {
    return (
      <View style={{marginTop:15}}>
      <Text style={style.text}>{this.props.holder}</Text>
       <TextInput
              style={style.textViewContainer}
              value={this.props.value}
              onChangeText={(text) => {
                console.log(text)  
                this.props.change(text)
              }}
              {...this.props}
              //placeholder={this.props.placeholder}
              placeholderTextColor='#A0A0A0'
              underlineColorAndroid="transparent"
              secureTextEntry={this.props.secureTextEntry}
            />
      </View>
    )
  }
}