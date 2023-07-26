import { styled } from 'stitches.config'
import Link from 'next/link'

const ProducerSingle = styled('div', {

})

export function Producer({id, mykey, name, project, img}) {

  console.log(name);
  
  return(
    <ProducerSingle>
      <div mykey={id}>
        <figure style={{ backgroundImage: `url(${img.url})`, backgroundSize: 'cover', }}>
        </figure>
        <figcaption>
          <span className="producer-single-title">{name}</span>
          <span className="producer-single-project">{project}</span>
        </figcaption>
      </div>
    </ProducerSingle>
  )
}