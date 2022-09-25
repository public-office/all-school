import { ApolloClient, InMemoryCache } from '@apollo/client'
import assert from 'assert'

assert(process.env.NEXT_PUBLIC_STRAPI_TOKEN, 'NEXT_PUBLIC_STRAPI_TOKEN env var not found')
assert(process.env.NEXT_PUBLIC_STRAPI_URL, 'NEXT_PUBLIC_STRAPI_URL env var not found')

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_URL + '/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
  }
})
