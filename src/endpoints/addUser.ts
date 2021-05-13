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
  const { firstName, lastName } = JSON.parse(event.body)

  return {
    // await axios
    // .post(
    //   'https://graphql.fauna.com/graphql',
    //   {
    //     query: ADD_USER_QUERY,
    //     variables: {
    //       id: user.id,
    //       firstName,
    //       lastName,
    //       email,
    //     },
    //   },
    //   {
    //     headers: {
    //       Authorization: 'Bearer fnAEIUTB8jACB5a3WbW-ZUyYlp8Vu_WTI95PcJBz',
    //     },
    //   }
    // )
    // .catch(console.error)

    statusCode: 200,
    body: JSON.stringify({ context }),
  }
}

export { handler }
