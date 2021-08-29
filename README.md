# Ethereum Integration Library
Web3 Library that makes it easier to connect to ethereum with metamask.

### Connect to contract with metamask
Optional: abi (deployed contract's ABI)
```
let eth = new EthIntegrate.EthIntegrate(abi=data.abi);
eth.getAccounts().then(accounts => {
    console.log(accounts)
})

```
### Get Token's Balance
```
let token = '0xc2118d4d90b274016cb7a54c03ef52e6c537d957'
eth.checkErc20Balance(token).then(balance => {
    console.log(`Balance (${token}): , ${web3.utils.fromWei(balance)}`)
})
```

### Call Contract Methods (query)
```
eth.queryContract(CONTRACT_ADDRESS, QUERY_METHOD_NAME, [ ARGUMENTS ])
.then(resp => {
    console.log(resp)
})
.catch( err => {
    console.log(err)
})
```
### Call Contract Methods (transact)
```
eth.transactContract(CONTRACT_ADDRESS, TRANSACT_METHOD_NAME, [ ARGUMENTS ])
.then(resp => {
    console.log(resp)
})
.catch( err => {
    console.log(err)
})
```
