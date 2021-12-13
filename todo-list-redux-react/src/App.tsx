import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import store from "./modules/store";

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};