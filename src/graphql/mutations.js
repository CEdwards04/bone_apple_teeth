/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe($input: CreateRecipeInput!) {
    createRecipe(input: $input) {
      id
      name
      __typename
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe($input: UpdateRecipeInput!) {
    updateRecipe(input: $input) {
      id
      name
      __typename
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe($input: DeleteRecipeInput!) {
    deleteRecipe(input: $input) {
      id
      name
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
