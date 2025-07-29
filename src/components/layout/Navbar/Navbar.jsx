import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const navbarCollapse = navbarCollapseRef.current;
    if (navbarCollapse) {
      const handleShow = () => setMobileMenuOpen(true);
      const handleHide = () => setMobileMenuOpen(false);

      navbarCollapse.addEventListener('show.bs.collapse', handleShow);
      navbarCollapse.addEventListener('hide.bs.collapse', handleHide);

      return () => {
        navbarCollapse.removeEventListener('show.bs.collapse', handleShow);
        navbarCollapse.removeEventListener('hide.bs.collapse', handleHide);
      };
    }
  }, []);

  const shouldHaveWhiteBackground = scrolled || mobileMenuOpen;

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        shouldHaveWhiteBackground ? "bg-white border-bottom" : "bg-transparent"
      }`}
      data-bs-theme={shouldHaveWhiteBackground ? "light" : "dark"}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-uppercase" href="#">
          Cafe Marie
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className="collapse navbar-collapse" 
          id="navbarSupportedContent"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu-coffees">
                Cardápio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#local">
                Local
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
