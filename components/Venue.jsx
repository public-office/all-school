import { styled } from 'stitches.config'
import { Markdown } from 'components/Markdown'

const Venue = styled('div', {
  '.venue': {
    color: 'black',
    '&-single': {

    },
  },
})

export function VenueItem({venueName, venueDetails}) {
  return(
    <Venue className="venue-single">
      <span className="venue-title">{venueName}</span>
      <Markdown>{venueDetails}</Markdown>
    </Venue>
  )
}