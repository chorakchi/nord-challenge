import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Container } from "./Container";

describe("Container", () => {
  it("should render the Container", () => {
    const subject = shallow(<Container>Container</Container>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Container>Container</Container>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
