import { Provider } from "react-redux";
import store from "./modules/store";
import { lazy, Suspense } from 'react'; 

const Todo = lazy(() => import('./components/TodoApp/index').then((module) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(module as any);
    }, 5000)
  })
}));

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Todo />
      </Suspense>
    </Provider>
  );
};