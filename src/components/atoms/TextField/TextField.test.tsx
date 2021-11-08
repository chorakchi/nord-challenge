import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { TextField } from "./TextField";

describe("TextField", () => {
  it("should render the TextField", () => {
    const subject = shallow(<TextField id="id" />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<TextField id="id" />).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
