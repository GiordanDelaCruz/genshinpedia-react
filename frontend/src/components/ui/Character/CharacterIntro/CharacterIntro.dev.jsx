// Custom CSS
import "./CharacterIntro.css";

function CharacterIntroDev({
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
        <div className="row align-items-center">
          {/* Character name and icon */}
          <div className="col-md-6 d-flex justify-content-md-start justify-content-center align-items-center mb-2 mb-md-0">
            <img
              className="character-icon me-2"
              src={characterIconUrl}
              alt=""
            />
            <h2 className="character-header mb-0">{name}</h2>
          </div>

          {/* Icons group */}
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center gap-2">
            <img className="nation-icon" src={nationUrl} alt="Nation" />
            <img className="weapon-icon" src={weaponUrl} alt="Weapon" />
            <img className="vision-icon" src={visionUrl} alt="Vision" />
          </div>
        </div>

        <div className="row mt-2">
          {/* Title */}
          <h3 className="title-header"> {title}</h3>
          {/* Description */}
          <p> {description} </p>
        </div>
      </div>
    </>
  );
}

export default CharacterIntroDev;
