import { renderHook, act } from "@testing-library/react-hooks";
import { useFetch } from "../../Hooks/useFetch";

describe("Pruebas en el archivo useFetch.js", () => {
  test("Debe de retornar la información por defecto ", () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("Debe de contener la información deseada ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );

    // Esperamos que se resuelva la petición
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("Debe de manejar el error ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/apid/users?page=2`)
    );

    // Esperamos que se resuelva la petición
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("No se pudo cargar la información");
  });
});
