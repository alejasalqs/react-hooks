import React from "react";
import Adapter from "enzyme-adapter-react-16";
const { shallow, configure } = require("enzyme");
import { demoTodos } from "../../fixtures/demoTodos";
import { TodoList } from "../../../components/08-useReducer/TodoList";

configure({ adapter: new Adapter() });

describe("Pruebas en el component <TodoList />", () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );

  test("Debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener 2 elementos <TodoListItem /> ", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
  });

  test("Los <TodoListItem /> deben de tener todos los props ", () => {
    /*expect(wrapper.find("TodoListItem").at(0).prop("todos")).toEqual(
      expect.any(Function)
    );*/

    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );

    expect(wrapper.find("TodoListItem").at(0).prop("handleToggle")).toEqual(
      expect.any(Function)
    );
  });
});
