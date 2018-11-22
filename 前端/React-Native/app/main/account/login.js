/**
 * 用户
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'react-native-button';

// const CountDown = require('react-native-sk-countdown').CountDownText;
const request = require('../common/request');
const config = require('../common/config');

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AlertIOS
} from 'react-native';

class Login extends Component{
    constructor(props){
        super(props);
       this.state = { 
           codeSent:false,
           phone:'',
           verifyCode:'',
           count:false
       }
    }
    _submit(){

    }
    _sendVerifyCode(){
        let phone = this.state.phone;
        if(!phone){
            return AlertIOS.alert('手机号不能为空！');
        }else{
            let body = {
                phone:phone
            }
            let signupURL = config.api.base+config.api.signup;
            let that = this;
            request.post(signupURL,body)
                .then(function(data){
                    console.log(data);
                    if(data&&data.success){
                        that._showVerifyCode()
                    }else{
                        AlertIOS.alert('获取验证码失败，请检查手机号是否正确');
                    }
                }).catch(function(err){
                    console.log(err);
                    AlertIOS.alert('服务器异常，请稍后重试');
                })
                
        }
    }
    _showVerifyCode(){
        console.log(111);
        this.setState({
            loading:true
        })
    }
   _CountDone(){
        this.setState({
            count:true
        })
    }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.signupBox}>
            <Text style={styles.title}>快速登录</Text>
            <TextInput placeholder='输入手机号' 
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType={'number-pad'}
                        style={styles.inputField}
                        onChangeText={(text)=>{
                            this.setState({
                                phone:text
                            })
                        }}
                      ></TextInput>
                {this.state.loading? <View style={styles.verifyCodeBox}>
                     <TextInput placeholder='输入验证码' 
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        keyboardType={'number-pad'}
                        style={styles.inputField}
                        onChangeText={(text)=>{
                            this.setState({
                                verifyCode:text
                            })
                        }}
                      >
                      {
                          this.state.count?<Button style={styles.countBtn}
                                onPress={()=>this._sendVerifyCode()}
                          >获取验证码</Button>:<CountDown style={styles.countBtn}
                              countType='date' // 计时类型：seconds / date
                                auto={true} // 自动开始
                                afterEnd={() => {this._CountDone()}} // 结束回调
                                timeLeft={60} // 正向计时 时间起点为0秒
                                step={-1} // 计时步长，以秒为单位，正数则为正计时，负数为倒计时
                                startText='获取验证码' // 开始的文本
                                endText='获取验证码' // 结束的文本
                                intervalText={(date, hour, min, sec) => '剩余时间'+ sec} // 定时的文本回调
                                           / >     
                      }
                      </TextInput>       
                    </View>:null}
               { this.state.codeSent?(<Button
                 style={styles.btn}
                onPress={() => this._submit()}>
                登录
               </Button>):
                 (<Button
                   style={styles.btn}
                onPress={() => this._sendVerifyCode()}>
               获取验证码
                </Button>)
                }
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#f9f9f9',
  },
  signupBox:{
      marginTop:30
  },
title:{
    marginBottom:20,
    color:'#333',
    fontSize:20,
    textAlign:'center'
},
inputField:{
    height:40,
    padding:5,
    color:"#666",
    fontSize:16,
    backgroundColor:'#fff',
    borderRadius:4
},
btn:{
    marginTop:10,
    backgroundColor:'transparent',
    padding:10,
    borderRadius:4,
    color:'#ee735c',
    borderWidth:1,
    borderColor:'#ee735c'
},
verifyCodeBox:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-between'
},
countBtn:{
    width:110,
    height:40,
    padding:10,
    marginLeft:8,
    backgroundColor:'transparent',
    backgroundColor:'#ee735c',
    textAlign:'left',
    fontWeight:'600',
    fontSize:15,
    borderRadius:2
}
});

module.exports = Login;
