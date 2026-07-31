function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <h2 className="section-title">
        Our Manufacturing Gallery
      </h2>

      <p className="section-subtitle">
        Explore Wigostan Healthcare's quality-focused manufacturing
        and healthcare solutions.
      </p>

      <div className="gallery-container">

        <div className="gallery-card">

          <img
            src={`${import.meta.env.BASE_URL}hero-pharma.png`}
            alt="Wigostan Healthcare Products"
          />

          <h3>
            Healthcare Products
          </h3>

        </div>

        <div className="gallery-card">

          <img
            src={`${import.meta.env.BASE_URL}iso-certified.png`}
            alt="Wigostan Healthcare Certification"
          />

          <h3>
            Quality Certification
          </h3>

        </div>

      </div>

    </section>
  );
}

export default Gallery;