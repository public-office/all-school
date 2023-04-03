import { ResourceItem } from './Resource'

export function ResourceList({ resources }) {

  console.log(resources);
  return (
    <section className='resources'>
      <h2>Resources</h2>
      {resources && resources.map(resource => (
        <ResourceItem
          key={resource.id}
          id={resource.id}
          title={resource.title}
          acknowledgement={resource.acknowledgement}
          url={resource.url}
          resource={resource.resource}
          tags={resource.tags}
        />
      ))}
    </section>
  );
}