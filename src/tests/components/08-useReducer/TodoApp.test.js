import React from "react";
import Adapter from "enzyme-adapter-react-16";
const { shallow, configure, mount } = require("enzyme");
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

configure({ adapter: new Adapter() });

describe("Pruebas en el componente <TodoApp />", () => {
  //const handleAddTodo
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});

  test("Debe de mostrarse correctamen ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de agregar un TODO ", () => {
    // El mount se usa para probar la aplicacion en contexto
    // Trae la informacion de los hijos entre otras cosas
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAddForm").prop("handleNewTodo")(demoTodos[0]);

      wrapper.find("TodoAddForm").prop("handleNewTodo")(demoTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("Todo APP (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("Debe eliminar un todo ", () => {
    wrapper.find("TodoAddForm").prop("handleNewTodo")(demoTodos[0]);
    wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);

    expect(wrapper.find("h1").text().trim()).toBe("Todo APP (0)");
  });
});
