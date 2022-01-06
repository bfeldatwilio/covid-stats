import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Countries, ActiveCountry } from "../../../tools/MockData";
import Search from "./Search";

Enzyme.configure({ adapter: new Adapter() });

const mockOnSetActiveCountry = jest.fn();
const renderSelectElement = (args) => {
	const defaultProps = {
		countries: [],
		activeCountry: {},
		setActiveCountry: mockOnSetActiveCountry,
	};

	const props = { ...defaultProps, ...args };
	return mount(<Search {...props} />);
};

test("Renders the select component with the passed in properties", () => {
	let props = {
		countries: Countries,
		activeCountry: ActiveCountry,
	};
	const wrapper = renderSelectElement(props);
	expect(wrapper.find("select").length).toBe(1);
	expect(wrapper.find("option").length).toBe(11);
});

test("triggers the setActiveCountry when the option is clicked", () => {
	let props = {
		countries: Countries,
		activeCountry: ActiveCountry,
	};
	let indexOfItemToClick = 1;
	const wrapper = renderSelectElement(props);
	wrapper.find("option").at(indexOfItemToClick).simulate("change");
	expect(mockOnSetActiveCountry).toHaveBeenCalledWith(
		Countries[indexOfItemToClick]
	);
});
