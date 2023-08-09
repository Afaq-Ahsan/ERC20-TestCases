# Prime Trader Token (PTT)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Solidity Version](https://img.shields.io/badge/solidity-0.8.19-blueviolet)](https://solidity.readthedocs.io/en/v0.8.17/) 
[![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=101)](https://github.com/ellerbrock/javascript-badges/)


This repository contains the code for the PrimeTraderToken (PTT) smart contract. The smart contract is an Upgradeable ERC-20 standard token that powers the PrimeTrader ecosystem. It enables users to hold and transfer fungible tokens within the PrimeTrader platform securely. PrimeTraderToken (PTT) brings decentralization and security to token transfers and management, providing a seamless experience for users to interact with and utilize their tokens.

##  🧭 Table of Contents
- [PrimeTraderToken (PTT)](#PrimeTraderToken (PTT))
  - [🧭 Table of Contents](#-table-of-contents)
  - [👋 Introduction](#-introduction)
  - [✨️ Features](#️-features)
  - [📜 Requirements](#-requirements)
  - [⚙️ Installation and Deployment](#️-installation-and-deployment)
  - [🚀 Test](#-test)
  - [🔧 Usage](#-usage)
  - [✅ Verified Smart Contract](#-verified-smart-contract)
  - [👥 Contributing](#-contributing)
  - [🔓 License](#-license)

## 👋 Introduction

PrimeTraderToken (PTT) is an open-source, flexible and scalable smart contract for creating and managing NFTs on EVM-compatible blockchains. It is designed to handle all the important aspects of NFTs including creation, transfer, and ownership, with easy to use functions.

## ✨️ Features

- Decentralized Ownership: Users have full control over their PrimeTraderToken (PTT), and all transactions are executed on the blockchain.
- Admin Control: The contract owner maintains exclusive control over the minting process, permitting only the minting of tokens to specific addresses that are not present in the blacklist. This ensures a secure and restricted distribution.
- Transferable: Tokens can be transferred from one address to another, allowing for a thriving token market.
- Upgradability: The contract implements the Proxy Contract Upgradeability pattern, enabling easy and safe upgrades to the contract logic without affecting the contract address or altering the existing token balances.


## 📜 Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)
- [metamask](https://metamask.io/)

## ⚙️ Installation and Deployment

1. Clone this repository
   
```shell
git clone https://github.com/prime-trader/ptt-token.git
```

2. Install the Dependencies and Dotenv

```shell
npm install
yarn install
```

3. Create .env file

```shell
INFURA/Alchemy_RPC_URL = 
PRIVATE_KEY = 
ETHERSCAN_API =

```

4. Compiling the Smart Contracts

```shell
npx hardhat clean
npx hardhat compile
```


5. Deploying to a Network

To deploy the contract to a network such as Ethereum mainnet, modify the deployment script (scripts/deploy.js) and run the following command:

```shell
npx hardhat run scripts/deploy.js --network <network-name>
```

## 🚀 Test

```shell
npx hardhat test --network hardhat
```
After deployment also varify the contract directly from hardhat using 

```shell
npx hardhat verify --network polygon_mumbai <address> 
```

## 🔧 Usage

To interact with the PrimeTraderToken (PTT) smart contract, you can use a variety of tools including Remix, Truffle, and Hardhat. To get started, simply connect to a local EVM-compatible network using Hardhat.

## ✅ Verified Smart Contract

polygon_mumbai:
```shell

[https://mumbai.polygonscan.com/address/0x450856f6bca596fef3c264a874a4f75acb4ec1c4#code]

```

## 👥 Contributing

We welcome contributions in the form of bug reports, feature requests, or pull requests. For more information, please see CONTRIBUTING.md.

## 🔓 License
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

This project is licensed under the MIT License - see the LICENSE file for details.
