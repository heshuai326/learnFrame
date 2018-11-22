/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 第一部分:导入reactNative包，以及必须组件    AppRegistry:是通过Js运行reactNative应用的入口    StyleSheet：ReactNative中的样式表，类似于css样式表     
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//第二部分:创建ReactNative组件，模板中使用的是ES6的语法 类似于Reaact.createClass()
export default class hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.bottom}></View>
      </View>
    );
  }
}
// 第三部分：通过StyleSheet.create()创建样式实例（在应用中只会创建一次，不用每次在渲染周期中创建）
const styles = StyleSheet.create({
  container: {
   width:300,
   height:400,
   backgroundColor:'red',
   marginTop:25,
   marginLeft:30
  },
  top:{
    width:280,
    height:250,
    backgroundColor:'green',
    borderWidth:10
  },
  bottom:{
    width:280,
    height:110,
    backgroundColor:'yellow',
    borderTopWidth:3,
    borderBottomWidth:10
  }

});
// 第四部分：注册入口组件 AppRegistry：负责注册运行ReactNative应用的js入口      registerComponent注册应用程序的入口组件，告知哪一个组件被注册为应用的根容器 
// function(){return hello}  返回一个组件
AppRegistry.registerComponent('hello', () => hello);
