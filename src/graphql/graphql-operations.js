// operations.js

export const listRecipes = /* GraphQL */ `
  query ListRecipes {
    listRecipes {
      items {
        id
        name
        ingredients
        instructions
      }
    }
  }
`;

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe($name: String!, $instructions: String!, $ingredients: String!) {
    createRecipe(input: { name: $name, instructions: $instructions, ingredients: $ingredients }) {
      id
      name
      ingredients
      instructions
    }
  }
`;


export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe($id: ID!) {
    deleteRecipe(input: { id: $id }) {
      id
    }
  }
`;

export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe($id: ID!, $name: String!, $ingredients: String!, $instructions: String!) {
    updateRecipe(input: { id: $id, name: $name, ingredients: $ingredients, instructions: $instructions }) {
      id
      name
      ingredients
      instructions
    }
  }
`;

export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
  ) {
    updateUser(input: $input) {
      id
      name
      email
      phone
      updatedAt
      createdAt
      __typename
    }
  }
`;

export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
  ) {
    deleteUser(input: $input) {
      id
      name
      email
      phone
      updatedAt
      createdAt
      __typename
    }
  }
`;
