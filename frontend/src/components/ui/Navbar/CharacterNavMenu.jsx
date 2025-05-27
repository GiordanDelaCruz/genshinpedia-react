import { v4 as uuidv4 } from "uuid";

function CharacterNavMenu() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const characterNavLinks = [
    { name: "Normal Attack", id: "normalAttack" },
    { name: "Elemental Skill", id: "elementalSkill" },
    { name: "Elemental Burst", id: "elementalBurst" },
    { name: "Passive Talents", id: "passiveTalents" },
    { name: "Constellations", id: "constellations" },
  ];

  return (
    <>
      {characterNavLinks.map((link, idx) => {
        return (
          <li key={link.id} className="nav-item zoom mx-1">
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
