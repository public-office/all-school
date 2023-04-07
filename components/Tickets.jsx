import { styled } from 'stitches.config'

const TicketRow = styled('div', {
  '.buttons': {
    width: '100%',
    marginTop: '0',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumnGap: '1em',
    padding: '1em',
    marginBottom: '2em',
    '@mobile': {
      gridTemplateColumns: '1fr',
      padding: '2em',
    },
  },
  h2: {
    fontSize: '$sans5',
    textAlign: 'center',
    padding:' 1.5em 0 0',
    position: 'relative',
  },
  button: {
    background: '$lightgrey',
    borderRadius: '.5em',
    height: '12em',
    letterSpacing: '-0.01em',
    padding: '1em',
    fontSize: '$sans2',
    '@mobile': {
      marginBottom: '1.5em',
      height: '36em',
      borderRadius: '1em',
    },
    a: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
    },
    '&:first-of-type': {
      background: '$yellow',
      '&:hover': {
        background: '$lightgrey',
      },
    },
    '&:last-of-type': {
      background: '$yellow',
      '&:hover': {
        background: '$lightgrey',
      },
    },
    span: {
      display: 'block',
      textAlign: 'center',
      '@mobile': {
        fontSize: '$sans5',
      }
    },
    '&:hover': {
      background: '$yellow',
      a: {
        textDecoration: 'none',
        color: 'black !important',
      },
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
      <h2> Tickets</h2>
      <div className="buttons">
        <button id="ticket1"><a target="_blank" href="https://tix.nextwave.org.au/Events/All-School-Crit-Club-Online-"><span>Crit Club</span><span className="num">A</span><span>Canberra</span></a></button>
        <button id="ticket2"><a target="_blank" href="https://tix.nextwave.org.au/Events/All-School-Crit-Club-VIC-"><span>Crit Club</span><span className="num">B</span><span>Melbourne</span></a></button>
        <button id="ticket3"><a target="_blank" href="https://tix.nextwave.org.au/Events/All-School-Crit-Club-ACT-"><span>Crit Club</span><span className="num">C</span><span>Online</span></a></button>
      </div>
    </TicketRow>
  )
}

export default Tickets