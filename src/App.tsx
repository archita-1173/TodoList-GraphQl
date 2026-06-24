import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {

    return (

        <div>

            <h1>
                GraphQL Todo App
            </h1>

            <AddTodo />

            <hr />

            <TodoList />

        </div>

    );

}

export default App;