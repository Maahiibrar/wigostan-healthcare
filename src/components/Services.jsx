function Services() {
  const services = [
    {
      icon: "🏭",
      title: "Third-Party Manufacturing",
      text: "WHO-GMP certified manufacturing solutions for healthcare brands with quality and reliability.",
    },
    {
      icon: "📦",
      title: "Contract Manufacturing",
      text: "Complete manufacturing support with consistent quality and timely delivery.",
    },
    {
      icon: "🏷️",
      title: "Private Label",
      text: "Custom branding, packaging and product solutions according to your business needs.",
    },
    {
      icon: "🌿",
      title: "Ayurvedic Products",
      text: "Quality herbal formulations manufactured with trusted processes and ingredients.",
    },
    {
      icon: "💊",
      title: "Nutraceutical Products",
      text: "Vitamins, minerals and wellness supplements manufactured with quality standards.",
    },
    {
      icon: "🏥",
      title: "Allopathic Products",
      text: "Tablets, capsules, syrups and pharmaceutical formulations manufactured professionally.",
    },
  ];

  return (
    <section className="services" id="services">

      <h2 className="section-title">
        Our Services
      </h2>

      <p className="section-subtitle">
        We provide reliable third-party manufacturing solutions
        for Ayurvedic, Nutraceutical and Allopathic healthcare products.
      </p>

      <div className="service-container">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;