function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="badge">
          WHO-GMP Certified Third-Party Manufacturer
        </div>

        <h1>
          Your Trusted Partner for
          <span> Quality Healthcare Manufacturing</span>
        </h1>

        <p>
          Wigostan Healthcare specializes in Ayurvedic,
          Nutraceutical and Allopathic third-party manufacturing
          with a commitment to quality, safety and timely delivery.
        </p>

        <div className="hero-points">
          <div>🌿 Ayurvedic Products</div>
          <div>💊 Nutraceutical Products</div>
          <div>🏥 Allopathic Products</div>
        </div>

        <div className="hero-buttons">

          <a
            href="#products"
            className="hero-btn"
          >
            Explore Products
          </a>

          <a
            href="#enquiry"
            className="hero-btn outline-btn"
          >
            Send Enquiry
          </a>

        </div>

      </div>

      <div className="hero-image">

        <img
          src={`${import.meta.env.BASE_URL}hero-pharma.png`}
          alt="Wigostan Healthcare Products"
        />

      </div>

    </section>
  );
}

export default Hero;