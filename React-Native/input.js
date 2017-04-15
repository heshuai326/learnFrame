import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';

class Input extends Component{
    constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
}

    render(){
        return(
            <View>
             <TextInput style={styles.input} placeholder="请输入"  onChangeText={(text) => this.setState({text}) }>  //函数的调用 onPress={()=>{ fn() }}
                 <Text style={styles.text}>{this.state.text}</Text>
             </TextInput>
           </View> 
        )
    }
}

const styles = StyleSheet.create({
  input:{
      height:35,
      borderWidth:1,
      borderColor:'red'
  },
  text:{
      marginLeft:35,
      marginTop:10
  }
})
module.exports = Input