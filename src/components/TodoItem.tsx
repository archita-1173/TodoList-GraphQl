import { useMutation } from "@apollo/client/react";

import {
    UPDATE_TODO,
    DELETE_TODO
} from "../graphql/mutations";

import { GET_TODOS } from "../graphql/queries";

import type {
    TodoItemProps,
    UpdateTodoData,
    UpdateTodoVariables,
    DeleteTodoData,
    DeleteTodoVariables
} from "../types/Todo";

export default function TodoItem({
    todo
}: TodoItemProps) {

    const [updateTodo] = useMutation<
        UpdateTodoData,
        UpdateTodoVariables
    >(
        UPDATE_TODO,
        {
            refetchQueries: [
                {
                    query: GET_TODOS,
                    variables: {
                        page: 1,
                        limit: 5
                    }
                }
            ]
        }
    );

    const [deleteTodo] = useMutation<
        DeleteTodoData,
        DeleteTodoVariables
    >(
        DELETE_TODO,
        {
            refetchQueries: [
                {
                    query: GET_TODOS,
                    variables: {
                        page: 1,
                        limit: 5
                    }
                }
            ]
        }
    );

    const handleToggle = async () => {

        await updateTodo({

            variables: {

                id: todo.id,

                completed: !todo.completed

            }

        });

    };

    const handleDelete = async () => {

        await deleteTodo({

            variables: {

                id: todo.id

            }

        });

    };

    return (

        <div>

            <h3>

                {todo.completed ? "✅" : "⬜"}

                {" "}

                {todo.title}

            </h3>

            <button
                onClick={handleToggle}
            >
                Toggle
            </button>

            <button
                onClick={handleDelete}
            >
                Delete
            </button>

        </div>

    );

}