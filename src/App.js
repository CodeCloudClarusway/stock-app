import { Provider } from "react-redux";
import Login from "./pages/Login";
import { store } from "./App/store";

function App() {
  return (
    <Provider store={store}>
      <Login/>
    </Provider>
  );
}

export default App;
