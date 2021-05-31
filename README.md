# Fund Contract Calls
`

{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_nav",
            "type": "uint256"
        }
    ],
    "name": "acceptAllDeposits",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},<br/>
{
    "inputs": [
        {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "_nav",
            "type": "uint256"
        }
    ],
    "name": "acceptDeposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},<br>
{
    "inputs": [
        {
            "internalType": "address",
            "name": "fundManagerAddress",
            "type": "address"
        }
    ],
    "name": "getDepositedBalance",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},<br>
{
    "inputs": [
        {
            "internalType": "address",
            "name": "fundManagerAddress",
            "type": "address"
        }
    ],
    "name": "getMyDepositRequest",
    "outputs": [
        {
            "components": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isPending",
                    "type": "bool"
                }
            ],
            "internalType": "struct FundContract.Request",
            "name": "",
            "type": "tuple"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_nav",
            "type": "uint256"
        }
    ],
    "name": "acceptAllWithdraws",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},

{
    "inputs": [
        {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "_nav",
            "type": "uint256"
        }
    ],
    "name": "acceptWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "contract FundShare",
            "name": "_sharesToken",
            "type": "address"
        },
        {
            "internalType": "address[]",
            "name": "_tokens",
            "type": "address[]"
        }
    ],
    "name": "createFund",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "name": "fundMapping",
    "outputs": [
        {
            "internalType": "address",
            "name": "fundManager",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "depositRequestCount",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "withdrawRequestCount",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "NAV",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "totalDAIDeposit",
            "type": "uint256"
        },
        {
            "internalType": "contract FundShare",
            "name": "sharesToken",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "getAllUsers",
    "outputs": [
        {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "getDAIBalance",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},

{
    "inputs": [
        {
            "internalType": "address",
            "name": "fundManagerAddress",
            "type": "address"
        }
    ],
    "name": "getMyWithdrawalRequest",
    "outputs": [
        {
            "components": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isPending",
                    "type": "bool"
                }
            ],
            "internalType": "struct FundContract.Request",
            "name": "",
            "type": "tuple"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "getPendingDepositRequests",
    "outputs": [
        {
            "components": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isPending",
                    "type": "bool"
                }
            ],
            "internalType": "struct FundContract.Request[]",
            "name": "",
            "type": "tuple[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "getPendingWithdrawRequests",
    "outputs": [
        {
            "components": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isPending",
                    "type": "bool"
                }
            ],
            "internalType": "struct FundContract.Request[]",
            "name": "",
            "type": "tuple[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "fund_address",
            "type": "address"
        }
    ],
    "name": "getSharesBalance",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "_fundAddress",
            "type": "address"
        }
    ],
    "name": "getTokens",
    "outputs": [
        {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "name",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "name": "referral",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "rejectAllDeposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "rejectAllWithdraws",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
        }
    ],
    "name": "rejectDeposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "_addr",
            "type": "address"
        }
    ],
    "name": "rejectWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "fund_manager",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "_numShares",
            "type": "uint256"
        }
    ],
    "name": "requestWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "fundManagerAddress",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "_refAddr",
            "type": "address"
        }
    ],
    "name": "sendDepositRequest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}
        `