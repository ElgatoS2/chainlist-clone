import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useSwitchChain } from "wagmi";

const CustomButtons = ({ buttonType, buttonClass, name, id }) => {
	const { open } = useWeb3Modal();
	const account = useAccount();
	const switchChain = useSwitchChain();

	const handleClick = () => {
		if (buttonType == 1) {
			open();
		}

		if (buttonType !== 1 && !account.isConnected) {
			open();
		} else if (buttonType !== 1) {
			switchChain.switchChainAsync({ chainId: id });
		}
	};

	return (
		<button onClick={() => handleClick(name)} className={buttonClass}>
			{account.isConnected
				? buttonType == 1
					? account.address.slice(0, 4) + "..." + account.address.slice(-4)
					: account.chainId == id
					? "Network Added"
					: "Add Network"
				: "Connect Wallet"}
		</button>
	);
};

export default CustomButtons;
