var config = require('./config')

class EthIntegrate{
    constructor(abi = ''){
        this.abi = abi;
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            window.ethereum.enable();
    
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    }

    getAccounts() {
        const web3 = window.web3;
        return new Promise((resolve, reject) => {
            web3.eth.getAccounts()
                .then((resp) => {
                    resolve(resp);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    checkErc20Balance(tokenAddress) {
        const web3 = window.web3;
        return new Promise((resolve, reject) => {
            web3.eth.getAccounts()
                .then((account) => {
                    const token = new web3.eth.Contract(
                        config.erc20Abi,
                        tokenAddress // address of dai token on ropsten
                    );
                    token.methods
                        .balanceOf(account[0])
                        .call()
                        .then((resp) => {
                            resolve(resp)
                        })
                        .catch(err => {
                            reject(err);
                        })
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    queryContract(contractAddress, methodName, params=[]) {
        const web3 = window.web3;
    
        return new Promise(async (resolve, reject) => {
    
            web3.eth.getAccounts()
                .then((account) => {
                const fundContract = new web3.eth.Contract(this.abi, contractAddress);

                //get shares balance
                fundContract.methods[methodName](...params)
                    .call({from: account[0]})
                    .then(res => resolve(res))
                    .catch(err => reject(err))
            })
        })
    }

    transactContract(contractAddress, methodName, params=[]) {
        const web3 = window.web3;
    
        return new Promise(async (resolve, reject) => {
    
            web3.eth.getAccounts()
                .then((account) => {
                const fundContract = new web3.eth.Contract(this.abi, contractAddress);

                fundContract.methods[methodName](...params)
                .send({
                    from: account[0]
                })
                .then((resp) => {
                    resolve(resp)
                })
                .catch((err) => {
                    reject(err)
                })

            })
        })
    }

}

module.exports = {
    EthIntegrate
}