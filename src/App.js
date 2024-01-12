import { Provider } from "react-redux";
import Login from "./pages/Login";
import { store } from "./App/store";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
