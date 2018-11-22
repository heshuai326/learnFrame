import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

const movies = require('../data/data.json').data.movies;


class ListTest  extends Component{
    constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
        rowHasChanged:(oldData,newData)=>{
            return oldData!=newData;
        }
    })
    this.state = {
        DataSource:ds.cloneWithRows(movies)
    }
};
    render(){
        return(
            <ListView style={styles.container} dataSource={this.state.DataSource}
                    renderHeader = {()=> 
                            <View style={styles.header}>
                                <Text style={styles.title}>猫眼电影列表</Text>
                                 <View style={styles.separator}></View>
                            </View>                         
                    }
                     renderRow = {(movies)=><View style={styles.row}>
                            <Image style={styles.img} source={{uri:movies.img}}/>
                            <View style={styles.right}>
                                <Text style={styles.name}>{movies.nm}</Text>
                                <Text style={styles.dir}>导演:{movies.dir}</Text>
                                <Text>上映时间:{movies.rt}</Text>
                            </View>   
                         </View>}
                     renderSeparator={()=>
                         <View style={styles.separator}></View>
                     }
            />
        )
    }
}

const styles = StyleSheet.create({
container:{
       marginTop:25
   },
   row:{
       flexDirection:'row',
       alignItems:'center',
       padding:10
   },
   img:{
    width:78,
    height:158
   },
   right:{
       marginLeft:15,
       flex:1
   },
   name:{
       fontSize:18,
       fontWeight:'bold',
       marginTop:3,
       marginBottom:3
   },
   dir:{
       fontSize:15,
       marginBottom:3
   },
   header:{
        height:44,
        alignItems:'center'
   },
   title:{
       fontSize:25,
       fontWeight:'bold',
       lineHeight:44
   },
   separator:{
       height:1,
       backgroundColor:'#ccc'
   }
})
module.exports = ListTest;


