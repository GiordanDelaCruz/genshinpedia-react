import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CharacterNavMenu from "./CharacterNavMenu";

function Navbar({ isCharacterPage }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Please enter a character name.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3008/character-search",
        {
          character: input,
        }
      );

      // Navigate and pass response data as route state
      navigate("/character-profile", { state: response.data });
    } catch (err) {
      console.error("Character not found or API error:", err);
      alert("Character not found.");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand zoom" href="/">
            <img
              className="genshin-impact-logo"
              src="/images/paimon-logo.png"
              alt=""
            />
            GenshinPedia
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isCharacterPage && <CharacterNavMenu />}
            </ul>
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
                className="btn btn-outline-success"
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
