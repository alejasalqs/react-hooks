import React from "react";
import Adapter from "enzyme-adapter-react-16";
const { shallow, configure } = require("enzyme");
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

configure({ adapter: new Adapter() });

describe("Pruebas en el componente <TodoListItem />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("Debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe llamar la funcion handleDelete ", () => {
    //jest.fn()
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("Debe llamar la funcion handleToggle ", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("Debe de mostrar el texto correctamente ", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toEqual(`1. ${demoTodos[0].description.trim()}`);
  });

  test("Debe de tener la clase complete si todo.done === true ", () => {
    const demoTodo = {
      id: 1,
      description: "Pruebas de TODO",
      done: true,
    };

    const wrapper = shallow(
      <TodoListItem
        todo={demoTodo}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
