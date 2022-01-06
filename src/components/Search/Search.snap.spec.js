import React from "react";
import renderer from "react-test-renderer";

import Search from "./Search";
import { Countries, ActiveCountry } from "../../../tools/MockData";

describe("initial state", () => {
  it("should render the select element with 8 options", () => {
    const tree = renderer.create(
      <Search
        countries={Countries}
        activeCountry={ActiveCountry}
        setActiveCountry={jest.fn()}
      />
    );
    expect(tree).toMatchInlineSnapshot(`
      <section
        className="sc-bdfBQB gINNDK"
      >
        <select
          autoComplete="on"
          onChange={[Function]}
        >
          <option
            selected={true}
          >
            Afghanistan
          </option>
          <option
            selected={false}
          >
            Albania
          </option>
          <option
            selected={false}
          >
            Algeria
          </option>
          <option
            selected={false}
          >
            Andorra
          </option>
          <option
            selected={false}
          >
            Angola
          </option>
          <option
            selected={false}
          >
            Antigua and Barbuda
          </option>
          <option
            selected={false}
          >
            Argentina
          </option>
          <option
            selected={false}
          >
            Armenia
          </option>
          <option
            selected={false}
          >
            Australia
          </option>
          <option
            selected={false}
          >
            Austria
          </option>
          <option
            selected={false}
          >
            Azerbaijan
          </option>
        </select>
      </section>
    `);
  });
});
