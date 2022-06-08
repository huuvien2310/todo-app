import './App.css';
import React from 'react';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todoText, setTodoText] = React.useState('');
  const [submit, setSubmit] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      body: JSON.stringify({
        userId: 1,
        id: todos.length + 1,
        title: todoText,
        completed: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    setTodos([...todos, json]);
    setTodoText('');
    setSubmit(true);
  }

  async function fetchData() {
    const response = await fetch('http://localhost:5000/api/todos');
    const data = await response.json();
    setTodos(data);
  }

  React.useEffect(() => {
    fetchData();
    setSubmit(false);
  }, [submit]);

  return (
    <div className='code'>
      <div className="flex flex-column items-center bg-green white pa3 fl-1">
      <h1>
        Todo List {" "}
        <span role='img' aria-label='emoji'>
          📝
        </span>
      </h1>
      <form className="mb3" onSubmit={handleSubmit}>
        <input
          className="pa2 f4 br2 mr3"
          type="text"
          placeholder='Add a todo'
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
        />
        <button className="pa2 f4 bg-green br2" type="submit">
          Add
        </button>
      </form>
      </div>
      <div className='flex flex-column items-center w-100 pa3 fl-1'>
        {todos.map(todo => (
          <div className='flex items-center justify-between pa3' key={todo.id}>
            <p className='mr5'>{todo.title}</p>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                const newTodos = [...todos];
                newTodos[todo.id - 1].completed = !newTodos[todo.id - 1].completed;
                setTodos(newTodos);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
