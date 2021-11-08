import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Form } from "./Form";

describe("Form", () => {
  it("should render the Form", () => {
    const subject = shallow(<Form />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Form />).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
