import React, { useState, useEffect } from "react";
import CovidRadio from "../CovidRadio/CovidRadio";
import styled from "styled-components";

/*
props:
	countries, full list of countries and data
*/

const RefContainer = styled.section`
color: white;
grid-area: ref;
display: flex;
li {
	line-height: 1.7;
}
@media (max-width:500px) {
	font-size: .8em;
	& > div {
		padding 5px;
	}
}
@media (min-width: 868px) {
	flex-direction: column;
	& > div {
		padding: 15px;
	}
}
@media (max-width: 868px) {
	flex-direction: row;
	justify-content: flex-end;
	& > div {
		padding 15px 30px;
	}
}
& .optionsContainer {
	background: black;
}
& > div {
	background: rgba(0, 0, 0, 0.5);
`;

export default function Ref(props) {
	const PROPERTIES = {
		DEATHS: "Deaths",
		CONFIRMED: "Confirmed",
		RECOVERED: "Recovered",
	};

	const AGGREGATE = {
		TOTAL: "Total",
		DAILY: "Daily",
	};
	const [sortableData] = useState([...props.countries]);

	const [activeProperty, setActiveProperty] = useState(PROPERTIES.DEATHS);
	const [activeAggregate, setActiveAggregate] = useState(AGGREGATE.TOTAL);

	const [topTenList, setTopTenList] = useState([]);

	useEffect(() => {
		setTopTenList(topTenFactory(sortableData, activeProperty));
	}, []);

	const topTenFactory = (data, property) => {
		let sortedOnProperty = data.sort((a, b) => b[property] - a[property]);
		let topTen = sortedOnProperty.slice(0, 10);
		return topTen;
	};

	const switchTop = (e) => {
		let newProperty = e.target.value;
		setActiveProperty(newProperty);
		setTopTenList(topTenFactory(sortableData, newProperty));
	};

	const switchAggregate = (e) => {
		setActiveAggregate(e.target.value);
	};

	const setValue = (country, aggregate, property) => {
		if (aggregate === AGGREGATE.TOTAL) {
			return country[property] && country[property].toLocaleString();
		} else if (aggregate === AGGREGATE.DAILY) {
			let rate = country.Mortality_Rate / 100;
			let daily = parseInt(
				(country[property] * rate).toFixed()
			).toLocaleString();
			return daily;
		}
	};

	return (
		<RefContainer>
			<div className="optionsContainer">
				<CovidRadio
					active={activeProperty}
					options={PROPERTIES}
					onChange={switchTop}
					name="property"
				/>
				<CovidRadio
					active={activeAggregate}
					options={AGGREGATE}
					onChange={switchAggregate}
					name="aggregate"
				/>
			</div>
			<div className="resultsContainer">
				<div>
					<h3>Top {activeProperty} by Country</h3>
					<ul>
						{topTenList.map((country) => {
							return (
								<li key={country.UID}>
									<span className="country-label">
										{country.Country_Region}
									</span>
									:{" "}
									<span>
										{setValue(
											country,
											activeAggregate,
											activeProperty
										)}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</RefContainer>
	);
}
