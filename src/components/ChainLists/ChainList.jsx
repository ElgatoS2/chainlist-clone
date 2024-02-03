import React from "react";
import ChainTiles from "../ChainTiles/ChainTiles";
import "./ChainList.css";

function ChainList({ newData }) {
	const chainMap = newData.map((i, index) => {
		return (
			<ChainTiles
				key={index}
				id={i[1]?.id}
				currency={i[1]?.nativeCurrency?.symbol}
				name={i[1]?.name}
			/>
		);
	});

	return <div className="ChainList">{chainMap}</div>;
}

export default ChainList;
