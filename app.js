const express = require('express')
const Web3 = require('web3');
const app = express();
const port = 3000;
const dotenv = require('dotenv');

config = require('./global.config');
bodyParser = require('body-parser');
dotenv.config();
env = config.settings.env,

week1Router = require('./Week1/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json(config.modulesEndpoint);
});

app.post('/transferEther', week1Router.transferEther);
app.post('/signMessage', week1Router.signMessage);
app.get('/first128', week1Router.first128);
app.post('/firstSmartContract', week1Router.firstSmartContract);
app.post('/merkleChallenge', week1Router.merkleChallenge);


app.listen(port, () => {
  console.log("---------------------------------------------------------------------------------");
  console.log("---------------------------------------------------------------------------------");
  console.log("Ethereum Fellowship Server Running on Port ", config.settings.port, config.settings.env);
  console.log("---------------------------------------------------------------------------------");
  console.log("---------------------------------------------------------------------------------");});

