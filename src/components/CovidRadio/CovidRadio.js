import React from "react";
import styled from "styled-components";
import { Theme } from "../../assets/Theme";
/*
props:
	active, the active radio button property
	options, object dict of radio button options
	onChange, functon when radio group is changed
	name, common name for radio inputs to group
*/

const CovidRadioInput = styled.div`
	padding: 5px;
	label {
		cursor: pointer;
		& > input[type="radio"] {
			display: none;
		}
		& > input[type="radio"] + *::before {
			content: "";
			display: inline-block;
			vertical-align: bottom;
			width: 1rem;
			height: 1rem;
			margin-right: 0.3rem;
			border-radius: 50%;
			border-style: solid;
			border-width: 0.1rem;
			border-color: ${Theme.primary};
		}
		& > input[type="radio"]:checked + *::before {
			background: radial-gradient(
				${Theme.primary} 0%,
				${Theme.primary} 40%,
				transparent 50%,
				transparent
			);
			border-color: ${Theme.primary};
		}
	}
`;

const Divider = styled.hr`
	border: solid 1px black;
`;

const isChecked = (activeKey, key) => {
	return activeKey === key;
};

export default function CovidRadio(props) {
	return (
		<>
			{Object.keys(props.options).map((key, index) => {
				return (
					<CovidRadioInput key={key + index}>
						<label htmlFor={props.options[key] + index}>
							<input
								onChange={props.onChange}
								id={props.options[key] + index}
								checked={isChecked(
									props.active,
									props.options[key]
								)}
								type="radio"
								value={props.options[key]}
								name={props.name}
							/>{" "}
							<span>{props.options[key]}</span>
						</label>
					</CovidRadioInput>
				);
			})}
			<Divider />
		</>
	);
}
