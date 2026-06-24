import { useState } from "react";

import { useQuery } from "@apollo/client/react";

import {
    GET_TODOS,
    SEARCH_TODOS
} from "../graphql/queries";

import type {
    GetTodosData,
    GetTodosVariables,
    SearchTodosData
} from "../types/Todo";

import TodoItem from "./TodoItem";

export default function TodoList() {

    const [filter, setFilter] = useState<
        "all" | "completed" | "incomplete"
    >("all");

    const [search, setSearch] =
        useState("");

    const [page, setPage] =
        useState(1);

    const limit = 5;

    const {
        loading,
        error,
        data
    } = useQuery<
        GetTodosData,
        GetTodosVariables
    >(
        GET_TODOS,
        {
            variables: {
                page,
                limit
            }
        }
    );

    const {
        data: searchData
    } = useQuery<SearchTodosData>(
        SEARCH_TODOS,
        {
            variables: {
                title: search
            },
            skip:
                search.trim() === ""
        }
    );

    const todos =
        search.trim() === ""
            ? data?.getTodos
            : searchData?.searchTodos;

    const filteredTodos =
        todos?.filter(
            (todo) => {

                if (
                    filter === "completed"
                )
                    return todo.completed;

                if (
                    filter === "incomplete"
                )
                    return !todo.completed;

                return true;

            }
        );

    return (

        <div>

            {
                loading && (
                    <h2>
                        Loading...
                    </h2>
                )
            }

            {
                error && (
                    <h2>
                        Error fetching todos:
                        {" "}
                        {error.message}
                    </h2>
                )
            }

            <input
                type="text"
                placeholder="Search todos..."
                value={search}
                onChange={(e) => {

                    setSearch(
                        e.target.value
                    );

                    setPage(1);

                }}
            />

            <br />
            <br />

            <div>

                <button
                    onClick={() =>
                        setFilter(
                            "all"
                        )
                    }
                >
                    All
                </button>

                <button
                    onClick={() =>
                        setFilter(
                            "completed"
                        )
                    }
                >
                    Completed
                </button>

                <button
                    onClick={() =>
                        setFilter(
                            "incomplete"
                        )
                    }
                >
                    Incomplete
                </button>

            </div>

            <br />

            {
                filteredTodos?.map(
                    (todo) => (

                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />

                    )
                )
            }

            {
                search.trim() === "" && (

                    <div>

                        <button
                            disabled={
                                page === 1
                            }
                            onClick={() =>
                                setPage(
                                    page - 1
                                )
                            }
                        >
                            Previous
                        </button>

                        <span>
                            {" "}
                            Page {page}
                            {" "}
                        </span>

                        <button
                            disabled={
                                (data?.getTodos.length ?? 0) < limit
                            }
                            onClick={() =>
                                setPage(
                                    page + 1
                                )
                            }
                        >
                            Next
                        </button>

                    </div>

                )
            }

        </div>

    );

}