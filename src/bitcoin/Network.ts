
const bitcoin = require('bitcoinjs-lib');
const TESTNET = bitcoin.networks.testnet
const MAINNET = bitcoin.networks.mainnet

export default class Network {
    network: string;
    constructor (network: string) {
        this.network = network
    }
    getTestnet () {
        return TESTNET
    }

    getMainNet () {
        return MAINNET
    }
}

//module.exports.Network = Network;