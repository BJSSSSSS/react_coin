/**
    Icons from: https://github.com/cjdowner/cryptocurrency-icons/tree/master/32%402x/icon
 */

    export function getCoinIconUri(coinName){
        switch (coinName){
    
            case 'Bitcoin':
                return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/btc@2x.png?raw=true';
            case 'Ethereum':
                return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/eth@2x.png?raw=true';
            case 'Ripple':
                return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';
            case 'Bitcoin Cash':
                return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/bcc@2x.png?raw=true';
            case 'Litecoin':
                return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';
            default:
                return 'https://cdn.pixabay.com/photo/2021/05/12/20/18/dogecoin-6249165_1280.png';

        }

    }