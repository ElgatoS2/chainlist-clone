import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const projectId = import.meta.env.VITE_PROJECT_ID;

const metadata = {
	name: "Web3Modal",
	description: "Web3Modal Example",
	url: "https://web3modal.com",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
	chains, // required
	projectId, // required
	metadata, // required
	enableWalletConnect: true, // Optional - true by default
	enableInjected: true, // Optional - true by default
	enableEIP6963: true, // Optional - true by default
	enableCoinbase: true,
});

createWeb3Modal({
	wagmiConfig: config,
	projectId,
	chains,
	enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<WagmiProvider config={config}>
		<QueryClientProvider client={queryClient}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</QueryClientProvider>
	</WagmiProvider>
);
