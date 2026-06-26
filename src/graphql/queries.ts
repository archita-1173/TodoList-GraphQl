import { gql } from "@apollo/client";
//is to view the code --basically its a get method
export const GET_TODOS = gql`
  query GetTodos(
    $page: Int,
    $limit: Int
  ) {
    getTodos(
      page: $page,
      limit: $limit
    ) {
      id
      title
      completed
    }
  }
`;

export const GET_TODO = gql`
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      title
      completed
    }
  }
`;

export const SEARCH_TODOS = gql`
  query SearchTodos($title: String!) {
    searchTodos(title: $title) {
      id
      title
      completed
    }
  }
`;