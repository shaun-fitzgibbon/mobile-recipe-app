import axios from 'axios'
import { Handler } from '@netlify/functions'

export const ADD_USER_QUERY = `
    mutation ($id: ID!, $firstName: String!, $lastName: String!, $email: String!) {
        createUser(
        data: { 
            id: $id 
            firstName: $firstName 
            lastName: $lastName 
            email: $email 
        }
        ) {
            _id
        }
    } 
`

const handler: Handler = async (event, context) => {
  try {
    if (!event.body) {
      throw new Error('Cannot be empty')
    }
    const { firstName, lastName } = JSON.parse(event.body)

    const { clientContext } = context

    if (!clientContext || !clientContext.user) {
      throw new Error('No user retrieved')
    }

    const response = await axios
      .post(
        'https://graphql.fauna.com/graphql',
        {
          query: ADD_USER_QUERY,
          variables: {
            id: clientContext.user.id,
            firstName,
            lastName,
            email: clientContext.user.email,
          },
        },
        {
          headers: {
            Authorization: 'Bearer fnAEIUTB8jACB5a3WbW-ZUyYlp8Vu_WTI95PcJBz',
          },
        }
      )
      .catch(console.error)

    return {
      statusCode: 200,
      body: 'success',
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: error.toString(),
    }
  }
}

export { handler }
