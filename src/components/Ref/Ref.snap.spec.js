import React from "react";
import renderer from "react-test-renderer";

import Ref from "./Ref";
import { Countries, ActiveCountry } from "../../../tools/MockData";

describe("initial state", () => {
	it("should render the options and list of top 10", () => {
		const tree = renderer.create(<Ref countries={Countries} />);
		expect(tree).toMatchInlineSnapshot(`
      <section
        className="sc-dlfnuX dSRLty"
      >
        <div
          className="optionsContainer"
        >
          <div
            className="sc-bdfBQB ghwOdJ"
          >
            <label
              htmlFor="Deaths0"
            >
              <input
                checked={true}
                id="Deaths0"
                name="property"
                onChange={[Function]}
                type="radio"
                value="Deaths"
              />
               
              <span>
                Deaths
              </span>
            </label>
          </div>
          <div
            className="sc-bdfBQB ghwOdJ"
          >
            <label
              htmlFor="Confirmed1"
            >
              <input
                checked={false}
                id="Confirmed1"
                name="property"
                onChange={[Function]}
                type="radio"
                value="Confirmed"
              />
               
              <span>
                Confirmed
              </span>
            </label>
          </div>
          <div
            className="sc-bdfBQB ghwOdJ"
          >
            <label
              htmlFor="Recovered2"
            >
              <input
                checked={false}
                id="Recovered2"
                name="property"
                onChange={[Function]}
                type="radio"
                value="Recovered"
              />
               
              <span>
                Recovered
              </span>
            </label>
          </div>
          <hr
            className="sc-gsTEea iULmDv"
          />
          <div
            className="sc-bdfBQB ghwOdJ"
          >
            <label
              htmlFor="Total0"
            >
              <input
                checked={true}
                id="Total0"
                name="aggregate"
                onChange={[Function]}
                type="radio"
                value="Total"
              />
               
              <span>
                Total
              </span>
            </label>
          </div>
          <div
            className="sc-bdfBQB ghwOdJ"
          >
            <label
              htmlFor="Daily1"
            >
              <input
                checked={false}
                id="Daily1"
                name="aggregate"
                onChange={[Function]}
                type="radio"
                value="Daily"
              />
               
              <span>
                Daily
              </span>
            </label>
          </div>
          <hr
            className="sc-gsTEea iULmDv"
          />
        </div>
        <div
          className="resultsContainer"
        >
          <div>
            <h3>
              Top 
              Deaths
               by Country
            </h3>
            <ul />
          </div>
        </div>
      </section>
    `);
	});
});
