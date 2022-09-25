import { Landing } from 'templates/Landing'
import { client } from 'lib/strapi'
import { gql } from '@apollo/client'
import get from 'lodash/get'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        information {
          data {
            attributes {
              information
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      page: {
        information: get(data, 'information.data.attributes.information')
      }
    },
  }
}

export default Landing
