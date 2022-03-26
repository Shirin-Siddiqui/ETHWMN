'use strict';
var application = {};

/* Week 1 - 

Module 1 - 
1) Sync the nodes

Module 2 -
1) Create an Ethereum Account Managed by Node
2) Send Test Ether to Account Created
3) Sign a Message "gEth is Money" with an account
4) Create one more Account and Make a Transaction to Send ether from one Account to another

Module 3 - 
1) Retrieve the first 128 block hashes and put them in a text file Output: text file with first 128 block hashes - Hash Block Number
2) Retrieve the first block in which a smart contract is deployed Output: block number of first smart contract block - Smart Contract

Module 4 - (Optional Challenge)

*/

application.settings = {
	"port": 3000,
	"env": "INFURA",
	"shutdownTimeoutMillis": 9000
};

application.getData = {
	"baseUrl" : "http:127.0.0.1:3000",
	"INFURA": {
		"endPoint": "https://goerli.infura.io/v3/09a1dddb23de492fa1c665cd5c0117ba",
		"logDirectoryPath": "",
	}
};

application.modulesEndpoint = {
	"WEEK1":{
		"MODULE1": {
			"Syncing Nodes": 'Connect with Infura Or Geth connect to Testnet',
		},
		"MODULE2": {
			"TransferEther": application.getData.baseUrl + '/transferEther',
			"SignMessage": application.getData.baseUrl + '/signMessage'
		},
		"MODULE3": {
			"trans": application.getData.baseUrl + '/first128',
			"FirstSmartContract": application.getData.baseUrl + '/firstSmartContract'
		},
		"MODULE4": {
			"MerkleChallenge": application.getData.baseUrl + '/merkleChallenge',
		}
	}
};

application.accounts = {
    'account1' : "0xb0655E23268453081fAd5aA07d6D0A36a6583B6E",
    'account2' : "0x0a484A6a7B8693c2D4c1467c7f61D902520cA9D4",
}

module.exports =  application;