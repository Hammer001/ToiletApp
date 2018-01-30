import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import TwebView from './webview'

const nearBy = 'http://localhost:3000/html/map.html'

class ToiletPage extends Component{
    render(){
        return (
            <View style={styles.container}>
                <TwebView url={nearBy} isNearBy={true} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });

export default ToiletPage