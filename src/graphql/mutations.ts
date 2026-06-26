import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
//is to make changes in the code --basically its a post method,put method,delete method
    mutation CreateTodo(
        $title: String!
    ) {

        createTodo(
            input: {
                title: $title
            }
        ) {

            id
            title
            completed

        }

    }

`;

export const UPDATE_TODO = gql`//part of mutations is done here

    mutation UpdateTodo(
        $id: ID!,
        $title: String,
        $completed: Boolean
    ) {

        updateTodo(
            input: {
                id: $id
                title: $title
                completed: $completed
            }
        ) {

            id
            title
            completed

        }

    }

`;

export const DELETE_TODO = gql`

    mutation DeleteTodo(
        $id: ID!
    ) {

        deleteTodo(
            id: $id
        )

    }

`;