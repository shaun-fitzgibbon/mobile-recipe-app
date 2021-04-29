export type status =
  | 'resting'
  | 'invalid-email'
  | 'short-password'
  | 'authenticating'
  | 'redirecting'
  | 'not-authenticated'

export type sorting =
  | 'shortest-time'
  | 'longest-time'
  | 'a-z'
  | 'z-a'
  | 'least-shared'
  | 'most-shared'
  | 'least-tags'
  | 'most-tags'

export type visability = 'user' | 'shared'

export interface Filters {
  minTimeInMinutes: number
  maxTimeInMinutes: number
  visability: visability
  tags: string[]
}

export interface Ingredient {
  name: string
  amount: number
  unit:
    | 'grams'
    | 'kilograms'
    | 'teaspoons'
    | 'tablespoons'
    | 'milliliters'
    | 'liters'
    | 'cups'
    | 'small'
    | 'medium'
    | 'large'
}

export interface Recipe {
  id: string
  name: string
  image: string
  defaultServing: number
  created: Date
  owner: string
  shared: []
  prepTimeInMinutes: Number
  cookingTimeInMinutes: Number
  tags: string[]
  ingredients: Ingredient[]
  steps: string[]
}

export interface User {
  image: string
  email: string
  name: string
  password: string
}

export interface Views {
  login: {
    email: string
    password: string
    message: status | null
  }
  forgotPassword: {
    email: string
  }
  resetPassword: {
    newPassword: string
    confirmNewPassword: string
  }
  register: {
    name: string
    email: string
    newPassword: string
    confirmNewPassword: string
  }
  recipesList: {
    visability: visability
    textSearch: string
    soring: sorting
    filters: Filters
    recipes: Pick<
      Recipe,
      | 'name'
      | 'defaultServing'
      | 'prepTimeInMinutes'
      | 'cookingTimeInMinutes'
      | 'tags'
      | 'shared'
      | 'image'
    >[]
  }
  singleRecipe: Recipe
  user: User
}
