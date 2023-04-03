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
        videos (pagination: {limit: 100}) {
          data {
            id
            attributes {
              title
              homepage
              context
              artists {
                data {
                  attributes {
                    firstName
              			lastName
                  }
                }
              }
              youtube_embed
              video {
                data {
                  attributes {
                    url
                  }
                }
              }
              placeholder {
                data {
                  attributes {
                    url
                  }
                }
              }
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
              iframe
              tags {
                data {
                  attributes {
                    title
                  }
                }
              }
              mainImage {
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
        resources (pagination: {limit: 100}) {
    			data {
            id
            attributes {
              title
              acknowledgement
              url
              resource {
                data {
                  attributes {
                    url
                  }
                }
              }
              tags {
                data {
                  attributes {
                    title
                  }
                }
              }
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

  const resources = get(data, 'resources.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
      resource: get(data, 'attributes.resource.data.attributes'),
      tags: get(data, 'attributes.tags.data.attributes'),
    }
  })

  const videos = get(data, 'videos.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
      video: get(data, 'attributes.video.data.attributes'),
      placeholder: get(data, 'attributes.placeholder.data.attributes'),
    }
  })

  const essays = get(data, 'essays.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
      mainImage: get(data, 'attributes.mainImage.data.attributes'),
      tags: get(data, 'attributes.tags.data.attributes'),
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
        color: `${theme.colors.yellow.value}`,
      }
    ]
  }

  const items = setups.items.map((item, id) => ({ ...item, id }));
  const setup = items[Math.floor(Math.random() * items.length)];

  console.log(resources)

  return {
    props: {
      page: {
        access,
        events,
        essays: JSON.parse(JSON.stringify(essays)),
        artists,
        resources: JSON.parse(JSON.stringify(resources)),
        videos: JSON.parse(JSON.stringify(videos)),
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
