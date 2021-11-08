import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Login } from "./Login";

describe("Login", () => {
  it("should render the Login", () => {
    const subject = shallow(<Login/>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Login/>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
