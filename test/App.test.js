import React from "react";
import { shallow } from "./jestSetup.js";
import App from "../client/src/components/App.jsx";

describe("Loads on startup", () => {
  it("App renders without any issues", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
