import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import ResourceGrid from './components/ResourceGrid'
import data from './data/resources.json'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResources = data.resources.filter(resource => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory
    const searchLower = searchQuery.toLowerCase()
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchLower) || 
      resource.description.toLowerCase().includes(searchLower) ||
      (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(searchLower)))
    
    return matchesCategory && matchesSearch
  })

  return (
    <div className="app-container">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="main-content">
        <Hero />
        
        <CategoryFilter 
          categories={data.categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <ResourceGrid resources={filteredResources} />
      </main>
      
      <footer className="footer glass">
        <p>Made with ❤️ for the Tech Community</p>
      </footer>
    </div>
  )
}

export default App
