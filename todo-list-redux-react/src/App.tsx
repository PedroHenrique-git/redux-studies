import { Provider } from "react-redux";
import store from "./modules/store";
import { lazy, Suspense } from 'react'; 

const Todo = lazy(() => import('./components/TodoApp/index'));

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Todo />
      </Suspense>
    </Provider>
  );
};