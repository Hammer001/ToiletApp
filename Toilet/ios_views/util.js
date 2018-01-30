import Dimensions from 'Dimensions';
import React, { Component } from 'react';
import {
  PixelRatio,
  ActivityIndicatorIOS
  } from 'react-native';


module.exports = {
    navigationHeight: 44,
    navigationBarBGColor:'#3497FF',
    statusBarHeight: 20,
    /*最小线宽*/
    pixel: 1 / PixelRatio.get(),

    /*屏幕尺寸*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    get: function(url, successCallback, failCallback){
        fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
            successCallback(JSON.parse(responseText));
        })
        .catch(function(err){
            failCallback(err);
        });
    },
    loading: <ActivityIndicatorIOS color="#3E00FF" style={{marginTop:40}}/>
};