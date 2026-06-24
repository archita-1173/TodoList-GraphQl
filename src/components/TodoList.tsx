import { useQuery } from "@apollo/client/react";

import { GET_TODOS } from "../graphql/queries";

import type {
    GetTodosData
} from "../types/Todo";

import TodoItem from "./TodoItem";

export default function TodoList() {

    const {
        loading,
        error,
        data
    } = useQuery<GetTodosData>(
        GET_TODOS
    );

    if (loading)
        return <h2>Loading...</h2>;

    if (error)
        return <h2>Error fetching todos</h2>;

    return (

        <div>

            {

                data?.getTodos.map(
                    (todo) => (

                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />

                    )
                )

            }

        </div>

    );

}