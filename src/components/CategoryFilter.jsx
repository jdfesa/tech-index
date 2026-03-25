import './CategoryFilter.css'

function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="category-filter">
      <button 
        className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
        onClick={() => setActiveCategory('all')}
      >
        All Resources
      </button>
      
      {categories.map(category => (
        <button
          key={category.id}
          className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
