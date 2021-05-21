import React from "react";
import Adapter from "enzyme-adapter-react-16";
const { shallow, configure } = require("enzyme");
import { TodoAddForm } from "../../../components/08-useReducer/TodoAddForm";

configure({ adapter: new Adapter() });

describe("Pruebas en el componente <TodoAddForm />", () => {
  const handleNewTodo = jest.fn();
  const wrapper = shallow(<TodoAddForm handleNewTodo={handleNewTodo} />);
  test("Debe mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("NO debe de llamar handleAddTodo ", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit"); // Esto es una funcion

    // Se tiene que enviar como parametro el e de preventDefault
    formSubmit({ preventDefault() {} });

    expect(handleNewTodo).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar la funcion handleNewTodo ", () => {
    // Valor que se va a cambiar
    const value = "Nuevo TODO de prueba";

    // Buscamos la caja de texto y cambiamos el input
    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });

    // definimos el evento
    const formSubmit = wrapper.find("form").prop("onSubmit"); // Esto es una funcion

    // Se tiene que enviar como parametro el e de preventDefault
    formSubmit({ preventDefault() {} });

    expect(handleNewTodo).toHaveBeenCalledTimes(1);

    expect(handleNewTodo).toHaveBeenCalledWith(expect.any(Object)); // {}
    /*expect(handleNewTodo).toHaveBeenCalledTimes({
      id: expect.any(Number),
      description: value,
      done: false,
    });*/

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
