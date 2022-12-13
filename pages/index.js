import { Landing } from 'templates/Landing'
import { client } from 'lib/strapi'
import { gql } from '@apollo/client'
import get from 'lodash/get'
import { theme } from 'stitches.config'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        events (pagination: { limit: 100 }) {
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
              startTime
              endTime
              eventCost
              location
              eventPdf
              description_short
              description_long
            }
          }
        }
        artists (pagination: {limit: 100}) {
          data {
            id
            attributes {
              firstName
              lastName
              website
              biography
            }
          }
        }
        essays {
          data {
            id
            attributes {
              essayTitle
              essayURL
              essayAuthor
              essayTagline
              essayText
            }
          }
        }
        venues (pagination: {limit: 10}) {
          data {
            id
            attributes {
              venueName
              venueAddress
              venueDetails
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
  const { information, marquee, access, instagram, facebook, twitter, nextWaveLogos, allSchoolLogos } = get(data, 'information.data.attributes')

  const events = get(data, 'events.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
      mainImage: get(data, 'attributes.mainImage.data.attributes'),
    }
  })

  const artists = get(data, 'artists.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
    }
  })

  const essays = get(data, 'essays.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
    }
  })

  const venues = get(data, 'venues.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
    }
  })

  const setups = {
    items: [
      {
        color: `${theme.colors.purple.value}`,
        img1: '../images/as_bluesky.png',
        img2: '../images/as_mercurial.png',
      },
      {
        color: `${theme.colors.green.value}`,
        img1: '../images/as_jerrycan.png',
        img2: '../images/as_classes.png',
      },
      {
        color: `${theme.colors.orange.value}`,
        img1: '../images/as_oranges.png',
        img2: '../images/as_phone.png',
      }
    ]
  }

  const items = setups.items.map((item, id) => ({ ...item, id }));
  const setup = items[Math.floor(Math.random() * items.length)];

  console.log(setup, access)

  return {
    props: {
      page: {
        access,
        events,
        essays,
        artists,
        venues,
        marquee,
        information,
        nextWaveLogos: nextWaveLogos.data.map(logo => get(logo, 'attributes')),
        allSchoolLogos: allSchoolLogos.data.map(logo => get(logo, 'attributes')),
        instagram, 
        facebook,
        twitter, 
        setup,
      },
    },
  }
}

export default Landing
