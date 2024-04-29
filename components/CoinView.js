import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import CoinDetail from './CoinDetails';
import { getCoinIconUri } from '../libs/Constants';
import axios from 'axios'


const sampleData = [
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "ripple",
        "name": "Ripple",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "bitcoin cash",
        "name": "Bitcoin Cash",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "litecoin",
        "name": "Litecoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "e",
        "name": "e",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "e",
        "name": "e",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "e",
        "name": "e",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "e",
        "name": "e",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    },
    {
        "id": "e",
        "name": "e",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "573.137",
        "price_btc": "1.0",
        "24h_volume_usd": "72855700.0",
        "market_cap_usd": "9080883500.0",
        "available_supply": "15844176.0",
        "total_supply": "15844176.0",
        "percent_change_1h": "0.04",
        "percent_change_24h": "-0.3",
        "percent_change_7d": "-0.57",
        "last_updated": "1472762067"
    }
 ]

class CoinView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            coinDatas: [],
            isLoaded: false,
        }
    }
    
    //api???
    // _getCoinDatas(limit){
    //     this.setState({
    //         isLoaded: false,
    //     });

    //     fetch(
    //         `https://api.coingecko.com/api/v3/search/trending` 유효한거 찾아야함
    //     )
    //     .then(response => response.json())
    //     .then(data => {
    //         let date = new Date();
    //         let now = date.toLocaleDateString()

    //         if(this.props.refreshDate != null){
    //             this.props.refreshDate(now);
    //         }

    //         this.setState({
    //             coinDatas: data,
    //             isLoaded: true,
    //         });
    //         //console.log(data);
    //     });
    // }

    // componentDidMount(){
    //     this._getCoinDatas(30);
        
    //     setInterval(() => {
    //         this._getCoinDatas(10);
    //         console.log('toggled!');
    //     }, 10000);
    // }

    render(){


        //api???
        let response = null;
        new Promise(async (resolve, reject) => {
        try {
            response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': 'a618eedd-fdcd-446a-85f2-e5a2aec9c6cd',
            },
            });
        } catch(ex) {
            response = null;
            // error
            console.log(ex);
            reject(ex);
        }
        if (response) {
            // success
            const json = response.data;
            console.log(json);
            resolve(json);
        }
        });

        //let detailCells = this.state.coinDatas.map( (data, index) => { 아직 미적용중, 샘플데이터만 적용중
        let detailCells = sampleData.map( (data, index) => {
            const {rank, name, price_usd, market_cap_usd, last_updated} = data;
            return (
                <CoinDetail
                  key={index}
                  rank={rank}
                  name={name}
                  price={price_usd}
                  volumn={market_cap_usd}
                  iconUri={getCoinIconUri(name)}
                />
            );
        });
        return(
            <ScrollView style={this.props.style}>
                {detailCells}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //width: '50%',
        flex: 1,
        flexDirection: 'column', //row
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'space-around', //center, space-around
    },
});

export default CoinView;