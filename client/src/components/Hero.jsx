function Hero() {
  return (
    <section className="hero">
      <div>
        <div className="hero-tag">
          New arrivals just dropped
        </div>

        <h1>
          Next-gen <span className="accent">tech</span>
          {' '}at your fingertips
        </h1>

        <p className="hero-sub">
          Shop the latest laptops, smartphones,
          audio gear and accessories.
        </p>

        <div className="hero-ctas">
          <button className="btn-primary">
            Shop Now ↗
          </button>

          <button className="btn-outline">
            View Deals
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
