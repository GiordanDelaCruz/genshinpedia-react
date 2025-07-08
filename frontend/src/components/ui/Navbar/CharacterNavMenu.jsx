function CharacterNavMenu() {
  // Scroll smoothly to a section by ID
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // List of navigation items and their section ID
  const characterNavLinks = [
    { name: "Skill Talents", id: "skillTalents" },
    { name: "Passive Talents", id: "passiveTalents" },
    { name: "Constellations", id: "constellations" },
  ];

  return (
    <>
      {characterNavLinks.map((link, idx) => {
        return (
          <li key={link.id} className="nav-item zoom">
            <button
              className="nav-link btn btn-link"
              onClick={() => handleScrollTo(link.id)}
            >
              {link.name}
            </button>
          </li>
        );
      })}
    </>
  );
}

export default CharacterNavMenu;
