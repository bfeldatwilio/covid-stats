import React, { useState } from "react";
import styled from "styled-components";
import SMSForm from "../SMSForm/SMSForm";

/*
props:
	data, active country data
*/
const DetailsContainer = styled.section`
	color: white;
	font-weight: 500;
	line-height: 1.5;
	font-size: 1.1em;
	grid-area: details;
	text-shadow: 2px 2px #000000;
	display: flex;
	@media (max-width: 868px) {
		align-items: center;
		padding-left: 40px;
	}
	@media (min-width: 868px) {
		justify-content: center;
		background: rgba(255, 255, 255, 0.2);
		font-size: 1.3em;
		font-weight: 700;
		line-height: 2;
	}
	& span {
		font-size: 0.8em;
		margin-left: 30px;
	}
`;

export default function Details(props) {
	return (
		<DetailsContainer>
			<div>
				<h2>{props.data.Country_Region}</h2>
				<ul>
					<li>Deaths: {props.data.Deaths.toLocaleString()}</li>
					<li>Confirmed: {props.data.Confirmed.toLocaleString()}</li>
					<li>
						Mortality Rate: {props.data.Mortality_Rate.toFixed(2)}
					</li>
					<li>
						Incident Rate: {props.data.Incident_Rate.toFixed(2)}
					</li>
				</ul>
				<span>
					Last Updated:{" "}
					{new Date(props.data.Last_Update).toLocaleDateString(
						"en-us"
					)}
				</span>
				<SMSForm data={props.data} />
			</div>
		</DetailsContainer>
	);
}
