import logo from "../assets/logo.jpeg";

function Header() {
  return (
    <header>
      <div className="logo-section">

        <img
          src={logo}
          alt="Wigostan Healthcare Logo"
          className="logo"
        />

        <div className="brand-text">
          <h2>Wigostan Healthcare</h2>

          <p className="tagline">
            WHO-GMP Certified Third-Party Manufacturer
          </p>
        </div>

      </div>

      <nav>
        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#products">Products</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default Header;