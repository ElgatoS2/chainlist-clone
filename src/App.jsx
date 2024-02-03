import React, { useState } from "react";
import "./App.css";
import { Hero, ChainList, ChainSearch } from "./components";
import * as chains from "wagmi/chains";

function App() {
	const [newData, addNewData] = useState(Object.entries(chains));

	console.log("all chains", newData);

	return (
		<div className="App">
			<div className="App__Hero">
				<Hero />
			</div>

			<div className="App__Scroll">
				<div className="App__Scroll-Search">
					<ChainSearch
						chains={chains}
						newData={newData}
						addNewData={addNewData}
					/>
				</div>

				<ChainList newData={newData} />
			</div>
		</div>
	);
}

export default App;
