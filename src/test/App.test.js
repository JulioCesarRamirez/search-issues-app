
import React from "react";
import "@testing-library/jest-dom";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from "enzyme";
import { App } from "../App";

configure({adapter: new Adapter()});
describe("Test <App />", () => {
  it("Should show <App /> correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should show a list of items  ", () => {
    const items = [{title:"react", url:'http...'}];
    const wrapper = shallow(<App defaultItems={items} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GridItems").length).toBe(items.length);
  });
});