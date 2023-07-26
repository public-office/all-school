import { client } from 'lib/strapi'
import { gql } from '@apollo/client'
import get from 'lodash/get'
import { EssaySingle } from 'components/EssaySingle'
import { EssayList } from 'components/EssayList'
import { VideoList } from 'components/VideoList'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
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
      }
    `,
  })

  const artists = get(data, 'artists.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
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
    }
  })

  console.log(videos)

  return {
    props: {
      page: {
        title: "Commissions",
        essays: JSON.parse(JSON.stringify(essays)),
        artists: JSON.parse(JSON.stringify(artists)),
        videos: JSON.parse(JSON.stringify(videos)),
      },
    },
  }
}

export default EssayList;