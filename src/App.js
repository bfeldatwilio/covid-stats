import React, { useState, useEffect } from "react";
import "./assets/App.css";
import Search from "./components/Search/Search";
import Map from "./components/Map/Map";
import Ref from "./components/Ref/Ref";
import Details from "./components/Details/Details";
import styled from "styled-components";

function App() {
	let caseCountryUrl =
		"https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json";
	const [countryArray, setCountryArray] = useState([]);
	const [activeCountry, setActiveCountry] = useState({
		Deaths: 0,
		Confirmed: 0,
		Mortality_Rate: 0,
		Incident_Rate: 0,
	});

	async function fetchCountryData() {
		const response = await fetch(caseCountryUrl);
		return await response.json();
	}

	function setInitialData(apiResponse) {
		let countryData = apiResponse.features.map(
			(feature) => feature.attributes
		);
		setCountryArray(countryData);
		setActiveCountry(countryData[0]);
	}

	useEffect(() => {
		fetchCountryData().then((data) => {
			setInitialData(data);
		});
	}, []);

	const OverlayContainer = styled.section`
		position: absolute;
		height: 100vh;
		width: 100vw;
		top: 0;
		z-index: 2;
		display: grid;
		@media (max-width: 868px) {
			grid-template-rows: auto 1fr auto;
			grid-template-areas:
				"search"
				"details"
				"ref";
		}
		@media (min-width: 868px) {
			grid-template-columns: 350px auto 300px;
			grid-template-areas:
				"search mid blank"
				"details mid blank"
				"details mid ref";
		}
		@media (min-width: 1450px) {
			grid-template-columns: auto 350px 800px 300px;
			grid-template-areas:
				"left search mid blank"
				"left details mid blank"
				"left details mid ref";
		}
	`;

	return (
		<>
			<Map location={activeCountry} />
			<OverlayContainer>
				<Search
					countries={countryArray}
					activeCountry={activeCountry}
					setActiveCountry={setActiveCountry}
				/>
				<Details data={activeCountry} />
				<Ref countries={countryArray} />
			</OverlayContainer>
		</>
	);
}

export default App;
