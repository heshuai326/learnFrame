import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Note  extends Component{
    handler(){
        // 在组件里面定义点击处理方法
        alert("点到文字了！");
    };
    render(){
        let content = this.props.content;
        let noteLists = [];
        // 遍历父组件上的内容存放在数组中
        for(let i in content){
            // 超出省略省略
            let text = <Text numberOfLines={1} onPress= {this.handler} style={styles.note} key={i}>{content[i]}</Text>;
            noteLists.push(text);
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Text相关知识</Text>
                    <View>
                        {noteLists}
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        margin:10
    },
    title:{
        color:'red',
        fontSize:24
    },
    note:{
        fontSize:14,
        lineHeight:25
    }
})
module.exports = Note;