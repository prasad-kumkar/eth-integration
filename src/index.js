var config = require('./config')

function connectMetamask() {
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

function toWei(n) {
    return window.web3.utils.toWei(n, 'ether');
}

function fromWei(n) {
    return window.web3.utils.fromWei(n, 'ether');
}

function getAccounts() {
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

function checkDaiBalance() {
    const web3 = window.web3;
    return new Promise((resolve, reject) => {
        web3.eth.getAccounts()
            .then((account) => {
                const daiToken = new web3.eth.Contract(
                    config.erc20Abi,
                    config.daiTokenAddress // address of dai token on ropsten
                );
                daiToken.methods
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

function loadFund() {
    const web3 = window.web3;
    return new Promise((resolve, reject) => {
        web3.eth.getAccounts()
            .then((account) => {
                const fundContract = new web3.eth.Contract(FundContract.abi, config.fundContractAddress);

                fundContract.methods
                    .fundMapping(account[0])
                    .call()
                    .then(resp => {
                        resolve(resp)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
    })
}

async function createFund(fundName, tokenSymbol, tokens) {
    const web3 = window.web3;
    return new Promise((resolve, reject) => {
        web3.eth.getAccounts()
            .then((accounts) => {

                var contract = new web3.eth.Contract(config.erc20Abi);

                contract.deploy({
                        from: accounts[0],
                        data: config.erc20ByteCode,
                        arguments: [fundName, tokenSymbol, config.fundContractAddress],
                    })
                    .send({
                        from: accounts[0],
                    })
                    .then((res) => {
                        newFund(res._address, accounts[0], tokens)
                            .then((res) => {
                                resolve(res)
                            })
                            .catch((err) => {
                                reject(err)
                            })
                    })

            })

    })
}

// create a new fund, passing in shares contract address
function newFund(sharesContractAddress, account, tokens) {
    const web3 = window.web3;

    const fund = new web3.eth.Contract(config.fundContractAbi, config.fundContractAddress);

    return new Promise((resolve, reject) => {
        fund.methods
            .createFund(sharesContractAddress, tokens)
            .send({
                from: account
            })
            .then((resp) => {
                resolve(resp)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


function deposit(amount, fundManagerAddress, referral = '0x0000000000000000000000000000000000000000') {
    const web3 = window.web3;

    return new Promise((resolve, reject) => {
        web3.eth.getAccounts()
            .then((account) => {

                // Load DaiToken
                const daiToken = new web3.eth.Contract(
                    config.erc20Abi,
                    config.daiTokenAddress
                );

                daiToken.methods.approve(config.fundContractAddress, toWei(amount.toString())) // fundContract address
                    .send({
                        from: account[0]
                    })
                    .then(function (newContractInstance) {
                        console.log(newContractInstance); // instance with the new contract address
                        sendDeposit(amount, fundManagerAddress, referral, account)
                            .then(res => {
                                resolve(res)
                            })
                            .catch(err => {
                                reject(err)
                            })
                    });
            })
    })
}

function sendDeposit(amount, fundManagerAddress, referral, account) {

    const web3 = window.web3;

    return new Promise((resolve, reject) => {

        const fundContract = new web3.eth.Contract(config.fundContractAbi, config.fundContractAddress);

        fundContract.methods
            .sendDepositRequest(amount, fundManagerAddress, referral)
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
}

function withdraw(amount, fundManagerAddress) {
    const web3 = window.web3;

    const fundContract = new web3.eth.Contract(config.fundContractAbi, config.fundContractAddress);

    return new Promise((resolve, reject) => {
        web3.eth.getAccounts()
            .then((account) => {

                fundContract.methods
                    .fundMapping(fundManagerAddress)
                    .call()
                    .then(res => {
                        console.log(res.sharesToken)

                        const sharesToken = new web3.eth.Contract(
                            config.erc20Abi,
                            res.sharesToken
                        );

                        sharesToken.methods.approve(config.fundContractAddress, toWei(amount.toString())) // fundContract address
                            .send({
                                from: account[0]
                            })
                            .then(function (newContractInstance) {
                                console.log(newContractInstance); // instance with the new contract address
                                fundContract.methods
                                .requestWithdraw(fundManagerAddress, amount)
                                .send({
                                    from: account[0]
                                })
                                .then((resp) => {
                                    resolve(resp)
                                })
                                .catch((err) => {
                                    reject(err)
                                })
                            });

                    })

            })
    })
}



function callFunction(name, params=[]) {
    const web3 = window.web3;

    return new Promise(async (resolve, reject) => {

        web3.eth.getAccounts()
            .then((account) => {
            const fundContract = new web3.eth.Contract(config.fundContractAbi, config.fundContractAddress);

            //get shares balance
            fundContract.methods[name](...params)
                .call({from: account[0]})
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    })
}

module.exports = {
    connectMetamask,
    checkDaiBalance,
    getAccounts,
    toWei,
    fromWei,
    loadFund,
    createFund,
    deposit,
    callFunction,
    withdraw
}