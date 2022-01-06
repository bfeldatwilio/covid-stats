import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import { Countries, ActiveCountry } from "../../../tools/MockData";
import Ref from "./Ref";

Enzyme.configure({ adapter: new Adapter() });

const renderReferenceElement = (args) => {
	const defaultProps = {
		countries: [],
	};

	const props = { ...defaultProps, ...args };
	return mount(<Ref {...props} />);
};

test("Renders the Ref component with the passed in properties", () => {
	let props = {
		countries: Countries,
	};
	let expectedHeaderText = "Top Deaths by Country";
	const wrapper = renderReferenceElement(props);
	expect(wrapper.find("h3").text()).toBe(expectedHeaderText);
	expect(wrapper.find("li").length).toBe(10);
});
