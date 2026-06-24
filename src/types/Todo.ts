export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

// Added this missing interface so TodoItem.tsx stops throwing an error!
export interface TodoItemProps {
    todo: Todo;
}

export interface GetTodosData {
    getTodos: Todo[];
}

export interface GetTodoData {
    getTodo: Todo;
}

export interface CreateTodoVariables {
    title: string;
}

export interface CreateTodoData {
    createTodo: Todo;
}

export interface UpdateTodoVariables {
    id: string;
    completed?: boolean;
    title?: string;
}

export interface UpdateTodoData {
    updateTodo: Todo;
}

export interface DeleteTodoVariables {
    id: string;
}

export interface DeleteTodoData {
    deleteTodo: boolean;
}