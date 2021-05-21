import React from "react";
import Adapter from "enzyme-adapter-react-16";
const { shallow, configure } = require("enzyme");
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

configure({ adapter: new Adapter() });

describe("Pruebas en el archivo <RealExampleRef />", () => {
  const wrapper = shallow(<RealExampleRef />);
  test("Debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("Debe ocultar componente <MultipleCustomHooks /> al dar click en el botón ", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
