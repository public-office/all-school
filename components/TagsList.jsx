export function TagsList({ tags }) {
  return (
    <span>
      {tags &&
        tags.data.map((tag) => (
          <span key={tag.attributes.id}>{tag.attributes.title}</span>
        ))
      }
    </span>
  )
}