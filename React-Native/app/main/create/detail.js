/**
 * 详情页面
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Video  = require('react-native-video').default;

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
   ActivityIndicator,
} from 'react-native';

const width = Dimensions.get("window").width;

class Detail extends Component{
    constructor(props){
         super(props);
        let data = this.props.row;
        this.state= {
            data:data,
            rate:1,
            muted:true,
            resizeMode:'contain',
            videoReady:false,
            videoProgress:0.01,
            videoTotal:0,
            currentTime:0
        }
    };
    _backToList(){
        this.props.navigator.pop()
    };
    _onLoadStart(){
        console.log('load start');
    };
    _onLoad(){
        console.log('load')
    };
    _onProgress(data){
        console.log(data);
        if(!this.state.videoReady){
            this.setState({
                videoReady:true
            })
        }
        let duration = data.playableDuration;
        let currentTime= data.currentTime;
        let perent =Number(currentTime/duration.toFixed(2));
        this.setState({
            videoTotal:duration,
            currentTime:Number(data.currentTime.toFixed(2)),
           videoProgress:perent
        })
        console.log('progress');
    };
    _onEnd(){
        console.log('end');
        this.setState({
            videoProgress:1
        })
    };
    _onError(e){
        console.log(e);
        console.log('err');
    }
  render(){
    return(
      <View style={styles.container}>
        <Text onPress={()=>this._backToList()}>详情页面{this.state.data.id}</Text>
        <View style={styles.videoBox}>
           <Video
             ref='videoPlayer'
             source={{uri:this.state.data.video}} //视频地址
             style={styles.video}
             volume={3}   //声音方法倍数 0静音
             paused={false}  //暂停
             rate={this.state.rate} //控制暂停播放 0pause 1normal
             muted={this.state.muted} //true静音  
             resizeMode={this.state.resizeMode} //视频的自适应伸缩
             repeat={false}

             onLoadStart={()=>this._onLoadStart()} //视频开始加载的回调函数
             onLoad={()=>this._onLoad()}          //视频加载完毕的回调函数
             onProgress={(data)=>this._onProgress(data)}   //进度控制 250ms调用一次
             onEnd={()=>this._onEnd()}         //视频播放完毕
             onError={(e)=>this._onError(e)}   //视频不能加载出错的
           >
           </Video>
           {!this.state.videoReady&& <ActivityIndicator
              style={[styles.loading,{height:80}]}
            />}
            <View style={styles.progressBox}>
                <View style={[styles.progressBar,{width:width*this.state.videoProgress}]}></View>
            </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25,
    backgroundColor: '#F5FCFF',
  },
  videoBox:{
      width:width,
      height:360,
      backgroundColor:'#000'
  },
  video:{
      width:width,
      height:360,
      backgroundColor:'#000'
  },
  loading:{
      position:'absolute',
      left:0,
      top:140,
      width:width,
      alignSelf:'center',
      backgroundColor:'transparent'
  },
progressBox:{
width:width,
height:2,
backgroundColor:'#ccc'
},
progressBar:{
    width:1,
    height:2,
    backgroundColor:"red"
}
});

module.exports = Detail;