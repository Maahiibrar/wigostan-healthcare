function Contact() {
  return (
    <section className="contact" id="contact">

      <h2 className="section-title">
        Contact Wigostan Healthcare
      </h2>

      <p className="section-subtitle">
        Get in touch with us for third-party manufacturing,
        product enquiries and business opportunities.
      </p>

      <div className="contact-box">

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>8195917591</p>
          <p>6283060870</p>
        </div>

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>wigostanhealthcare@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>📍 Address</h3>
          <p>
            Wigostan Healthcare<br />
            Hartaul Road, Vill. &amp; P.O. Vyaspur<br />
            Tehsil Vyaspur, Distt. Yamunanagar<br />
            Haryana – 135102
          </p>
        </div>

      </div>

      <div className="map-container">

        <iframe
          src="https://www.google.com/maps?q=30.304821,77.308907&z=16&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Wigostan Healthcare Location"
        ></iframe>

      </div>

    </section>
  );
}

export default Contact;