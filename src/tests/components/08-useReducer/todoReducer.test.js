import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en el archivo todoReducer.js", () => {
  test("Debe de retornar el state por defect ", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("Debe de agregar un TODO ", () => {
    const newTodo = {
      id: 3,
      description: "Nuevo todo de pruebas",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toEqual(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("Debe de borrar un TODO ", () => {
    const action = {
      type: "delete",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);

    expect(state.length).toEqual(1);
  });

  test("Debe hacer TOGGLE del TODO ", () => {
    const id = 2;
    const action = {
      type: "toggle",
      payload: id,
    };

    const state = todoReducer(demoTodos, action);

    const testState = state.filter((s) => s.id === id);

    expect(testState[0].done).toBe(true);
  });
});
