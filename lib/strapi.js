import axios from 'axios'

export const strapi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
})
