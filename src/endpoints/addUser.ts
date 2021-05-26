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
    if (!event.body) throw new Error('body cannot be empty')
    const { firstName, lastName } = JSON.parse(event.body)
    const { clientContext } = context
    if (!clientContext) throw new Error('No user retrieved')

    const {
      user: { sub: id, email },
    } = clientContext

    const response = await axios.post(
      'https://graphql.fauna.com/graphql',
      {
        query: ADD_USER_QUERY,
        variables: {
          id,
          firstName,
          lastName,
          email,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
        },
      }
    )

    return {
      statusCode: 200,
      body: JSON.stringify({ context }),
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: error.toString(),
    }
  }
}

export { handler }
