import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import CovidRadio from "./CovidRadio";

Enzyme.configure({ adapter: new Adapter() });

const options = {
	OPTION1: "Option 1",
	OPTION2: "Option 2",
	OPTION3: "Option 3",
	OPTION4: "Option 4",
};

const mockOnChange = jest.fn();

const renderRadioGroupElement = (args) => {
	const defaultProps = {
		active: "",
		options: {},
		onChange: mockOnChange,
		name: "GroupA",
	};

	const props = { ...defaultProps, ...args };
	return mount(<CovidRadio {...props} />);
};

test("Renders the radio checkbox group for the options passed in", () => {
	let props = {
		active: options.OPTION2,
		options: options,
	};
	const wrapper = renderRadioGroupElement(props);
	expect(wrapper.find("span").at(0).text()).toBe(options.OPTION1);
	expect(wrapper.find("span").at(1).text()).toBe(options.OPTION2);
	expect(wrapper.find("span").at(2).text()).toBe(options.OPTION3);
	expect(wrapper.find("span").at(3).text()).toBe(options.OPTION4);
	expect(wrapper.find("input[checked=true]").length).toBe(1);
	expect(wrapper.find("input[checked=true]").instance().value).toBe(
		props.active
	);
});

test("Calls the onChange function when the option is changed", () => {
	let props = {
		active: options.OPTION2,
		options: options,
	};
	const wrapper = renderRadioGroupElement(props);
	wrapper.find("input").at(3).simulate("change");
	expect(mockOnChange).toHaveBeenCalled();
});
