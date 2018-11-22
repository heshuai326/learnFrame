/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const request = require('../common/request')
const config = require('../common/config');
const Detail = require('./detail');
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
 ActivityIndicator,
  AlertIOS,
  Dimensions
} from 'react-native';
const width = Dimensions.get("window").width;
const cacheResults = {
    nextPage:1,
    items:[],
    total:0
}
//子组件
const Item = React.createClass({
    getInitialState:function(){
        //属性传值
        const  row = this.props.row;
        return {
            up:row.voted,
            row:row
        }
    },
    _up:function(){
        console.log(111);
        let up = !this.state.up;
        let row = this.state.row;
        let url = config.api.base+config.api.up;

        let body = {
            id:row._id,
            up:up?'yes':'no',
            accessToen:'abc'
        } 
        const that = this;
        request.post(url,body)
            .then(function(data){
                // console.log(data);
                if(data&&data.success){
                    that.setState({
                        up:up
                    })
                }else{
                    AlertIOS.aler('点赞失败，稍后重试')
                }
            })
            .catch(function(err){
                console.log(err);
                 AlertIOS.aler('请求失败，稍后重试')
            })
    },
    render:function(){
        const row = this.state.row;
        return(
            <TouchableHighlight onPress={this.props.onSelect}>
            <View style={styles.item}>
                <Text style={styles.title}>{row.title}</Text>
                <Image
                   source={{uri:row.thumb}}
                   style={styles.thumb}
                >
                <Icon 
                  name='ios-play'
                  size={28}
                  style={styles.play}
                />
                </Image>
                 <View style={styles.itemFooter}>
                     <View style={styles.handleBox}>
                        <Icon 
                            name={this.state.up?'ios-heart':'ios-heart-outline'}
                            size={28}
                             onPress={this._up}
                            style={[styles.up,!this.state.up?null:styles.down]}  //用状态来判断是否已经点赞
                            />
                            <Text style={styles.handleText} onPress={this._up}>喜欢</Text>
                     </View>
                      <View style={styles.handleBox}>
                         <Icon 
                            name='ios-chatboxes-outline'
                            size={28}
                            style={styles.up}
                            />
                            <Text style={styles.comment}>评论</Text>
                     </View>
                 </View>
            </View>
            </TouchableHighlight>
        )
    }
})
const List =  React.createClass({
    getInitialState:function(){
      let  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
     return{
         dataSource:ds.cloneWithRows([]),
         isloadingTail:'false'  
 }
    },
    componentDidMount:function(){
       this.fetchData(1);
       
    },
    fetchData:function(page){
        this.setState({
            isloadingTail:true
        })
         request.get(config.api.base+config.api.create,{ 
           accessToen:'abc'
        })
        .then((data) => {
            if(data.success){
                let items =  cacheResults.items.slice();
                items = items.concat(data.data);
                cacheResults.items = items;
                cacheResults.total = data.total;

                this.setState({
                    isloadingTail:false,
                    dataSource:this.state.dataSource.cloneWithRows(cacheResults.items)
                })     
            }
        })
        .catch((error) => {
            console.error(error);
              this.setState({
                    isloadingTail:false
                })     
        });
    },
    //把组件给抽象出来，父组件给子组件传递数据
    renderRow:function(row){
        return(
            <Item 
                key={row._id} 
                onSelect = {()=>this._loadPage(row)} 
                row={row}/>
        )
    },
    _hasMore(){
        return cacheResults.items.length!=cacheResults.total;
    },
    fetchMoreData(){
        if(!this._hasMore() || this.state.isloadingTail){
            return 
        }
        let page = cacheResults.nextPage;

        this.fetchData(page)
    },
    _renderFoot(){
        if(this._hasMore()){
            return(
                <View style={styles.loading}>
                    <Text style={styles.loadingText}>没有更多了</Text>
                </View>
            )
        }else{
            return(
           <ActivityIndicator
              style={[styles.loading,{height:80}]}
            />
        )
        }   
    },
    _loadPage:function(row){
            this.props.navigator.push({
                name:'detail',
                component:Detail,
                params:{        //页面跳转传参，参数是push对象中的一个属性
                    row:row
                }
            })
    },
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerTitle}>列表页面</Text>
          </View>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections={true}
          onEndReached={this.fetchMoreData} //快结束进行请求新数据
          onEndReachedThreshold={20}   //预加载高度
          automaticallyAdjustContentInsets={false}
          renderFooter = {this._renderFoot}
        />
      </View>
    )
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header:{
  paddingTop:25,
  paddingBottom:12,
  backgroundColor:'#ee735c'
  },
  headerTitle:{
   color:'#fff',
   fontSize:16,
   textAlign:'center',
   fontWeight:'600'
  },
 item:{
     width:width,
     marginBottom:10,
     backgroundColor:'#fff'
 },
 thumb:{
       width:width,
       height:width*0.56,
       resizeMode:'cover'
 },
 title:{
     padding:10,
     fontSize:18,
     color:'#333'
 },
 itemFooter:{
     flexDirection:'row',
     justifyContent:'space-between',
     backgroundColor:"#eee"
 },
 handleBox:{
     padding:10,
     flexDirection:'row',
     width:width/2-0.5,
     justifyContent:'center',
     backgroundColor:'#fff'
 },
 play:{
     position:'absolute',
     bottom:14,
     right:14,
     width:46,
     height:46,
     paddingTop:9,
     paddingLeft:18,
     backgroundColor:'transparent',
     borderColor:'#fff',
     borderWidth:1,
     borderRadius:23,
     color:'red'
 },
 handleText:{
     paddingLeft:12,
     fontSize:18,
     color:"#333"
 },
 up:{
     fontSize:22,
     color:'#333'
 },
 down:{
    fontSize:22,
     color:'red'
     
 },
 comment:{
     fontSize:22,
     color:"#333"
 },
 loading:{
   marginVertical:20,
 },
 loadingText:{
     color:'#777',
     textAlign:'center'
 }
});

module.exports = List;