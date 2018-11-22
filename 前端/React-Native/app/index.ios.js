/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Navigator
} from 'react-native';

const List = require("./main/create/index");
const Edit = require("./main/edit/index");
const Account = require("./main/account/login")

var app = React.createClass({
   getInitialState: function() {
    return {
      selectedTab: 'blueTab',
      notifCount: 0,
      presses: 0,
    };
  },

  render: function() {
    return (
      <TabBarIOS
        unselectedTintColor="blue"
        tintColor="grey">
        <Icon.TabBarItem
          title="video"
           iconName="ios-film-outline"
          selectedIconName="ios-film"
          selected={this.state.selectedTab === 'list'}
          onPress={() => {
            this.setState({
              selectedTab: 'list',
            });
          }}>
          <Navigator
             initialRoute={{
               name:'list',
               component:List  //实例组件本身
             }}
             configureScene={(route)=>{
               return Navigator.SceneConfigs.FloatFromRight  //切换效果
             }}
             renderScene={(route,navigator)=>{
               const Component = route.component
               return <Component {...route.params} navigator={navigator}/>
             }}
          />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Edit"
          iconName="ios-videocam-outline"
          selectedIconName="ios-videocam"
          selected={this.state.selectedTab === 'edit'}
          onPress={() => {
            this.setState({
              selectedTab: 'edit',
              notifCount: this.state.notifCount + 1,
            });
          }}>
        <Edit></Edit>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Home"
         iconName="ios-person-outline"
         selectedIconName="ios-person"
          selected={this.state.selectedTab === 'account'}
          onPress={() => {
            this.setState({
              selectedTab: 'account',
              presses: this.state.presses + 1
            });
          }}>
          <Account/>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  },

});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('app', () => app);
