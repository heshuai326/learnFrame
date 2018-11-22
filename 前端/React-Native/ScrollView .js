import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView ,//是一个可滚动的容器，在里面放入多个组件和视图，必须设置高度(四个事件，一个小组件)
  RefreshControl
} from 'react-native';

const dataSource = require('../data/data.json');
console.log(dataSource);

// 实现一个Button
class ScrollTest  extends Component{
    constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
};
  _onScrollBeginDrag(){
    console.log("开始拖拽");
  };
  _onScrollEndDrag(){
   console.log("结束拖拽");
  }; 
  _onMomentumScrollBegin(){
      console.log("滚动开始");
  }
  _onMomentumScrollEnd(){
      console.log('滚动结束');
  }
  _refresh(){
    //   在此时可以发送请求，加载数据
      alert("正在请求数据");
  }
    render(){
        return(
             <ScrollView 
               onScrollBeginDrag={()=>{this._onScrollBeginDrag()}} 
               onScrollEndDrag={()=>{this._onScrollEndDrag()}}
               onMomentumScrollBegin={()=>{this._onMomentumScrollBegin()}}
               onMomentumScrollEnd={()=>{this._onMomentumScrollEnd()}}
                refreshControl = {
                    //刷新控制小组件
                    <RefreshControl
                    refreshing={false}
                    titleColor="red"
                    title={'正在刷新....'}
                    tintColor="cyan"
                    onRefresh={()=>this._refresh()}
                    />
                }
                style={styles.container}>
                 <View style={[styles.item,styles.item1]}></View>
                 <View style={[styles.item,styles.item2]}></View>
                 <View style={[styles.item,styles.item3]}></View>
                 <View style={[styles.item,styles.item4]}></View>
             </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       height:500,
       borderWidth:1,
       borderColor:'#ccc',
   },
   item:{
       width:300,
       height:500,
       margin:20
   },
   item1:{
       backgroundColor:'red'
   },
   item2:{
       backgroundColor:'green'
   },
   item3:{
       backgroundColor:'yellow'
   },
   item4:{
       backgroundColor:'blue'
   }
})
module.exports = ScrollTest;

