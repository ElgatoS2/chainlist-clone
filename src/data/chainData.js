export const chain = [
	{
		imgUrl: "https://i.imgur.com/ieXleOD.png",
		id: 787,
		name: "Leopard",
		network: "leopard",
		nativeCurrency: {
			name: "Ethereum",
			symbol: "ETH",
			decimals: 18,
		},
		rpcUrls: {
			public: {
				http: ["https://leopardkeen-rpc.eu-north-2.gateway.fm"],
				webSocket: ["wss://leopardkeen-rpc.eu-north-2.gateway.fm"],
			},
			default: {
				http: ["https://leopardkeen-rpc.eu-north-2.gateway.fm"],
				webSocket: ["wss://leopardkeen-rpc.eu-north-2.gateway.fm"],
			},
		},
		blockExplorers: {
			default: {
				name: "Leopard Explorer",
				url: "https://leopardkeen-blockscout.eu-north-2.gateway.fm",
				apiUrl: "https://leopardkeen-blockscout.eu-north-2.gateway.fm/api",
			},
		},
		testnet: false,
	},
