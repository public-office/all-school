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
                    alternativeText
                    caption
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
              nextWaveLogos {
                data {
                  attributes {
                    url
                    alternativeText
                    caption
                  }
                }
              }
              allSchoolLogos {
                data {
                  attributes {
                    url
                    alternativeText
                    caption
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  const { information, marquee, access, instagram, facebook, twitter, nextWaveLogos, allSchoolLogos} = get(data, 'information.data.attributes')

  const events = get(data, 'events.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
      mainImage: get(data, 'attributes.mainImage.data.attributes'),
    }
  })

  return {
    props: {
      page: {
        access,
        events,
        marquee,
        information,
        nextWaveLogos: nextWaveLogos.data.map(logo => get(logo, 'attributes')),
        allSchoolLogos: allSchoolLogos.data.map(logo => get(logo, 'attributes')),
        instagram, 
        facebook,
        twitter,
      },
    },
  }
}

export default Landing
