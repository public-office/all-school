import { styled } from 'stitches.config'

const TicketRow = styled('div', {
  width: '100%',
  marginTop: '0',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridColumnGap: '1em',
  padding: '1em',
  marginBottom: '2em',
  button: {
    background: '$lightgrey',
    borderRadius: '.5em',
    height: '12em',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    letterSpacing: '-0.01em',
    padding: '1em',
    fontSize: '$sans2',
    '&:first-of-type': {
      background: '$yellow',
      '&:hover': {
        background: '$lightgrey',
      },
    },
    span: {
      display: 'block',
      textAlign: 'center',
    },
    '&:hover': {
      background: '$yellow',
      // border: 'none',
      // color: 'white',
    },
    '.num': {
      fontSize: '$sans5',
    },
  },
})

export function Tickets() {
  return (
    <TicketRow>
      <button id="ticket1"><span>Ticket</span><span className="num">1</span><span>Ngambri (Canberra)</span></button>
      <button id="ticket2"><span>Ticket</span><span className="num">2</span><span>Naarm (Melbourne)</span></button>
      <button id="ticket3"><span>Ticket</span><span className="num">3</span><span>Online (Internet)</span></button>
    </TicketRow>
  )
}

export default Tickets