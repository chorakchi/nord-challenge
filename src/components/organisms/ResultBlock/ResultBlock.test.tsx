import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { ResultBlock } from "./ResultBlock";

describe("ResultBlock", () => {
  it("should render the ResultBlock", () => {
    const subject = shallow(<ResultBlock/>);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<ResultBlock/>).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
