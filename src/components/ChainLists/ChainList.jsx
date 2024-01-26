import React from "react";
import ChainTiles from "../ChainTiles/ChainTiles";
import "./ChainList.css";

function ChainList({ newData }) {
	const chainMap = newData.map((i) => {
		return (
			<ChainTiles
				key={i.chainID}
				id={i.chainID}
				currency={i.currency}
				name={i.name}
			/>
		);
	});

	return <div className="ChainList">{chainMap}</div>;
}

export default ChainList;
