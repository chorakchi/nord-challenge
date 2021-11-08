import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Table } from "./Table";
import { mockData } from "./Table.mock";



describe("Typography", () => {
  it("should render the Typography", () => {
    const subject = shallow(<Table {...mockData} />);
    expect(subject).toHaveLength(1);
  });

  it("should render correctly and match to the Snapshot", () => {
    const subject = renderer.create(<Table {...mockData} />).toJSON();
    expect(subject).toMatchSnapshot();
  });
});
