import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Result } from "./Result";

describe("Result", () => {
  it("should render the Result", () => {
    const subject = shallow(<Result/>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer
      .create(<Result/>)
      .toJSON();
    expect(subject).toMatchSnapshot();
  });
});
