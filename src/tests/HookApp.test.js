import React from "react";
import Adapter from "enzyme-adapter-react-16";
const { shallow, configure } = require("enzyme");
const { HooksApp } = require("../HooksApp");

configure({ adapter: new Adapter() });
describe("Pruebas en <HookApp />", () => {
  test("Debe mostrarse correctamente", () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
