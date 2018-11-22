import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

const news = [
    '蓝鸥Android课程',
    '蓝鸥PHP课程',
    '蓝鸥HTML5课程',
    '蓝鸥IOS课程',
    '蓝鸥Unity3D课程',
    '蓝鸥大数据课程',
    '蓝鸥产品经理课程'
]

class ListTest  extends Component{
    constructor(props) {
    super(props);
    // 实例化
    const ds = new ListView.DataSource({
        // 通过比较新旧数据，确定是否更新行组件
        rowHasChanged:(oldData,newDate)=>{
            return oldData!=newDate;//更新
        }
    })
    this.state={ 
        // 与数据源绑定数据源(不对直接数据源操作)
        dataSource:ds.cloneWithRows(news)
    }
};
    _renderRow(rowDate){
        
       return (
           <View>
               <Text>{rowDate}</Text>
           </View>
       )
    };
    render(){
    
        return(
                        // 列表需要的数据
            <ListView style={styles.container} dataSource={this.state.dataSource} 
                        //每一行的数据
                      renderRow={(rowDate)=><View style={styles.row}><Text style={styles.text}>{rowDate}</Text></View>}
                     
            />
        )
    }
}

const styles = StyleSheet.create({
   container:{
       marginTop:25
   },
   row:{
       margin:10,
       borderBottomWidth:1,
       borderColor:"#ccc",
       justifyContent:'center',
       alignItems:'center'
   },
   text:{
       fontSize:10,
       fontWeight:'bold',
       color:'blue'
   }
})
module.exports = ListTest;

