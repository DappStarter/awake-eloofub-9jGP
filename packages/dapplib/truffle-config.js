require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stone renew sad under install bag army giggle'; 
let testAccounts = [
"0xb93452e37efd5e86775cdbf4ee95005a8e50b1aa8b1c1209996593f7bb0b8e2d",
"0x764c86a4f2029ee06ae6375aad9469b6354623d2cd42f0484a9ddf718299b937",
"0xcf17e2b2ed859aa33f2f46f4b672b460a2d552e98429dc8c28fcba8e0cd777dc",
"0xb8a3482fcdcb1588aafd8edef5a9ac3d4e9a92cd58f6760d443e37ff80c4cfb6",
"0x463da74319f25e25905fe11a7c56ef833284b0b04172781ec099b20ac499d9ad",
"0x1d267bdd4087b37e608b8b31afb2de0f22d945cc1952087caeaa99eac94d6d06",
"0xd650d772e622926c9902c84f6a320a76da6fb33950303bdc6ec3c9293dee6a65",
"0x309b9eea1eba884a080ff23be541b047baa048612a15f26bacddd590f15f58ac",
"0x6133666a921097dc61ae100a8d99d29505c2754f42fda9fa6e8cb55d2e7296e8",
"0x480e17fdccc2e6fa99124b26ea186c5b77d8f90867ebc9c6a44076ce9e2bcc0b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

