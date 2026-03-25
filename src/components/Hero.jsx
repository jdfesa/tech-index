import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Awesome <span className="text-gradient">Tech Index</span>
        </h1>
        <p className="hero-subtitle">
          Community-contributed links, guides, and resources to enhance your daily workflow.
        </p>
      </div>
      
      <div className="hero-glow"></div>
    </section>
  )
}

export default Hero
