import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const CustomButtons = ({ buttonType, buttonClass, name }) => {
	const { open } = useWeb3Modal();
	const account = useAccount();

	const handleClick = (name) => {
		if (buttonType == 1) {
			open();
		}

		if (buttonType !== 1 && !account.isConnected) {
			open();
		} else if (buttonType !== 1) {
			console.log(name);
		}
	};

	return (
		<button onClick={() => handleClick(name)} className={buttonClass}>
			{account.isConnected
				? buttonType == 1
					? account.address.slice(0, 4) + "..." + account.address.slice(-4)
					: "Add Network"
				: "Connect Wallet"}
		</button>
	);
};

export default CustomButtons;
