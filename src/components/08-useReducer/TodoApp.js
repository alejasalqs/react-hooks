import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { TodoAddForm } from "./TodoAddForm";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
// Un useReducer es una alternativa al useState
// Es mejor para estados muy complejos

const init = () => {
  // Si el primer valor es null retorna un objeto vacio
  return JSON.parse(localStorage.getItem("todos")) || []; //Lo que retornar esta funcion será el initialState
};

export const TodoApp = () => {
  //1 argumento: funcion del reducer
  // 2 argumento: estado inicial
  // 3 argumento: Funcion para iniciar states si es procesado o realiza varias acciones
  // dispatch: dispara las acciones al reducer
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    // si los todos cambian grabamos en el localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };
  const handleDelete = (todoId) => {
    const action = {
      // creamos la accion
      type: "delete",
      payload: todoId,
    };

    // hacemos dispatch del reducer
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      // otra manera de hacer el dispatch
      type: "toggle",
      payload: todoId,
    });
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    // Esta funcion es la encargada de llamar el reducer
    // Se puede mandar como referencia a un componente hijo y siempre va a saber
    // a que reducer pertenece porque se pasan por referencia en JS
    dispatch(action);

    reset();
  };*/

  return (
    <>
      <h1>Todo APP ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-md-6">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-md-6">
          <TodoAddForm handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
