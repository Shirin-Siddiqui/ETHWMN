# ETHWMN

This was a backend rest api written in Express (Nodejs) designed by me during my Ethereum Fellowship program tenure.

We had a few assignemnts where we had to connect to the Ethereum network and complete a few task 
1) Signing a transaction
2) Getting the first 128 transactions from ethereum including the geneses block
3) Transfreing Ethereum from one wallet address to another
4) Multi sign wallet( will be found in a seperate repo)
5) Merkle challenge
6) Finding the hash address of a transaction which was the first smart contract deployed

I connected to the Georli testnet to go ahead with this
Used INFURA since they have their nodes already running up.

How you could run this on your local environment ?

1) clone/ fork the project.
2) install nodemon if you feel comfortable using it.
3) node app.js or nodemon app.js ( in the root folder)

hit the base url in postman you will get a link for all these 6 points mentioned above and then you can go ahead and run the api for all these points mentioned
Do note the transactions need metamask wallet to be conneted and an infura endpoint to be created. 
