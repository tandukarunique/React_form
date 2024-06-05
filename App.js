import "./App.css";
import * as yup from "yup";
import { userSchema } from "./Validations/UserValidation";
function App() {
  const createUser = (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    console.log(formData);
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
