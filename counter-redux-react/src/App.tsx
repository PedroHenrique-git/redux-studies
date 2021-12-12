import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./modules/store";

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
