import React from "react";
import Adapter from "enzyme-adapter-react-16";
const { shallow, configure } = require("enzyme");
import { MultipleCustomHooks } from "../../../components/examples/MultipleCustomHooks";
import { useFetch } from "../../../Hooks/useFetch";
import { useCounter } from "../../../Hooks/useCounter";
// Esto lo que hace es una implementacion falsa del archivo que estamos llamando
// Con solo declrarlo ejecuta la accion
jest.mock("../../../Hooks/useFetch");
jest.mock("../../../Hooks/useCounter");

configure({ adapter: new Adapter() });

describe("Pruebas en el archivo <MultipleCustomHooks />", () => {
  // Como esto no cambia para todos los test case lo definimos en el describe
  /*useCounter.mockReturnValue({
    state: 10,
    increment: () => {},
  });*/ // Daba error entonces lo instancie en cada test

  test("Debe de mostrarse correctamente ", () => {
    // Instanciamos el useFetch para evitar errores
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    useCounter.mockReturnValue({
      state: 10,
      increment: () => {},
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar la infomación ", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Alejandro",
          quote: "Hola Mundo",
        },
      ],
      loading: false,
      error: null,
    });

    useCounter.mockReturnValue({
      state: 10,
      increment: () => {},
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    // Busca un elemento por la clase
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola Mundo");

    //Busca un elemento por html tag
    expect(wrapper.find("footer").text().trim()).toBe("Alejandro");
  });
});
