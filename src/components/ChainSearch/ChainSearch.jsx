import "./ChainSearch.css";
import { ImSearch } from "react-icons/im";
import CustomButtons from "../CustomButtons";

function ChainSearch({ chainData, addNewData }) {
	const createFilter = (event) => {
		const newMap = chainData.filter((i) =>
			i.name.toLowerCase().includes(event.target.value.toLowerCase())
		);
		addNewData(newMap);
	};

	return (
		<div className="ChainSearch">
			<div className="ChainSearch__Search">
				<p>Search Networks</p>
				<input
					onChange={createFilter}
					type="text"
					placeholder="ETH, Fantom, ..."
				/>
				<button className="imSearch">
					<ImSearch />
				</button>
			</div>
			<div className="ChainSearch_DownDIV">
				<div className="ChainSearch__Checkbox">
					<input type="checkbox" /> Include Testnets{" "}
				</div>
				<CustomButtons buttonClass="ChainSearch__Button" buttonType={1} />
			</div>
		</div>
	);
}

export default ChainSearch;
