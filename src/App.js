import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn JavaScript' />
      <Todo text='Learn Node.js' />
      <Todo text='Learn React' />
    </div>
  );
}

export default App;
