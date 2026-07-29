function WhyChoose() {
  const reasons = [
    {
      icon: "✅",
      title: "WHO-GMP Certified",
      text: "Manufacturing under high-quality standards with strict quality control.",
    },
    {
      icon: "🔬",
      title: "Quality Assurance",
      text: "Every product is manufactured with safety, testing and quality focus.",
    },
    {
      icon: "🚚",
      title: "Timely Delivery",
      text: "Reliable production planning and on-time product delivery.",
    },
    {
      icon: "🤝",
      title: "Trusted Partner",
      text: "Building long-term partnerships with healthcare businesses.",
    },
  ];

  return (
    <section id="why-choose" className="why-choose">
      <div className="container">

        <h2 className="section-title">
          Why Choose Wigostan Healthcare?
        </h2>

        <p className="section-subtitle">
          We combine quality manufacturing, modern processes and healthcare
          expertise to deliver reliable solutions for our partners.
        </p>

        <div className="why-container">

          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;