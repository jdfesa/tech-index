import { Search, Code, Sun, Moon } from 'lucide-react'
import './Header.css'

function Header({ searchQuery, setSearchQuery, theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <header className="header glass">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon text-gradient">✨</div>
          <span className="logo-text">Tech<span className="text-secondary">Index</span></span>
        </div>
        
        <div className="header-search">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              placeholder="Type at least two characters..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <span className="search-shortcut">esc</span>
            )}
          </div>
        </div>
        
        <div className="header-actions">
          <button className="theme-toggle glass-card" onClick={toggleTheme} aria-label="Toggle Theme">
            <div className={`toggle-icon ${theme === 'dark' ? 'active' : ''}`}>
              <Moon size={18} />
            </div>
            <div className={`toggle-icon ${theme === 'light' ? 'active' : ''}`}>
              <Sun size={18} />
            </div>
          </button>

          <a href="https://github.com/jdfesa/tech-index" target="_blank" rel="noopener noreferrer" className="github-link glass-card">
            <Code size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
