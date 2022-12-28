import { createContext, useState } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{}> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevState) => [...prevState, newTodo]);
  };

  const onDeleteTodoHandler = (selectedTodoId: string) => {
    setTodos((prevState) =>
      prevState.filter((todo) => todo.id !== selectedTodoId)
    );
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: onDeleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
