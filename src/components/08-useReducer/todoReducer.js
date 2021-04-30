export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add": // Agrega un nuevo registro utilizando el espread operator
      return [...state, action.payload];
    case "delete": // filter regresa un nuevo arreglo
      return state.filter((todo) => todo.id !== action.payload); // En este caso el payload es el id
    case "toggle": //version corta del toggle
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "toggle-old": // version larga del toggle
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          // Es importante retornar algo siempre en este caso
          return todo;
        }
      });

    default:
      return state; // Es mejor siempre definir el defaul
  }
};
