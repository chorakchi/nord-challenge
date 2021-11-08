import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { LoginBlock } from "./LoginBlock";

describe("LoginBlock", () => {
  it("should render the LoginBlock", () => {
    const subject = shallow(<LoginBlock onClickSignIn={()=>{}}/>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<LoginBlock onClickSignIn={()=>{}}/>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
