import React from "react";
import Adapter from "enzyme-adapter-react-16";
const { shallow, configure } = require("enzyme");
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

configure({ adapter: new Adapter() });
describe("Pruebas en el componente <LoginScreen />", () => {
  const setUser = jest.fn();
  const user = {
    name: "Alejandro",
    email: "alejandro@test.com",
  };
  // En este caso es mejor usar mount
  // Pero solo es compatible con react 16 y este es 17
  const wrapper = shallow(
    <UserContext.Provider value={(user, setUser)}>
      <LoginScreen />
    </UserContext.Provider>
  );
  test("Debe mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe ejecutar el setUser con el argumento esperado ", () => {
    // Esta prueba no pasa porque se necesita el mount()
    wrapper.find("button").prop("onClick");

    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: "Alejandro Salguero",
      email: "alejandro@mail.com",
    });
  });
});
