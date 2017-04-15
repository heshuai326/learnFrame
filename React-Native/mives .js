import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView ,
  RefreshControl
} from 'react-native';

const dataSource = require('../data/data.json');
console.log(dataSource);

// 实现一个Button
class MiveList  extends Component{
    constructor(props) {
    super(props);
};
    render(){
        let movies = dataSource.data.movies;
        let movieLists = [];
        for(let i in movies){
            let row = (
                <View style={styles.row} key={i}>
                    <Image style={styles.img} source={{uri:movies[i].img}}></Image>
                    <View style={styles.right}>
                        <Text style={styles.name}>电影名:{movies[i].nm}</Text>
                        <Text style={styles.dir}>导演:{movies[i].dir}</Text>
                        <Text>上映时间:{movies[i].rt}</Text>
                    </View>
                </View>
            )
            movieLists.push(row);
        }
        return(
            <ScrollView style={styles.container}>
                {movieLists}
            </ScrollView>
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
   }
})
module.exports = MiveList;

