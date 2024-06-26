import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


class CoinDetails extends React.Component {
  render() {
    let date = new Date();
    let now = date.toLocaleString()

    return (
        <View style={styles.container}>
            <Image
            style={{width:50, height:50, marginRight:5, marginLeft:5}}
            source={{uri: this.props.iconUri}}
            />
            {/* <Image
            style={{width:50, height:50}}
            source={{uri: 'https://bitcoin.org/img/icons/opengraph.png'}}
            /> */}
            {/* <Image //진짜 개버그..
            style={{witdh:50, height:50}}
            source={{uri: 'https://bitcoin.org/img/icons/opengraph.png'}}
            /> */}
            <Text style={[styles.rank]}>{'#' + (this.props.rank || 'Rank')}</Text>
            <View style={{flexDirection: 'column'}}>
              <View>
                <Text style={[styles.name]}>{this.props.name || 'Name'}</Text>
                <Text style={[styles.volumn]}>{'Volumn: ' + (this.props.volumn || 0)}</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 5,
                alignItems: 'center'
              }}>
                <Text>$:</Text><Text style={[styles.price]}>{(this.props.price || 0)}</Text>
              </View>
            {/* <Text style={[styles.text, {flex: 1}]}>{'Updated: ' + (Date(this.props.time) || now)}</Text> */}
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row', //row
    backgroundColor: 'pink',
    alignItems: 'center',
    //justifyContent: 'space-around', //center, space-around
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
  },
  rank: {
    fontSize: 20,
    marginRight: 15,
  },
  name: {
    fontSize: 20,
    marginRight: 15,
  },
  price: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 15,
  },
  volumn: {
    marginTop: 3,
    fontSize: 13,
    color: '#a8a5a5',
    marginRight: 15,
  }
});

export default CoinDetails;
