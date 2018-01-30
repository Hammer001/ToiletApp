import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import Util from '../util'
import List from './list'

class Category extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:this.props.data
        }
    }
    render(){
        let data = this.props.data
        let first = []
        let second = []
        for(var i in data){
            let Item = (
                <TouchableOpacity style={[styles.categoryTopic]} key={i} onPress={this._showList.bind(this,data[i].text)}>
                    <Text style={[styles.title, styles.fontFFF]}>{data[i].text}</Text>
                </TouchableOpacity>            
            )
            if(i<2){
                first.push(Item)
            }else{
                second.push(Item)
            }
        }
        return (
            <View style={{marginRight:10}}>
                <View>
                    <Text style={[styles.bigText, {marginLeft:10}]}>分类</Text>
                </View>
                <View style={[styles.row, {marginTop:10}]}>
                    {first}
                </View>
                <View style={[styles.row, {marginTop:10}]}>
                    {second}
                </View>
            </View>
        )
    }

    _showList(keywords){
        var type = {}
        switch(keywords){
            case '默认分类':
                type = 'it'
                break
            case '分类1':
                type = 'cookies'
                break
            case '分类3':
                type = 'sanwen'
                break
            case '分类2':
                type = 'manager'
                break
            default :
                type = 'it'
                break
        }
        this.props.navigator.push({
            component:List,
            barTintColor: '#fff',
            title: keywords,
            passProps:{
                type: type
            }
        })
    }
}

const styles = StyleSheet.create({
    bigText:{
      fontSize:17,
      fontWeight: '300',
      marginBottom: 5
    },
    row:{
      flexDirection: 'row'
    },
    categoryTopic:{
      height: 70,
      borderWidth: Util.pixel,
      borderColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
      borderRadius: 3,
      marginLeft:10
    },
    title:{
      fontSize:17,
      fontWeight:'300'
    },
    fontFFF:{
      //color:'#fff'
    }
  })

export default Category