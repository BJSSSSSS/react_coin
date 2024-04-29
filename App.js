import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CoinView from './components/CoinView';
import TopBar from './components/TopBar';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      refreshDate: '-',
    }
  }

  _setRefreshDate(date){
    console.log('Updated: ' + date);
    this.setState({
      refreshDate: date,
    })
  }
  
  render(){
      return(
          <View style={styles.container}>
              <StatusBar
                hidden={true}
                backgroundColor='blue'
                barStyle='light-content'
              />
          <TopBar title="코인 시세" refreshDate={this.state.refreshDate}/>
          <CoinView 
            refreshDate={(date) => this._setRefreshDate(date)}
            style={styles.coinView}/>
          
        
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    //flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  coinView:{
    width: '100%',
    flex: 1,
    flexDirection: 'column', //row
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'space-around', //center, space-around
  }
});
