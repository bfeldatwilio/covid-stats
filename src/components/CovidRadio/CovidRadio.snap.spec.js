import React from "react";
import renderer from "react-test-renderer";

import CovidRadio from "./CovidRadio";

const options = {
	OPTION1: "option 1",
	OPTION2: "option 2",
	OPTION3: "option 3",
	OPTION4: "option 4",
};

describe("initial state", () => {
	it("should render the options and list of top 10", () => {
		const tree = renderer.create(
			<CovidRadio
				active={options.OPTION2}
				options={options}
				onChange={jest.fn()}
				name="options"
			/>
		);
		expect(tree).toMatchInlineSnapshot(`
      Array [
        <div
          className="sc-bdfBQB ghwOdJ"
        >
          <label
            htmlFor="option 10"
          >
            <input
              checked={false}
              id="option 10"
              name="options"
              onChange={[MockFunction]}
              type="radio"
              value="option 1"
            />
             
            <span>
              option 1
            </span>
          </label>
        </div>,
        <div
          className="sc-bdfBQB ghwOdJ"
        >
          <label
            htmlFor="option 21"
          >
            <input
              checked={true}
              id="option 21"
              name="options"
              onChange={[MockFunction]}
              type="radio"
              value="option 2"
            />
             
            <span>
              option 2
            </span>
          </label>
        </div>,
        <div
          className="sc-bdfBQB ghwOdJ"
        >
          <label
            htmlFor="option 32"
          >
            <input
              checked={false}
              id="option 32"
              name="options"
              onChange={[MockFunction]}
              type="radio"
              value="option 3"
            />
             
            <span>
              option 3
            </span>
          </label>
        </div>,
        <div
          className="sc-bdfBQB ghwOdJ"
        >
          <label
            htmlFor="option 43"
          >
            <input
              checked={false}
              id="option 43"
              name="options"
              onChange={[MockFunction]}
              type="radio"
              value="option 4"
            />
             
            <span>
              option 4
            </span>
          </label>
        </div>,
        <hr
          className="sc-gsTEea iULmDv"
        />,
      ]
    `);
	});
});
