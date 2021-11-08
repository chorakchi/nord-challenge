import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Button } from "./Button";


describe("Button", () => {
  it("should render the Button", () => {
    const subject = shallow(<Button>Button</Button>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Button>Button</Button>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
