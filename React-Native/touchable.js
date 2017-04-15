import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

class TouchAble extends Component{
    constructor(props) {
    super(props);
    this.state = { times: 0 };
    }
     handler(times){
           this.setState({
               times: times+=1
           })        
        }
    render(){
        return(
            <View style={{ underlayColor:'red'}}>
            {/*<TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>我是透明按钮</Text>
            </TouchableOpacity>*/}
            <Text>{this.state.times}</Text>
            <TouchableHighlight underlayColor={'red'} onPress={()=>{this.handler(this.state.times)}} style={[styles.btn,{ backgroundColor:'pink',}]}>
                <Text style={styles.text}>我是高亮按钮</Text>
            </TouchableHighlight>
            {/*<TouchableWithoutFeedback onPress={this.handler}>
                <View>
                     <Text>我是Feedback</Text>
                </View>           
            </TouchableWithoutFeedback>*/}
           </View> 
        )
    }
}

const styles = StyleSheet.create({
  btn:{
      width:85,
      height:30,
      backgroundColor:'cyan',
      borderRadius:3,
      justifyContent:'center',
      alignItems:'center',  
  },
  text:{
      fontSize:14,
     fontWeight: 'bold',
      color:'white',
  }
})
module.exports = TouchAble;