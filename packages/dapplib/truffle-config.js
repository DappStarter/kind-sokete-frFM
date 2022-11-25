require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot dad remember noise million coral light army genuine'; 
let testAccounts = [
"0xb68b83d4bf21cc469fc572bb0c3584bdd1ba8900cdb4443537603fbcb431d2c9",
"0x02d1048c632db1963eafc214487471c90cd39023779e98b340a5e6579de68389",
"0x9b9311aa0230455371065136562ce060df70a4485e6d4086d747ccee8f5bb24d",
"0xee92621b98e1ae2d7be16fa570ccc68ab8a6933b428b126b2972f7891a312390",
"0xcc0a0f5874c0f2b5057dd4968ff6eb7e7e90c993728ecefc0e1b419038e4dec8",
"0xaa3a9151a79f71ccfef37df0e0945924a07e0f7c1217983e1a9a3362f9a85a85",
"0x3d5bb7fcb7a7f3fefc452e9acfb6c2ce80d8eaae70ee7e7e51c93caf8fc6b76e",
"0xf487c4aaa956234b410f4a8973d3702f270d7197f7a859783b32f085592d5f97",
"0x13b37c4fb665bb6da4a9edda7b48228bb55bba7a166392766484d418d20723af",
"0x16da1999fc3224dcce95d372b1e2cb4b1f23ddd6039d4d364c9dc4e8c8f87a4f"
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

