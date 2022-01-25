import Landing from 'templates/Landing'
import { getPage } from 'lib/util'

export async function getServerSideProps() {
  const props = await getPage('/splash.json')
  return { props }
}

export default Landing
