import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../Hooks/useForm";

describe("Pruebas en el archivo useForm.js", () => {
  const initialForm = {
    name: "Alejandro",
    email: "alesalguero1223@gmail.com",
  };
  test("Debe de regresar un formulario por defecto ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toEqual("function");
    expect(typeof reset).toEqual("function");
  });

  test("Debe de cambiar el valor de formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));

    // Dejamos esa coma de primero para decir que no nos interesa el primer elemento
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({ target: { name: "name", value: "Fernando" } });
    });

    const [formValues] = result.current;

    expect(formValues).toEqual({
      name: "Fernando",
      email: "alesalguero1223@gmail.com",
    });
  });

  test("Debe de re-establecer el formulario al llamar el reset ", () => {
    const { result } = renderHook(() => useForm(initialForm));

    // Dejamos esa coma de primero para decir que no nos interesa el primer elemento
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({ target: { name: "name", value: "Fernando" } });
    });

    act(() => {
      reset();
    });

    const [formValues] = result.current;

    expect(formValues).toEqual(initialForm);
  });
});
