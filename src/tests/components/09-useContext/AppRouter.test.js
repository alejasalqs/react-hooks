import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { AppRouter } from "../../../components/09-useContext/Router/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";
const { shallow, configure } = require("enzyme");
configure({ adapter: new Adapter() });
describe("Pruebas en el componente <AppRouter />", () => {
  const user = {
    id: 1,
    name: "Aleajndro",
    email: "aleajandro@test.com",
  };
  const wrapper = shallow(
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
  test("Debe mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
