import React from "react";
import styled from "styled-components";

/*
props:
	countries, full list of countries and data
	activeCountry, the selected active country
	setActiveCountry, function taking a country
*/

const SearchContainer = styled.section`
	display: flex;
	align-items: center;
	flex: 0 1 auto;
	justify-content: center;
	padding: 20px 0;
	background: rgba(255, 255, 255, 0.2);
	grid-area: search;
	& > select {
		font-size: 14px;
		border: none;
		appearance: none;
		border-radius: 3px;
		padding: 12px;
		border: solid #c94b27 3px;
	}
`;

export default function Search(props) {
	const onCountryChange = (e) => {
		let countryObj = props.countries.filter(
			(c) => c.Country_Region === e.target.value
		)[0];
		props.setActiveCountry(countryObj);
	};

	return (
		<SearchContainer>
			<select autoComplete="on" onChange={onCountryChange}>
				{props.countries.map((country, index) => (
					<option
						key={index}
						selected={props.activeCountry.UID === country.UID}
					>
						{country.Country_Region}
					</option>
				))}
			</select>
		</SearchContainer>
	);
}
