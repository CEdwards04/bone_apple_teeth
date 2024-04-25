// operations.js

export const listRecipes = /* GraphQL */ `
  query ListRecipes {
    listRecipes {
      items {
        id
        name
        ingredients
        instructions
        isFavorite
      }
    }
  }
`;

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe($name: String!, $instructions: String!, $ingredients: String!, $isFavorite: Boolean) {
    createRecipe(input: { name: $name, instructions: $instructions, ingredients: $ingredients, isFavorite: $isFavorite }) {
      id
      name
      ingredients
      instructions
      isFavorite
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
  mutation UpdateRecipe($id: ID!, $name: String!, $ingredients: String!, $instructions: String!, $isFavorite: Boolean) {
    updateRecipe(input: { id: $id, name: $name, ingredients: $ingredients, instructions: $instructions, isFavorite: $isFavorite }) {
      id
      name
      ingredients
      instructions
      isFavorite
    }
  }
`;

export const updateUserData = /* GraphQL */ `
  mutation UpdateUserData(
    $input: UpdateUserDataInput!
  ) {
    updateUserData(input: $input) {
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

export const deleteUserData = /* GraphQL */ `
  mutation DeleteUserData(
    $input: DeleteUserDataInput!
  ) {
    deleteUserData(input: $input) {
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
