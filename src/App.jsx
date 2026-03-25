import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import ResourceGrid from './components/ResourceGrid'
import data from './data/resources.json'
import './App.css'

function App() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

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
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} theme={theme} setTheme={setTheme} />
      
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
