import { client } from 'lib/strapi'
import { gql } from '@apollo/client'
import get from 'lodash/get'
import { EventsList } from 'components/EventsList'

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
      }
    `,
  })

  const events = get(data, 'events.data').map((data) => {
    return {
      id: data.id,
      ...data.attributes,
      mainImage: get(data, 'attributes.mainImage.data.attributes'),
    }
  })

  console.log(events)

  return {
    props: {
      page: {
        title: "Events",
        events: JSON.parse(JSON.stringify(events)),
      },
    },
  }
}

export default EventsList;