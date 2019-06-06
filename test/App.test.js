import React from "react";
import { shallow } from "./jestSetup.js";
import App from "../client/src/components/App.jsx";

describe("Loads on startup", () => {
  it("App renders without any issues", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});

describe("Check helper function", () => {
  it("Helper function returns expected output", () => {
    const component = shallow(<App />);
    const Foo = component.instance().bar();
    expect(Foo).toBe(123);
  });
});

class Foo {
  bar() {
    return 123;
  }
}
describe("Demonstrate Foo is working", () => {
  it("Foo returns expected value", () => {
    expect(new Foo().bar()).toBe(123);
  });
});
