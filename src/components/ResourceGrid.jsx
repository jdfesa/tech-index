import ResourceCard from './ResourceCard'
import './ResourceGrid.css'

function ResourceGrid({ resources }) {
  if (resources.length === 0) {
    return (
      <div className="no-resources">
        <p>No resources found matching your search. Try different keywords.</p>
      </div>
    )
  }

  return (
    <div className="resource-grid">
      {resources.map(resource => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  )
}

export default ResourceGrid
