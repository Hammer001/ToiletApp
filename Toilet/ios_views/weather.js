import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native'
import TwebView from './webview'

// const url = 'http://localhost:3000/html/weather.html'
const url = 'http://m.weather.com.cn/'

class Weather extends Component{
    render(){
        return (<TwebView url={url} isWeather={true}/>)
    }
}

export default Weather