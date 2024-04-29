import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

class TopBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Left</Text>
                <View>
                    <Text style={{fontSize: 20}}>{this.props.title}</Text>
                    <Text style={{fontSize: 10}}>{this.props.refreshDate || ','}</Text>
                </View>
                <Text>Right</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
  },
});

export default TopBar;