import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../Hooks/useCounter";

describe("Pruebas en useCounter.js", () => {
  test("Debe de retornar valores por defecto ", () => {
    // Para probar un hook hay que renderizarlo
    // para hacer esto usamos el renderHook del @testing-library/react-hooks
    const { result } = renderHook(() => useCounter());
    expect(result.current.state).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.resetCounter).toBe("function");
  });

  test("Debe de retornar el mismo valor que se envia por parametro en el counter ", () => {
    const { result } = renderHook(() => useCounter(70));
    expect(result.current.state).toBe(70);
  });

  test("Debe de incrementar el counter en +1 ", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    // de esta manera se prueba una funcion dentro de un hook
    act(() => increment());

    const { state } = result.current;
    expect(state).toBe(11);
  });

  test("Debe de disminuir el counter en -1 ", () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    // de esta manera se prueba una funcion dentro de un hook
    act(() => decrement());

    const { state } = result.current;
    expect(state).toBe(9);
  });

  test("Debe de resetear los valores del counter  ", () => {
    const { result } = renderHook(() => useCounter());
    const { resetCounter, state, increment } = result.current;

    // de esta manera se prueba una funcion dentro de un hook
    act(() => increment());

    act(() => resetCounter());

    expect(state).toBe(10);
  });
});
