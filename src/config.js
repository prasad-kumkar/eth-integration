module.exports = {
    fundContractAbi: [
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "_fundAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "_user",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_nav",
					"type": "uint256"
				}
			],
			"name": "Deposit",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "_user",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "_fundAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				}
			],
			"name": "DepositRejected",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "_user",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "_fundAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				}
			],
			"name": "DepositRequest",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "_fundAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "contract FundShare",
					"name": "_sharesToken",
					"type": "address"
				}
			],
			"name": "NewFund",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "_fundAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "_user",
					"type": "address"
				}
			],
			"name": "NewUser",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "_from",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "_to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				}
			],
			"name": "Referral",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "_fundAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "_user",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_nav",
					"type": "uint256"
				}
			],
			"name": "Withdraw",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "_user",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "_fundAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				}
			],
			"name": "WithdrawRejected",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "_user",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "_fundAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				}
			],
			"name": "WithdrawRequest",
			"type": "event"
		},
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
			"name": "acceptDeposit",
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
		},
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
	],
    fundContractAddress: "0x7533EA770B10eC5A5482300E971281f797B429D5",
	erc20Abi: [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "symbol",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "FundContract",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "Paused",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "Unpaused",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}
			],
			"name": "allowance",
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
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "balanceOf",
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
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "burn",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "subtractedValue",
					"type": "uint256"
				}
			],
			"name": "decreaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "addedValue",
					"type": "uint256"
				}
			],
			"name": "increaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [],
			"stateMutability": "nonpayable",
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
			"inputs": [],
			"name": "owner",
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
			"name": "pause",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "paused",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
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
			"inputs": [],
			"name": "totalSupply",
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
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "unpause",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	],
	erc20ByteCode: "60806040523480156200001157600080fd5b506040516200263c3803806200263c83398181016040528101906200003791906200020b565b8282816003908051906020019062000051929190620000d2565b5080600490805190602001906200006a929190620000d2565b5050506000600560006101000a81548160ff02191690831515021790555080600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000451565b828054620000e0906200035c565b90600052602060002090601f01602090048101928262000104576000855562000150565b82601f106200011f57805160ff191683800117855562000150565b8280016001018555821562000150579182015b828111156200014f57825182559160200191906001019062000132565b5b5090506200015f919062000163565b5090565b5b808211156200017e57600081600090555060010162000164565b5090565b6000620001996200019384620002bc565b62000293565b905082815260208101848484011115620001b257600080fd5b620001bf84828562000326565b509392505050565b600081519050620001d88162000437565b92915050565b600082601f830112620001f057600080fd5b81516200020284826020860162000182565b91505092915050565b6000806000606084860312156200022157600080fd5b600084015167ffffffffffffffff8111156200023c57600080fd5b6200024a86828701620001de565b935050602084015167ffffffffffffffff8111156200026857600080fd5b6200027686828701620001de565b92505060406200028986828701620001c7565b9150509250925092565b60006200029f620002b2565b9050620002ad828262000392565b919050565b6000604051905090565b600067ffffffffffffffff821115620002da57620002d9620003f7565b5b620002e58262000426565b9050602081019050919050565b6000620002ff8262000306565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156200034657808201518184015260208101905062000329565b8381111562000356576000848401525b50505050565b600060028204905060018216806200037557607f821691505b602082108114156200038c576200038b620003c8565b5b50919050565b6200039d8262000426565b810181811067ffffffffffffffff82111715620003bf57620003be620003f7565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200044281620002f2565b81146200044e57600080fd5b50565b6121db80620004616000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806342966c68116100a25780638da5cb5b116100715780638da5cb5b1461029457806395d89b41146102b2578063a457c2d7146102d0578063a9059cbb14610300578063dd62ed3e146103305761010b565b806342966c68146102205780635c975abb1461023c57806370a082311461025a5780638456cb591461028a5761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca5780633f4ba83a146101fa57806340c10f19146102045761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610360565b6040516101259190611863565b60405180910390f35b61014860048036038101906101439190611500565b6103f2565b6040516101559190611848565b60405180910390f35b610166610410565b6040516101739190611aa5565b60405180910390f35b610196600480360381019061019191906114b1565b61041a565b6040516101a39190611848565b60405180910390f35b6101b461051b565b6040516101c19190611ac0565b60405180910390f35b6101e460048036038101906101df9190611500565b610524565b6040516101f19190611848565b60405180910390f35b6102026105d0565b005b61021e60048036038101906102199190611500565b61066a565b005b61023a6004803603810190610235919061153c565b610708565b005b6102446107ac565b6040516102519190611848565b60405180910390f35b610274600480360381019061026f919061144c565b6107c3565b6040516102819190611aa5565b60405180910390f35b61029261080b565b005b61029c6108a5565b6040516102a9919061182d565b60405180910390f35b6102ba6108cb565b6040516102c79190611863565b60405180910390f35b6102ea60048036038101906102e59190611500565b61095d565b6040516102f79190611848565b60405180910390f35b61031a60048036038101906103159190611500565b610a51565b6040516103279190611848565b60405180910390f35b61034a60048036038101906103459190611475565b610a6f565b6040516103579190611aa5565b60405180910390f35b60606003805461036f90611c09565b80601f016020809104026020016040519081016040528092919081815260200182805461039b90611c09565b80156103e85780601f106103bd576101008083540402835291602001916103e8565b820191906000526020600020905b8154815290600101906020018083116103cb57829003601f168201915b5050505050905090565b60006104066103ff610af6565b8484610afe565b6001905092915050565b6000600254905090565b6000610427848484610cc9565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610472610af6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e990611985565b60405180910390fd5b61050f856104fe610af6565b858461050a9190611b4d565b610afe565b60019150509392505050565b60006012905090565b60006105c6610531610af6565b84846001600061053f610af6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105c19190611af7565b610afe565b6001905092915050565b3373ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610660576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610657906118e5565b60405180910390fd5b610668610f48565b565b3373ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f190611925565b60405180910390fd5b6107048282610fea565b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078f90611a25565b60405180910390fd5b6107a96107a3610af6565b8261113e565b50565b6000600560009054906101000a900460ff16905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461089b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089290611a05565b60405180910390fd5b6108a3611312565b565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600480546108da90611c09565b80601f016020809104026020016040519081016040528092919081815260200182805461090690611c09565b80156109535780601f1061092857610100808354040283529160200191610953565b820191906000526020600020905b81548152906001019060200180831161093657829003601f168201915b5050505050905090565b6000806001600061096c610af6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610a29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2090611a45565b60405180910390fd5b610a46610a34610af6565b858584610a419190611b4d565b610afe565b600191505092915050565b6000610a65610a5e610af6565b8484610cc9565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b65906119e5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd590611905565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610cbc9190611aa5565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d30906119c5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610da9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da090611885565b60405180910390fd5b610db48383836113b5565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3190611945565b60405180910390fd5b8181610e469190611b4d565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ed69190611af7565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f3a9190611aa5565b60405180910390a350505050565b610f506107ac565b610f8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f86906118a5565b60405180910390fd5b6000600560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610fd3610af6565b604051610fe0919061182d565b60405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561105a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105190611a65565b60405180910390fd5b611066600083836113b5565b80600260008282546110789190611af7565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110cd9190611af7565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516111329190611aa5565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a5906119a5565b60405180910390fd5b6111ba826000836113b5565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611240576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611237906118c5565b60405180910390fd5b818161124c9190611b4d565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546112a09190611b4d565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113059190611aa5565b60405180910390a3505050565b61131a6107ac565b1561135a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135190611965565b60405180910390fd5b6001600560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861139e610af6565b6040516113ab919061182d565b60405180910390a1565b6113c08383836113c5565b505050565b6113d083838361141d565b6113d86107ac565b15611418576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140f90611a85565b60405180910390fd5b505050565b505050565b60008135905061143181612177565b92915050565b6000813590506114468161218e565b92915050565b60006020828403121561145e57600080fd5b600061146c84828501611422565b91505092915050565b6000806040838503121561148857600080fd5b600061149685828601611422565b92505060206114a785828601611422565b9150509250929050565b6000806000606084860312156114c657600080fd5b60006114d486828701611422565b93505060206114e586828701611422565b92505060406114f686828701611437565b9150509250925092565b6000806040838503121561151357600080fd5b600061152185828601611422565b925050602061153285828601611437565b9150509250929050565b60006020828403121561154e57600080fd5b600061155c84828501611437565b91505092915050565b61156e81611b81565b82525050565b61157d81611b93565b82525050565b600061158e82611adb565b6115988185611ae6565b93506115a8818560208601611bd6565b6115b181611c99565b840191505092915050565b60006115c9602383611ae6565b91506115d482611caa565b604082019050919050565b60006115ec601483611ae6565b91506115f782611cf9565b602082019050919050565b600061160f602283611ae6565b915061161a82611d22565b604082019050919050565b6000611632603983611ae6565b915061163d82611d71565b604082019050919050565b6000611655602283611ae6565b915061166082611dc0565b604082019050919050565b6000611678602983611ae6565b915061168382611e0f565b604082019050919050565b600061169b602683611ae6565b91506116a682611e5e565b604082019050919050565b60006116be601083611ae6565b91506116c982611ead565b602082019050919050565b60006116e1602883611ae6565b91506116ec82611ed6565b604082019050919050565b6000611704602183611ae6565b915061170f82611f25565b604082019050919050565b6000611727602583611ae6565b915061173282611f74565b604082019050919050565b600061174a602483611ae6565b915061175582611fc3565b604082019050919050565b600061176d603783611ae6565b915061177882612012565b604082019050919050565b6000611790602983611ae6565b915061179b82612061565b604082019050919050565b60006117b3602583611ae6565b91506117be826120b0565b604082019050919050565b60006117d6601f83611ae6565b91506117e1826120ff565b602082019050919050565b60006117f9602a83611ae6565b915061180482612128565b604082019050919050565b61181881611bbf565b82525050565b61182781611bc9565b82525050565b60006020820190506118426000830184611565565b92915050565b600060208201905061185d6000830184611574565b92915050565b6000602082019050818103600083015261187d8184611583565b905092915050565b6000602082019050818103600083015261189e816115bc565b9050919050565b600060208201905081810360008301526118be816115df565b9050919050565b600060208201905081810360008301526118de81611602565b9050919050565b600060208201905081810360008301526118fe81611625565b9050919050565b6000602082019050818103600083015261191e81611648565b9050919050565b6000602082019050818103600083015261193e8161166b565b9050919050565b6000602082019050818103600083015261195e8161168e565b9050919050565b6000602082019050818103600083015261197e816116b1565b9050919050565b6000602082019050818103600083015261199e816116d4565b9050919050565b600060208201905081810360008301526119be816116f7565b9050919050565b600060208201905081810360008301526119de8161171a565b9050919050565b600060208201905081810360008301526119fe8161173d565b9050919050565b60006020820190508181036000830152611a1e81611760565b9050919050565b60006020820190508181036000830152611a3e81611783565b9050919050565b60006020820190508181036000830152611a5e816117a6565b9050919050565b60006020820190508181036000830152611a7e816117c9565b9050919050565b60006020820190508181036000830152611a9e816117ec565b9050919050565b6000602082019050611aba600083018461180f565b92915050565b6000602082019050611ad5600083018461181e565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611b0282611bbf565b9150611b0d83611bbf565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611b4257611b41611c3b565b5b828201905092915050565b6000611b5882611bbf565b9150611b6383611bbf565b925082821015611b7657611b75611c3b565b5b828203905092915050565b6000611b8c82611b9f565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611bf4578082015181840152602081019050611bd9565b83811115611c03576000848401525b50505050565b60006002820490506001821680611c2157607f821691505b60208210811415611c3557611c34611c6a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332305072657365744d696e7465725061757365723a206d75737420686160008201527f76652070617573657220726f6c6520746f20756e706175736500000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f46756e642053686172653a206d7573742068617665206d696e74657220726f6c60008201527f6520746f206d696e740000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332305072657365744d696e7465725061757365723a206d75737420686160008201527f76652070617573657220726f6c6520746f207061757365000000000000000000602082015250565b7f46756e642053686172653a206d7573742068617665206275726e657220726f6c60008201527f6520746f206d696e740000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b7f45524332305061757361626c653a20746f6b656e207472616e7366657220776860008201527f696c652070617573656400000000000000000000000000000000000000000000602082015250565b61218081611b81565b811461218b57600080fd5b50565b61219781611bbf565b81146121a257600080fd5b5056fea26469706673582212209a6059c365a382c0fde0e963b1c65de3bd2ab41d2b3a856fba8158c03fe25c7d64736f6c63430008010033",
    daiTokenAddress: "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa"
}