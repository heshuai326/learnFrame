
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TextInput,
    TouchableOpacity
} from 'react-native';


class FirstPage extends Component{
     constructor(props){
     super(props);
     this.state = {
         text:null
     }
   }
    change() {
        //把需要传递的值，放在路由的nextpass属性里
        var nextRoute = {
            component:SecondPage,
            nextPass:{
                text:this.state.text
            }
        }
        this.props.navigator.push(nextRoute)
    }
    render () {
        return (
            <View style={[style.con,{backgroundColor:"cyan"}]}>
                <TextInput style={style.input} onChangeText={(text)=>{this.setState({text})}} placeholder={"请输入"}></TextInput>
                <TouchableOpacity style={[style.btn]} onPress={()=>{this.change()}}>
                    <Text style={style.btnText}>跳转到下一页</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


class SecondPage extends Component{
    change() {
        this.props.navigator.pop();
    };
    render() {
        return (
            <View style={[style.con,{backgroundColor:'#ff9d31'}]}>
                <Text>{this.props.text}</Text>
                <TouchableOpacity style={[style.btn]} onPress={()=>{this.change()}}>
                    <Text style={style.btnText}>返回上一页</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var NavigatorTest=React.createClass({
    render:function () {
        //初始路由
        var rootRoute={
            component:FirstPage,
            nextPass:{}
        }
        return (
            <Navigator
                //第一步需要进行初始路由的设置
                initialRoute={rootRoute}
                //二 页面切换方式
                configureScene={(route)=>Navigator.SceneConfigs.PushFromRight}
                //确定要渲染的场景
                renderScene={(route,navigator)=>{
                    //需要找到要渲染的页面
                    var Component=route.component;
                    //需要把route 和navigator 和需要传递的值 作为属性传递下去
                    return <Component {...route.nextPass} route={route}   navigator={navigator}/>
                }}
            ></Navigator>
        )
    }
})



var style=StyleSheet.create({
    con:{
        flex:1,
        justifyContent:'center',
        alignItems:'baseline',
    },
    btn:{
        backgroundColor:'#63ff34',
        width:130,
        height:30,
        borderRadius:5,
        justifyContent:"center",
        alignItems:'center'
    },
    btnText:{
        fontSize:14,
    },
    input:{
        width:200,
        height:30,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#000'
    }
});


module.exports=NavigatorTest;