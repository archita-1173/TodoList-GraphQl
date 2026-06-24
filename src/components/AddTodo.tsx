import { useState } from "react";

import { useMutation } from "@apollo/client/react";
import { CREATE_TODO } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/queries";

import type{
    CreateTodoData,
    CreateTodoVariables
} from "../types/Todo";

export default function AddTodo() {

    const [title, setTitle] = useState("");

    const [createTodo] = useMutation<
        CreateTodoData,
        CreateTodoVariables
    >(
        CREATE_TODO,
        {
            refetchQueries: [GET_TODOS]
        }
    );

    const handleSubmit = async () => {

        if (!title.trim())
            return;

        await createTodo({

            variables: {

                title

            }

        });

        setTitle("");

    };

    return (

        <div>

            <input
                type="text"
                placeholder="Enter todo"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
            />

            <button
                onClick={handleSubmit}
            >
                Add Todo
            </button>

        </div>

    );

}