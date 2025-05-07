import { v4 as uuidv4 } from "uuid";

function CharacterNavMenu() {
  const characterNavLinks = [
    { name: "Normal Attack", url: "#normalAttack" },
    { name: "Elemental Skill", url: "#elementalSkill" },
    { name: "Elemental Burst", url: "#elementalBurst" },
    { name: "Passive Talents", url: "#passiveTalents" },
    { name: "Constellations", url: "#constellations" },
  ];

  return (
    <>
      {characterNavLinks.map((elem, idx) => {
        return (
          <li key={uuidv4()} className="nav-item">
            <a className="nav-link" href={elem.url}>
              {elem.name}
            </a>
          </li>
        );
      })}
    </>
  );
}

export default CharacterNavMenu;
