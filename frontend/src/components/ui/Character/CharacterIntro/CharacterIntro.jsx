// Custom CSS
import "./CharacterIntro.css";

function CharacterIntro({
  characterIconUrl,
  visionUrl,
  weaponUrl,
  nationUrl,
  name,
  title,
  description,
}) {
  return (
    <>
      <div className="genshin-card-container">
        <div className="row align-items-center justify-content-between">
          {/* Character name and icon */}
          <div className="col d-flex justify-content-start align-items-center">
            <img
              className="character-icon me-2"
              src={characterIconUrl}
              alt=""
            />
            <h2 className="character-header mb-0">{name}</h2>
          </div>

          {/* Icons group */}
          <div className="col d-flex justify-content-end align-items-center gap-2">
            <img className="nation-icon" src={nationUrl} alt="Nation" />
            <img className="weapon-icon" src={weaponUrl} alt="Weapon" />
            <img className="vision-icon" src={visionUrl} alt="Vision" />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12">
            <h3 className="title-header">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterIntro;
