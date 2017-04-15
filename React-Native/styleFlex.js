/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * 样式：stylesheet实例化的样式 内联样式
 * 多个样式混合使用，使用拼接样式，把所有的样式都放在数组中
 * 在拼接时，在数组中靠后的优先级高
 */
// 创建组件
/*const StyleTest = React.createClass({
    render:function(){
        return (
            <View style={[styles.container]}>
                <View style={[styles.top,styles.border,{borderWidth:5}]}></View>
                <View style={[styles.bottom,styles.border,{borderWidth:5}]}></View>
            </View>
        )
    }
})*/

// 书写样式,创建的参数是一个对象
// const styles = StyleSheet.create({
//   container:{
//       width:300,
//       height:400,
//       marginTop:25,
//       marginRight:10,
//       marginLeft:10,
//       backgroundColor:'red'
//   },
//   top:{
//     width:280,
//     height:250,
//     backgroundColor:'green',
//     marginLeft:10

//   },
//   bottom:{
//     width:250,
//     height:150,
//     marginLeft:25,
//     backgroundColor:'yellow'
//   },
//   border:{
//     borderWidth:3,
//     borderColor:"#000"
//   }
// })
/** 
主轴方向：flexDirection enum(‘row’, ‘column’,’row-reverse’,’column-reverse’)
是否换行（一列不能排满）：flexWrap enum(‘wrap’, ‘nowrap’)
主轴对齐方式：justifyContent enum(‘flex-start’, ‘flex-end’, ‘center’, ‘space-between(两边紧凑)’, ‘space-around（间隙均匀）’)
交叉轴的对齐方式：alignItems enum(‘flex-start’, ‘flex-end’, ‘center’, ‘stretch’)
*/
const Flex = React.createClass({
  render:function(){
    return(
      <View style={styles.flex}>
        <View style={styles.minBox}></View>
        <View style={styles.minBox}></View>
        <View style={styles.minBox}></View>
        <View style={styles.minBox}></View>
        <View style={styles.minBox}></View>
        <View style={styles.minBox}></View>
        <View style={styles.minBox}></View>
        <View style={styles.minBox}></View>
        <View style={styles.minBox}></View>
        <View style={styles.minBox}></View>
        <View style={styles.minBox}></View>
         <View style={styles.minBox}></View>
      </View>
    )
  }
})
const styles = StyleSheet.create({
  flex:{
    flex:1,
    flexDirection:'row',//主轴是按横排列
    flexWrap:'wrap',    //排列不换行
    justifyContent:'space-around',//主轴均匀排列
    alignItems:'center'//交叉轴居中
  },
  minBox:{
    width:50,
    height:50,
    backgroundColor:'cyan',
    margin:10
  }
})
AppRegistry.registerComponent('hello', () => Flex);
