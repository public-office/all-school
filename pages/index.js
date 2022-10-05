import { Landing } from 'templates/Landing'
import { client } from 'lib/strapi'
import { gql } from '@apollo/client'
import get from 'lodash/get'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        events {
          data {
            id
            attributes {
              title
              eventUrl
              mainImage {
                data {
                  attributes {
                    url
                  }
                }
              }
              startDate
              endDate
              description_short
              description_long
            }
          }
        }
        information {
          data {
            attributes {
              information
              marquee
              access
              instagram
              facebook
              twitter
              nextwave_logo1
              nextwave_logo2
            }
          }
        }
      }
    `,
  })

  const { information, marquee, access, instagram, facebook, twitter, nextwave_logo1, nextwave_logo2 } = get(data, 'information.data.attributes')

  const events = get(data, 'events.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
      mainImage: get(data, 'attributes.mainImage.data.attributes.url'),
    }
  })

  return {
    props: {
      page: {
        access,
        events,
        marquee,
        information,
        instagram, 
        facebook,
        twitter,
        nextwave_logo1,
        nextwave_logo2
      },
    },
  }
}

export default Landing
