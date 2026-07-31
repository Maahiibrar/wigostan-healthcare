function Products() {
  return (
    <section className="products" id="products">

      <h2 className="section-title">
        Our Products
      </h2>

      <p className="section-subtitle">
        We offer a wide range of Ayurvedic, Nutraceutical and Allopathic
        healthcare products manufactured with quality and reliability.
      </p>

      <div className="product-grid">

        <div className="product-card">

          <div className="service-icon">
            🌿
          </div>

          <h3>
            Ayurvedic Products
          </h3>

          <p>Liver Tonic</p>
          <p>Uterine Tonic</p>
          <p>Pain Oil</p>
          <p>Hair Oil</p>

        </div>

        <div className="product-card">

          <div className="service-icon">
            💊
          </div>

          <h3>
            Nutraceutical Products
          </h3>

          <p>Calcium Syrup</p>
          <p>Iron Tonic</p>
          <p>Health Supplements</p>

        </div>

        <div className="product-card">

          <div className="service-icon">
            🏥
          </div>

          <h3>
            Allopathic Products
          </h3>

          <p>Antacid</p>
          <p>Anti Dengue Syrup</p>
          <p>Pharmaceutical Formulations</p>

        </div>

      </div>

    </section>
  );
}

export default Products;