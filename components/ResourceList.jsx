import { ResourceItem } from './Resource'

export function ResourceList({ resources }) {

  return (
    <section className='resources'>
      {resources != "" &&
        <h2>Resources</h2>
      }
      {resources && resources.map(resource => (
        <ResourceItem
          key={resource.id}
          id={resource.id}
          title={resource.title}
          acknowledgement={resource.acknowledgement}
          url={resource.url}
          resource={resource.resource}
          resource_tags={resource.tags}
        />
      ))}
    </section>
  );
}