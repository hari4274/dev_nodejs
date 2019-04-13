const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, timestamp, data, previousHash='') {
        /* 
        // https://www.youtube.com/watch?v=yCaj8UEk1aw
        index : particular block index number
        timestamp: created timestamp of block
        data: data send to block
        previousHash: previous hash value of the block, (all block have an previous hash value)
        */
       this.index = index;
       this.timestamp = timestamp;
       this.data = data;
       this.previousHash = previousHash;
       this.hash = "";   //sha256 algorithm
    }

    calculateHash() {
        return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
    }
}

class BlockChain {
    constructor () {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        /* Genesis block need to create a develpor */
        return new Block(0, '01/01/2019', 'Genesis', 0);
    }
    getLatestBlock() {
        // Last element of the chain is latest block
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (var i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previoudBlock = this.chain[i - 1];
            
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previoudBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

let hcoin = new BlockChain();

hcoin.addBlock(new Block(1, '12/04/2019', {amount : 40}));
hcoin.addBlock(new Block(2, '13/04/2019', {amount : 100}));

// console.log(JSON.stringify(hcoin, null, 4));

console.log("Is chain Valid : ", hcoin.isChainValid());

hcoin.chain[1].data = { amount : 40000 }  // Hack atack check for block (test case)

console.log("Is chain Valid : ", hcoin.isChainValid());