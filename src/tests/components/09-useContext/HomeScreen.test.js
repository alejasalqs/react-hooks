import React from "react";
import Adapter from "enzyme-adapter-react-16";
const { shallow, configure } = require("enzyme");
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

configure({ adapter: new Adapter() });
describe("Pruebas en el componente <HomeScreen />", () => {
  const user = {
    name: "Alejandro",
    email: "alejandro@test.com",
  };
  // En este caso es mejor usar mount
  // Pero solo es compatible con react 16 y este es 17
  const wrapper = shallow(
    // Como el componente necesita un useContext hacemos eso de esta manera
    <UserContext.Provider value={user}>
      <HomeScreen />
    </UserContext.Provider>
  );
  test("Debe de mostrarse correctmente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
