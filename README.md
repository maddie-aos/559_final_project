#CPSC 559 Final Project

|Team Member | Email | CWID |
|-------|------|--------|
|Madeline Smith| madeline.smith@csu.fullerton.edu| 886664432|
|Aria Askaryar| aaskaryar0@csuf.fullerton.edu| 888046638 |
|Vincent Trung| vincenttrung@csu.fullerton.edu| 885887547|
|Krishna| krishna17897@csu.fullerton.edu| 886198043|

Github Repo we based our project off of : https://github.com/sherwyn11/E-Voting-App


Front End Improvements:

* Changed UI to match school colors and make it a school-specific site. 


Back End Improvements:
* Implementation of Goerli Testnet 
  * can be found in truffle-config.js
* Implementation of Sepolia Testnet
  * can be found in truffle-config.js
* Add second check of adding new candidnate through a confirmation window before connecting to metamask
  * can be found in NewCandidate.js
* Add second check of voting for a candidnate through a confirmation window before connecting to metamask
  * can be found in Vote.js
* Add a prompt asking if voter found the system easy 
  * Can be found in Vote.js

**How to start the project:**

Note: This assumes you already have a metamask account, and that you have the Ganache test network added to your Metamask account, if you do not please create a metamask account first using the following [link](https://metamask.io/), and follow these [instructions](https://docs.metamask.io/wallet/get-started/run-development-network/) to connect the Ganache Test Net to your metamask account. 

1. Clone the this github repository using the following command: ```gh repo clone maddie-aos/559_final_project```
   
2. If you dont have truffle and ganache, please install them first using the following commands in a new terminal window, if you do please skip to step 3: 

   To download truffle: ```npm install -g truffle```

   To download [Ganache](https://trufflesuite.com/ganache/) please click Ganache and follow instructions from the link. 

3. Once those two dependencies have been installed start a New Workspace by clicking 'New Workspace".
   
   3.1. This will take you directly to the settings screen where you can set the name for your workspace. 

   3.2. Then in the 'Truffle Projects' box add the truffle-config.js file found in the 'blockchain' folder.

4. Hit save workspace, then restart the workspace. 

5. After this is done: Navigate to where the project directory is stored and open up the project in your IDE of choice (Visual Studio Code is easiest to work with, due to in-line terminal)
   
6. Delete all extra package-lock.json files that are present in both the blockchain and server folders. 
   
7. Then run: ```npm install``` in both the blockchain and server folders. 
   
8. In a new terminal window navigate to the blockchain folder and deploy your contracts to the Ganache testnet using the following commands:
   
   ```truffle compile```

   ```truffle migrate```

   If the deployment was successful, you will get an output similar to this:
   ```bash 
   Starting migrations...
   ======================
   > Network name:    'development'
   > Network id:      5777
   > Block gas limit: 6721975 (0x6691b7)
   
   1_initial_migration.js
   ======================
   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x5f6370cbaa52c83b7bfe4be1ade220960ec2cc6399b70dc58c0c688cfade5338
   > Blocks: 0            Seconds: 0
   > contract address:    0x8045b3Dba21BFC9fc8d41c03028aeFDb379FcD93
   > block number:        1
   > block timestamp:     1683507865
   > account:             0xab8F58adE07f99C2a5E8ba7B597200b54A726eff
   > balance:             99.99596746
   > gas used:            201627 (0x3139b)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00403254 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00403254 ETH
   
   2_initial_migration.js
   ======================

   Replacing 'Election'
   --------------------
   > transaction hash:    0xb1fc6e44f8631eb5f49a9d37e5d0b5236a150937632371c9b3f32939feadc754
   > Blocks: 0            Seconds: 0
   > contract address:    0x4dE419217B79ADC1592b0e7f2EE5098dEa63F08e
   > block number:        3
   > block timestamp:     1683507866
   > account:             0xab8F58adE07f99C2a5E8ba7B597200b54A726eff
   > balance:             99.97917294
   > gas used:            797213 (0xc2a1d)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01594426 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01594426 ETH
   
   Summary
   =======
   > Total deployments:   2
   > Final cost:          0.0199768 ETH
   ```


9.  In your browser, switch to your Metamask Network to the Ganache Network and add the account created by the Ganache workspace. 
    
    9.1 In the Ganache app, the first account in your workspace is the account connected to the project.
    
    9.2 Hit the key icon on the far right end of the account and copy the private key value. 
    
    9.3 In your metamask wallet, add the wallet information by importing a new wallet and pasting the private key value. 
    
    9.4 Once that is done, hit submit and your wallet should be connected to the Ganache Testnet. 

10.  Once that is complete, open two terminals and navigate to the blockchain folder in one, then the server folder in another. 
    
     10.1   In the server folder first, run the following command to start the server:

     ```npm run dev```
    
      This should have the following output:
    
      ```bash
      > server@1.0.0 dev
      > nodemon src/app.js
      [nodemon] 2.0.3
      [nodemon] to restart at any time, enter `rs`
      [nodemon] watching path(s): *.*
      [nodemon] watching extensions: js,mjs,json
      [nodemon] starting `node src/app.js`
      Server is up on port 8000
      ```

     10.2 In the blockchain folder next, run the following command to start the React app: 

      ```npm start```
      
      This should give you the following output: 
    
      ```bash
      Starting the development server...
      ```
     
     10.3  Now you can use the application to create an election, or vote for a candidate. 


11. To stop the application simply run the following command in both running terminals: 
    
    ```Ctrl + C```


