import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TextInput,
  Image
} from 'react-native';

// 实现一个Button
class Img extends Component{
    constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
}

    render(){
        return(
            <View style={styles.con}>
                <View style={styles.com}><Image style={styles.netImg} source={{uri:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20170410_wap_cpm_9549.jpg'}}></Image></View>
                
                <View style={styles.com}><Image  style={styles.localImg}  source={require('../image/1.jpg')}></Image></View>        
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    con:{
        margin:10,
        marginTop:40,
    },
    com:{
        width:350,
        height:250,
        backgroundColor:'cyan',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    netImg:{
        width:350,
        height:100
    },
    localImg:{
        width:350,
        height:100
    }
})
module.exports = Img;