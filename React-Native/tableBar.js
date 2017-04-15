
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TabBarIOS
} from 'react-native';
const PageOne = require('../work/work1');
const PageTwo = require("../work/work2");
const PageThree = require("../work/work3");

class TabBarTest  extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectTab:"pageOne"
        }
    }
    changeTab(name){
        this.setState({
            selectTab:name
        })
    }
  render(){
      return(
          <TabBarIOS barTintColor="darkslateblue">
                    <TabBarIOS.Item
                        title="inputTest"
                        icon={require("../icon/index.png")}
                        onPress={this.changeTab.bind(this,"pageOne")}
                        selected={this.state.selectTab=="pageOne"}
                    >
                        <PageOne></PageOne>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="imageTest"
                        icon={require("../icon/img.png")}                   
                        onPress={this.changeTab.bind(this,"pageTwo")}
                        selected={this.state.selectTab=="pageTwo"}
                    >
                        <PageTwo></PageTwo>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="movieTest"
                        icon={require("../icon/movie.png")}
                        onPress={this.changeTab.bind(this,"pageThree")}
                        selected={this.state.selectTab="pageThree"}
                    >
                        <PageThree></PageThree>
                    </TabBarIOS.Item>
                </TabBarIOS>
      )
  }
}





const style=StyleSheet.create({

});


module.exports=TabBarTest;