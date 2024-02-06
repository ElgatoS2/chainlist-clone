export const chain = [
	{
		imgUrl: "https://cryptologos.cc/logos/belacoin-bela-logo.svg?v=029",
		id: 787,
		name: "Acala",
		network: "acala",
		nativeCurrency: {
			name: "Acala",
			symbol: "ACA",
			decimals: 18,
		},
		rpcUrls: {
			public: {
				http: ["https://eth-rpc-acala.aca-api.network"],
				webSocket: ["wss://eth-rpc-acala.aca-api.network"],
			},
			default: {
				http: ["https://eth-rpc-acala.aca-api.network"],
				webSocket: ["wss://eth-rpc-acala.aca-api.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Acala Blockscout",
				url: "https://blockscout.acala.network",
				apiUrl: "https://blockscout.acala.network/api",
			},
		},
		testnet: false,
	},
	{
		imgUrl: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029",
		id: 42161,
		name: "Arbitrum One",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://arb1.arbitrum.io/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Arbiscan",
				url: "https://arbiscan.io",
				apiUrl: "https://api.arbiscan.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 7654707,
			},
		},
	},
	{
		imgUrl: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029",
		id: 421613,
		name: "Arbitrum Goerli",
		nativeCurrency: {
			name: "Arbitrum Goerli Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://goerli-rollup.arbitrum.io/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Arbiscan",
				url: "https://goerli.arbiscan.io",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 88114,
			},
		},
		testnet: true,
	},
	{
		imgUrl: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029",
		id: 42170,
		name: "Arbitrum Nova",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://nova.arbitrum.io/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Arbiscan",
				url: "https://nova.arbiscan.io",
				apiUrl: "https://api-nova.arbiscan.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 1746963,
			},
		},
	},
	{
		imgUrl: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=029",
		id: 421614,
		name: "Arbitrum Sepolia",
		nativeCurrency: {
			name: "Arbitrum Sepolia Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://sepolia-rollup.arbitrum.io/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Arbiscan",
				url: "https://sepolia.arbiscan.io",
				apiUrl: "https://sepolia.arbiscan.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 81930,
			},
		},
		testnet: true,
	},
	{
		imgUrl: "https://cryptologos.cc/logos/astar-astr-logo.svg?v=029",
		id: 592,
		name: "Astar",
		network: "astar-mainnet",
		nativeCurrency: {
			name: "Astar",
			symbol: "ASTR",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://astar.api.onfinality.io/public"],
			},
		},
		blockExplorers: {
			default: {
				name: "Astar Subscan",
				url: "https://astar.subscan.io",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 761794,
			},
		},
		testnet: false,
	},
	{
		imgUrl: "https://cryptologos.cc/logos/astar-astr-logo.svg?v=029",
		id: 1261120,
		name: "Astar zkEVM Testnet zKatana",
		network: "zKatana",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: [
					"https://rpc.zkatana.gelato.digital",
					"https://rpc.startale.com/zkatana",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "zKatana Explorer",
				url: "https://zkatana.explorer.startale.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 31317,
			},
		},
		testnet: true,
	},
	{
		imgUrl: "https://cryptologos.cc/logos/aurora-aoa-logo.svg?v=029",
		id: 1313161554,
		name: "Aurora",
		nativeCurrency: {
			decimals: 18,
			name: "Ether",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.aurora.dev"],
			},
		},
		blockExplorers: {
			default: {
				name: "Aurorascan",
				url: "https://aurorascan.dev",
				apiUrl: "https://aurorascan.dev/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 62907816,
			},
		},
	},
	{
		imgUrl: "https://cryptologos.cc/logos/aurora-aoa-logo.svg?v=029",
		id: 1313161555,
		name: "Aurora Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Ether",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["https://testnet.aurora.dev"],
			},
		},
		blockExplorers: {
			default: {
				name: "Aurorascan",
				url: "https://testnet.aurorascan.dev",
				apiUrl: "https://testnet.aurorascan.dev/api",
			},
		},
		testnet: true,
	},
	{
		imgUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=029",
		id: 43114,
		name: "Avalanche",
		nativeCurrency: {
			decimals: 18,
			name: "Avalanche",
			symbol: "AVAX",
		},
		rpcUrls: {
			default: {
				http: ["https://api.avax.network/ext/bc/C/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "SnowTrace",
				url: "https://snowtrace.io",
				apiUrl: "https://api.snowtrace.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 11907934,
			},
		},
	},
	{
		imgUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=029",
		id: 43113,
		name: "Avalanche Fuji",
		nativeCurrency: {
			decimals: 18,
			name: "Avalanche Fuji",
			symbol: "AVAX",
		},
		rpcUrls: {
			default: {
				http: ["https://api.avax-test.network/ext/bc/C/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "SnowTrace",
				url: "https://testnet.snowtrace.io",
				apiUrl: "https://api-testnet.snowtrace.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 7096959,
			},
		},
		testnet: true,
	},
	{
		imgUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=029",
		id: 5165,
		network: "bahamut",
		name: "Bahamut",
		nativeCurrency: {
			name: "Fasttoken",
			symbol: "FTN",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: [
					"https://rpc1.bahamut.io",
					"https://bahamut.publicnode.com",
					"https://rpc2.bahamut.io",
				],
				webSocket: [
					"wss://ws1.sahara.bahamutchain.com",
					"wss://bahamut.publicnode.com",
					"wss://ws2.sahara.bahamutchain.com",
				],
			},
			public: {
				http: [
					"https://rpc1.bahamut.io",
					"https://bahamut.publicnode.com",
					"https://rpc2.bahamut.io",
				],
				webSocket: [
					"wss://ws1.sahara.bahamutchain.com",
					"wss://bahamut.publicnode.com",
					"wss://ws2.sahara.bahamutchain.com",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "Ftnscan",
				url: "https://www.ftnscan.com",
				apiUrl: "https://www.ftnscan.com/api",
			},
		},
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		serializers: {},
		contracts: {
			gasPriceOracle: {
				address: "0x420000000000000000000000000000000000000F",
			},
			l1Block: {
				address: "0x4200000000000000000000000000000000000015",
			},
			l2CrossDomainMessenger: {
				address: "0x4200000000000000000000000000000000000007",
			},
			l2Erc721Bridge: {
				address: "0x4200000000000000000000000000000000000014",
			},
			l2StandardBridge: {
				address: "0x4200000000000000000000000000000000000010",
			},
			l2ToL1MessagePasser: {
				address: "0x4200000000000000000000000000000000000016",
			},
			l2OutputOracle: {
				"1": {
					address: "0x56315b90c40730925ec5485cf004d835058518A0",
				},
			},
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 5022,
			},
			portal: {
				"1": {
					address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
					blockCreated: 17482143,
				},
			},
		},
		id: 8453,
		name: "Base",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.base.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Basescan",
				url: "https://basescan.org",
				apiUrl: "https://api.basescan.org/api",
			},
		},
		sourceId: 1,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		serializers: {},
		contracts: {
			gasPriceOracle: {
				address: "0x420000000000000000000000000000000000000F",
			},
			l1Block: {
				address: "0x4200000000000000000000000000000000000015",
			},
			l2CrossDomainMessenger: {
				address: "0x4200000000000000000000000000000000000007",
			},
			l2Erc721Bridge: {
				address: "0x4200000000000000000000000000000000000014",
			},
			l2StandardBridge: {
				address: "0x4200000000000000000000000000000000000010",
			},
			l2ToL1MessagePasser: {
				address: "0x4200000000000000000000000000000000000016",
			},
			l2OutputOracle: {
				"5": {
					address: "0x2A35891ff30313CcFa6CE88dcf3858bb075A2298",
				},
			},
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 1376988,
			},
			portal: {
				"5": {
					address: "0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA",
				},
			},
		},
		id: 84531,
		name: "Base Goerli",
		nativeCurrency: {
			name: "Goerli Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://goerli.base.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Basescan",
				url: "https://goerli.basescan.org",
				apiUrl: "https://goerli.basescan.org/api",
			},
		},
		testnet: true,
		sourceId: 5,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		serializers: {},
		contracts: {
			gasPriceOracle: {
				address: "0x420000000000000000000000000000000000000F",
			},
			l1Block: {
				address: "0x4200000000000000000000000000000000000015",
			},
			l2CrossDomainMessenger: {
				address: "0x4200000000000000000000000000000000000007",
			},
			l2Erc721Bridge: {
				address: "0x4200000000000000000000000000000000000014",
			},
			l2StandardBridge: {
				address: "0x4200000000000000000000000000000000000010",
			},
			l2ToL1MessagePasser: {
				address: "0x4200000000000000000000000000000000000016",
			},
			l2OutputOracle: {
				"11155111": {
					address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254",
				},
			},
			portal: {
				"11155111": {
					address: "0x49f53e41452c74589e85ca1677426ba426459e85",
					blockCreated: 4446677,
				},
			},
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 1059647,
			},
		},
		id: 84532,
		network: "base-sepolia",
		name: "Base Sepolia",
		nativeCurrency: {
			name: "Sepolia Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://sepolia.base.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Basescan",
				url: "https://sepolia.basescan.org",
				apiUrl: "https://api-sepolia.basescan.org/api",
			},
		},
		testnet: true,
		sourceId: 11155111,
	},
	{
		imgUrl: "https://cryptologos.cc/logos/library-credits-lbc-logo.svg?v=029",
		id: 641230,
		name: "Bear Network Chain Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "BearNetworkChain",
			symbol: "BRNKC",
		},
		rpcUrls: {
			default: {
				http: ["https://brnkc-mainnet.bearnetwork.net"],
			},
		},
		blockExplorers: {
			default: {
				name: "BrnkScan",
				url: "https://brnkscan.bearnetwork.net",
				apiUrl: "https://brnkscan.bearnetwork.net/api",
			},
		},
	},
	{
		id: 751230,
		name: "Bear Network Chain Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "tBRNKC",
			symbol: "tBRNKC",
		},
		rpcUrls: {
			default: {
				http: ["https://brnkc-test.bearnetwork.net"],
			},
		},
		blockExplorers: {
			default: {
				name: "BrnkTestScan",
				url: "https://brnktest-scan.bearnetwork.net",
				apiUrl: "https://brnktest-scan.bearnetwork.net/api",
			},
		},
		testnet: true,
	},
	{
		id: 199,
		name: "BitTorrent",
		network: "bittorrent-chain-mainnet",
		nativeCurrency: {
			name: "BitTorrent",
			symbol: "BTT",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.bittorrentchain.io"],
			},
			public: {
				http: ["https://rpc.bittorrentchain.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Bttcscan",
				url: "https://bttcscan.com",
				apiUrl: "https://api.bttcscan.com/api",
			},
		},
	},
	{
		id: 1028,
		name: "BitTorrent Chain Testnet",
		network: "bittorrent-chain-testnet",
		nativeCurrency: {
			name: "BitTorrent",
			symbol: "BTT",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://testrpc.bittorrentchain.io"],
			},
			public: {
				http: ["https://testrpc.bittorrentchain.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Bttcscan",
				url: "https://testnet.bttcscan.com",
				apiUrl: "https://testnet.bttcscan.com/api",
			},
		},
		testnet: true,
	},
	{
		id: 168587773,
		name: "Blast Sepolia",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://sepolia.blast.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blastscan",
				url: "https://testnet.blastscan.io",
			},
		},
		testnet: true,
	},
	{
		id: 288,
		name: "Boba Network",
		nativeCurrency: {
			decimals: 18,
			name: "Boba",
			symbol: "BOBA",
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.boba.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "BOBAScan",
				url: "https://bobascan.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 446859,
			},
		},
	},
	{
		id: 1039,
		name: "Bronos",
		nativeCurrency: {
			decimals: 18,
			name: "BRO",
			symbol: "BRO",
		},
		rpcUrls: {
			default: {
				http: ["https://evm.bronos.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "BronoScan",
				url: "https://broscan.bronos.org",
			},
		},
	},
	{
		id: 1038,
		name: "Bronos Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Bronos Coin",
			symbol: "tBRO",
		},
		rpcUrls: {
			default: {
				http: ["https://evm-testnet.bronos.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "BronoScan",
				url: "https://tbroscan.bronos.org",
			},
		},
		testnet: true,
	},
	{
		id: 56,
		name: "BNB Smart Chain",
		nativeCurrency: {
			decimals: 18,
			name: "BNB",
			symbol: "BNB",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.ankr.com/bsc"],
			},
		},
		blockExplorers: {
			default: {
				name: "BscScan",
				url: "https://bscscan.com",
				apiUrl: "https://api.bscscan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 15921452,
			},
		},
	},
	{
		id: 97,
		name: "Binance Smart Chain Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "BNB",
			symbol: "tBNB",
		},
		rpcUrls: {
			default: {
				http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
			},
		},
		blockExplorers: {
			default: {
				name: "BscScan",
				url: "https://testnet.bscscan.com",
				apiUrl: "https://testnet.bscscan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 17422483,
			},
		},
		testnet: true,
	},
	{
		id: 4999,
		name: "BlackFort Exchange Network",
		nativeCurrency: {
			name: "BlackFort Token",
			symbol: "BXN",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.blackfort.network/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blockscout",
				url: "https://explorer.blackfort.network",
				apiUrl: "https://explorer.blackfort.network/api",
			},
		},
	},
	{
		id: 4777,
		name: "BlackFort Exchange Network Testnet",
		nativeCurrency: {
			name: "BlackFort Testnet Token",
			symbol: "TBXN",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://testnet.blackfort.network/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blockscout",
				url: "https://testnet-explorer.blackfort.network",
				apiUrl: "https://testnet-explorer.blackfort.network/api",
			},
		},
	},
	{
		id: 7700,
		name: "Canto",
		nativeCurrency: {
			decimals: 18,
			name: "Canto",
			symbol: "CANTO",
		},
		rpcUrls: {
			default: {
				http: ["https://canto.gravitychain.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Tuber.Build (Blockscout)",
				url: "https://tuber.build",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 2905789,
			},
		},
	},
	{
		formatters: {
			block: {
				exclude: ["difficulty", "gasLimit", "mixHash", "nonce", "uncles"],
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionRequest: {
				type: "transactionRequest",
			},
		},
		serializers: {},
		id: 42220,
		name: "Celo",
		nativeCurrency: {
			decimals: 18,
			name: "CELO",
			symbol: "CELO",
		},
		rpcUrls: {
			default: {
				http: ["https://forno.celo.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Celo Explorer",
				url: "https://explorer.celo.org/mainnet",
				apiUrl: "https://explorer.celo.org/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 13112599,
			},
		},
		testnet: false,
	},
	{
		formatters: {
			block: {
				exclude: ["difficulty", "gasLimit", "mixHash", "nonce", "uncles"],
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionRequest: {
				type: "transactionRequest",
			},
		},
		serializers: {},
		id: 44787,
		name: "Alfajores",
		nativeCurrency: {
			decimals: 18,
			name: "CELO",
			symbol: "A-CELO",
		},
		rpcUrls: {
			default: {
				http: ["https://alfajores-forno.celo-testnet.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Celo Explorer",
				url: "https://explorer.celo.org/alfajores",
				apiUrl: "https://explorer.celo.org/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 14569001,
			},
		},
		testnet: true,
	},
	{
		id: 88888,
		name: "Chiliz Chain",
		network: "chiliz-chain",
		nativeCurrency: {
			decimals: 18,
			name: "CHZ",
			symbol: "CHZ",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.ankr.com/chiliz", "https://chiliz.publicnode.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "Chiliz Explorer",
				url: "https://scan.chiliz.com",
				apiUrl: "https://scan.chiliz.com/api",
			},
		},
	},
	{
		id: 61,
		name: "Ethereum Classic",
		nativeCurrency: {
			decimals: 18,
			name: "ETC",
			symbol: "ETC",
		},
		rpcUrls: {
			default: {
				http: ["https://etc.rivet.link"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blockscout",
				url: "https://blockscout.com/etc/mainnet",
			},
		},
	},
	{
		id: 1030,
		name: "Conflux eSpace",
		nativeCurrency: {
			name: "Conflux",
			symbol: "CFX",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://evm.confluxrpc.org"],
				webSocket: ["wss://evm.confluxrpc.org/ws"],
			},
		},
		blockExplorers: {
			default: {
				name: "ConfluxScan",
				url: "https://evm.confluxscan.io",
			},
		},
		contracts: {
			multicall3: {
				address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
				blockCreated: 68602935,
			},
		},
	},
	{
		id: 71,
		name: "Conflux eSpace Testnet",
		network: "cfx-espace-testnet",
		testnet: true,
		nativeCurrency: {
			name: "Conflux",
			symbol: "CFX",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://evmtestnet.confluxrpc.org"],
				webSocket: ["wss://evmtestnet.confluxrpc.org/ws"],
			},
		},
		blockExplorers: {
			default: {
				name: "ConfluxScan",
				url: "https://evmtestnet.confluxscan.io",
			},
		},
		contracts: {
			multicall3: {
				address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
				blockCreated: 117499050,
			},
		},
	},
	{
		id: 1116,
		name: "Core Dao",
		nativeCurrency: {
			decimals: 18,
			name: "Core",
			symbol: "CORE",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.coredao.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "CoreDao",
				url: "https://scan.coredao.org",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 11907934,
			},
		},
		testnet: false,
	},
	{
		id: 25,
		name: "Cronos Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "Cronos",
			symbol: "CRO",
		},
		rpcUrls: {
			default: {
				http: ["https://evm.cronos.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Cronoscan",
				url: "https://cronoscan.com",
				apiUrl: "https://api.cronoscan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 1963112,
			},
		},
	},
	{
		id: 338,
		name: "Cronos Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "CRO",
			symbol: "tCRO",
		},
		rpcUrls: {
			default: {
				http: ["https://evm-t3.cronos.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Cronos Explorer",
				url: "https://cronos.org/explorer/testnet3",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 10191251,
			},
		},
		testnet: true,
	},
	{
		id: 3737,
		name: "Crossbell",
		nativeCurrency: {
			decimals: 18,
			name: "CSB",
			symbol: "CSB",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.crossbell.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "CrossScan",
				url: "https://scan.crossbell.io",
				apiUrl: "https://scan.crossbell.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 38246031,
			},
		},
	},
	{
		id: 1130,
		network: "defichain-evm",
		name: "DeFiChain EVM Mainnet",
		nativeCurrency: {
			name: "DeFiChain",
			symbol: "DFI",
			decimals: 8,
		},
		rpcUrls: {
			default: {
				http: ["https://eth.mainnet.ocean.jellyfishsdk.com"],
			},
			public: {
				http: ["https://eth.mainnet.ocean.jellyfishsdk.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "DeFiScan",
				url: "https://meta.defiscan.live",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 137852,
			},
		},
	},
	{
		id: 1131,
		network: "defichain-evm-testnet",
		name: "DeFiChain EVM Testnet",
		nativeCurrency: {
			name: "DeFiChain",
			symbol: "DFI",
			decimals: 8,
		},
		rpcUrls: {
			default: {
				http: ["https://eth.testnet.ocean.jellyfishsdk.com"],
			},
			public: {
				http: ["https://eth.testnet.ocean.jellyfishsdk.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "DeFiScan",
				url: "https://meta.defiscan.live/?network=TestNet",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 156462,
			},
		},
		testnet: true,
	},
	{
		id: 53935,
		name: "DFK Chain",
		nativeCurrency: {
			decimals: 18,
			name: "Jewel",
			symbol: "JEWEL",
		},
		rpcUrls: {
			default: {
				http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "DFKSubnetScan",
				url: "https://subnets.avax.network/defi-kingdoms",
			},
		},
	},
	{
		id: 2000,
		name: "Dogechain",
		nativeCurrency: {
			decimals: 18,
			name: "Dogechain",
			symbol: "DC",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.dogechain.dog"],
			},
		},
		blockExplorers: {
			default: {
				name: "DogeChainExplorer",
				url: "https://explorer.dogechain.dog",
				apiUrl: "https://explorer.dogechain.dog/api",
			},
		},
	},
	{
		id: 2021,
		name: "Edgeware EdgeEVM Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "Edgeware",
			symbol: "EDG",
		},
		rpcUrls: {
			default: {
				http: ["https://edgeware-evm.jelliedowl.net"],
			},
		},
		blockExplorers: {
			default: {
				name: "Edgscan by Bharathcoorg",
				url: "https://edgscan.live",
				apiUrl: "https://edgscan.live/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 18117872,
			},
		},
	},
	{
		id: 2022,
		name: "Beresheet BereEVM Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Testnet EDG",
			symbol: "tEDG",
		},
		rpcUrls: {
			default: {
				http: ["https://beresheet-evm.jelliedowl.net"],
			},
		},
		blockExplorers: {
			default: {
				name: "Edgscan by Bharathcoorg",
				url: "https://testnet.edgscan.live",
				apiUrl: "https://testnet.edgscan.live/api",
			},
		},
	},
	{
		id: 1994,
		name: "Ekta",
		nativeCurrency: {
			decimals: 18,
			name: "EKTA",
			symbol: "EKTA",
		},
		rpcUrls: {
			default: {
				http: ["https://main.ekta.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Ektascan",
				url: "https://ektascan.io",
				apiUrl: "https://ektascan.io/api",
			},
		},
	},
	{
		id: 1004,
		name: "Ekta Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "EKTA",
			symbol: "EKTA",
		},
		rpcUrls: {
			default: {
				http: ["https://test.ekta.io:8545"],
			},
		},
		blockExplorers: {
			default: {
				name: "Test Ektascan",
				url: "https://test.ektascan.io",
				apiUrl: "https://test.ektascan.io/api",
			},
		},
		testnet: true,
	},
	{
		id: 17777,
		name: "EOS EVM",
		nativeCurrency: {
			decimals: 18,
			name: "EOS",
			symbol: "EOS",
		},
		rpcUrls: {
			default: {
				http: ["https://api.evm.eosnetwork.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "EOS EVM Explorer",
				url: "https://explorer.evm.eosnetwork.com",
				apiUrl: "https://explorer.evm.eosnetwork.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 7943933,
			},
		},
	},
	{
		id: 15557,
		name: "EOS EVM Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "EOS",
			symbol: "EOS",
		},
		rpcUrls: {
			default: {
				http: ["https://api.testnet.evm.eosnetwork.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "EOS EVM Testnet Explorer",
				url: "https://explorer.testnet.evm.eosnetwork.com",
				apiUrl: "https://explorer.testnet.evm.eosnetwork.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 9067940,
			},
		},
		testnet: true,
	},
	{
		id: 9001,
		name: "Evmos",
		nativeCurrency: {
			decimals: 18,
			name: "Evmos",
			symbol: "EVMOS",
		},
		rpcUrls: {
			default: {
				http: ["https://eth.bd.evmos.org:8545"],
			},
		},
		blockExplorers: {
			default: {
				name: "Evmos Block Explorer",
				url: "https://escan.live",
			},
		},
	},
	{
		id: 9000,
		name: "Evmos Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Evmos",
			symbol: "EVMOS",
		},
		rpcUrls: {
			default: {
				http: ["https://eth.bd.evmos.dev:8545"],
			},
		},
		blockExplorers: {
			default: {
				name: "Evmos Testnet Block Explorer",
				url: "https://evm.evmos.dev/",
			},
		},
	},
	{
		id: 250,
		name: "Fantom",
		nativeCurrency: {
			decimals: 18,
			name: "Fantom",
			symbol: "FTM",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.ankr.com/fantom"],
			},
		},
		blockExplorers: {
			default: {
				name: "FTMScan",
				url: "https://ftmscan.com",
				apiUrl: "https://api.ftmscan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 33001987,
			},
		},
	},
	{
		id: 64240,
		name: "Fantom Sonic Open Testnet",
		network: "fantom-sonic-testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Fantom",
			symbol: "FTM",
		},
		rpcUrls: {
			default: {
				http: ["https://rpcapi.sonic.fantom.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Fantom Sonic Open Testnet Explorer",
				url: "https://public-sonic.fantom.network",
			},
		},
		testnet: true,
	},
	{
		id: 4002,
		name: "Fantom Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Fantom",
			symbol: "FTM",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.testnet.fantom.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "FTMScan",
				url: "https://testnet.ftmscan.com",
				apiUrl: "https://testnet.ftmscan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 8328688,
			},
		},
	},
	{
		id: 12306,
		name: "Fibo Chain",
		nativeCurrency: {
			decimals: 18,
			name: "fibo",
			symbol: "FIBO",
		},
		rpcUrls: {
			default: {
				http: ["https://network.hzroc.art"],
			},
		},
		blockExplorers: {
			default: {
				name: "FiboScan",
				url: "https://scan.fibochain.org",
			},
		},
	},
	{
		id: 314,
		name: "Filecoin Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "filecoin",
			symbol: "FIL",
		},
		rpcUrls: {
			default: {
				http: ["https://api.node.glif.io/rpc/v1"],
			},
		},
		blockExplorers: {
			default: {
				name: "Filfox",
				url: "https://filfox.info/en",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 3328594,
			},
		},
	},
	{
		id: 314159,
		name: "Filecoin Calibration",
		nativeCurrency: {
			decimals: 18,
			name: "testnet filecoin",
			symbol: "tFIL",
		},
		rpcUrls: {
			default: {
				http: ["https://api.calibration.node.glif.io/rpc/v1"],
			},
		},
		blockExplorers: {
			default: {
				name: "Filscan",
				url: "https://calibration.filscan.io",
			},
		},
	},
	{
		id: 3141,
		name: "Filecoin Hyperspace",
		nativeCurrency: {
			decimals: 18,
			name: "testnet filecoin",
			symbol: "tFIL",
		},
		rpcUrls: {
			default: {
				http: ["https://api.hyperspace.node.glif.io/rpc/v1"],
			},
		},
		blockExplorers: {
			default: {
				name: "Filfox",
				url: "https://hyperspace.filfox.info/en",
			},
		},
	},
	{
		id: 14,
		name: "Flare Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "flare",
			symbol: "FLR",
		},
		rpcUrls: {
			default: {
				http: ["https://flare-api.flare.network/ext/C/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Flare Explorer",
				url: "https://flare-explorer.flare.network",
				apiUrl: "https://flare-explorer.flare.network/api",
			},
		},
	},
	{
		id: 114,
		name: "Coston2",
		nativeCurrency: {
			decimals: 18,
			name: "coston2flare",
			symbol: "C2FLR",
		},
		rpcUrls: {
			default: {
				http: ["https://coston2-api.flare.network/ext/C/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Coston2 Explorer",
				url: "https://coston2-explorer.flare.network",
				apiUrl: "https://coston2-explorer.flare.network/api",
			},
		},
		testnet: true,
	},
	{
		id: 31337,
		name: "Foundry",
		nativeCurrency: {
			decimals: 18,
			name: "Ether",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["http://127.0.0.1:8545"],
				webSocket: ["ws://127.0.0.1:8545"],
			},
		},
	},
	{
		id: 122,
		name: "Fuse",
		nativeCurrency: {
			name: "Fuse",
			symbol: "FUSE",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.fuse.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Fuse Explorer",
				url: "https://explorer.fuse.io",
				apiUrl: "https://explorer.fuse.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 16146628,
			},
		},
	},
	{
		id: 123,
		name: "Fuse Sparknet",
		nativeCurrency: {
			name: "Spark",
			symbol: "SPARK",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.fusespark.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Sparkent Explorer",
				url: "https://explorer.fusespark.io",
				apiUrl: "https://explorer.fusespark.io/api",
			},
		},
	},
	{
		id: 100,
		name: "Gnosis",
		nativeCurrency: {
			decimals: 18,
			name: "Gnosis",
			symbol: "xDAI",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.gnosischain.com"],
				webSocket: ["wss://rpc.gnosischain.com/wss"],
			},
		},
		blockExplorers: {
			default: {
				name: "Gnosisscan",
				url: "https://gnosisscan.io",
				apiUrl: "https://api.gnosisscan.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 21022491,
			},
		},
	},
	{
		id: 10200,
		name: "Gnosis Chiado",
		nativeCurrency: {
			decimals: 18,
			name: "Gnosis",
			symbol: "xDAI",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.chiadochain.net"],
				webSocket: ["wss://rpc.chiadochain.net/wss"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blockscout",
				url: "https://blockscout.chiadochain.net",
				apiUrl: "https://blockscout.chiadochain.net/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 4967313,
			},
		},
		testnet: true,
	},
	{
		id: 1663,
		name: "Horizen Gobi Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Test ZEN",
			symbol: "tZEN",
		},
		rpcUrls: {
			default: {
				http: ["https://gobi-testnet.horizenlabs.io/ethv1"],
			},
		},
		blockExplorers: {
			default: {
				name: "Gobi Explorer",
				url: "https://gobi-explorer.horizen.io",
			},
		},
		contracts: {},
		testnet: true,
	},
	{
		id: 5,
		name: "Goerli",
		nativeCurrency: {
			name: "Goerli Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.ankr.com/eth_goerli"],
			},
		},
		blockExplorers: {
			default: {
				name: "Etherscan",
				url: "https://goerli.etherscan.io",
				apiUrl: "https://api-goerli.etherscan.io/api",
			},
		},
		contracts: {
			ensRegistry: {
				address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
			},
			ensUniversalResolver: {
				address: "0xfc4AC75C46C914aF5892d6d3eFFcebD7917293F1",
				blockCreated: 10339206,
			},
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 6507670,
			},
		},
		testnet: true,
	},
	{
		id: 11235,
		name: "HAQQ Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "Islamic Coin",
			symbol: "ISLM",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.eth.haqq.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "HAQQ Explorer",
				url: "https://explorer.haqq.network",
				apiUrl: "https://explorer.haqq.network/api",
			},
		},
	},
	{
		id: 54211,
		name: "HAQQ Testedge 2",
		nativeCurrency: {
			decimals: 18,
			name: "Islamic Coin",
			symbol: "ISLMT",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.eth.testedge2.haqq.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "HAQQ Explorer",
				url: "https://explorer.testedge2.haqq.network",
				apiUrl: "https://explorer.testedge2.haqq.network/api",
			},
		},
	},
	{
		id: 31337,
		name: "Hardhat",
		nativeCurrency: {
			decimals: 18,
			name: "Ether",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["http://127.0.0.1:8545"],
			},
		},
	},
	{
		id: 1666600000,
		name: "Harmony One",
		nativeCurrency: {
			name: "Harmony",
			symbol: "ONE",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.ankr.com/harmony"],
			},
		},
		blockExplorers: {
			default: {
				name: "Harmony Explorer",
				url: "https://explorer.harmony.one",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 24185753,
			},
		},
	},
	{
		id: 17000,
		name: "Holesky",
		nativeCurrency: {
			name: "Holesky Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://ethereum-holesky.publicnode.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "Etherscan",
				url: "https://holesky.etherscan.io",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 77,
			},
		},
		testnet: true,
	},
	{
		id: 4689,
		name: "IoTeX",
		nativeCurrency: {
			decimals: 18,
			name: "IoTeX",
			symbol: "IOTX",
		},
		rpcUrls: {
			default: {
				http: ["https://babel-api.mainnet.iotex.io"],
				webSocket: ["wss://babel-api.mainnet.iotex.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "IoTeXScan",
				url: "https://iotexscan.io",
			},
		},
	},
	{
		id: 4690,
		name: "IoTeX Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "IoTeX",
			symbol: "IOTX",
		},
		rpcUrls: {
			default: {
				http: ["https://babel-api.testnet.iotex.io"],
				webSocket: ["wss://babel-api.testnet.iotex.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "IoTeXScan",
				url: "https://testnet.iotexscan.io",
			},
		},
	},
	{
		id: 8899,
		name: "JIBCHAIN L1",
		network: "jbc",
		nativeCurrency: {
			name: "JBC",
			symbol: "JBC",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc-l1.jibchain.net"],
			},
			public: {
				http: ["https://rpc-l1.jibchain.net"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blockscout",
				url: "https://exp-l1.jibchain.net",
				apiUrl: "https://exp-l1.jibchain.net/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xc0C8C486D1466C57Efe13C2bf000d4c56F47CBdC",
				blockCreated: 2299048,
			},
		},
		testnet: false,
	},
	{
		id: 686,
		name: "Karura",
		network: "karura",
		nativeCurrency: {
			name: "Karura",
			symbol: "KAR",
			decimals: 18,
		},
		rpcUrls: {
			public: {
				http: ["https://eth-rpc-karura.aca-api.network"],
				webSocket: ["wss://eth-rpc-karura.aca-api.network"],
			},
			default: {
				http: ["https://eth-rpc-karura.aca-api.network"],
				webSocket: ["wss://eth-rpc-karura.aca-api.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Karura Blockscout",
				url: "https://blockscout.karura.network",
				apiUrl: "https://blockscout.karura.network/api",
			},
		},
		testnet: false,
	},
	{
		id: 2222,
		name: "Kava EVM",
		network: "kava-mainnet",
		nativeCurrency: {
			name: "Kava",
			symbol: "KAVA",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://evm.kava.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Kava EVM Explorer",
				url: "https://kavascan.com",
				apiUrl: "https://kavascan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 3661165,
			},
		},
		testnet: false,
	},
	{
		id: 2221,
		name: "Kava EVM Testnet",
		network: "kava-testnet",
		nativeCurrency: {
			name: "Kava",
			symbol: "KAVA",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://evm.testnet.kava.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Kava EVM Testnet Explorer",
				url: "https://testnet.kavascan.com/",
				apiUrl: "https://testnet.kavascan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6",
				blockCreated: 7242179,
			},
		},
		testnet: true,
	},
	{
		id: 8217,
		name: "Klaytn",
		nativeCurrency: {
			decimals: 18,
			name: "Klaytn",
			symbol: "KLAY",
		},
		rpcUrls: {
			default: {
				http: ["https://public-en-cypress.klaytn.net"],
			},
		},
		blockExplorers: {
			default: {
				name: "KlaytnScope",
				url: "https://scope.klaytn.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 96002415,
			},
		},
	},
	{
		id: 1001,
		name: "Klaytn Baobab Testnet",
		network: "klaytn-baobab",
		nativeCurrency: {
			decimals: 18,
			name: "Baobab Klaytn",
			symbol: "KLAY",
		},
		rpcUrls: {
			default: {
				http: ["https://public-en-baobab.klaytn.net"],
			},
		},
		blockExplorers: {
			default: {
				name: "KlaytnScope",
				url: "https://baobab.klaytnscope.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 123390593,
			},
		},
		testnet: true,
	},
	{
		id: 255,
		name: "Kroma",
		nativeCurrency: {
			name: "ETH",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://api.kroma.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Kroma Explorer",
				url: "https://blockscout.kroma.network",
				apiUrl: "https://blockscout.kroma.network/api",
			},
		},
		testnet: false,
	},
	{
		id: 2358,
		name: "Kroma Sepolia",
		nativeCurrency: {
			name: "Sepolia Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://api.sepolia.kroma.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Kroma Sepolia Explorer",
				url: "https://blockscout.sepolia.kroma.network",
				apiUrl: "https://blockscout.sepolia.kroma.network/api",
			},
		},
		testnet: true,
	},
	{
		id: 1891,
		name: "LightLink Pegasus Testnet",
		network: "lightlink-pegasus",
		nativeCurrency: {
			decimals: 18,
			name: "Ether",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: [
					"https://replicator-01.pegasus.lightlink.io/rpc/v1",
					"https://replicator-02.pegasus.lightlink.io/rpc/v1",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "LightLink Pegasus Explorer",
				url: "https://pegasus.lightlink.io",
			},
		},
		testnet: true,
	},
	{
		id: 1890,
		name: "LightLink Phoenix",
		network: "lightlink-phoenix",
		nativeCurrency: {
			decimals: 18,
			name: "Ether",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: [
					"https://replicator-01.phoenix.lightlink.io/rpc/v1",
					"https://replicator-02.phoenix.lightlink.io/rpc/v1",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "LightLink Phoenix Explorer",
				url: "https://phoenix.lightlink.io",
			},
		},
		testnet: false,
	},
	{
		id: 59144,
		name: "Linea Mainnet",
		nativeCurrency: {
			name: "Linea Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.linea.build"],
				webSocket: ["wss://rpc.linea.build"],
			},
		},
		blockExplorers: {
			default: {
				name: "Etherscan",
				url: "https://lineascan.build",
				apiUrl: "https://api.lineascan.build/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 42,
			},
		},
		testnet: false,
	},
	{
		id: 59140,
		name: "Linea Goerli Testnet",
		nativeCurrency: {
			name: "Linea Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.goerli.linea.build"],
				webSocket: ["wss://rpc.goerli.linea.build"],
			},
		},
		blockExplorers: {
			default: {
				name: "Etherscan",
				url: "https://goerli.lineascan.build",
				apiUrl: "https://goerli.lineascan.build/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 498623,
			},
		},
		testnet: true,
	},
	{
		id: 1337,
		name: "Localhost",
		nativeCurrency: {
			decimals: 18,
			name: "Ether",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["http://127.0.0.1:8545"],
			},
		},
	},
	{
		id: 42,
		network: "lukso",
		name: "LUKSO",
		nativeCurrency: {
			name: "LUKSO",
			symbol: "LYX",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.mainnet.lukso.network"],
				webSocket: ["wss://ws-rpc.mainnet.lukso.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "LUKSO Mainnet Explorer",
				url: "https://explorer.execution.mainnet.lukso.network",
				apiUrl: "https://api.explorer.execution.mainnet.lukso.network/api",
			},
		},
	},
	{
		id: 1,
		name: "Ethereum",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://cloudflare-eth.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "Etherscan",
				url: "https://etherscan.io",
				apiUrl: "https://api.etherscan.io/api",
			},
		},
		contracts: {
			ensRegistry: {
				address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
			},
			ensUniversalResolver: {
				address: "0x8cab227b1162f03b8338331adaad7aadc83b895e",
				blockCreated: 18958930,
			},
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 14353601,
			},
		},
	},
	{
		id: 595,
		name: "Mandala TC9",
		network: "mandala",
		nativeCurrency: {
			name: "Mandala",
			symbol: "mACA",
			decimals: 18,
		},
		rpcUrls: {
			public: {
				http: ["https://eth-rpc-tc9.aca-staging.network"],
				webSocket: ["wss://eth-rpc-tc9.aca-staging.network"],
			},
			default: {
				http: ["https://eth-rpc-tc9.aca-staging.network"],
				webSocket: ["wss://eth-rpc-tc9.aca-staging.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Mandala Blockscout",
				url: "https://blockscout.mandala.aca-staging.network",
				apiUrl: "https://blockscout.mandala.aca-staging.network/api",
			},
		},
		testnet: true,
	},
	{
		id: 169,
		name: "Manta Pacific Mainnet",
		network: "manta",
		nativeCurrency: {
			decimals: 18,
			name: "ETH",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["https://pacific-rpc.manta.network/http"],
			},
		},
		blockExplorers: {
			default: {
				name: "Manta Explorer",
				url: "https://pacific-explorer.manta.network",
				apiUrl: "https://pacific-explorer.manta.network/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 332890,
			},
		},
	},
	{
		id: 3441005,
		name: "Manta Pacific Testnet",
		network: "manta-testnet",
		nativeCurrency: {
			decimals: 18,
			name: "ETH",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["https://manta-testnet.calderachain.xyz/http"],
			},
		},
		blockExplorers: {
			default: {
				name: "Manta Testnet Explorer",
				url: "https://pacific-explorer.testnet.manta.network",
				apiUrl: "https://pacific-explorer.testnet.manta.network/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",
				blockCreated: 419915,
			},
		},
		testnet: true,
	},
	{
		id: 5000,
		name: "Mantle",
		nativeCurrency: {
			decimals: 18,
			name: "MNT",
			symbol: "MNT",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.mantle.xyz"],
			},
		},
		blockExplorers: {
			default: {
				name: "Mantle Explorer",
				url: "https://explorer.mantle.xyz",
				apiUrl: "https://explorer.mantle.xyz/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 304717,
			},
		},
	},
	{
		id: 5001,
		name: "Mantle Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "MNT",
			symbol: "MNT",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.testnet.mantle.xyz"],
			},
		},
		blockExplorers: {
			default: {
				name: "Mantle Testnet Explorer",
				url: "https://explorer.testnet.mantle.xyz",
				apiUrl: "https://explorer.testnet.mantle.xyz/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 561333,
			},
		},
		testnet: true,
	},
	{
		id: 571,
		name: "MetaChain Mainnet",
		nativeCurrency: {
			name: "Metatime Coin",
			symbol: "MTC",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.metatime.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "MetaExplorer",
				url: "https://explorer.metatime.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0x0000000000000000000000000000000000003001",
				blockCreated: 0,
			},
		},
	},
	{
		id: 82,
		name: "Meter",
		nativeCurrency: {
			decimals: 18,
			name: "MTR",
			symbol: "MTR",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.meter.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "MeterScan",
				url: "https://scan.meter.io",
			},
		},
	},
	{
		id: 83,
		name: "Meter Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "MTR",
			symbol: "MTR",
		},
		rpcUrls: {
			default: {
				http: ["https://rpctest.meter.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "MeterTestnetScan",
				url: "https://scan-warringstakes.meter.io",
			},
		},
	},
	{
		id: 1088,
		name: "Metis",
		nativeCurrency: {
			decimals: 18,
			name: "Metis",
			symbol: "METIS",
		},
		rpcUrls: {
			default: {
				http: ["https://andromeda.metis.io/?owner=1088"],
			},
		},
		blockExplorers: {
			default: {
				name: "Andromeda Explorer",
				url: "https://andromeda-explorer.metis.io",
				apiUrl: "https://andromeda-explorer.metis.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 2338552,
			},
		},
	},
	{
		id: 599,
		name: "Metis Goerli",
		nativeCurrency: {
			decimals: 18,
			name: "Metis Goerli",
			symbol: "METIS",
		},
		rpcUrls: {
			default: {
				http: ["https://goerli.gateway.metisdevops.link"],
			},
		},
		blockExplorers: {
			default: {
				name: "Metis Goerli Explorer",
				url: "https://goerli.explorer.metisdevops.link",
				apiUrl: "https://goerli.explorer.metisdevops.link/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 1006207,
			},
		},
	},
	{
		id: 7518,
		name: "MEVerse Chain Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "MEVerse",
			symbol: "MEV",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.meversemainnet.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Explorer",
				url: "https://www.meversescan.io",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 86881340,
			},
		},
	},
	{
		id: 4759,
		name: "MEVerse Chain Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "MEVerse",
			symbol: "MEV",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.meversetestnet.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Explorer",
				url: "https://testnet.meversescan.io/",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 64371115,
			},
		},
		testnet: true,
	},
	{
		id: 919,
		name: "Mode Testnet",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://sepolia.mode.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blockscout",
				url: "https://sepolia.explorer.mode.network",
				apiUrl: "https://sepolia.explorer.mode.network/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",
				blockCreated: 3019007,
			},
		},
		testnet: true,
	},
	{
		id: 1287,
		name: "Moonbase Alpha",
		nativeCurrency: {
			decimals: 18,
			name: "DEV",
			symbol: "DEV",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.api.moonbase.moonbeam.network"],
				webSocket: ["wss://wss.api.moonbase.moonbeam.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Moonscan",
				url: "https://moonbase.moonscan.io",
				apiUrl: "https://moonbase.moonscan.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 1850686,
			},
		},
		testnet: true,
	},
	{
		id: 1284,
		name: "Moonbeam",
		nativeCurrency: {
			decimals: 18,
			name: "GLMR",
			symbol: "GLMR",
		},
		rpcUrls: {
			default: {
				http: ["https://moonbeam.public.blastapi.io"],
				webSocket: ["wss://moonbeam.public.blastapi.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Moonscan",
				url: "https://moonscan.io",
				apiUrl: "https://api-moonbeam.moonscan.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 609002,
			},
		},
		testnet: false,
	},
	{
		id: 1281,
		name: "Moonbeam Development Node",
		nativeCurrency: {
			decimals: 18,
			name: "DEV",
			symbol: "DEV",
		},
		rpcUrls: {
			default: {
				http: ["http://127.0.0.1:9944"],
				webSocket: ["wss://127.0.0.1:9944"],
			},
		},
	},
	{
		id: 1285,
		name: "Moonriver",
		nativeCurrency: {
			decimals: 18,
			name: "MOVR",
			symbol: "MOVR",
		},
		rpcUrls: {
			default: {
				http: ["https://moonriver.public.blastapi.io"],
				webSocket: ["wss://moonriver.public.blastapi.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Moonscan",
				url: "https://moonriver.moonscan.io",
				apiUrl: "https://api-moonriver.moonscan.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 1597904,
			},
		},
		testnet: false,
	},
	{
		id: 245022926,
		name: "Neon EVM DevNet",
		nativeCurrency: {
			name: "NEON",
			symbol: "NEON",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://devnet.neonevm.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Neonscan",
				url: "https://devnet.neonscan.org",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 205206112,
			},
		},
		testnet: true,
	},
	{
		id: 245022934,
		network: "neonMainnet",
		name: "Neon EVM MainNet",
		nativeCurrency: {
			name: "NEON",
			symbol: "NEON",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://neon-proxy-mainnet.solana.p2p.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Neonscan",
				url: "https://neonscan.org",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 206545524,
			},
		},
		testnet: false,
	},
	{
		id: 4242,
		name: "Nexi",
		nativeCurrency: {
			name: "Nexi",
			symbol: "NEXI",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.chain.nexi.technology"],
			},
		},
		blockExplorers: {
			default: {
				name: "NexiScan",
				url: "https://www.nexiscan.com",
				apiUrl: "https://www.nexiscan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",
				blockCreated: 25770160,
			},
		},
	},
	{
		id: 240,
		name: "Nexilix Smart Chain",
		nativeCurrency: {
			decimals: 18,
			name: "Nexilix",
			symbol: "NEXILIX",
		},
		rpcUrls: {
			default: {
				http: ["https://rpcurl.pos.nexilix.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "NexilixScan",
				url: "https://scan.nexilix.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244",
				blockCreated: 74448,
			},
		},
	},
	{
		id: 4090,
		network: "oasis-testnet",
		name: "Oasis Testnet",
		nativeCurrency: {
			name: "Fasttoken",
			symbol: "FTN",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc1.oasis.bahamutchain.com"],
			},
			public: {
				http: ["https://rpc1.oasis.bahamutchain.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "Ftnscan",
				url: "https://oasis.ftnscan.com",
				apiUrl: "https://oasis.ftnscan.com/api",
			},
		},
		testnet: true,
	},
	{
		id: 248,
		name: "Oasys",
		nativeCurrency: {
			name: "Oasys",
			symbol: "OAS",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.mainnet.oasys.games"],
			},
		},
		blockExplorers: {
			default: {
				name: "OasysScan",
				url: "https://scan.oasys.games",
				apiUrl: "https://scan.oasys.games/api",
			},
		},
	},
	{
		id: 66,
		name: "OKC",
		nativeCurrency: {
			decimals: 18,
			name: "OKT",
			symbol: "OKT",
		},
		rpcUrls: {
			default: {
				http: ["https://exchainrpc.okex.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "oklink",
				url: "https://www.oklink.com/okc",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 10364792,
			},
		},
	},
	{
		id: 204,
		name: "opBNB",
		nativeCurrency: {
			name: "BNB",
			symbol: "BNB",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://opbnb-mainnet-rpc.bnbchain.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "opbnbscan",
				url: "https://mainnet.opbnbscan.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 512881,
			},
		},
	},
	{
		id: 5611,
		name: "opBNB Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "tBNB",
			symbol: "tBNB",
		},
		rpcUrls: {
			default: {
				http: ["https://opbnb-testnet-rpc.bnbchain.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "opbnbscan",
				url: "https://testnet.opbnbscan.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 3705108,
			},
		},
		testnet: true,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		serializers: {},
		contracts: {
			gasPriceOracle: {
				address: "0x420000000000000000000000000000000000000F",
			},
			l1Block: {
				address: "0x4200000000000000000000000000000000000015",
			},
			l2CrossDomainMessenger: {
				address: "0x4200000000000000000000000000000000000007",
			},
			l2Erc721Bridge: {
				address: "0x4200000000000000000000000000000000000014",
			},
			l2StandardBridge: {
				address: "0x4200000000000000000000000000000000000010",
			},
			l2ToL1MessagePasser: {
				address: "0x4200000000000000000000000000000000000016",
			},
			l2OutputOracle: {
				"1": {
					address: "0xdfe97868233d1aa22e815a266982f2cf17685a27",
				},
			},
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 4286263,
			},
			portal: {
				"1": {
					address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed",
				},
			},
		},
		id: 10,
		name: "OP Mainnet",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.optimism.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Optimism Explorer",
				url: "https://optimistic.etherscan.io",
				apiUrl: "https://api-optimistic.etherscan.io",
			},
		},
		sourceId: 1,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		serializers: {},
		contracts: {
			gasPriceOracle: {
				address: "0x420000000000000000000000000000000000000F",
			},
			l1Block: {
				address: "0x4200000000000000000000000000000000000015",
			},
			l2CrossDomainMessenger: {
				address: "0x4200000000000000000000000000000000000007",
			},
			l2Erc721Bridge: {
				address: "0x4200000000000000000000000000000000000014",
			},
			l2StandardBridge: {
				address: "0x4200000000000000000000000000000000000010",
			},
			l2ToL1MessagePasser: {
				address: "0x4200000000000000000000000000000000000016",
			},
			l2OutputOracle: {
				"5": {
					address: "0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0",
				},
			},
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 49461,
			},
			portal: {
				"5": {
					address: "0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383",
				},
			},
		},
		id: 420,
		name: "Optimism Goerli",
		nativeCurrency: {
			name: "Goerli Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://goerli.optimism.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Etherscan",
				url: "https://goerli-optimism.etherscan.io",
				apiUrl: "https://goerli-optimism.etherscan.io/api",
			},
		},
		testnet: true,
		sourceId: 5,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		serializers: {},
		contracts: {
			gasPriceOracle: {
				address: "0x420000000000000000000000000000000000000F",
			},
			l1Block: {
				address: "0x4200000000000000000000000000000000000015",
			},
			l2CrossDomainMessenger: {
				address: "0x4200000000000000000000000000000000000007",
			},
			l2Erc721Bridge: {
				address: "0x4200000000000000000000000000000000000014",
			},
			l2StandardBridge: {
				address: "0x4200000000000000000000000000000000000010",
			},
			l2ToL1MessagePasser: {
				address: "0x4200000000000000000000000000000000000016",
			},
			l2OutputOracle: {
				"11155111": {
					address: "0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F",
				},
			},
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 1620204,
			},
			portal: {
				"11155111": {
					address: "0x16Fc5058F25648194471939df75CF27A2fdC48BC",
				},
			},
		},
		id: 11155420,
		name: "Optimism Sepolia",
		nativeCurrency: {
			name: "Sepolia Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://sepolia.optimism.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blockscout",
				url: "https://optimism-sepolia.blockscout.com",
				apiUrl: "https://optimism-sepolia.blockscout.com/api",
			},
		},
		testnet: true,
		sourceId: 11155111,
	},
	{
		id: 11297108109,
		name: "Palm",
		nativeCurrency: {
			decimals: 18,
			name: "PALM",
			symbol: "PALM",
		},
		rpcUrls: {
			default: {
				http: ["https://palm-mainnet.public.blastapi.io"],
				webSocket: ["wss://palm-mainnet.public.blastapi.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Chainlens",
				url: "https://palm.chainlens.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 15429248,
			},
		},
	},
	{
		id: 11297108099,
		name: "Palm Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "PALM",
			symbol: "PALM",
		},
		rpcUrls: {
			default: {
				http: ["https://palm-mainnet.public.blastapi.io"],
				webSocket: ["wss://palm-mainnet.public.blastapi.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Chainlens",
				url: "https://palm.chainlens.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 15429248,
			},
		},
		testnet: true,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		id: 424,
		network: "pgn",
		name: "PGN",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.publicgoods.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "PGN Explorer",
				url: "https://explorer.publicgoods.network",
				apiUrl: "https://explorer.publicgoods.network/api",
			},
			blocksout: {
				name: "PGN Explorer",
				url: "https://explorer.publicgoods.network",
				apiUrl: "https://explorer.publicgoods.network/api",
			},
		},
		contracts: {
			l2OutputOracle: {
				"1": {
					address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c",
				},
			},
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 3380209,
			},
			portal: {
				"1": {
					address: "0xb26Fd985c5959bBB382BAFdD0b879E149e48116c",
				},
			},
		},
		sourceId: 1,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		id: 58008,
		network: "pgn-testnet",
		name: "PGN ",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://sepolia.publicgoods.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "PGN Testnet Explorer",
				url: "https://explorer.sepolia.publicgoods.network",
				apiUrl: "https://explorer.sepolia.publicgoods.network/api",
			},
			blocksout: {
				name: "PGN Testnet Explorer",
				url: "https://explorer.sepolia.publicgoods.network",
				apiUrl: "https://explorer.sepolia.publicgoods.network/api",
			},
		},
		contracts: {
			l2OutputOracle: {
				"11155111": {
					address: "0xD5bAc3152ffC25318F848B3DD5dA6C85171BaEEe",
				},
			},
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 3754925,
			},
		},
		sourceId: 11155111,
		testnet: true,
	},
	{
		id: 242,
		name: "Plinga",
		nativeCurrency: {
			name: "Plinga",
			symbol: "PLINGA",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpcurl.mainnet.plgchain.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "Plgscan",
				url: "https://www.plgscan.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0x0989576160f2e7092908BB9479631b901060b6e4",
				blockCreated: 204489,
			},
		},
	},
	{
		id: 137,
		name: "Polygon",
		nativeCurrency: {
			name: "MATIC",
			symbol: "MATIC",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://polygon-rpc.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "PolygonScan",
				url: "https://polygonscan.com",
				apiUrl: "https://api.polygonscan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 25770160,
			},
		},
	},
	{
		id: 80001,
		name: "Polygon Mumbai",
		nativeCurrency: {
			name: "MATIC",
			symbol: "MATIC",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.ankr.com/polygon_mumbai"],
			},
		},
		blockExplorers: {
			default: {
				name: "PolygonScan",
				url: "https://mumbai.polygonscan.com",
				apiUrl: "https://mumbai.polygonscan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 25770160,
			},
		},
		testnet: true,
	},
	{
		id: 1101,
		name: "Polygon zkEVM",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://zkevm-rpc.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "PolygonScan",
				url: "https://zkevm.polygonscan.com",
				apiUrl: "https://api-zkevm.polygonscan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 57746,
			},
		},
	},
	{
		id: 1442,
		name: "Polygon zkEVM Testnet",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.public.zkevm-test.net"],
			},
		},
		blockExplorers: {
			default: {
				name: "PolygonScan",
				url: "https://testnet-zkevm.polygonscan.com",
				apiUrl: "https://testnet-zkevm.polygonscan.com/api",
			},
		},
		testnet: true,
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 525686,
			},
		},
	},
	{
		id: 369,
		name: "PulseChain",
		nativeCurrency: {
			name: "Pulse",
			symbol: "PLS",
			decimals: 18,
		},
		testnet: false,
		rpcUrls: {
			default: {
				http: ["https://rpc.pulsechain.com"],
				webSocket: ["wss://ws.pulsechain.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "PulseScan",
				url: "https://scan.pulsechain.com",
				apiUrl: "https://api.scan.pulsechain.com/api",
			},
		},
		contracts: {
			ensRegistry: {
				address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
			},
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 14353601,
			},
		},
	},
	{
		id: 943,
		name: "PulseChain V4",
		testnet: true,
		nativeCurrency: {
			name: "V4 Pulse",
			symbol: "v4PLS",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.v4.testnet.pulsechain.com"],
				webSocket: ["wss://ws.v4.testnet.pulsechain.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "PulseScan",
				url: "https://scan.v4.testnet.pulsechain.com",
				apiUrl: "https://scan.v4.testnet.pulsechain.com/api",
			},
		},
		contracts: {
			ensRegistry: {
				address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
			},
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 14353601,
			},
		},
	},
	{
		id: 35441,
		name: "Q Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "Q",
			symbol: "Q",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.q.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Q Mainnet Explorer",
				url: "https://explorer.q.org",
				apiUrl: "https://explorer.q.org/api",
			},
		},
	},
	{
		id: 35443,
		name: "Q Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Q",
			symbol: "Q",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.qtestnet.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Q Testnet Explorer",
				url: "https://explorer.qtestnet.org",
				apiUrl: "https://explorer.qtestnet.org/api",
			},
		},
		testnet: true,
	},
	{
		id: 570,
		name: "Rollux Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "Syscoin",
			symbol: "SYS",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.rollux.com"],
				webSocket: ["wss://rpc.rollux.com/wss"],
			},
		},
		blockExplorers: {
			default: {
				name: "RolluxExplorer",
				url: "https://explorer.rollux.com",
				apiUrl: "https://explorer.rollux.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 119222,
			},
		},
	},
	{
		id: 57000,
		name: "Rollux Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Syscoin",
			symbol: "SYS",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc-tanenbaum.rollux.com/"],
				webSocket: ["wss://rpc-tanenbaum.rollux.com/wss"],
			},
		},
		blockExplorers: {
			default: {
				name: "RolluxTestnetExplorer",
				url: "https://rollux.tanenbaum.io",
				apiUrl: "https://rollux.tanenbaum.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 1813675,
			},
		},
	},
	{
		id: 2020,
		name: "Ronin",
		nativeCurrency: {
			name: "RON",
			symbol: "RON",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://api.roninchain.com/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Ronin Explorer",
				url: "https://app.roninchain.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 26023535,
			},
		},
	},
	{
		id: 30,
		name: "Rootstock Mainnet",
		network: "rootstock",
		nativeCurrency: {
			decimals: 18,
			name: "Rootstock Bitcoin",
			symbol: "RBTC",
		},
		rpcUrls: {
			default: {
				http: ["https://public-node.rsk.co"],
			},
		},
		blockExplorers: {
			default: {
				name: "RSK Explorer",
				url: "https://explorer.rsk.co",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 4249540,
			},
		},
	},
	{
		id: 2021,
		name: "Saigon Testnet",
		nativeCurrency: {
			name: "RON",
			symbol: "RON",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://saigon-testnet.roninchain.com/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Saigon Explorer",
				url: "https://saigon-explorer.roninchain.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 18736871,
			},
		},
		testnet: true,
	},
	{
		id: 23294,
		name: "Oasis Sapphire",
		network: "sapphire",
		nativeCurrency: {
			name: "Sapphire Rose",
			symbol: "ROSE",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://sapphire.oasis.io"],
				webSocket: ["wss://sapphire.oasis.io/ws"],
			},
		},
		blockExplorers: {
			default: {
				name: "Oasis Sapphire Explorer",
				url: "https://explorer.sapphire.oasis.io",
				apiUrl: "https://explorer.sapphire.oasis.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 734531,
			},
		},
	},
	{
		id: 23295,
		name: "Oasis Sapphire Testnet",
		network: "sapphire-testnet",
		nativeCurrency: {
			name: "Sapphire Test Rose",
			symbol: "TEST",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://testnet.sapphire.oasis.dev"],
				webSocket: ["wss://testnet.sapphire.oasis.dev/ws"],
			},
		},
		blockExplorers: {
			default: {
				name: "Oasis Sapphire Testnet Explorer",
				url: "https://testnet.explorer.sapphire.oasis.dev",
				apiUrl: "https://testnet.explorer.sapphire.oasis.dev/api",
			},
		},
		testnet: true,
	},
	{
		id: 534352,
		name: "Scroll",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.scroll.io"],
				webSocket: ["wss://wss-rpc.scroll.io/ws"],
			},
		},
		blockExplorers: {
			default: {
				name: "Scrollscan",
				url: "https://scrollscan.com",
				apiUrl: "https://api.scrollscan.com/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 14,
			},
		},
		testnet: false,
	},
	{
		id: 534351,
		name: "Scroll Sepolia",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://sepolia-rpc.scroll.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blockscout",
				url: "https://sepolia-blockscout.scroll.io",
				apiUrl: "https://sepolia-blockscout.scroll.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 9473,
			},
		},
		testnet: true,
	},
	{
		id: 534353,
		name: "Scroll Testnet",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://alpha-rpc.scroll.io/l2"],
				webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blockscout",
				url: "https://blockscout.scroll.io",
				apiUrl: "https://blockscout.scroll.io/api",
			},
		},
		testnet: true,
	},
	{
		id: 11155111,
		name: "Sepolia",
		nativeCurrency: {
			name: "Sepolia Ether",
			symbol: "SEP",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.sepolia.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Etherscan",
				url: "https://sepolia.etherscan.io",
				apiUrl: "https://api-sepolia.etherscan.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 751532,
			},
			ensRegistry: {
				address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
			},
			ensUniversalResolver: {
				address: "0xBaBC7678D7A63104f1658c11D6AE9A21cdA09725",
				blockCreated: 5043334,
			},
		},
		testnet: true,
	},
	{
		id: 8082,
		name: "Shardeum Sphinx",
		nativeCurrency: {
			name: "SHARDEUM",
			symbol: "SHM",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://sphinx.shardeum.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Shardeum Explorer",
				url: "https://explorer-sphinx.shardeum.org",
			},
		},
		testnet: true,
	},
	{
		id: 109,
		name: "Shibarium",
		network: "shibarium",
		nativeCurrency: {
			name: "Bone",
			symbol: "BONE",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.shibrpc.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blockscout",
				url: "https://shibariumscan.io",
			},
		},
		contracts: {
			multicall3: {
				address: "0x864Bf681ADD6052395188A89101A1B37d3B4C961",
				blockCreated: 265900,
			},
		},
	},
	{
		id: 148,
		name: "Shimmer",
		network: "shimmer",
		nativeCurrency: {
			decimals: 18,
			name: "Shimmer",
			symbol: "SMR",
		},
		rpcUrls: {
			default: {
				http: ["https://json-rpc.evm.shimmer.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Shimmer Network Explorer",
				url: "https://explorer.evm.shimmer.network",
				apiUrl: "https://explorer.evm.shimmer.network/api",
			},
		},
	},
	{
		id: 1073,
		name: "Shimmer Testnet",
		network: "shimmer-testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Shimmer",
			symbol: "SMR",
		},
		rpcUrls: {
			default: {
				http: ["https://json-rpc.evm.testnet.shimmer.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Shimmer Network Explorer",
				url: "https://explorer.evm.testnet.shimmer.network",
				apiUrl: "https://explorer.evm.testnet.shimmer.network/api",
			},
		},
		testnet: true,
	},
	{
		id: 391845894,
		name: "SKALE | Block Brawlers",
		nativeCurrency: {
			name: "BRAWL",
			symbol: "BRAWL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
				webSocket: ["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com",
			},
		},
		contracts: {},
	},
	{
		id: 1564830818,
		name: "SKALE | Calypso NFT Hub",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
				webSocket: [
					"wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url:
					"https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 3107626,
			},
		},
	},
	{
		id: 344106930,
		name: "SKALE | Calypso NFT Hub Testnet",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: [
					"https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar",
				],
				webSocket: [
					"wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url:
					"https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 2131424,
			},
		},
		testnet: true,
	},
	{
		id: 1351057110,
		name: "SKALE | Chaos Testnet",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: [
					"https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix",
				],
				webSocket: [
					"wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url:
					"https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 1192202,
			},
		},
		testnet: true,
	},
	{
		id: 1026062157,
		name: "SKALE | CryptoBlades",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: [
					"https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux",
				],
				webSocket: [
					"wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url:
					"https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com",
			},
		},
		contracts: {},
	},
	{
		id: 2046399126,
		name: "SKALE | Crypto Colosseum",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
				webSocket: [
					"wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com",
			},
		},
		contracts: {},
	},
	{
		id: 2046399126,
		name: "SKALE | Europa Liquidity Hub",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
				webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 3113495,
			},
		},
	},
	{
		id: 476158412,
		name: "SKALE | Europa Liquidity Hub Testnet",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: [
					"https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor",
				],
				webSocket: [
					"wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url:
					"https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 2071911,
			},
		},
		testnet: true,
	},
	{
		id: 2139927552,
		name: "SKALE | Exorde",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
				webSocket: ["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com",
			},
		},
		contracts: {},
	},
	{
		id: 1273227453,
		name: "SKALE | Human Protocol",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
				webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url: "https://wan-red-ain.explorer.mainnet.skalenodes.com",
			},
		},
		contracts: {},
	},
	{
		id: 1482601649,
		name: "SKALE | Nebula Gaming Hub",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
				webSocket: ["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 2372986,
			},
		},
	},
	{
		id: 503129905,
		name: "SKALE | Nebula Gaming Hub Testnet",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: [
					"https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird",
				],
				webSocket: [
					"wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url:
					"https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 2205882,
			},
		},
		testnet: true,
	},
	{
		id: 278611351,
		name: "SKALE | Razor Network",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
				webSocket: [
					"wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com",
			},
		},
		contracts: {},
	},
	{
		id: 1350216234,
		name: "SKALE | Titan Community Hub",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
				webSocket: ["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 2076458,
			},
		},
	},
	{
		id: 1517929550,
		name: "SKALE | Titan Community Hub Testnet",
		nativeCurrency: {
			name: "sFUEL",
			symbol: "sFUEL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: [
					"https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar",
				],
				webSocket: [
					"wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "SKALE Explorer",
				url:
					"https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 2085155,
			},
		},
		testnet: true,
	},
	{
		id: 19,
		name: "Songbird Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "songbird",
			symbol: "SGB",
		},
		rpcUrls: {
			default: {
				http: ["https://songbird-api.flare.network/ext/C/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Songbird Explorer",
				url: "https://songbird-explorer.flare.network",
				apiUrl: "https://songbird-explorer.flare.network/api",
			},
		},
	},
	{
		id: 16,
		name: "Coston",
		nativeCurrency: {
			decimals: 18,
			name: "costonflare",
			symbol: "CFLR",
		},
		rpcUrls: {
			default: {
				http: ["https://coston-api.flare.network/ext/C/rpc"],
			},
		},
		blockExplorers: {
			default: {
				name: "Coston Explorer",
				url: "https://coston-explorer.flare.network",
				apiUrl: "https://coston-explorer.flare.network/api",
			},
		},
		testnet: true,
	},
	{
		id: 88882,
		name: "Chiliz Spicy Testnet",
		network: "chiliz-spicy-Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "CHZ",
			symbol: "CHZ",
		},
		rpcUrls: {
			default: {
				http: [
					"https://spicy-rpc.chiliz.com",
					"https://chiliz-spicy.publicnode.com",
				],
				webSocket: [
					"wss://spicy-rpc-ws.chiliz.com",
					"wss://chiliz-spicy.publicnode.com",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "Chiliz Explorer",
				url: "http://spicy-explorer.chiliz.com",
				apiUrl: "http://spicy-explorer.chiliz.com/api",
			},
		},
		testnet: true,
	},
	{
		id: 57,
		name: "Syscoin Mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "Syscoin",
			symbol: "SYS",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.syscoin.org"],
				webSocket: ["wss://rpc.syscoin.org/wss"],
			},
		},
		blockExplorers: {
			default: {
				name: "SyscoinExplorer",
				url: "https://explorer.syscoin.org",
				apiUrl: "https://explorer.syscoin.org/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 287139,
			},
		},
	},
	{
		id: 5700,
		name: "Syscoin Tanenbaum Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Syscoin",
			symbol: "SYS",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.tanenbaum.io"],
				webSocket: ["wss://rpc.tanenbaum.io/wss"],
			},
		},
		blockExplorers: {
			default: {
				name: "SyscoinTestnetExplorer",
				url: "https://tanenbaum.io",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 271288,
			},
		},
	},
	{
		id: 167007,
		name: "Taiko Jolnir (Alpha-5 Testnet)",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.jolnir.taiko.xyz"],
			},
		},
		blockExplorers: {
			default: {
				name: "blockscout",
				url: "https://explorer.jolnir.taiko.xyz",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 732706,
			},
		},
		testnet: true,
	},
	{
		id: 167008,
		name: "Taiko Katla (Alpha-6 Testnet)",
		network: "tko-katla",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.katla.taiko.xyz"],
			},
			public: {
				http: ["https://rpc.katla.taiko.xyz"],
			},
		},
		blockExplorers: {
			default: {
				name: "blockscout",
				url: "https://explorer.katla.taiko.xyz",
			},
		},
	},
	{
		id: 167005,
		name: "Taiko (Alpha-3 Testnet)",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.test.taiko.xyz"],
			},
		},
		blockExplorers: {
			default: {
				name: "blockscout",
				url: "https://explorer.test.taiko.xyz",
			},
		},
	},
	{
		id: 841,
		name: "Taraxa Mainnet",
		nativeCurrency: {
			name: "Tara",
			symbol: "TARA",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.mainnet.taraxa.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Taraxa Explorer",
				url: "https://explorer.mainnet.taraxa.io",
			},
		},
	},
	{
		id: 842,
		name: "Taraxa Testnet",
		nativeCurrency: {
			name: "Tara",
			symbol: "TARA",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.testnet.taraxa.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Taraxa Explorer",
				url: "https://explorer.testnet.taraxa.io",
			},
		},
		testnet: true,
	},
	{
		id: 40,
		name: "Telos",
		nativeCurrency: {
			decimals: 18,
			name: "Telos",
			symbol: "TLOS",
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.telos.net/evm"],
			},
		},
		blockExplorers: {
			default: {
				name: "Teloscan",
				url: "https://www.teloscan.io/",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 246530709,
			},
		},
	},
	{
		id: 41,
		name: "Telos",
		nativeCurrency: {
			decimals: 18,
			name: "Telos",
			symbol: "TLOS",
		},
		rpcUrls: {
			default: {
				http: ["https://testnet.telos.net/evm"],
			},
		},
		blockExplorers: {
			default: {
				name: "Teloscan (testnet)",
				url: "https://testnet.teloscan.io/",
			},
		},
		testnet: true,
	},
	{
		id: 1559,
		name: "Tenet",
		network: "tenet-mainnet",
		nativeCurrency: {
			name: "TENET",
			symbol: "TENET",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.tenet.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "TenetScan Mainnet",
				url: "https://tenetscan.io",
				apiUrl: "https://tenetscan.io/api",
			},
		},
		testnet: false,
	},
	{
		id: 997,
		name: "5ireChain Thunder Testnet",
		nativeCurrency: {
			name: "5ire Token",
			symbol: "5IRE",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc-testnet.5ire.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "5ireChain Explorer",
				url: "https://explorer.5ire.network",
			},
		},
		testnet: true,
	},
	{
		id: 100009,
		name: "Vechain",
		nativeCurrency: {
			name: "VeChain",
			symbol: "VET",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.vechain.org"],
			},
		},
		blockExplorers: {
			default: {
				name: "Vechain Explorer",
				url: "https://explore.vechain.org",
			},
			vechainStats: {
				name: "Vechain Stats",
				url: "https://vechainstats.com",
			},
		},
	},
	{
		id: 888,
		name: "Wanchain",
		nativeCurrency: {
			name: "WANCHAIN",
			symbol: "WAN",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: [
					"https://gwan-ssl.wandevs.org:56891",
					"https://gwan2-ssl.wandevs.org",
				],
			},
		},
		blockExplorers: {
			default: {
				name: "WanScan",
				url: "https://wanscan.org",
			},
		},
		contracts: {
			multicall3: {
				address: "0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",
				blockCreated: 25312390,
			},
		},
	},
	{
		id: 999,
		name: "Wanchain Testnet",
		nativeCurrency: {
			name: "WANCHAIN",
			symbol: "WANt",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://gwan-ssl.wandevs.org:46891"],
			},
		},
		blockExplorers: {
			default: {
				name: "WanScanTest",
				url: "https://wanscan.org",
			},
		},
		contracts: {
			multicall3: {
				address: "0x11c89bF4496c39FB80535Ffb4c92715839CC5324",
				blockCreated: 24743448,
			},
		},
		testnet: true,
	},
	{
		id: 1111,
		name: "WEMIX",
		network: "wemix-mainnet",
		nativeCurrency: {
			name: "WEMIX",
			symbol: "WEMIX",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://api.wemix.com"],
			},
			public: {
				http: ["https://api.wemix.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "wemixExplorer",
				url: "https://explorer.wemix.com",
			},
		},
	},
	{
		id: 1112,
		name: "WEMIX Testnet",
		network: "wemix-testnet",
		nativeCurrency: {
			name: "WEMIX",
			symbol: "tWEMIX",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://api.test.wemix.com"],
			},
			public: {
				http: ["https://api.test.wemix.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "wemixExplorer",
				url: "https://testnet.wemixscan.com",
				apiUrl: "https://testnet.wemixscan.com/api",
			},
		},
		testnet: true,
	},
	{
		id: 50,
		name: "XinFin Network",
		nativeCurrency: {
			decimals: 18,
			name: "XDC",
			symbol: "XDC",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.xinfin.network"],
			},
		},
		blockExplorers: {
			xinfin: {
				name: "XinFin",
				url: "https://explorer.xinfin.network",
			},
			default: {
				name: "Blocksscan",
				url: "https://xdc.blocksscan.io",
			},
		},
	},
	{
		id: 51,
		name: "Apothem Network",
		nativeCurrency: {
			decimals: 18,
			name: "TXDC",
			symbol: "TXDC",
		},
		rpcUrls: {
			default: {
				http: ["https://erpc.apothem.network"],
			},
		},
		blockExplorers: {
			default: {
				name: "Blocksscan",
				url: "https://apothem.blocksscan.io",
			},
		},
	},
	{
		id: 7001,
		name: "ZetaChain Athens Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Zeta",
			symbol: "aZETA",
		},
		rpcUrls: {
			default: {
				http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"],
			},
		},
		blockExplorers: {
			default: {
				name: "ZetaScan",
				url: "https://athens3.explorer.zetachain.com",
			},
		},
		testnet: true,
	},
	{
		id: 1337803,
		name: "Zhejiang",
		nativeCurrency: {
			name: "Zhejiang Ether",
			symbol: "ZhejETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.zhejiang.ethpandaops.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "Beaconchain",
				url: "https://zhejiang.beaconcha.in",
			},
		},
		testnet: true,
	},
	{
		id: 32769,
		name: "Zilliqa",
		network: "zilliqa",
		nativeCurrency: {
			name: "Zilliqa",
			symbol: "ZIL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://api.zilliqa.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "Ethernal",
				url: "https://evmx.zilliqa.com",
			},
		},
		testnet: false,
	},
	{
		id: 33101,
		name: "Zilliqa Testnet",
		network: "zilliqa-testnet",
		nativeCurrency: {
			name: "Zilliqa",
			symbol: "ZIL",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://dev-api.zilliqa.com"],
			},
		},
		blockExplorers: {
			default: {
				name: "Ethernal",
				url: "https://evmx.testnet.zilliqa.com",
			},
		},
		testnet: true,
	},
	{
		id: 42766,
		name: "ZKFair Mainnet",
		network: "zkfair-mainnet",
		nativeCurrency: {
			decimals: 18,
			name: "USD Coin",
			symbol: "USDC",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.zkfair.io"],
			},
			public: {
				http: ["https://rpc.zkfair.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "zkFair Explorer",
				url: "https://scan.zkfair.io",
				apiUrl: "https://scan.zkfair.io/api",
			},
		},
		contracts: {
			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",
				blockCreated: 6090959,
			},
		},
		testnet: false,
	},
	{
		id: 43851,
		name: "ZKFair Testnet",
		network: "zkfair-testnet",
		nativeCurrency: {
			decimals: 18,
			name: "USD Coin",
			symbol: "USDC",
		},
		rpcUrls: {
			default: {
				http: ["https://testnet-rpc.zkfair.io"],
			},
			public: {
				http: ["https://testnet-rpc.zkfair.io"],
			},
		},
		blockExplorers: {
			default: {
				name: "zkFair Explorer",
				url: "https://testnet-scan.zkfair.io",
			},
		},
		testnet: true,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
			transactionRequest: {
				exclude: [
					"customSignature",
					"factoryDeps",
					"gasPerPubdata",
					"paymaster",
					"paymasterInput",
				],
				type: "transactionRequest",
			},
		},
		serializers: {},
		id: 324,
		name: "zkSync Era",
		network: "zksync-era",
		nativeCurrency: {
			decimals: 18,
			name: "Ether",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["https://mainnet.era.zksync.io"],
				webSocket: ["wss://mainnet.era.zksync.io/ws"],
			},
		},
		blockExplorers: {
			default: {
				name: "zkExplorer",
				url: "https://explorer.zksync.io",
			},
		},
		contracts: {
			multicall3: {
				address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
			},
		},
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
			transactionRequest: {
				exclude: [
					"customSignature",
					"factoryDeps",
					"gasPerPubdata",
					"paymaster",
					"paymasterInput",
				],
				type: "transactionRequest",
			},
		},
		serializers: {},
		id: 300,
		name: "zkSync Sepolia Testnet",
		network: "zksync-sepolia-testnet",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://sepolia.era.zksync.dev"],
				webSocket: ["wss://sepolia.era.zksync.dev/ws"],
			},
		},
		blockExplorers: {
			default: {
				name: "zkExplorer",
				url: "https://sepolia.explorer.zksync.io/",
			},
		},
		contracts: {
			multicall3: {
				address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
			},
		},
		testnet: true,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
			transactionRequest: {
				exclude: [
					"customSignature",
					"factoryDeps",
					"gasPerPubdata",
					"paymaster",
					"paymasterInput",
				],
				type: "transactionRequest",
			},
		},
		serializers: {},
		id: 280,
		name: "zkSync Era Testnet",
		network: "zksync-era-testnet",
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			default: {
				http: ["https://testnet.era.zksync.dev"],
				webSocket: ["wss://testnet.era.zksync.dev/ws"],
			},
		},
		blockExplorers: {
			default: {
				name: "zkExplorer",
				url: "https://goerli.explorer.zksync.io",
			},
		},
		contracts: {
			multicall3: {
				address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
			},
		},
		testnet: true,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		serializers: {},
		contracts: {
			gasPriceOracle: {
				address: "0x420000000000000000000000000000000000000F",
			},
			l1Block: {
				address: "0x4200000000000000000000000000000000000015",
			},
			l2CrossDomainMessenger: {
				address: "0x4200000000000000000000000000000000000007",
			},
			l2Erc721Bridge: {
				address: "0x4200000000000000000000000000000000000014",
			},
			l2StandardBridge: {
				address: "0x4200000000000000000000000000000000000010",
			},
			l2ToL1MessagePasser: {
				address: "0x4200000000000000000000000000000000000016",
			},
			l2OutputOracle: {
				"1": {
					address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c",
				},
			},
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 5882,
			},
			portal: {
				"1": {
					address: "0x1a0ad011913A150f69f6A19DF447A0CfD9551054",
				},
			},
		},
		id: 7777777,
		name: "Zora",
		nativeCurrency: {
			decimals: 18,
			name: "Ether",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["https://rpc.zora.energy"],
				webSocket: ["wss://rpc.zora.energy"],
			},
		},
		blockExplorers: {
			default: {
				name: "Explorer",
				url: "https://explorer.zora.energy",
				apiUrl: "https://explorer.zora.energy/api",
			},
		},
		sourceId: 1,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		serializers: {},
		contracts: {
			gasPriceOracle: {
				address: "0x420000000000000000000000000000000000000F",
			},
			l1Block: {
				address: "0x4200000000000000000000000000000000000015",
			},
			l2CrossDomainMessenger: {
				address: "0x4200000000000000000000000000000000000007",
			},
			l2Erc721Bridge: {
				address: "0x4200000000000000000000000000000000000014",
			},
			l2StandardBridge: {
				address: "0x4200000000000000000000000000000000000010",
			},
			l2ToL1MessagePasser: {
				address: "0x4200000000000000000000000000000000000016",
			},
			l2OutputOracle: {
				"11155111": {
					address: "0x2615B481Bd3E5A1C0C7Ca3Da1bdc663E8615Ade9",
				},
			},
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 83160,
			},
			portal: {
				"11155111": {
					address: "0xeffE2C6cA9Ab797D418f0D91eA60807713f3536f",
				},
			},
		},
		id: 999999999,
		name: "Zora Sepolia",
		network: "zora-sepolia",
		nativeCurrency: {
			decimals: 18,
			name: "Zora Sepolia",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["https://sepolia.rpc.zora.energy"],
				webSocket: ["wss://sepolia.rpc.zora.energy"],
			},
		},
		blockExplorers: {
			default: {
				name: "Zora Sepolia Explorer",
				url: "https://sepolia.explorer.zora.energy/",
				apiUrl: "https://sepolia.explorer.zora.energy/api",
			},
		},
		sourceId: 11155111,
		testnet: true,
	},
	{
		formatters: {
			block: {
				type: "block",
			},
			transaction: {
				type: "transaction",
			},
			transactionReceipt: {
				type: "transactionReceipt",
			},
		},
		serializers: {},
		contracts: {
			gasPriceOracle: {
				address: "0x420000000000000000000000000000000000000F",
			},
			l1Block: {
				address: "0x4200000000000000000000000000000000000015",
			},
			l2CrossDomainMessenger: {
				address: "0x4200000000000000000000000000000000000007",
			},
			l2Erc721Bridge: {
				address: "0x4200000000000000000000000000000000000014",
			},
			l2StandardBridge: {
				address: "0x4200000000000000000000000000000000000010",
			},
			l2ToL1MessagePasser: {
				address: "0x4200000000000000000000000000000000000016",
			},
			multicall3: {
				address: "0xcA11bde05977b3631167028862bE2a173976CA11",
				blockCreated: 189123,
			},
			portal: {
				"5": {
					address: "0xDb9F51790365e7dc196e7D072728df39Be958ACe",
				},
			},
		},
		id: 999,
		name: "Zora Goerli Testnet",
		nativeCurrency: {
			decimals: 18,
			name: "Zora Goerli",
			symbol: "ETH",
		},
		rpcUrls: {
			default: {
				http: ["https://testnet.rpc.zora.energy"],
				webSocket: ["wss://testnet.rpc.zora.energy"],
			},
		},
		blockExplorers: {
			default: {
				name: "Explorer",
				url: "https://testnet.explorer.zora.energy",
				apiUrl: "https://testnet.explorer.zora.energy/api",
			},
		},
		sourceId: 5,
		testnet: true,
	},
];
