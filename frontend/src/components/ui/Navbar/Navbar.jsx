// React Imports
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Utilities & APIs
import axios from "axios";

// Components
import CharacterNavMenu from "./CharacterNavMenu";

// Styles
import "./Navbar.css";

// Environment Variables
const CHARACTER_API = import.meta.env.VITE_CHARACTER_API;

// Debug
console.log("API URL:", CHARACTER_API);

function Navbar({ isCharacterPage }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Update navbar style based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle character search submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) {
      alert("Please enter a character name.");
      return;
    }

    try {
      const response = await axios.post(`${CHARACTER_API}/character-search`, {
        character: input,
      });

      // Redirect to character profile with data
      navigate("/character-profile", { state: response.data });
    } catch (err) {
      console.error("Character not found or API error:", err);
      alert("Character not found.");
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top ${
          !scrolled ? "bg-light navbar-light" : "bg-dark navbar-dark"
        }`}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand zoom" href="/">
            <img
              className="genshin-impact-logo"
              src="/images/paimon-logo.png"
              alt="Genshin Impact logo"
            />
            GenshinPedia
          </a>

          {/* Mobile Menu Toggle */}
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Conditional Character Menu */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isCharacterPage && <CharacterNavMenu />}
            </ul>

            {/* Character Search Bar */}
            <form className="d-flex" onSubmit={handleSubmit} role="search">
              <input
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
                value="Search"
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
