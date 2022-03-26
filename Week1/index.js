const Web3 = require('web3');
var fs = require('fs');
config = require("../global.config");
const web3 = new Web3(config.getData.INFURA.endPoint);


exports.transferEther = function(req, res, next){
    web3.eth.getTransactionCount(req.body.toAccount, (err, txCount) => {
        // Build the transaction
        const txObject = {
            to: req.body.toAccount,
            value:web3.utils.toWei(req.body.etherAmount,'ether'),
            gas: '21000',
            gasPrice: web3.utils.toWei('10', 'gwei')
        }
    
        // Sign the transaction
        const signedTransaction = web3.eth.accounts.signTransaction(txObject, req.body.fromPrivateKey); 
        
        // Broadcast the transaction
        signedTransaction.then(signedTx => {
            const sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
            sentTx.on("receipt", receipt => {
                console.log("receipt: ", receipt);
                var successStatus = {
                    status : "Successful",
                    response : receipt
                }
                res.json(successStatus)
              });
            sentTx.on("error", err => {
                console.log(err.message)
                res.json(JSON.parse(err.message))
            });
        })
    })
}


exports.signMessage = function(req, res, next){
    const sentTx = web3.eth.accounts.sign(req.body.dataToBeSigned, req.body.privateKey);
        var successStatus = {
            status : "Successful",
            response : sentTx
        }
        res.json(successStatus)
}


exports.first128 = function(req, res, next){

    const hashBlocks = async () => {
        for (let i = 0; i < 128; i++) {
            const block = await web3.eth.getBlock(i);
            //writing block hash into file
            fs.appendFileSync('hashes.txt', block.hash +' ');
        }
    }
    
    hashBlocks();
}
exports.firstSmartContract = function(req, res, next){
    
}

exports.merkleChallenge = function(req, res, next){

}

