import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <div>
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
