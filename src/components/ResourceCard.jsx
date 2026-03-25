import { ExternalLink, Layout, Server, Cloud, Database, Smartphone, Bot, Shield, Wrench, BookOpen } from 'lucide-react'
import './ResourceCard.css'

const iconMap = {
  Layout,
  Server,
  Cloud,
  Database,
  Smartphone,
  Bot,
  Shield,
  Wrench,
  BookOpen
}

function ResourceCard({ resource }) {
  // Use dynamically mapped icon or default
  const IconComponent = iconMap[resource.icon] || ExternalLink

  return (
    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-card glass-card">
      <div className="card-header">
        <div className="card-icon-wrapper">
          <IconComponent size={24} className="card-icon text-gradient" />
        </div>
        <ExternalLink size={16} className="card-external-icon" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{resource.title}</h3>
        <p className="card-description">{resource.description}</p>
      </div>
      
      {resource.tags && resource.tags.length > 0 && (
        <div className="card-tags">
          {resource.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </a>
  )
}

export default ResourceCard
