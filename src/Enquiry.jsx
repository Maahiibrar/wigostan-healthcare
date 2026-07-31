function Enquiry() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const product = form.product.value;
    const message = form.message.value;

    const whatsappMessage = `Hello Wigostan Healthcare,

I would like to make an enquiry.

Name: ${name}
Phone: ${phone}
Product Category: ${product}

Requirement:
${message}`;

    const whatsappURL =
      "https://wa.me/918195917591?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="enquiry" id="enquiry">

      <h2 className="section-title">
        Send Us an Enquiry
      </h2>

      <p className="section-subtitle">
        Interested in our third-party manufacturing services?
        Send us your requirements and our team will get in touch with you.
      </p>

      <form
        className="enquiry-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
        />

        <select
          name="product"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select Product Category
          </option>

          <option value="Ayurvedic Products">
            Ayurvedic Products
          </option>

          <option value="Nutraceutical Products">
            Nutraceutical Products
          </option>

          <option value="Allopathic Products">
            Allopathic Products
          </option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about your requirement"
          required
        ></textarea>

        <button type="submit">
          💬 Submit Enquiry on WhatsApp
        </button>

      </form>

    </section>
  );
}

export default Enquiry;