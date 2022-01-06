import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { ActiveCountry } from "../../../tools/MockData";
import Details from "./Details";

Enzyme.configure({ adapter: new Adapter() });

const renderReferenceElement = (args) => {
	const defaultProps = {
		data: {},
	};

	const props = { ...defaultProps, ...args };
	return mount(<Details {...props} />);
};

test("Renders the Details component with the passed in properties", () => {
	let props = {
		data: ActiveCountry,
	};
	const wrapper = renderReferenceElement(props);
	expect(wrapper.find("h2").text()).toBe(ActiveCountry.Country_Region);
	expect(wrapper.find("li").at(0).text()).toBe(
		"Deaths: " + ActiveCountry.Deaths.toLocaleString()
	);
	expect(wrapper.find("li").at(1).text()).toBe(
		"Confirmed: " + ActiveCountry.Confirmed.toLocaleString()
	);
	expect(wrapper.find("li").at(2).text()).toBe(
		"Mortality Rate: " + ActiveCountry.Mortality_Rate.toFixed(2)
	);
	expect(wrapper.find("li").at(3).text()).toBe(
		"Incident Rate: " + ActiveCountry.Incident_Rate.toFixed(2)
	);
});
