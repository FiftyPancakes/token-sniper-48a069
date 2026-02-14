const ethers = require('ethers');
require('dotenv').config();

const wallet = new ethers.Wallet(process.env.SNIPER_KEY);
console.log('Sniper ready:', wallet.address);
