/**
 * 封装的常用组件
 * loading组件
 * fetch请求
 * 设备的宽和高
 * 外部传入：fetch请求需要传入的URL
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ActivityIndicator
} from 'react-native';

let UtilTest = {
    windowSize:{
        width:Dimensions.get('window').width,

    },
    getRequest:function(url,succCb,failCb){
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
         succCb(responseJson);
      })
      .catch((error) => {
         failCb(error);
      });
    },
    loding:<ActivityIndicator style={{marginTop:50}}/>
}

module.exports = UtilTest;
