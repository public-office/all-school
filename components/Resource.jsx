import {styled } from 'stitches.config'
import { TagsList } from './TagsList'
import Link from 'next/link'

const Resource = styled('div', {
  h3: {
    textAlign: 'left',
    lineHeight: '1',
    letterSpacing: '-0.02em',
    fontSize: '$sans5',
    '@mobile': {
      lineHeight: '1.1',
    },
  },
  '.resource-header': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '1em 0',
    borderTop: '0.08em solid black',
    '@mobile': {
      padding: '2em 0 1em',
    },
  },
  '.resource-tags': {
    '.tag': {
      padding: '0 .5em',
      border: '0.08em solid black',
      borderRadius: '2.1rem',
      marginLeft: '.5em',
      '@mobile': {
        fontSize: '$sans4',
      },
      '&:hover': {
        borderColor: '$grey',
        textDecoration: 'none',
      },
    },
  },
  '.resource-footer': {
    padding: '.75em 0',
    letterSpacing: '-0.02em',
    fontSize: '$sans2',
    '@mobile': {
      fontSize: '$sans4',
    },
  },
})

export function ResourceItem({ id, title, acknowledgement, url, resource, tags, myKey }) {
 
  return (
    <Resource>
      <div className="resource-header">
        <div className="resource-tags">
          {tags &&
            tags.map((tags) => (
              <TagsList key={myKey} tags={tags} />
            ))
          }
        </div>
        <div className="resource-tags">
          {resource && 
            <a className="tag" href={resource.url} target="_blank">Download</a>
          }
          {url &&
            <a className="tag" href={url} target="_blank">Download</a>
          }
        </div>
      </div>
      <h3>{title}</h3>
      <div className="resource-footer">{acknowledgement}</div>
    </Resource>
  )
}