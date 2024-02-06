import React, { useState, useEffect } from "react";
import ChainTiles from "../ChainTiles/ChainTiles";
import "./ChainList.css";

function ChainList({ newData }) {
	const [splicedData, setSplicedData] = useState(
		newData?.length > 3 ? newData.toSpliced(2, 0, "ad") : newData
	);

	useEffect(() => {
		newData?.length > 3
			? setSplicedData(newData.toSpliced(2, 0, "ad"))
			: setSplicedData(newData);
		console.log("NEW DATA", newData);
	}, [newData]);

	const chainMap = splicedData.map((i, index) => {
		if (i === "ad") {
			return (
				<a
					className="contImg"
					key={index}
					href="https://brave.com/learn/installing-chrome-extensions"
					target="_blank"
				>
					<img
						src="https://d1q98dzwj6s2rb.cloudfront.net/up/asset/d6828975e2/309e899752.png?w=600&h=314"
						className="ChainImg"
					/>
				</a>
			);
		}
		return (
			<ChainTiles
				key={index}
				id={i[1]?.id}
				currency={i[1]?.nativeCurrency?.symbol}
				name={i[1]?.name}
			/>
		);
	});

	return <div className="ChainList">{newData?.length ? chainMap : ""}</div>;
}

export default ChainList;
