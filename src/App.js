import { Provider } from "react-redux";
import Login from "./pages/Login";
import { persistor, store } from "./App/store";
import AppRouter from "./Router/AppRouter";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
