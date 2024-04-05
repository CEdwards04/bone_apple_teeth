// operations.js

export const listRecipes = /* GraphQL */ `
  query ListRecipes {
    listRecipes {
      items {
        id
        name
      }
    }
  }
`;

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe($name: String!) {
    createRecipe(input: { name: $name }) {
      id
      name
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
  mutation UpdateRecipe($id: ID!, $name: String!) {
    updateRecipe(input: { id: $id, name: $name }) {
      id
      name
    }
  }
`;
