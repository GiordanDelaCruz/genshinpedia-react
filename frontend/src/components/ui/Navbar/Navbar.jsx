// React Imports
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import CharacterNavMenu from "./CharacterNavMenu";

// Styles
import "./Navbar.css";

/**
 * Navbar Component
 *
 * Renders the top navigation bar for the application. Includes:
 * - A sticky logo that links to the homepage
 * - A collapsible mobile menu
 * - A conditional character navigation menu (on character pages)
 * - A search form to navigate to a specific character profile
 *
 * Navbar styling dynamically updates based on scroll position.
 *
 * @component
 * @param {Object} props
 * @param {boolean} props.isCharacterPage - Flag indicating whether to show the character menu.
 * @returns {JSX.Element} Rendered navigation bar.
 */
function Navbar({ isCharacterPage = false }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Toggle navbar background style based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Handles search form submission by navigating to the character's profile page.
   * @param {React.FormEvent<HTMLFormElement>} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      alert("Please enter a character name.");
      return;
    }

    navigate(`/characters/${input.trim()}`);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          !scrolled ? "bg-light navbar-light" : "bg-dark navbar-dark"
        }`}
      >
        <div className="container-fluid">
          {/* Logo linking to homepage */}
          <a className="navbar-brand zoom" href="/">
            <img
              className="navbar-logo"
              src="/images/paimon-logo.png"
              alt="Genshin Impact logo"
            />
            GenshinPedia
          </a>

          {/* Mobile menu toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links and search form */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Show character menu only if on a character page */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isCharacterPage && <CharacterNavMenu />}
            </ul>

            {/* Character search form */}
            <form className="d-flex" onSubmit={handleSubmit} role="search">
              <input
                id="character-search"
                className="form-control me-2"
                type="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Character Search"
                aria-label="Search"
              />
              <button
                className={`btn ${!scrolled ? "btn-gold" : "btn-gold-inverse"}`}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
