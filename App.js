import "./App.css";
import * as yup from "yup";
import { userSchema } from "./validations/UserValidation";
function App() {
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    const isvalid = await userSchema.isValid(formData);
  };
  return (
    <div className="App">
      <form onSubmit={createUser}>
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="email@email.com" />
        <input type="text" placeholder="password123" />
        <input type="text" submit />
      </form>
    </div>
  );
}
export default App;
