import React, { useEffect, useState } from "react";
import "./App.css";
import { Hero, ChainList, ChainSearch } from "./components";
import * as chains from "wagmi/chains";
import { chain as chainData } from "./data/chainData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const [newData, addNewData] = useState(Object.entries(chains));
	const [unfiltData, setUnfiltData] = useState(newData);

	return (
		<BrowserRouter>
			<div className="App">
				<div className="App__Hero">
					<Hero />
				</div>

				<Routes>
					<Route
						path="/"
						element={
							<div className="App__Scroll">
								<div className="App__Scroll-Search">
									<ChainSearch
										chains={chains}
										newData={newData}
										addNewData={addNewData}
										unfiltData={unfiltData}
									/>
								</div>

								<ChainList newData={newData} />
							</div>
						}
					></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
